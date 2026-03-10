import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import pokhara from "../../assets/tourism/pokhara.jpg";
import kathmandu from "../../assets/tourism/kathmandu.jpeg";
import chitwan from "../../assets/tourism/chitwan.webp";
import nagarkot from "../../assets/tourism/nagarkot.webp";
import lumbini from "../../assets/tourism/lumbini.jpg";
import bhaktapur from "../../assets/tourism/bhaktapur.jpg";
import bandipur from "../../assets/tourism/bandipur.jpg";
import rara from "../../assets/tourism/rara.jpg";

const PLACES = [
  {
    id: "pokhara",
    name: "Pokhara Lakeside",
    region: "Gandaki Province",
    description: "Relax by Phewa Lake, enjoy cafés, and trek the Annapurnas.",
    image: pokhara,
    tag: "Lakes & Mountains",
  },
  {
    id: "kathmandu",
    name: "Kathmandu & Patan",
    region: "Bagmati Province",
    description:
      "Heritage squares, courtyards, and buzzing Thamel guesthouses.",
    image: kathmandu,
    tag: "Culture",
  },
  {
    id: "chitwan",
    name: "Chitwan National Park",
    region: "Bagmati Province",
    description: "Safari lodges surrounded by jungle wildlife.",
    image: chitwan,
    tag: "Wildlife",
  },
  {
    id: "nagarkot",
    name: "Nagarkot",
    region: "Bagmati Province",
    description: "Famous sunrise views over Kathmandu Valley.",
    image: nagarkot,
    tag: "Sunrise",
  },
  {
    id: "lumbini",
    name: "Lumbini",
    region: "Lumbini Province",
    description: "Birthplace of Buddha and peaceful stays.",
    image: lumbini,
    tag: "Pilgrimage",
  },
  {
    id: "bhaktapur",
    name: "Bhaktapur",
    region: "Bagmati Province",
    description: "Traditional Newari heritage city.",
    image: bhaktapur,
    tag: "Heritage",
  },
  {
    id: "bandipur",
    name: "Bandipur",
    region: "Gandaki Province",
    description: "Quiet hilltop town with boutique hotels.",
    image: bandipur,
    tag: "Hill Town",
  },
  {
    id: "rara",
    name: "Rara Lake",
    region: "Karnali Province",
    description: "Remote escape around deep blue Rara Lake.",
    image: rara,
    tag: "Remote",
  },
];

const TourismCarousel = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (isHovered) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 5;

      if (atEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: clientWidth * 0.8,
          behavior: "smooth",
        });
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (dir) => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth * 0.8;

    container.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="safe-pad pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Explore Nepal tourism hubs
            </h2>
            <p className="mt-2 text-white/70 text-sm md:text-base max-w-2xl">
              Discover the best destinations across Nepal with SmartStay.
            </p>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="glass-soft p-2 rounded-full hover:scale-105 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="glass-soft p-2 rounded-full hover:scale-105 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {PLACES.map((place) => (
            <article
              key={place.id}
              className="snap-start min-w-60 sm:min-w-60 lg:min-w-[320px] glass rounded-3xl overflow-hidden shrink-0 hover:-translate-y-1 transition duration-200"
            >
              <div className="h-44 relative overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />

                <div className="absolute top-3 left-3 glass-soft rounded-full px-3 py-1 text-xs font-extrabold">
                  {place.tag}
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs text-white/60 font-extrabold uppercase">
                  {place.region}
                </div>

                <h3 className="mt-1 text-lg font-extrabold">{place.name}</h3>

                <p className="mt-2 text-sm text-white/70">
                  {place.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismCarousel;

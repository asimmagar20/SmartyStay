import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import bg from "../../assets/bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Luxury Hotel"
          loading="lazy"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 glass-soft px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
            <Star className="w-4 h-4 text-yellow-300" />
            Nepal hotels • Smart, affordable stays
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Manage and book hotels across{" "}
            <span className="bg-linear-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Nepal
            </span>
          </h1>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            From budget rooms in Kathmandu to lakeside stays in Pokhara,
            SmartStay keeps your bookings, rooms and guests in one simple system
            — with pricing shown in Nepali Rupees so it feels local.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/rooms"
              className="bg-indigo-600 hover:bg-indigo-500 hover:scale-105 transition text-white px-6 py-3 rounded-full font-bold inline-flex items-center gap-2 shadow-lg shadow-indigo-500/30"
            >
              Explore Rooms <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/register"
              className="glass-soft hover:bg-white/15 text-white px-6 py-3 rounded-full font-bold transition"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

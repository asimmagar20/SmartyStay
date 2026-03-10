import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/public/HeroSection";
import FeaturedRooms from "../components/public/FeaturedRooms";
import TourismCarousel from "../components/public/TourismCarousel";

const SectionWrapper = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="max-w-7xl mx-auto px-4 pb-16"
  >
    {children}
  </motion.section>
);

const HomePage = () => {
  return (
    <>
      <HeroSection />

      {/* WHY SMARTSTAY */}
      <SectionWrapper>
        <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Why SmartStay for hotels in Nepal?
          </h2>

          <p className="text-white/70 mt-3 max-w-3xl">
            A modern hotel management system tailored for Nepali properties —
            from family guest houses to boutique resorts. Keep rooms, pricing
            and bookings fully synced between admin dashboard and public
            website.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Smart Room Inventory",
                text: "Add, update and remove rooms with images, pricing and types — instantly reflected on the guest website.",
              },
              {
                title: "End-to-End Bookings",
                text: "Guests book online in NPR, admins approve in one click, customers track status in their dashboard.",
              },
              {
                title: "Insightful Dashboard",
                text: "Monitor pending and approved bookings in a clean, mobile-first interface built for daily operations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-soft rounded-2xl p-6 hover:bg-white/10 transition"
              >
                <div className="font-extrabold text-sm mb-2">{item.title}</div>
                <p className="text-white/70 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <FeaturedRooms />
      <TourismCarousel />

      {/* HOW IT WORKS */}
      <SectionWrapper>
        <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10">
          <h2 className="text-3xl font-extrabold tracking-tight">
            How SmartStay Works
          </h2>

          <p className="mt-3 text-white/70 max-w-3xl">
            One streamlined workflow connects hotel teams and guests.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: "Add Rooms & Prices",
                text: "Admins upload photos, define types and set base pricing once.",
              },
              {
                step: "Step 2",
                title: "Guests Book Online",
                text: "Travellers search, filter and request bookings from mobile or desktop.",
              },
              {
                step: "Step 3",
                title: "Approve & Track",
                text: "Admins manage approvals while guests monitor booking history.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-soft rounded-2xl p-6 hover:bg-white/10 transition"
              >
                <div className="text-xs text-white/60 uppercase font-extrabold">
                  {item.step}
                </div>
                <div className="mt-2 font-extrabold text-base">
                  {item.title}
                </div>
                <p className="mt-2 text-white/70 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* DESTINATIONS */}
      <SectionWrapper>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 lg:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Built for Nepal's Key Destinations
            </h2>

            <p className="mt-3 text-white/70">
              Whether lakeside Pokhara, heritage Patan, or mountain Nagarkot —
              SmartStay keeps operations simple and bookings smooth.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="glass-soft rounded-2xl p-5">
                <div className="font-extrabold text-sm">Kathmandu & Patan</div>
                <p className="mt-2 text-white/70 text-sm">
                  Organise busy check-ins and high occupancy without
                  spreadsheets.
                </p>
              </div>

              <div className="glass-soft rounded-2xl p-5">
                <div className="font-extrabold text-sm">Pokhara & Chitwan</div>
                <p className="mt-2 text-white/70 text-sm">
                  Handle seasonal tourism with clear availability visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-xs uppercase text-white/60 font-extrabold">
              Affordable for Nepal
            </div>
            <div className="mt-3 text-xl font-extrabold">
              Built for Real Hotels
            </div>
            <p className="mt-3 text-sm text-white/70">
              Designed around budget and mid-range properties where every rupee
              matters.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Flexible pricing updates</li>
              <li>• Add images from admin panel</li>
              <li>• Instant public sync</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* FINAL OVERVIEW */}
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-xs uppercase text-white/60 font-extrabold">
              SmartStay Overview
            </div>
            <div className="mt-3 text-2xl font-extrabold">
              Complete Hotel Suite
            </div>
            <p className="mt-2 text-white/70 text-sm">
              Combine admin, staff and guest experience in one unified system.
            </p>
          </div>

          <div className="glass-soft rounded-2xl p-6">
            <div className="font-extrabold text-sm mb-2">For Guests</div>
            <ul className="space-y-2 text-sm text-white/75">
              <li>• Browse rooms with live pricing</li>
              <li>• Book from mobile in seconds</li>
              <li>• Track booking history</li>
            </ul>
          </div>

          <div className="glass-soft rounded-2xl p-6">
            <div className="font-extrabold text-sm mb-2">For Hotel Teams</div>
            <ul className="space-y-2 text-sm text-white/75">
              <li>• Manage inventory with images</li>
              <li>• Approve/cancel bookings fast</li>
              <li>• Stay organised daily</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default HomePage;

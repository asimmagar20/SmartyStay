import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../../api/axiosConfig";
import { formatNPR, formatUSD } from "../../utils/currency";

const fallbackImage =
  "https://images.unsplash.com/photo-1560067174-8943bd8f7421?auto=format&fit=crop&w=1200&q=80";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("rooms/")
      .then((res) => {
        const data = res.data || [];
        setRooms(data.slice(0, 6));
      })
      .catch(() => {
        setRooms([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-16 safe-pad">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass rounded-3xl h-80 animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 safe-pad">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Featured rooms across Nepal
            </h2>
            <p className="mt-2 text-white/70 text-sm md:text-base max-w-xl">
              Discover our most attractive stays across Nepal.
            </p>
          </div>

          <Link
            className="text-indigo-200 font-extrabold inline-flex items-center gap-2 hover:gap-3 transition-all"
            to="/rooms"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass rounded-3xl overflow-hidden hover:-translate-y-1 transition duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={room.final_image || fallbackImage}
                  alt={room.name || "Room"}
                  loading="lazy"
                  onError={(e) => (e.target.src = fallbackImage)}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />

                <div className="absolute top-4 left-4 glass-soft px-3 py-1 rounded-full text-xs font-extrabold">
                  {room.room_type ? room.room_type.toUpperCase() : "ROOM"}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-extrabold">
                    {room.name || "Room"}
                  </h3>

                  <div className="flex items-center gap-1 text-amber-300">
                    <Star className="w-4 h-4 fill-amber-300" />
                    <span className="text-sm font-extrabold text-white/80">
                      4.8
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-white/70 text-sm line-clamp-2">
                  {room.description || "Comfortable stay in Nepal."}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="font-extrabold">
                    <div className="text-lg leading-tight">
                      {formatNPR(Number(room.price || 0))}
                    </div>
                    <div className="text-xs text-white/60 font-bold">
                      Approx. {formatUSD(Number(room.price || 0))} / night
                    </div>
                  </div>

                  <Link
                    to={`/rooms/${room.id}`}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-extrabold hover:scale-105 transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;

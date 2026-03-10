import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

const NavbarPublic = () => {
  const authContext = useAuth();

  const {
    logout,
    isAuthenticated = false,
    isAdmin = false,
  } = authContext || {};

  const navigate = useNavigate();

  const onLogout = () => {
    if (typeof logout === "function") logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 safe-pad backdrop-blur-sm">
      <div className="mx-auto max-w-7xl mt-4">
        <div className="glass rounded-3xl px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-white rounded-xl px-3 py-2 shadow-sm">
              <img
                src={logo}
                alt="SmartStay"
                className="h-8 sm:h-10 object-contain"
                loading="lazy"
              />
            </div>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
            <Link
              to="/rooms"
              className="text-white/80 hover:text-white px-3 py-2 rounded-full hover:bg-white/10 transition"
            >
              Rooms
            </Link>

            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="text-white/80 hover:text-white px-3 py-2 rounded-full hover:bg-white/10 inline-flex items-center gap-2 transition"
                >
                  <User className="w-4 h-4" />
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate(isAdmin ? "/admin" : "/customer")}
                  className="text-white/80 hover:text-white px-3 py-2 rounded-full hover:bg-white/10 inline-flex items-center gap-2 transition"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>

                <button
                  onClick={onLogout}
                  className="bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 transition"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarPublic;

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/story", label: "Our Story" },
    { to: "/menu", label: "Menu" },
    { to: "/visit", label: "Visit" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(26,61,43,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,150,58,0.2)" : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: "1.25rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
          <span style={{ color: "#C9963A", fontSize: "1.1rem", letterSpacing: "0.2em" }}>
            EMBRIAGO
          </span>
          <span style={{ color: "#F5E6C8", fontSize: "1.1rem", letterSpacing: "0.2em", marginLeft: "0.5rem" }}>
            COFFEE
          </span>
        </div>
      </NavLink>

      {/* Desktop links */}
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          alignItems: "center",
        }}
        className="hidden-mobile"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            style={({ isActive }) => ({
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textDecoration: "none",
              color: isActive ? "#C9963A" : "#F5E6C8",
              borderBottom: isActive ? "1px solid #C9963A" : "1px solid transparent",
              paddingBottom: "2px",
              transition: "color 0.25s ease",
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="show-mobile"
        style={{
          background: "none",
          border: "none",
          padding: "0.5rem",
          cursor: "pointer",
          display: "none",
          flexDirection: "column",
          gap: "5px",
        }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "24px",
              height: "1.5px",
              backgroundColor: "#C9963A",
              transition: "all 0.3s ease",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                : i === 1 ? "opacity: 0; scaleX: 0"
                : "rotate(-45deg) translate(4.5px, -4.5px)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#1A3D2B",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textDecoration: "none",
                color: isActive ? "#C9963A" : "#F5E6C8",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

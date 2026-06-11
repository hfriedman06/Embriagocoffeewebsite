import { NavLink } from "react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111f17",
        borderTop: "1px solid rgba(201,150,58,0.25)",
        padding: "4rem 2.5rem 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.5rem",
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            <span style={{ color: "#C9963A" }}>EMBRIAGO</span>
            <br />
            <span style={{ color: "#F5E6C8" }}>COFFEE</span>
          </div>
          <p style={{ color: "#E0B060", fontSize: "0.875rem", lineHeight: 1.7, fontStyle: "italic" }}>
            Craft coffee. Quiet moments.<br />Lower East Side.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#C9963A",
              fontSize: "1rem",
              letterSpacing: "0.15em",
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            NAVIGATE
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { to: "/", label: "Home" },
              { to: "/story", label: "Our Story" },
              { to: "/menu", label: "Menu" },
              { to: "/visit", label: "Visit" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={{ color: "#F5E6C8", textDecoration: "none", fontSize: "0.9rem", opacity: 0.85 }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#C9963A",
              fontSize: "1rem",
              letterSpacing: "0.15em",
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            HOURS
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
              <Clock size={14} style={{ color: "#C9963A", marginTop: "3px", flexShrink: 0 }} />
              <div>
                <p style={{ color: "#F5E6C8", fontSize: "0.875rem", margin: 0 }}>Mon – Fri</p>
                <p style={{ color: "#E0B060", fontSize: "0.8rem", margin: 0 }}>7:00 AM – 5:00 PM</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
              <Clock size={14} style={{ color: "#C9963A", marginTop: "3px", flexShrink: 0 }} />
              <div>
                <p style={{ color: "#F5E6C8", fontSize: "0.875rem", margin: 0 }}>Sat – Sun</p>
                <p style={{ color: "#E0B060", fontSize: "0.8rem", margin: 0 }}>8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#C9963A",
              fontSize: "1rem",
              letterSpacing: "0.15em",
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            FIND US
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href="https://maps.google.com/?q=5+Rivington+St,+New+York,+NY+10002"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", textDecoration: "none" }}
            >
              <MapPin size={14} style={{ color: "#C9963A", marginTop: "3px", flexShrink: 0 }} />
              <span style={{ color: "#F5E6C8", fontSize: "0.875rem" }}>5 Rivington St, New York, NY 10002</span>
            </a>
            <a
              href="tel:+13473068218"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
            >
              <Phone size={14} style={{ color: "#C9963A" }} />
              <span style={{ color: "#F5E6C8", fontSize: "0.875rem" }}>(347) 306-8218</span>
            </a>
            <a
              href="https://instagram.com/embriagocoffee"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
            >
              <Instagram size={14} style={{ color: "#C9963A" }} />
              <span style={{ color: "#F5E6C8", fontSize: "0.875rem" }}>@embriagocoffee</span>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(201,150,58,0.2)", paddingTop: "1.5rem", textAlign: "center" }}>
        <p style={{ color: "#E0B060", fontSize: "0.8rem", opacity: 0.7 }}>
          © 2024 Embriago Coffee · Lower East Side, New York
        </p>
      </div>
    </footer>
  );
}

import { FadeIn } from "./FadeIn";
import { Clock, Phone, Instagram, MapPin } from "lucide-react";

export function Visit() {
  return (
    <div style={{ backgroundColor: "#1A3D2B" }}>
      {/* ─── Header ─── */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(201,150,58,0.2)",
        }}
      >
        <FadeIn>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.8rem",
              letterSpacing: "0.3em",
              color: "#C9963A",
              marginBottom: "1.25rem",
            }}
          >
            LOWER EAST SIDE · NEW YORK
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 500,
              color: "#F5E6C8",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Come Visit
          </h1>
          <p
            style={{
              color: "#E0B060",
              fontSize: "1.05rem",
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', serif",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Tucked on a quiet block of Rivington, between SoHo and the Lower East Side.
          </p>
        </FadeIn>
      </section>

      {/* ─── Map + Info ─── */}
      <section style={{ padding: "0" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "600px" }}
          className="visit-grid"
        >
          {/* Map */}
          <div style={{ position: "relative", minHeight: "480px" }}>
            <iframe
              title="Embriago Coffee location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8!2d-73.990!3d40.722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f3b3a1b7b%3A0x0!2s5+Rivington+St%2C+New+York%2C+NY+10002!5e0!3m2!1sen!2sus!4v1700000000000"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
                filter: "invert(0.85) hue-rotate(170deg) saturate(0.6) brightness(0.75)",
                minHeight: "480px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info panel */}
          <div
            style={{
              backgroundColor: "#2A5240",
              padding: "5rem 4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderLeft: "1px solid rgba(201,150,58,0.2)",
            }}
            className="visit-panel"
          >
            <FadeIn>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "3rem",
                }}
              >
                <div style={{ flex: 1, height: "1px", backgroundColor: "#C9963A", opacity: 0.3 }} />
                <div style={{ color: "#C9963A", fontSize: "1rem" }}>✦</div>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#C9963A", opacity: 0.3 }} />
              </div>

              {/* Address */}
              <div style={{ marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "0.5rem" }}>
                  <MapPin size={16} style={{ color: "#C9963A", marginTop: "4px", flexShrink: 0 }} />
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.5rem",
                        color: "#F5E6C8",
                        fontWeight: 500,
                        marginBottom: "0.25rem",
                      }}
                    >
                      5 Rivington Street
                    </h3>
                    <p style={{ color: "#E0B060", fontSize: "0.95rem" }}>New York, NY 10002</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div style={{ marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <Clock size={16} style={{ color: "#C9963A", marginTop: "4px", flexShrink: 0 }} />
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1rem",
                        letterSpacing: "0.15em",
                        color: "#C9963A",
                        marginBottom: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      HOURS
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
                        <span style={{ color: "#F5E6C8", fontSize: "0.95rem" }}>Monday – Friday</span>
                        <span style={{ color: "#E0B060", fontSize: "0.95rem" }}>7:00 AM – 5:00 PM</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
                        <span style={{ color: "#F5E6C8", fontSize: "0.95rem" }}>Saturday – Sunday</span>
                        <span style={{ color: "#E0B060", fontSize: "0.95rem" }}>8:00 AM – 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div style={{ marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href="tel:+13473068218"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}
                >
                  <Phone size={16} style={{ color: "#C9963A", flexShrink: 0 }} />
                  <span style={{ color: "#F5E6C8", fontSize: "0.95rem" }}>(347) 306-8218</span>
                </a>
                <a
                  href="https://instagram.com/embriagocoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}
                >
                  <Instagram size={16} style={{ color: "#C9963A", flexShrink: 0 }} />
                  <span style={{ color: "#F5E6C8", fontSize: "0.95rem" }}>@embriagocoffee</span>
                </a>
              </div>

              {/* Note */}
              <div
                style={{
                  borderTop: "1px solid rgba(201,150,58,0.2)",
                  paddingTop: "1.75rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    color: "#E0B060",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                  }}
                >
                  We're an intimate space — come ready to settle in.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .visit-grid { grid-template-columns: 1fr !important; }
            .visit-panel { padding: 3rem 2rem !important; border-left: none !important; border-top: 1px solid rgba(201,150,58,0.2) !important; }
          }
        `}</style>
      </section>

      {/* ─── Neighborhood Context ─── */}
      <section
        style={{
          backgroundColor: "#F5E6C8",
          padding: "7rem 2rem",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#C9963A", opacity: 0.4 }} />
              <div style={{ color: "#C9963A", fontSize: "1rem" }}>✦</div>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#C9963A", opacity: 0.4 }} />
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                color: "#C9963A",
                marginBottom: "1.5rem",
              }}
            >
              THE NEIGHBORHOOD
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                fontWeight: 500,
                color: "#1A3D2B",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              A quiet block in a loud city
            </h2>
            <p style={{ color: "#3a2a0a", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Rivington Street runs through one of the most layered neighborhoods in New York —
              where the old Lower East Side meets the newer energy coming up from Canal and across
              from SoHo. We're right on that edge, in a small shop that doesn't announce itself.
            </p>
            <p style={{ color: "#3a2a0a", fontSize: "1.05rem", lineHeight: 1.8 }}>
              If you're looking for it, you'll find it. If you stumble in, we're glad you did.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

import { useNavigate } from "react-router";
import { FadeIn } from "./FadeIn";
import { Star, MapPin } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1643058395173-f82e3b9050af?w=1920&h=1080&fit=crop&auto=format";

const DRINKS = [
  {
    name: "Einspanner Latte",
    description: "Espresso crowned with cold whipped cream — a Viennese classic, made with intent.",
    img: "https://images.unsplash.com/photo-1564929587121-a343c78713e2?w=600&h=700&fit=crop&auto=format",
    alt: "Einspanner latte in a glass",
  },
  {
    name: "Cortado",
    description: "Equal parts espresso and steamed milk. Nothing hidden, nothing wasted.",
    img: "https://images.unsplash.com/photo-1620051730698-57645ec179fa?w=600&h=700&fit=crop&auto=format",
    alt: "Cortado in a ceramic cup",
  },
  {
    name: "Oat Milk Latte",
    description: "Silky, plant-based, and impossibly smooth. The latte, reimagined.",
    img: "https://images.unsplash.com/photo-1531441802565-2948024f1b22?w=600&h=700&fit=crop&auto=format",
    alt: "Oat milk latte with latte art",
  },
];

export function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#1A3D2B" }}>
      {/* ─── Hero ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${HERO_IMG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.35) saturate(0.8)",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(26,61,43,0.4) 0%, rgba(26,61,43,0.1) 50%, rgba(26,61,43,0.8) 100%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, padding: "0 1.5rem" }}>
          {/* Logo mark — ornamental circle */}
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              border: "1px solid rgba(201,150,58,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 2.5rem",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                border: "1px solid rgba(201,150,58,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#C9963A",
                    letterSpacing: "0.08em",
                    lineHeight: 1,
                  }}
                >
                  E
                </div>
                <div
                  style={{
                    width: "32px",
                    height: "1px",
                    backgroundColor: "#C9963A",
                    margin: "6px auto",
                    opacity: 0.6,
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.55rem",
                    fontWeight: 500,
                    color: "#E0B060",
                    letterSpacing: "0.2em",
                  }}
                >
                  EST. LES
                </div>
              </div>
            </div>
          </div>

          {/* Red wordmark headline */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 600,
              color: "#C0392B",
              letterSpacing: "0.06em",
              marginBottom: "0.5rem",
              lineHeight: 1,
            }}
          >
            EMBRIAGO
          </h1>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
              fontWeight: 300,
              color: "#F5E6C8",
              letterSpacing: "0.35em",
              marginBottom: "2rem",
            }}
          >
            COFFEE
          </div>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              fontWeight: 300,
              color: "#E0B060",
              fontStyle: "italic",
              letterSpacing: "0.05em",
              marginBottom: "3rem",
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            Craft coffee. Quiet moments. Lower East Side.
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate("/menu")}
            style={{
              background: "transparent",
              border: "1px solid #C9963A",
              color: "#C9963A",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              padding: "0.9rem 2.75rem",
              cursor: "pointer",
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#C9963A";
              (e.target as HTMLButtonElement).style.color = "#1A3D2B";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
              (e.target as HTMLButtonElement).style.color = "#C9963A";
            }}
          >
            SEE THE MENU
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              color: "#E0B060",
              opacity: 0.6,
            }}
          >
            SCROLL
          </div>
          <div
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#C9963A",
              opacity: 0.4,
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.2; transform: scaleY(1); }
            50% { opacity: 0.6; transform: scaleY(0.7); }
          }
        `}</style>
      </section>

      {/* ─── Social Proof Strip ─── */}
      <section
        style={{
          backgroundColor: "#111f17",
          borderTop: "1px solid rgba(201,150,58,0.2)",
          borderBottom: "1px solid rgba(201,150,58,0.2)",
          padding: "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#C9963A" stroke="none" />
          ))}
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "#C9963A",
              marginLeft: "0.25rem",
            }}
          >
            4.9
          </span>
          <span style={{ color: "#F5E6C8", fontSize: "0.85rem", opacity: 0.8 }}>on Google</span>
        </div>
        <div style={{ width: "1px", height: "20px", backgroundColor: "rgba(201,150,58,0.3)" }} />
        <span style={{ color: "#E0B060", fontSize: "0.85rem" }}>398 reviews</span>
        <div style={{ width: "1px", height: "20px", backgroundColor: "rgba(201,150,58,0.3)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <MapPin size={13} style={{ color: "#C9963A" }} />
          <span style={{ color: "#F5E6C8", fontSize: "0.85rem" }}>5 Rivington St, New York</span>
        </div>
      </section>

      {/* ─── Story Teaser ─── */}
      <section
        style={{
          backgroundColor: "#F5E6C8",
          padding: "8rem 2rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Top ornament */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
          <div style={{ flex: 1, maxWidth: "120px", height: "1px", backgroundColor: "#C9963A", opacity: 0.4 }} />
          <div style={{ color: "#C9963A", fontSize: "1.2rem" }}>✦</div>
          <div style={{ flex: 1, maxWidth: "120px", height: "1px", backgroundColor: "#C9963A", opacity: 0.4 }} />
        </div>

        <FadeIn>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
              letterSpacing: "0.25em",
              color: "#C9963A",
              marginBottom: "1.5rem",
              fontWeight: 500,
            }}
          >
            OUR STORY
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 500,
              color: "#1A3D2B",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              lineHeight: 1.2,
            }}
          >
            Rooted in Puerto Rican coffee culture. Made by hand. For people who actually taste.
          </h2>
          <p
            style={{
              color: "#3a2a0a",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: "620px",
              margin: "0 auto 2.5rem",
            }}
          >
            Embriago means intoxicated by pleasure — losing yourself in something good. Every cup
            we make is an invitation to slow down. Rooted in Puerto Rican coffee tradition, refined
            through craft, and served with care on a quiet block of Rivington Street.
          </p>
          <button
            onClick={() => {
              window.location.href = "/story";
            }}
            style={{
              background: "transparent",
              border: "none",
              color: "#1A3D2B",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.05rem",
              fontWeight: 500,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              borderBottom: "1px solid #C9963A",
              paddingBottom: "2px",
            }}
          >
            Read our story →
          </button>
        </FadeIn>
      </section>

      {/* ─── Drinks Highlight ─── */}
      <section style={{ backgroundColor: "#1A3D2B", padding: "8rem 2rem" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.85rem",
                letterSpacing: "0.25em",
                color: "#C9963A",
                marginBottom: "1rem",
                fontWeight: 500,
              }}
            >
              MADE TO ORDER
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#F5E6C8",
                fontWeight: 500,
              }}
            >
              Drinks Worth Lingering Over
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {DRINKS.map((drink, i) => (
            <FadeIn key={drink.name} delay={i * 150}>
              <div
                style={{
                  backgroundColor: "#2A5240",
                  overflow: "hidden",
                  border: "1px solid rgba(201,150,58,0.2)",
                  transition: "transform 0.4s ease, border-color 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,150,58,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,150,58,0.2)";
                }}
              >
                <div style={{ height: "300px", overflow: "hidden" }}>
                  <img
                    src={drink.img}
                    alt={drink.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "brightness(0.85) saturate(0.9)",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLImageElement).style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLImageElement).style.transform = "scale(1)";
                    }}
                  />
                </div>
                <div style={{ padding: "1.75rem 2rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      backgroundColor: "#C9963A",
                      marginBottom: "1rem",
                      opacity: 0.6,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.5rem",
                      color: "#C9963A",
                      fontWeight: 500,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {drink.name}
                  </h3>
                  <p style={{ color: "#F5E6C8", fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.85 }}>
                    {drink.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <button
              onClick={() => navigate("/menu")}
              style={{
                background: "transparent",
                border: "1px solid #C9963A",
                color: "#C9963A",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                padding: "0.9rem 2.75rem",
                cursor: "pointer",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "#C9963A";
                (e.target as HTMLButtonElement).style.color = "#1A3D2B";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.target as HTMLButtonElement).style.color = "#C9963A";
              }}
            >
              VIEW FULL MENU
            </button>
          </div>
        </FadeIn>
      </section>

      {/* ─── Hours / Location Strip ─── */}
      <section
        style={{
          backgroundColor: "#111f17",
          padding: "4rem 2rem",
          borderTop: "1px solid rgba(201,150,58,0.2)",
          borderBottom: "1px solid rgba(201,150,58,0.2)",
        }}
      >
        <FadeIn>
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "3rem",
              textAlign: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  color: "#C9963A",
                  marginBottom: "0.5rem",
                }}
              >
                WEEKDAYS
              </p>
              <p style={{ color: "#F5E6C8", fontSize: "1.05rem" }}>Mon – Fri: 7am – 5pm</p>
            </div>
            <div style={{ width: "1px", backgroundColor: "rgba(201,150,58,0.25)" }} />
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  color: "#C9963A",
                  marginBottom: "0.5rem",
                }}
              >
                WEEKENDS
              </p>
              <p style={{ color: "#F5E6C8", fontSize: "1.05rem" }}>Sat – Sun: 8am – 6pm</p>
            </div>
            <div style={{ width: "1px", backgroundColor: "rgba(201,150,58,0.25)" }} />
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  color: "#C9963A",
                  marginBottom: "0.5rem",
                }}
              >
                LOCATION
              </p>
              <p style={{ color: "#F5E6C8", fontSize: "1.05rem" }}>5 Rivington St, NY 10002</p>
            </div>
            <div style={{ width: "1px", backgroundColor: "rgba(201,150,58,0.25)" }} />
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  color: "#C9963A",
                  marginBottom: "0.5rem",
                }}
              >
                PHONE
              </p>
              <a
                href="tel:+13473068218"
                style={{ color: "#F5E6C8", fontSize: "1.05rem", textDecoration: "none" }}
              >
                (347) 306-8218
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

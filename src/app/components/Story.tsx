import { FadeIn } from "./FadeIn";

const BARISTA_IMG =
  "https://images.unsplash.com/photo-1579265898841-79c7890d69cf?w=900&h=1100&fit=crop&auto=format";

const INTERIOR_IMG =
  "https://images.unsplash.com/photo-1633985133375-74abb6439be3?w=1200&h=700&fit=crop&auto=format";

const Ornament = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
    <div style={{ flex: 1, height: "1px", backgroundColor: "#C9963A", opacity: 0.3 }} />
    <div style={{ color: "#C9963A", fontSize: "1rem" }}>✦</div>
    <div style={{ flex: 1, height: "1px", backgroundColor: "#C9963A", opacity: 0.3 }} />
  </div>
);

export function Story() {
  return (
    <div style={{ backgroundColor: "#F5E6C8" }}>
      {/* ─── Hero ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          overflow: "hidden",
          paddingBottom: "5rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${INTERIOR_IMG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "brightness(0.35) saturate(0.7)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(26,61,43,0.3) 0%, rgba(26,61,43,0.85) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.8rem",
              letterSpacing: "0.3em",
              color: "#C9963A",
              marginBottom: "1rem",
              fontWeight: 500,
            }}
          >
            OUR STORY
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 500,
              color: "#F5E6C8",
              lineHeight: 1.1,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Intoxicated by Pleasure
          </h1>
        </div>
      </section>

      {/* ─── Intro / What's in a name ─── */}
      <section style={{ padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <FadeIn>
            <Ornament />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                color: "#C9963A",
                marginBottom: "1.5rem",
              }}
            >
              THE NAME
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "#1A3D2B",
                fontWeight: 500,
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Embriago
            </h2>
            <p style={{ color: "#3a2a0a", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              The word comes from an old Italian root — to become intoxicated. Not by alcohol, but by
              pleasure itself. That feeling of being so present in a moment that everything else
              falls away. The smell of a perfect pull. The first warmth of a cup in your hands.
              The quiet of a Tuesday morning before the city fully wakes.
            </p>
            <p style={{ color: "#3a2a0a", fontSize: "1.05rem", lineHeight: 1.8 }}>
              That is what we named this place after.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Pull Quote ─── */}
      <section
        style={{
          backgroundColor: "#1A3D2B",
          padding: "7rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(ellipse at center, rgba(201,150,58,0.07) 0%, transparent 70%)`,
          }}
        />
        <FadeIn>
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ color: "#C9963A", fontSize: "4rem", lineHeight: 1, marginBottom: "1.5rem", opacity: 0.5 }}>
              "
            </div>
            <blockquote
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 300,
                color: "#F5E6C8",
                fontStyle: "italic",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              It's calm caffeination.
            </blockquote>
            <div
              style={{
                width: "60px",
                height: "1px",
                backgroundColor: "#C9963A",
                margin: "2rem auto 0",
                opacity: 0.5,
              }}
            />
          </div>
        </FadeIn>
      </section>

      {/* ─── Puerto Rico origin + craft ─── */}
      <section style={{ padding: "7rem 2rem", backgroundColor: "#F5E6C8" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
          className="story-grid"
        >
          <FadeIn>
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  color: "#C9963A",
                  marginBottom: "1.5rem",
                }}
              >
                THE ROOTS
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                  color: "#1A3D2B",
                  fontWeight: 500,
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Puerto Rican Coffee Culture
              </h2>
              <p style={{ color: "#3a2a0a", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Puerto Rico has one of the oldest and most storied coffee traditions in the Western
                Hemisphere. Grown in the mountainous interior at high elevation, Puerto Rican beans
                have a richness and balance that doesn't need to be pushed hard to shine.
              </p>
              <p style={{ color: "#3a2a0a", fontSize: "1.05rem", lineHeight: 1.8 }}>
                That culture of knowing your coffee — of understanding where it comes from, how it
                was grown, and exactly how it wants to be prepared — is woven into everything we do
                at Embriago.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div
              style={{
                height: "520px",
                overflow: "hidden",
                border: "1px solid rgba(201,150,58,0.3)",
              }}
            >
              <img
                src={BARISTA_IMG}
                alt="Barista crafting espresso"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </FadeIn>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .story-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>

      {/* ─── Robin / Craft ─── */}
      <section
        style={{
          backgroundColor: "#2A5240",
          padding: "7rem 2rem",
          borderTop: "1px solid rgba(201,150,58,0.2)",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <Ornament />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                color: "#C9963A",
                marginBottom: "1.5rem",
              }}
            >
              THE CRAFT
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "#F5E6C8",
                fontWeight: 500,
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Robin's Approach
            </h2>
            <p style={{ color: "#F5E6C8", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem", opacity: 0.9 }}>
              Robin opened Embriago not to be another café on another corner, but to create the
              experience she'd always wanted to find in this city: unhurried, handmade, intentional.
              Every drink is made to order. Every cup is a conversation between the beans, the
              machine, and the person who will drink it.
            </p>
            <p style={{ color: "#E0B060", fontSize: "1.05rem", lineHeight: 1.8, fontStyle: "italic" }}>
              We don't rush. We don't scale beyond what we can do well.
              We just make really good coffee, for people who notice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section style={{ backgroundColor: "#F5E6C8", padding: "7rem 2rem" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <Ornament />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "#1A3D2B",
                fontWeight: 500,
              }}
            >
              What We Stand For
            </h2>
          </div>
        </FadeIn>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
          }}
        >
          {[
            {
              icon: "◌",
              title: "Unhurried",
              body: "Good coffee cannot be rushed. Neither can a good moment. We take both seriously.",
            },
            {
              icon: "◎",
              title: "Handmade",
              body: "Every drink is crafted to order, by hand, with attention. There is no shortcut worth taking.",
            },
            {
              icon: "◉",
              title: "Intentional",
              body: "From bean selection to the way the light falls in the shop — nothing here is accidental.",
            },
          ].map((val, i) => (
            <FadeIn key={val.title} delay={i * 150}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    color: "#C9963A",
                    marginBottom: "1rem",
                  }}
                >
                  {val.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    color: "#1A3D2B",
                    fontWeight: 500,
                    marginBottom: "0.75rem",
                  }}
                >
                  {val.title}
                </h3>
                <p style={{ color: "#3a2a0a", fontSize: "0.95rem", lineHeight: 1.8 }}>{val.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

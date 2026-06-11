import { FadeIn } from "./FadeIn";

const Ornament = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
    <div style={{ flex: 1, height: "1px", backgroundColor: "#C9963A", opacity: 0.3 }} />
    <div style={{ color: "#C9963A", fontSize: "1rem" }}>✦</div>
    <div style={{ flex: 1, height: "1px", backgroundColor: "#C9963A", opacity: 0.3 }} />
  </div>
);

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  dark?: boolean;
  delay?: number;
}

function MenuSection({ title, items, dark = false, delay = 0 }: MenuSectionProps) {
  const bg = dark ? "#1A3D2B" : "#F5E6C8";
  const headingColor = dark ? "#C9963A" : "#1A3D2B";
  const nameColor = dark ? "#C9963A" : "#1A3D2B";
  const descColor = dark ? "#F5E6C8" : "#3a2a0a";
  const dividerColor = dark ? "rgba(201,150,58,0.2)" : "rgba(26,61,43,0.15)";

  return (
    <section style={{ backgroundColor: bg, padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <FadeIn delay={delay}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <Ornament />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: headingColor,
                fontWeight: 500,
              }}
            >
              {title}
            </h2>
          </div>

          <div>
            {items.map((item, i) => (
              <div key={item.name}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "1rem",
                    padding: "1.25rem 0",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.3rem",
                        fontWeight: 500,
                        color: nameColor,
                        marginBottom: item.description ? "0.25rem" : 0,
                      }}
                    >
                      {item.name}
                    </h4>
                    {item.description && (
                      <p style={{ color: descColor, fontSize: "0.875rem", lineHeight: 1.6, opacity: 0.8 }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.price && (
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.1rem",
                        color: dark ? "#E0B060" : "#C9963A",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.price}
                    </div>
                  )}
                </div>
                {i < items.length - 1 && (
                  <div style={{ height: "1px", backgroundColor: dividerColor }} />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const ESPRESSO: MenuItem[] = [
  { name: "Espresso", description: "A single or double shot of our house blend, pulled with precision.", price: "$3.50" },
  { name: "Americano", description: "Espresso and hot water. Simple and uncompromising.", price: "$4.00" },
  { name: "Cappuccino", description: "Equal thirds espresso, steamed milk, and velvety foam.", price: "$5.00" },
  { name: "Cortado", description: "Equal parts espresso and lightly textured milk — nothing hidden.", price: "$5.50" },
  { name: "Flat White", description: "Double ristretto and microfoam. Compact, intense, smooth.", price: "$5.50" },
  { name: "Latte", description: "Espresso and steamed milk with a thin layer of foam.", price: "$5.75" },
  { name: "Oat Milk Latte", description: "Silky, plant-based, and impossibly smooth.", price: "$6.25" },
  { name: "Einspanner Latte", description: "Espresso crowned with cold whipped cream — a Viennese classic.", price: "$6.75" },
  { name: "Macchiato", description: "Espresso marked with a touch of steamed milk.", price: "$4.25" },
];

const COLD: MenuItem[] = [
  { name: "Iced Latte", description: "Espresso over ice with cold milk. Clean and refreshing.", price: "$6.00" },
  { name: "Cold Brew", description: "Steeped 18 hours. Smooth, dark, and never bitter.", price: "$5.50" },
  { name: "Iced Cortado", description: "The same balanced ratio, served cold.", price: "$5.75" },
  { name: "Iced Americano", description: "Espresso over ice. Bracing and honest.", price: "$4.50" },
];

const SEASONAL: MenuItem[] = [
  { name: "Seasonal Latte", description: "Ask us what's on. We rotate with the season and the mood.", price: "$6.75" },
  { name: "Batch Brew", description: "Our rotating single-origin filter coffee. Always worth asking about.", price: "$4.00" },
  { name: "Affogato", description: "Vanilla gelato drowned in espresso. Order it quickly.", price: "$6.50" },
];

const FOOD: MenuItem[] = [
  { name: "Croissant", description: "Flaky, buttery, and made to be eaten slowly.", price: "$4.50" },
  { name: "Pain au Chocolat", description: "Dark chocolate folded into laminated dough.", price: "$5.00" },
  { name: "Spinach & Feta Bistro", description: "A savory pastry with wilted spinach and French feta. Served warm.", price: "$6.50" },
  { name: "Almond Croissant", description: "Twice-baked with almond cream and slivered almonds.", price: "$5.50" },
  { name: "Seasonal Tart", description: "Ask us what's in today. Always made fresh.", price: "$5.75" },
];

export function Menu() {
  return (
    <div>
      {/* ─── Header ─── */}
      <section
        style={{
          backgroundColor: "#1A3D2B",
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
            EMBRIAGO COFFEE
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
            The Menu
          </h1>
          <p
            style={{
              color: "#E0B060",
              fontSize: "1rem",
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', serif",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Everything made to order by hand.
          </p>
        </FadeIn>
      </section>

      <MenuSection title="Espresso Drinks" items={ESPRESSO} dark delay={0} />
      <MenuSection title="Cold Brew &amp; Iced" items={COLD} dark={false} delay={100} />
      <MenuSection title="Seasonal" items={SEASONAL} dark delay={0} />
      <MenuSection title="Food &amp; Pastries" items={FOOD} dark={false} delay={100} />

      {/* Footer note */}
      <section
        style={{
          backgroundColor: "#111f17",
          padding: "3rem 2rem",
          textAlign: "center",
          borderTop: "1px solid rgba(201,150,58,0.2)",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            color: "#E0B060",
            fontStyle: "italic",
            opacity: 0.8,
          }}
        >
          Everything made to order by hand. · Seasonal items rotate. · Ask us what's good today.
        </p>
      </section>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Story } from "./components/Story";
import { Menu } from "./components/Menu";
import { Visit } from "./components/Visit";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", backgroundColor: "#1A3D2B" }}>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/visit" element={<Visit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

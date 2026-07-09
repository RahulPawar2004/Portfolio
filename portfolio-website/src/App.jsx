import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020817] text-white">

      {/* ================= Background ================= */}
      <div className="fixed inset-0 -z-10">

        {/* Grid */}
        <div className="absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:70px_70px]">
        </div>

        {/* Blue Glow */}
        <div className="absolute top-20 left-20 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

        {/* Purple Glow */}
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[150px]" />

        {/* Center Spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

      </div>

      {/* ================= Website ================= */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="project"><Projects /></section>
        <section id="contact"><Contact /></section>

      </main>

      <Footer />

    </div>
  );
}

export default App;
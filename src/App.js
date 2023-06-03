import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Fback from "./components/Fback";

function App() {
  return (
    <div className="bg-[#e6f1fc]">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Deals */}
      <Deals />
      {/* For You */}
      {/* Footer */}
      <Fback/>
      <Footer />
    </div>
  );
}

export default App; 

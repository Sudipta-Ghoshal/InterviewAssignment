import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Deal from "./components/Deal";
import FeatureCard from "./components/FeatureCard";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Deal />
      <FeatureCard />
    </>
  );
}

export default App;

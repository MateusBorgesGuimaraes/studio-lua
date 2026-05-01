import "./App.css";
import { Cta } from "./components/Cta/Cta";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Hero />
      <Gallery />
      <Cta />
      <Footer />
    </>
  );
}

export default App;

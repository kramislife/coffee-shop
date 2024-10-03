import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Testimony from "./Components/Testimony/Testimony";

const App = () => {
  return (
    <main className="bg-background text-dark overflow-x-hidden">
      <Hero />
      <Services />
      <Testimony/>
      <Footer />
    </main>
  );
};

export default App;

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <main className="bg-background text-dark overflow-x-hidden">
      <Hero />
      <Services />
      <Footer />
    </main>
  );
};

export default App;

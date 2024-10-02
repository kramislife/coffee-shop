import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { MoveRight } from "lucide-react";
import { useInView } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  const heroInview = useInView(heroRef, { once: true });
  const imageInview = useInView(imageRef, { once: true });

  const HeroStyle = (isInView) => ({
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 2s cubic-bezier(0.645, 0.045, 0.355, 1)",
  });

  const imageStyle = (isInView) => ({
    transform: isInView ? "none" : "translateX(400px)",
    opacity: isInView ? 1 : 0,
    transition: "all 2s cubic-bezier(0.645, 0.045, 0.355, 1)",
  });

  return (
    <>
      <section className="bg-light lg:h-[100vh]">
        <Navbar />
        <div
          ref={heroRef}
          style={HeroStyle(heroInview)}
          className="container justify-center items-center grid grid-cols-1 md:grid-cols-2 min-[650px] lg:px-0 px-4 lg:py-10"
        >
          <div>
            <h1 className="text-5xl font-bold py-5 lg:leading-snug leading-tight">
              Brewed to Perfection, Sipped with Joy!
            </h1>
            <p className="max-w-[600px] leading-relaxed">
              Every cup is crafted with care, bringing out rich flavors to
              deliver pure coffee bliss. Savor the perfection and feel the joy
              in every sip!
            </p>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 py-4">
              <button className="order-btn lg:flex items-center">
                Order Now
                <MoveRight className="lg:flex hidden lg:ml-3" />
              </button>
              <button className="bg-white shadow-lg text-black rounded-md p-3 transition-transform duration-100 ease-in-out hover:scale-105">
                Explore More
              </button>
            </div>
          </div>
          <div
            ref={imageRef}
            style={imageStyle(imageInview)}
            className="hidden lg:flex items-center justify-center"
          >
            <img src="/heroo.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

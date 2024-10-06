import React, { useRef } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Avatar, AvatarImage } from "@/Components/ui/avatar";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion"; // Import framer-motion and useInView

const testimonials = [
  {
    id: 1,
    img: "/john.jpg",
    name: "John Doe",
    role: "Customer",
    description:
      "I've been a longtime customer of Primo's Coffee Shop and can attest to the quality of their coffee. Their warm, inviting ambiance and friendly staff made it easy to find my favorite brew. I highly recommend this place to anyone looking for a great coffee experience.",
    rating: 5,
  },
  {
    id: 2,
    img: "/jane.jpg",
    name: "Jane Smith",
    role: "Customer",
    description:
      "Primo's Coffee is consistently excellent. The environment is perfect for working or catching up with friends, and their staff always provides the best service! Their attention to detail and commitment to quality keeps me coming back every time.",
    rating: 4,
  },
  {
    id: 3,
    img: "/johnson.jpg",
    name: "Mike Johnson",
    role: "Customer",
    description:
      "The coffee is top-notch and the vibe is fantastic! If you're a coffee lover, Primo's is a must-visit. The staff always makes you feel welcome, and the atmosphere is perfect for both relaxation and productivity. It's easily my go-to spot for a great cup of coffee and a comfortable setting.",
    rating: 5,
  },
];

// Helper function to render the stars based on rating
const renderStars = (rating) => {
  const totalStars = 5;
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <Star
        key={i}
        className={i <= rating ? "text-yellow-500" : "text-gray-300"}
        size={20}
        fill={i <= rating ? "currentColor" : "none"}
      />
    );
  }
  return <div className="flex justify-center space-x-1">{stars}</div>;
};

const Testimony = () => {
  const sectionRef = useRef(null); // Create a ref for the section
  const isInView = useInView(sectionRef, { once: true }); // Track if the section is in view

  return (
    <section className="bg-light py-14 lg:h-[95vh]" ref={sectionRef}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-5">TESTIMONIALS</h1>
        <p className="text-center text-gray-600 lg:pb-20 pb-14">
          Hear what our customers have to say about Primo's Coffee Shop.
        </p>

        <div className="flex lg:flex-row flex-col gap-5 justify-center items-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }} // Start off slightly below and invisible
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible when in view
              transition={{
                duration: 1,
                delay: index * 0.3,
              }}
            >
              <Card className="relative shadow-lg text-center flex w-[50vh] justify-center items-center h-[55vh]">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <Avatar className="w-24 h-24 border-4 border-white rounded-full shadow-md">
                    <AvatarImage src={testimonial.img} alt={testimonial.name} />
                  </Avatar>
                </div>
                <CardContent className="pt-20 lg:space-y-2 flex flex-grow flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold">{testimonial.name}</h2>
                    <p className="text-sm text-gray-500 font-semibold">
                      {testimonial.role}
                    </p>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {testimonial.description}
                    </p>
                  </div>
                  <div className="pt-4">{renderStars(testimonial.rating)}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;

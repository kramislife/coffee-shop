import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInView } from "framer-motion";

const coffeeCards = [
  {
    id: 1,
    img: "/beans.jpg",
    title: "Americano Coffee",
    description:
      "A pure, bold brew with no added flavors. Known for its rich, robust taste and invigorating aroma, black coffee highlights the true essence of the coffee bean.",
    price: "$5.99",
  },
  {
    id: 2,
    img: "/saltedCaramel.jpg",
    title: "Salted Caramel",
    description:
      "  A delightful blend of rich coffee and the sweet, buttery flavor of caramel, perfectly balanced with a hint of sea salt. It offers a harmonious mix of sweetness and a subtle savory touch.",
    price: "$4.99",
  },
  {
    id: 3,
    img: "/macchiatoFrappe.jpg",
    title: "Caramel Macchiato Frappe",
    description:
      "A refreshing blend of bold espresso, creamy milk, and luscious caramel syrup, blended with ice for a smooth, frosty treat.  Topped with a drizzle of caramel, this frappe offers a perfect balance of sweetness.",
    price: "$2.99",
  },
  {
    id: 4,
    img: "/latteFreeze.webp",
    title: "Espreso Latte Freeze",
    description:
      "A cool and creamy blend of rich espresso and velvety milk, combined with ice to create a refreshing frozen treat. Perfectly balanced between bold coffee flavors and a smooth, frosty texture.",
    price: "$6.99",
  },
];
const Services = () => {
  const servicesRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true });

  const servicesStyle = (isInView) => ({
    transform: isInView ? "none" : "translateY(-50px)",
    opacity: isInView ? 2 : 0,
    transition: "all 2s cubic-bezier(0.645, 0.045, 0.355, 2)",
  });

  return (
    <section className="bg-background lg:h-[120vh] px-4">
      <div className="container py-14">
        <h1 className="text-4xl font-bold lg:leading-snug leading-tight text-center">
          Our Best Seller
        </h1>
        <p className="text-md text-center text-gray-600 max-w-3xl mx-auto py-5 leading-relaxed">
          From sourcing the finest beans to crafting the perfect brew, we offer
          a full range of coffee experiences tailored to ignite your senses.
          Whether you’re here for a quick cup or to savor every sip, we’ve got
          something for every coffee lover.
        </p>
        <div className="flex flex-col lg:flex-row lg:space-x-3 lg:space-y-0 space-y-3 justify-center items-center lg:pt-5 ym-10">
          {coffeeCards.map((card) => (
            <Card
              ref={servicesRef}
              style={servicesStyle(servicesInView)}
              key={card.id}
              className="w-[350px] h-[80vh] drop-shadow-md flex flex-col justify-between"
            >
              <CardHeader className="p-4">
                <img
                  className="h-[40vh] w-full rounded-md object-cover"
                  src={card.img}
                  alt={card.title}
                />
                <CardTitle className="py-2 text-lg font-semibold">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm line-clamp-5 ">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-4">
                <div className="flex items-center justify-between w-full">
                  <div className="text-lg font-bold text-black">
                    {card.price}
                  </div>
                  <Button className="bg-black text-white px-4 py-2 rounded-md">
                    Order Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

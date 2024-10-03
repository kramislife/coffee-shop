import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: "url('/footer2.png')",
        }}
      >
        <div className="container p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 py-2 gap-4 lg:space-x-36">
            {/* Coffee Shop Section */}
            <div>
              <h1 className="text-2xl font-bold py-4 text-white">
                Primo's Coffee Shop
              </h1>
              <p className="text-sm text-gray-200 leading-relaxed">
                At Primo's Coffee Shop, we believe that every cup of coffee
                tells a story. Our coffee shop is dedicated to providing you
                with an exceptional coffee experience that celebrates the art of
                brewing. We source our beans from the finest farms around the
                world, ensuring that each sip reflects our commitment to quality
                and sustainability.
              </p>
            </div>

            {/* About Section */}
            <div>
              <h1 className="text-2xl font-bold py-4 text-white">About</h1>
              <ul className="text-sm space-y-3 text-gray-300">
                <li>Menu</li>
                <li>Features</li>
                <li>News and Blogs</li>
                <li>Help and Support</li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h1 className="text-2xl font-bold py-4 text-white">Company</h1>
              <ul className="text-sm space-y-3 text-gray-300">
                <li>How We Work</li>
                <li>Terms of Services</li>
                <li>Pricing</li>
                <li>FAQ's</li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h1 className="text-2xl font-bold py-4 text-white">Contact Us</h1>
              <ul className="text-sm space-y-3 text-gray-300">
                <li>1234 Coffee Shop</li>
                <li>123 Main St, City, State, ZIP</li>
                <li>(123) 456-7890</li>
                <li>info@coffeeshop.com</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="flex justify-center items-center pt-10">
            <span className="text-sm text-gray-300">
              &copy; 2024 Primo's Coffee Shop. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

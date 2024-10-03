import { Menu } from "lucide-react";
import { useState } from "react";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
  },
  {
    id: 3,
    title: "Products",
    path: "/services",
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 7,
    title: "FAQ",
    path: "/faq",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container py-8">
          <div className="flex items-center justify-between px-2 lg:px-0">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Primo's Coffee Shop</h1>
            </div>
            <div className="flex items-center">
              <ul className="lg:flex hidden gap-x-10">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a
                      className="relative py-2 hover:no-underline before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0"
                      href={item.path}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="lg:block hidden primary-btn ml-12">
                Buy Gift Voucher
              </button>
              <div className="lg:hidden block">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

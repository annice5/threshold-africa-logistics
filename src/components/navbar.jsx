import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpeg";
import { NavLink } from "react-router-dom";
import {  useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";


const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href) => {
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("/#")) {
      const target = href.split("#")[1];
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scroller.scrollTo(target, {
            duration: 800,
            smooth: "easeInOutQuart"
          });
        }, 100);
      } else {
        scroller.scrollTo(target, {
          duration: 800,
          smooth: "easeInOutQuart"
        });
      }
    } else {
      navigate(href);
    }
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Market Sectors", href: "/marketSector" },
    {name:   'Partners', href: '/#partners'},
    {name: 'contact', href: '/#contact' }
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8; // adjust depending on hero size

      if (scrollY > heroHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-wider flex items-center gap-2">
          <img src={logo} alt="logo" className="w-11 h-11 rounded-full object-cover" />
          <span>Threshold Africa.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (

            <button
             key={link.name}
                onClick={() => {
                     handleNavClick(link.href);
                     setIsOpen(false); // also closes mobile menu if open
                    }}
                     className="relative group text-white hover:text-[#0A33E3] transition"
                        >
                   <span className="relative z-10">{link.name}</span>
                   <span
                       className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#0A33E3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                       />
                  </button>

           
             
                   
            
            
            
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pt-4 pb-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
              key={link.name}
              onClick={() => {
                handleNavClick(link.href);
                setIsOpen(false); // also closes mobile menu if open
              }}
              className="relative group text-white hover:text-[#0A33E3] transition"
            >
              <span className="relative z-10">{link.name}</span>
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#0A33E3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
            </button>
            
            
              
              ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

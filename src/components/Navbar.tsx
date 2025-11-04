"use client";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar(){
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const links = ["home", "service", "project", "about", "contact"];

    useEffect (() =>{
        const handelScroll = () => {
            setScrolled(window.scrollY > 20)
            if (window.scrollY > 20 && menuOpen){
                setMenuOpen(false);
            }
        };
        window.addEventListener("scroll", handelScroll);
        return () => window.removeEventListener("scroll", handelScroll);
    }, [menuOpen])

     const scrollToSection = (id: string) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    };

    return(
        <nav className={`fixed w-full z-50 transition-colors duration-300 ${
            scrolled ? "bg-green-900/80 backdrop:backdrop-blur-md shadow-md" : "bg-transparent" }`}>
    
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
                <div onClick={() => scrollToSection("home")} 
                    className="flex items-center space-x-2 cursor-pointer text-white font-bold font-serif">
                     <Image src="/logo.PNG" alt="Logo Icon" width={100} height={100} className="block md:hidden pt-4 w-30 h-30 
                           brightness-125 contrast-125 saturate-150 opacity-100" priority={true} />
                     <Image src="/logo.PNG" className="hidden md:block w-42 md:w-32 sm:w-24 
                     lg:w-38 h-auto object-cover max-w-full max-h-full mt-7 brightness-125 contrast-125 saturate-150 opacity-100 " alt="Logo" width={200} height={120} priority={true} />
                     {/* <span className="uppercase text-sm pr-40">Digital</span> */}
                </div>
            <div className="hidden md:flex space-x-8 font-serif rounded">
                {links.map((link) => (
                    <button key={link} onClick={() => scrollToSection(link)} 
                       className="text-white hover:text-green-300 transition cursor-pointer">
                       {link.charAt(0).toUpperCase() + link.slice(1)}
                    </button>
                ))}
            </div>

            <div className="md:hidden flex justify-between rounded bg-green-300">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white cursor-pointer">
                    {menuOpen ? <XMarkIcon className="h-7 w-7"/>: <Bars3Icon className="h-7 w-7" />}
                </button>
            </div>
        </div>

        {menuOpen && (
            <div className={`md:hidden fixed top-14 left-0 w-full bg-green-700 flex flex-col gap-3 px-4 py-4 mb-2
              transition-opacity duration-500 ease-in-out
               ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} >
                {links.map((link) => (
                    <button key={link} onClick={() => scrollToSection(link)}
                      className="block text-sm px-2 text-white font-serif rounded hover:text-yellow-500 cursor-pointer">
                       {link.charAt(0).toUpperCase() + link.slice(1)}
                    </button>
                ))}
            </div>
        )}
        </nav>
    );
}
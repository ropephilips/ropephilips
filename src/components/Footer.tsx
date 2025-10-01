"use client";
import Image from "next/image";
import Link from "next/link";
import { FaSquareXTwitter, FaLinkedin, FaTelegram , FaEnvelopeOpenText, FaWhatsapp, FaFacebook} from "react-icons/fa6";
export default function Footer(){
    const scrollToHome = () => {
        document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <footer className="bg-gradient-to-b from-green-500 via-green-700 to-blue-900 text-green-100 py-8 lg:py-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">

                <div>
                    <h3 className="text-2xl font-serif font-bold mb-4">About Ropephilips</h3>
                        <p className="text-sm font-serif">
                         We provide innovative solutions in Project management, Digital marketing, Application development, SEO and IT support.
                        <br/>With our passion for productivity, We help businesses scale through efficient systems and digital transformation.
                        </p>
                </div>

                <div>
                    <h3 className="text-2xl font-serif font-bold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm font-serif">
                        <li><strong>Application Development</strong></li>
                        <li><strong>Project Management</strong></li>
                        <li><strong>SEO & Social Media Marketing</strong></li>
                        <li><strong>IT Support & Tech Setup</strong></li>
                        <li><strong>Product Research</strong></li>
                    </ul>
                </div>
              
                <div>
                    <h4 className="text-lg font-bold mb-4 font-serif">Quick Links</h4>
                    <ul className="space-y-2 text-sm font-serif">
                        <li><a href="#home" className="hover:text-green-950">Home</a></li>
                        <li><a href="#service" className="hover:text-green-950">Service</a></li>
                        <li><a href="#portfolio" className="hover:text-green-950">Portfolio</a></li>
                        <li><a href="#about" className="hover:text-green-950">About</a></li>
                        <li><a href="#contact" className="hover:text-green-950">Contact</a></li>
                        <li><Link href="#" className="hover:text-green-950">Affiliates</Link></li>
                        <li><Link href="#" className="hover:text-green-950">Careers</Link></li> 
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold font-serif mb-2">Contact</h4>
                    <div className="flex items-center space-x-2 text-sm mb-3">
                        <FaEnvelopeOpenText className="text-lg text-white"/> 
                          <span className="text-sm md:text-base font-serif">info@property.com</span>
                    </div>
                    <div className="text-lg font-semibold font-serif mb-4 mt-2">
                    <h4 className="mb-2">Connect With Us</h4>
                    <div>
                        <ul className="flex space-x-4 text-xl">
                            <li><Link href="https://x.com/ropephilips"><FaSquareXTwitter className="hover:text-black transition-transform transform hover:scale-110"/></Link></li>
                            <li><Link href="https://linkedin.com/ropephilips"><FaLinkedin className="hover:text-blue-700 transition-transform transform hover:scale-110"/></Link></li>
                            <li><Link href="https://facebook.com/share/1CDJ33W75C/?mibextid=wwXIfr"><FaFacebook className="hover:text-blue-700 transition-transform transform hover:scale-110"/></Link></li>
                            <li><Link href="#"><FaWhatsapp className="hover:text-green-800 transition-transform transform hover:scale-110"/></Link></li>
                        </ul>
                    </div>
                </div>
                </div>
      
                <div className="mt-10 border-t border-green-700 text-center font-serif text-green-400 text-sm pt-4">
                    &copy;{new Date().getFullYear()} Ropephilips. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
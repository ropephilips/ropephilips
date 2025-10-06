"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";


export default function About(){
  

    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection && aboutSection.getBoundingClientRect().top < window.innerHeight - 100){
                setAnimation(true);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[]);

    return (
        <section id="about" className="py-8 lg:py-20 bg-gradient-to-t from-green-300 via-fuchsia-200 to-orange-200 text-green-900">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <Image width={500} height={300} src="/about/profile.JPG" alt="About Us" 
                      className="w-full h-auto rounded-lg shadow-lg object-cover"/>
                </div>

                <div>
                    <h1 className="text-xl font-bold font-serif mb-4 lg:mb-6">About Ropephilips Digital</h1>
                    <p className="text-green-700 text-sm mb-4 font-serif">
                         At <strong>Ropephilips Digital</strong> we deliver innovative technology solutions designed to help businesses scale, Optimize operations, and achieve measurable growth.
                         We specialize in <strong>project management, digital marketing, web application developement, SEO and IT support</strong>
                         , empowering organizations to transform their ideas into impactful digital experiences. 
                    </p>
                    <p className="text-green-700 text-sm mb-4 font-serif">
                      Driven by passion for <strong>productivity and transformation</strong>, we partner with businesses across industries to 
                      implement efficient systems, streamline workflows, enhance online visibility and unlock new growth opportunities.
                      Whether you're a startup building your digital foundation or an established brand seeking optimization, we provide the tools
                      and expertise to help you thrive in a competitive digital world.
                    </p>
                    <div>
                        <div className="flex items-center space-x-3 text-lg mb-2">
                            <TbTargetArrow className="text-red-400" />
                            <span className="font-bold font-serif">Our Mission</span>
                        </div>
                        
                        <p className="text-sm font-serif mb-3">
                            To empower businesses globally with cutting-edge digital solutions and efficient systems that drive productivity,
                            accelerata growth and support seamless digital transformation.
                        </p>

                        <div className="flex items-center space-x-3 text-lg mb-2">
                            <FaEye className=" text-blue-400" />
                            <span className="font-bold font-serif">Our Vision</span>
                        </div>
                        <p className="text-sm font-serif">
                            To become a trusted global leader in delivering innovative digital solutions - helping
                            businesses of all sizes leverage technology to scale smarter, operate more efficiently and achieve long-term success.
                        </p>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    );
}
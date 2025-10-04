"use client";
import Image from "next/image";

import { useEffect, useState } from "react";


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
                    <h2 className="text-4xl font-bold font-serif mb-4 lg:mb-6">About Us</h2>
                    <p className="text-green-700 text-sm mb-4 font-serif">
                         We provide innovative solutions in Project management, Digital marketing, Application development, SEO and IT support.
                        <br/>With our passion for productivity, We help businesses scale through efficient systems and digital transformation.
                    </p>
                    <ul className="space-y-3 font-serif text-green-800">
                        <li>✅ 10+ years experience in project management.</li>
                        <li>✅ Expert in modern application development.</li>
                        <li>✅ Proven SEO, Digital & Social media marketing strategies.</li>
                        <li>✅ Reliable IT support and business tech setup.</li>
                    </ul>
                    <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
                        Learn More
                    </button>
                    
                </div>
            </div>
        </section>
    );
}
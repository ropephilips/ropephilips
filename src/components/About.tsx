"use client";
import { details } from "framer-motion/client";
import { useEffect, useState } from "react";

export default function About(){
    const skills = [
        {name: "Project Management", level: 92},
        {name: "Application Development", level: 85},
        {name: "SEO & Social Media marketing", level: 88},
        {name: "IT Support & Tech Setup", level: 90},
    ];

    const timeline = [
        {year: "2015 - Present", detail: "Freelance Project Manager & Developer"},
        {year: "2016 - 2020", detail: "IT Support, Daystar Christian Center"},
        {year: "2016 - 2018", detail: "Developer, Teledom Communications"}
    ];

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
                    <img src="/about/profile.jpg" alt="About Us" 
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
                    {/* <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                        <ul className="border-l-2 border-green-500 pl-4 space-y-4">
                            {timeline.map((item, index) => (
                                <li key={index}>
                                    <span className="block font-semibold">{item.year}</span>
                                    <span className="text-green-700">{item.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* <div>
                        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                        {skills.map((skill, index) => (
                            <div key={index} className="mb-4">
                                <span className="block text-sm font-medium mb-1">{skill.name}</span>
                                <div className="w-full bg-green-200 rounded-full h-3">
                                    <div className="bg-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                                      style={{width: animation ? `${skill.level}%` : "0%"}}>
                                      </div>
                                </div>
                            </div>
                        ))}
                    </div> */}

                </div>
            </div>
        </section>
    );
}
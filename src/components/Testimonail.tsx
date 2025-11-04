"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Testimonail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const projects = [
    {
      id: 1,
      title: "Project Management",
      image: "/portfolio/project1.JPG",
      description: "Manage projects for a startup company",
    },
    {
      id: 2,
      title: "IT Support",
      image: "/portfolio/project5.JPG",
      description: "Setup, monitor and manage online activities for a church",
    },
    {
      id: 3,
      title: "SEO Campaign",
      image: "/portfolio/project2.JPG",
      description:
        "Optimize keywords and structure contents for an e-commerce business",
    },
    {
      id: 4,
      title: "Software Development",
      image: "/portfolio/project3.JPG",
      description: "Custom-built software for a fish farm",
    },
    {
      id: 5,
      title: "Online Visibility",
      image: "/portfolio/project4.JPG",
      description: "Online visibility audit",
    },
    {
      id: 6,
      title: "Business Analysis Dashboard",
      image: "/portfolio/project6.JPG",
      description: "Admin platform for analyzing business growth",
    },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[450vh] bg-green-50">
      <div className="sticky top-0 flex flex-col md:flex-row items-center justify-between h-screen px-6 md:px-16">
        {/* LEFT SIDE — stays sticky */}
        <div className="md:w-1/2 text-center md:text-left mt-4 md:pl-6">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-green-900 mb-2 leading-tight">
            Our <br /> Projects
          </h2>
          <p className="tracking-[0.35em] md:tracking-[0.50em] text-xs text-green-700 mb-6 md:mb-10">
            some use case projects
          </p>
          <p className="text-amber-400 mb-6 max-w-md mx-auto md:mx-0 font-sans text-sm tracking-tighter">
            We build intelligent, automated, and sustainable systems that
            combine precision and professionalism. Scroll to experience how our
            innovation unfolds step by step.
          </p>
          <button className="mb-2 px-6 py-3 bg-green-900 text-white rounded-full font-semibold hover:opacity-80 transition">
            See More Details
          </button>
        </div>

        {/* RIGHT SIDE — Project Stack */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center [perspective:1200px]">
          {projects.map((project, i) => {
            const start = i / projects.length;
            const end = (i + 1) / projects.length;

            // Smooth slower transitions
            const rotate = useTransform(scrollYProgress, [start, end], [0, 60]);
            const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
            const y = useTransform(scrollYProgress, [start, end], [0, -80]);
            const scale = useTransform(scrollYProgress, [start, end], [1, 0.92]);

            return (
              <motion.div
                key={project.id}
                style={{
                  rotateY: rotate,
                  opacity,
                  y,
                  scale,
                  zIndex: projects.length - i,
                  transformStyle: "preserve-3d",
                }}
                transition={{ type: "spring", stiffness: 80, damping: 30 }}
                className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden bg-white flex flex-col items-center justify-center text-center"
              >
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-green-900 font-bold text-lg md:text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 px-3">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

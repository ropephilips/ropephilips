"use client";
import Image from "next/image";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Project(){
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});

    const projects = [
        {
            title: "Project Management",
            image: "/portfolio/project1.JPG",
            description: "Manage projects for a startup company"
        },
        {
            title: "IT Support ",
            image: "/portfolio/project5.JPG",
            description: "Setup, monitor and manage online activities for a church"
        },
        {
            title: "SEO Campaign",
            image: "/portfolio/project2.JPG",
            description: "Optimize keywords and structure contents for an e-commerce business"
        },
        {
            title: "Software Development",
            image: "/portfolio/project3.JPG",
            description: "custom built software for a fish farm"
        },
        {
            title: "Online visibility",
            image: "/portfolio/project4.JPG",
            description: "online visibility audit"
        },
        {
            title: "Business analysis dashboard",
            image: "/portfolio/project6.JPG",
            description: "Admin platform for analyzing business growth"
        }
    ];
    return (
         <section id="pj" ref={ref} className="py-8 lg:py-12 bg-green-50 text-green-900 ">
            <div className="max-w-5xl mx-auto px-5 text-center">
                <motion.h1 initial={{opacity: 0, y: 30}}
                 animate={inView ? {opacity: 1, y: 0 } : {}}
                 transition={{duration: 0.6}}
                 className="text-xl md:text-3xl font-serif font-bold mb-1 tracking-tight">
                   Our Projects
                 </motion.h1>
                 <p className="tracking-[0.35em] md:tracking-[0.50em] text-xs text-green-700 mb-6 md:mb-10">some use case projects</p>

                    <div className="block md:hidden ">
                                     <Swiper spaceBetween={20} slidesPerView={1}
                                     pagination={{clickable: true}}
                                     autoplay={{ delay: 5000, disableOnInteraction: false}}
                                     modules={[Autoplay,Pagination]}>
                 
                                         {projects.map((p, index) => (
                                             <SwiperSlide className="mb-8" key={index}>
                                                 <motion.div initial={{opacity:0, y: 30}}
                                                 animate={inView ? {opacity: 1, y: 0} : {}}
                                                 transition={{duration: 0.6}}
                                                 className="bg-white rounded-xl shadow hover:shadow-lg transition-all text-left">
                                                 <Image src={p.image} alt={p.title} width={500} height={200} className="p-3 w-full h-35 md:h-60 bg-cover bg-center rounded-2xl" />
                                                 <div className="mt-2 pl-3 pb-6">
                                                    <p className="mb-2 text-sm font-serif text-green-600 tracking-tighter">{p.description}</p>
                                <h3 className="text-lg font-semibold font-serif mt-1 tracking-tighter">{p.title}</h3>
                                <a href="#" className="text-green-500 mt-3 inline-flex items-center gap-1 text-sm font-medium hover:underline">
                                    Read more 
                                    <span className="text-orange-500 transition-transform duration-200 group-hover:translate-x-1">➡</span>
                                </a>
                                                 </div>
                                                 </motion.div>
                                             </SwiperSlide>
                                         ))}
                                     </Swiper>
                                  </div>

                    <motion.div initial={{opacity: 0, y: 50}}
                                        animate={inView ? {opacity: 1, y: 0} : {}}
                                        transition={{ duration: 0.10, delay: 0.2}}
                                        className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-2 ">
                                            {projects.map((p, index) => (
                                        
                                    <motion.div key={index} 
                                       initial={{opacity: 0, y: 30}} 
                                       animate={inView ? {opacity: 1, y: 0} : {}}
                                       transition={{ duration: 0.6, delay: index * 0.2 }} 
                                       className="bg-white rounded-xl shadow hover:shadow-lg transition-all text-left">
                                        <Image src={p.image} alt={p.title} width={500} height={200} className="p-3 w-full h-35 md:h-60 bg-cover bg-center rounded-2xl" />
                                                <div className="mt-2 pl-3 pb-6">
                                                    <p className="mb-2 text-sm font-serif text-green-600 tracking-tighter">{p.description}</p>
                                <h3 className="text-lg font-semibold font-serif mt-1 tracking-tighter">{p.title}</h3>
                                <a href="#" className="text-green-500 mt-3 inline-flex items-center gap-1 text-sm font-medium hover:underline">
                                    Read more 
                                    <span className="text-orange-500 transition-transform duration-200 group-hover:translate-x-1">➡</span>
                                </a>
                                                 </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
            </div>
         </section>
    )
}
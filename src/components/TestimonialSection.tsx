"use client";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonial = [
    {
        name: "Toyin",
        title: "CEO Beauritage Makeup",
        quote: "This team completely transformed my online presence. Their Social media marketing and online audit was top notch."
    },
    {
        name: "Abdul Ajibola ",
        title: "CEO Royal Property Solutions Limited",
        quote: "They helped with a marketing campaigns strategy and automated our customer relation that helped us effectively market our projects."
    },
    {
        name: "Tessy ",
        title: "CEO, Farra Farms Limited",
        quote: "This awesome team built a custom Fish farm management system with automation functions that reduced my expenses, thereby increasing my farm's revenue."
    },
    {
        name: "Daniel Obasi",
        title: "Founder, Obasi Logistics",
        quote: "They built a custom application that reduced our manual workload by 60%, Fast, efficient and reliable."
    },
    {
        name: "Sandra Mia",
        title: "CMO, NGO",
        quote: "Help setup a CRM and email marketing platform. Highly recommend their services."
    },
    {
        name: "Praise",
        title: "Gold Stores",
        quote: "Built a custom website and helped us with our SEO, making us visible to our local community."
    }

];

export default function TestimonialSection(){
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});
    return (
        <section id="testimonial"
           ref={ref}
           className="py-8 bg-gradient-to-b from-green-100 to-white text-green-900">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <span className="bg-green-200 text-green-500 px-1 py-1 mb-2 rounded-full text-sm fount-medium">
                    Our Testimonials
                </span>
                <motion.h2 initial={{opacity: 0, y: 30}}
                 animate={inView ? {opacity: 1, y: 0 } : {}}
                 transition={{duration: 0.6}}
                 className="text-lg md:text-4xl sm:text-3xl lg:text-4xl font-serif font-bold mb-6 lg:mb-12">
                   What Our Clients Say
                 </motion.h2>

                 <div className="block md:hidden ">
                    <Swiper spaceBetween={20} slidesPerView={1}
                    pagination={{clickable: true}}
                    autoplay={{ delay: 3000, disableOnInteraction: false}}
                    modules={[Autoplay,Pagination]}>

                        {testimonial.map((item, index) => (
                            <SwiperSlide className="mb-8" key={index}>
                                <motion.div initial={{opacity:0, y: 30}}
                                animate={inView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6}}
                                className="bg-white p-8 inst shadow-md text-left rounded-lg">
                                <p className="mb-4 text-sm text-gray-800">&ldquo;{item.quote}&rdquo;</p>
                                <div className="font-semibold text-green-700">{item.name}</div>
                                <div className="text-sm font-serif text-orange-500">{item.title}</div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                 </div>
 
                <motion.div initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{ duration: 0.8, delay: 0.2}}
                    className="hidden md:grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {testimonial.map((item, index) => (
                    
                <motion.div key={index} 
                   initial={{opacity: 0, y: 30}} 
                   animate={inView ? {opacity: 1, y: 0} : {}}
                   transition={{ duration: 0.6, delay: index * 0.2 }} 
                   className="bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-left">
                            <p className="mb-4 text-gray-800">&ldquo;{item.quote}&rdquo;</p>
                            <div className="font-semibold text-green-700">{item.name}</div>
                            <div className="text-sm font-serif text-orange-500">{item.title}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
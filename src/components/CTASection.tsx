"use client"
//import Link from "next/link";
export default function CTASection(){
    const scrollToContact = () => {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };
    return (
        <section id="cta" className="py-10 bg-gradient-to-r from-green-400 via-green-800 to-green-600 text-white text-center">
            <div className="max-w-3xl mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                    Ready To Grow Your Business?
                </h1>
                <p className="mb-8 text-sm lg:text-lg text-green-100">
                    Let's work together to create tailored solutions that drives real results for your business.
                </p>
                <button onClick={scrollToContact}
                   className="cursor-pointer bg-white text-orange-400 font-semibold py-3 px-8 
                          rounded-lg shadow-md hover:bg-green-100 transition duration-300">
                    Get in Touch
                </button>
            </div>
        </section>
    )
}
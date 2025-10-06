"use client";


export default function HeroCarousel(){

    return (
       <section id="home" className="relative w-full min-h-screen pt-20 pb-16 bg-aurora text-white flex items-center">

       <div className="absolute inset-0 aurora-bg mix-blend-multiply bottom-0 bg-gradient-to-b from transparent to-green-900"></div>
        <div className="absolute inset-0 bg-black/15 "></div>

         <div className="relative z-10 max-w-5xl mx-auto px-6 fade-up">
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                We Design, Build & Optimize Tech Solutions That Power Business Growth.
            </h1>
            <p className="mt-4 text-lg max-w-2xl font-serif">
                From project management to web application developement, digital marketing, SEO and IT support - 
                we deliver strategies, tools and systems that moves your business forward and help you scale smarter.
            </p>

            <div className="mt-6 flex gap-2">
                <button onClick={() => document.getElementById("contact") ?.scrollIntoView({behavior: "smooth"})} className="cursor-pointer bg-orange-400 hover:bg-orange-500 text-white px-5 py-3 rounded-lg font-serif font-semibold">
                    Start a Project
                </button>
                <button onClick={() => document.getElementById("services") ?.scrollIntoView({behavior: "smooth"})} className="border border-orange-800 font-serif hover:bg-orange-500 hover:text-white text-orange-400 px-5 py-3 rounded-lg font-semibold cursor-pointer">
                    Explore Services
                </button>
            </div>
         </div>

       </section>
    );
}
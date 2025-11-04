import Image from "next/image";

const services = [
    {
        title: "Web Application Developement",
        description: "From responsive websites to custom web apps, we build robust, scalable, and user-friendly digital platforms tailored to your business goals and user needs",
        image: "/icons/coding.png"
    },
    {
        title: "Project Management",
        description: "We plan, execute and oversee projects from concept to completion- ensuring efficiency, timely delivery and measurable results through structured workflows and strategic execution.",
        image: "/icons/market.png",
    },
    {
        title: "Business Online Presence",
        description: "We conduct in-depth audit to determine were your business is missing quality leads .",
        image: "/icons/research.png"
    },
    
    {
        title: "SEO & Social Media Marketing",
        description: "We help you rank higher, reach the right audience and grow organically with proven SEO strategies that boost visibility and bring qualified traffic to page.",
        image: "/icons/market-analysis.png"
    },
    {
        title: "IT Support & Tech Setup",
        description: "We offer reliable, end-to-end IT support services that ensure your systems run smoothly, securely, and without disruption - so you can focus on growing your business.",
        image: "/icons/network-admin.png"
    },
    {
        title: "Leads Generation & Sales Funnels",
        description: "Optimized funnels that capture leads and maximize conversion rates.",
        image: "/icons/business-funnel.png"
    },

];

export default function ServicesSection(){
    return (
        <section id="services" className="py-8 lg:py-20 bg-gradient-to-b from-green-900 via-green-400 to-green-200 text-white flex items-center">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Our Services</h2>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index} className="bg-green-700 rounded-lg shadow-md p-5 hover:shadow-xl hover:scale-105 transition-transform duration-300">
                            <Image width={500} height={300} src={service.image} alt={service.title} className="h-30 w-30 mx-auto mb-4" />
                            <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                            <p className="text-green-100 font-serif text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
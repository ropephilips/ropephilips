// import Image from "next/image";

const services = [
    {
        title: "Project Management",
        description: "Effective planning, execution and delivery of projects tailored to your business goals.",
        image: "/icons/market.png",
    },
    {
        title: "Product Research",
        description: "In-depth market research and data analysis to identify opportunities and strategies.",
        image: "/icons/research.png"
    },
    {
        title: "Application Developement",
        description: "Custom web applications, to scale and enhance performance.",
        image: "/icons/coding.png"
    },
    {
        title: "SEO & Social Media Marketing",
        description: "Boost your online visibility and engage with customers through strategic campaigns.",
        image: "/icons/market-analysis.png"
    },
    {
        title: "IT Support & Tech Setup",
        description: "Reliable IT support and system setup to keep your business running smoothly.",
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
                            <img src={service.image} alt={service.title} className="h-30 w-30 mx-auto mb-4" />
                            <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                            <p className="text-green-100 font-serif text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
import Image from "next/image";
export default function PortfolioSection(){
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
        <section id="portfolio" className="py-8 lg:py-18 bg-green-50 text-green-900 ">
            <div className="max-w-5xl mx-auto px-5">
                <h1 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12">
                    Our Projects
                </h1>
                <div className="grid md:grid-cols-2 gap-6 mx-4">
                    {projects.map((p,i) => (
                        <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition">
                            <Image src={p.image} alt={p.title} width={500} height={300} className="w-full h-56 bg-cover bg-center rounded-t-lg" />
                            <div className="p-4">
                                <span className="text-sm font-serif text-green-600">{p.description}</span>
                                <h3 className="text-lg font-semibold font-serif mt-1">{p.title}</h3>
                                <a href="#" className="text-green-500 text-sm mt-3 inline-block hover:underline">Read More ➡</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
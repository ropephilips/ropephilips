export default function PortfolioSection(){
    const projects = [
        {
            title: "Project Management Dashboard",
            image: "/portfolio/project1.jpg",
            description: "Full-stack platform for managing business operations."
        },
        {
            title: "IT Support ",
            image: "/portfolio/project5.jpg",
            description: "Setup, monitor and manage online activities"
        },
        {
            title: "Branding Design",
            image: "/portfolio/project2.jpg",
            description: "SEO campaign for E-commerce"
        },
        {
            title: "Software Development",
            image: "/portfolio/project3.jpg",
            description: "Full-stack application"
        },
        {
            title: "Project Research ",
            image: "/portfolio/project4.jpg",
            description: "Research best tools to automate and increase productivity."
        },
        {
            title: "Project Management Dashboard",
            image: "/portfolio/project6.jpg",
            description: "Admin platform for managing business operations."
        }
    ];

    return (
        <section id="portfolio" className="py-8 lg:py-18 bg-green-50 text-green-900 ">
            <div className="max-w-5xl mx-auto px-5">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12">
                    Our Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mx-4">
                    {projects.map((p,i) => (
                        <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition">
                            <img src={p.image} alt={p.title} className="w-full h-56 bg-cover bg-center rounded-t-lg" />
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
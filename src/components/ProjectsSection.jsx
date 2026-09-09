import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "TechLine: Online Learning Platform",
        description: "A full-stack online learning platform featuring Firebase authentication, course browsing, enrollment, role-based access control, and dynamic course management.",
        image: "/projects/Project1.png",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Vercel", "Railway"],
        demoUrl: "https://tech-line-online-learning-platform.vercel.app",
    },
    {
        id: 2,
        title: "EventLab: Event Management Platform",
        description: "A full-stack event management platform built with Next.js, featuring secure authentication, event management, responsive dashboards, and MongoDB integration.",
        image: "/projects/Project2.png",
        tags: ["Next.js","React", "Tailwind CSS", "MongoDB", "NextAuth"],
        demoUrl: "https://event-management-nextjs-olive.vercel.app",
    },
    {
        id: 3,
        title: "SkillSwap: Local Skill Exchange Platform",
        description: "A skill-sharing platform connecting learners and instructors through skill discovery, user authentication, and a responsive React-based interface.",
        image: "/projects/Project3.png",
        tags: ["React", "Vite", "Tailwind CSS", "Firebase", "JavaScript"],
        demoUrl: "https://skillswap-firebase-auth-c71c8.web.app",
    },
];

export const ProjectsSection = () => {
    return ( 
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                             <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                             </div>

                       <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                       <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                       </p>
                       <div className="flex justify-between item-center">
                            <div className="flex space-x-3">
                                <a 
                                  href={project.demoUrl}
                                  target="_blank"
                                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <ExternalLink size={20}/>
                                </a>
                            </div>
                        </div>  
                        </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/Rafu75"
                  >
                    Check My GitHub <ArrowRight size={16}/>
                  </a>
                </div>
            </div>
        </section>
    );
};
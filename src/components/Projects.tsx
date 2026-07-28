import React, { useEffect, useState, useMemo } from "react";
import { ExternalLink, Github, Star, X, Filter } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category:
    | "e-commerce"
    | "health"
    | "logistics"
    | "community"
    | "portfolio"
    | "other";
  imageGradient: string;
  link: string;
  github?: string;
  featured?: boolean;
  impact?: string[];
  status?: string;
}

const ALL_PROJECTS: Project[] = [
  // Commercial & E-Commerce
  {
    title: "Snack City",
    description:
      "Online store dedicated to ordering and purchasing snacks with automated shopping features.",
    tech: ["Cloudflare Workers", "JavaScript", "HTML/CSS"],
    category: "e-commerce",
    imageGradient: "from-amber-500/20 to-yellow-600/20",
    link: "https://snackcity.marketstore.workers.dev/",
  },
  {
    title: "Ramvees Food Booking",
    description:
      "E-commerce platform allowing customers to order food directly via WhatsApp integration.",
    tech: ["Cloudflare Workers", "JavaScript", "WhatsApp API"],
    category: "e-commerce",
    imageGradient: "from-orange-500/20 to-red-600/20",
    link: "https://ramvees.marketstore.workers.dev/",
  },
  {
    title: "InHim Store",
    description:
      "Online retail storefront supporting general product catalog and digital checkout.",
    tech: ["React", "Tailwind CSS", "Netlify"],
    category: "e-commerce",
    imageGradient: "from-emerald-500/20 to-teal-600/20",
    link: "https://inhimstore.netlify.app/",
    status: "Under Development",
  },
  {
    title: "Gaza Market",
    description:
      "Multi-vendor business marketplace platform for local merchants to list products.",
    tech: ["React", "Vercel", "Tailwind CSS"],
    category: "e-commerce",
    imageGradient: "from-purple-500/20 to-pink-600/20",
    link: "https://gazamarket.vercel.app/",
    featured: true,
    status: "Under Development",
  },
  {
    title: "Campus Eats",
    description:
      "Food delivery platform tailored for campus students with streamlined ordering.",
    tech: ["React", "Node.js", "Supabase", "TypeScript"],
    category: "e-commerce",
    imageGradient: "from-green-500/20 to-emerald-700/20",
    link: "https://campus-eats-five.vercel.app/",
  },

  // Healthcare & Business Services
  {
    title: "Hlulani Medical Centre",
    description:
      "Healthcare portal showcasing clinical services, doctor consultation schedules, and inquiries.",
    tech: ["Cloudflare Workers", "JavaScript", "HTML/CSS"],
    category: "health",
    imageGradient: "from-cyan-500/20 to-blue-600/20",
    link: "https://hlulanimedicalcentre.marketstore.workers.dev/",
    featured: true,
  },
  {
    title: "Selamolela Steel Work",
    description:
      "Showcase portal for steel crafting, metal fabrication services, and project quotes.",
    tech: ["Cloudflare Workers", "JavaScript", "CSS"],
    category: "other",
    imageGradient: "from-slate-600/20 to-zinc-800/20",
    link: "https://selamolela-steel.marketstore.workers.dev/",
  },
  {
    title: "Vutomi Trading",
    description:
      "Corporate website for a logistics and supply chain enterprise.",
    tech: ["React", "Tailwind CSS"],
    category: "logistics",
    imageGradient: "from-blue-600/20 to-indigo-800/20",
    link: "https://vutomitrading.com/",
  },
  {
    title: "InHim Trading",
    description:
      "Official enterprise web platform for general trade, supplies, and business solutions.",
    tech: ["React", "Tailwind CSS"],
    category: "other",
    imageGradient: "from-cyan-600/20 to-blue-800/20",
    link: "https://inhimtrading.com/",
  },

  // Logistics & Agri-Tech
  {
    title: "Campus Cart Hub",
    description:
      "Ride-sharing and transport coordination platform designed specifically for campus students.",
    tech: ["React", "Netlify", "Tailwind CSS"],
    category: "logistics",
    imageGradient: "from-blue-500/20 to-cyan-600/20",
    link: "https://campuscarthub.netlify.app/",
  },
  {
    title: "InHim Farm",
    description:
      "Web presence for agricultural products, produce listings, and farm management.",
    tech: ["React", "Netlify"],
    category: "other",
    imageGradient: "from-lime-600/20 to-green-800/20",
    link: "https://inhimfarm.netlify.app/",
  },
  {
    title: "InHim AgriTech",
    description:
      "Agri-technology site highlighting modern farming techniques and digital solutions.",
    tech: ["React", "Tailwind CSS"],
    category: "other",
    imageGradient: "from-emerald-600/20 to-teal-800/20",
    link: "https://inhimagritech.netlify.app/",
  },

  // Social & Education
  {
    title: "CWhisper Social",
    description:
      "Community platform enabling real-time conversations, posts, and social interactions.",
    tech: ["React", "Node.js", "Socket.io"],
    category: "community",
    imageGradient: "from-indigo-500/20 to-purple-600/20",
    link: "https://cwhisper.netlify.app/",
    featured: true,
  },
  {
    title: "Tasha Glamour Training",
    description:
      "Educational portal and course booking platform for beauty and nail styling academies.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "other",
    imageGradient: "from-pink-500/20 to-rose-600/20",
    link: "https://tashaglamourtraining.netlify.app/",
  },
  {
    title: "MKSibei Branding & Printing",
    description:
      "Agency site for custom design, digital printing, flyers, and brand identity projects.",
    tech: ["React", "Netlify"],
    category: "other",
    imageGradient: "from-violet-500/20 to-purple-700/20",
    link: "https://mksibei.netlify.app/",
  },

  // Portfolios
  {
    title: "Hlulani Bliss Mahlathi Portfolio",
    description:
      "Personal developer portfolio displaying professional engineering projects and skillsets.",
    tech: ["React", "Vercel", "Tailwind CSS"],
    category: "portfolio",
    imageGradient: "from-blue-600/20 to-indigo-900/20",
    link: "https://hlulaniblissmahlathi.vercel.app/",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "e-commerce", label: "E-Commerce" },
  { id: "health", label: "Healthcare" },
  { id: "logistics", label: "Logistics & Transport" },
  { id: "community", label: "Community & Social" },
  { id: "portfolio", label: "Portfolios" },
  { id: "other", label: "Services & Other" },
];

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  // Handle escape key for closing modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Title Block */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            A comprehensive showcase of commercial systems, client web
            applications, and live products built by me.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <Filter size={16} className="text-gray-400 mr-2 hidden sm:block" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={`relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/40 group ${
                project.featured ? "ring-1 ring-blue-500/50" : ""
              }`}
            >
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex gap-2">
                {project.featured && (
                  <span className="flex items-center bg-blue-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-md">
                    <Star size={12} className="mr-1 fill-white" /> Featured
                  </span>
                )}
                {project.status && (
                  <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Header Visual */}
              <div
                className={`h-40 bg-gradient-to-br ${project.imageGradient} relative p-6 flex items-end overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <h3 className="text-xl font-bold text-white z-10 tracking-wide group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-5 flex-grow flex flex-col">
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] bg-blue-500/10 text-blue-400 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-2">
                    <button
                      onClick={() => setSelected(project)}
                      className="text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                    >
                      View Details
                    </button>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors gap-1 group/link"
                    >
                      Visit Site
                      <ExternalLink
                        size={14}
                        className="group-hover/link:translate-x-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelected(null)}
          />
          <div className="relative glass border border-white/10 p-6 md:p-8 rounded-2xl max-w-2xl w-full z-10 bg-slate-900/90 shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selected.title}
                </h3>
                {selected.status && (
                  <span className="inline-block mt-1 text-xs text-amber-400 font-medium">
                    Status: {selected.status}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              {selected.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-blue-600/20"
              >
                <span>Visit Live Platform</span>
                <ExternalLink size={16} />
              </a>

              <a
                href="#contact"
                onClick={() => setSelected(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl font-semibold text-sm transition-colors"
              >
                Inquire About Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

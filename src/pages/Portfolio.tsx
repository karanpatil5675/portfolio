import { useState } from "react";
import { Play, Filter, X } from "lucide-react";
import Layout from "@/components/layout/Layout";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";

const categories = ["All", "Restaurant", "Events", "Products", "Service", "Festival"];

const allProjects = [
  { id: 1, title: "Retro Bistro Campaign", category: "Restaurant", thumbnail: project1, year: "2024", videoUrl: "/src/assets/restarsnt/Retro .MP4" },
  { id: 2, title: "InspiredByU Facewash", category: "Products", thumbnail: project2, year: "2024", videoUrl: "/src/assets/product/InspiredByU facewash description .MP4" },
  { id: 3, title: "Real Estate Tour", category: "Service", thumbnail: project3, year: "2024", videoUrl: "/src/assets/service/House tour.MP4" },
  { id: 4, title: "Retro Anniversary", category: "Restaurant", thumbnail: project4, year: "2024", videoUrl: "/src/assets/restarsnt/Retro_ Anniversary_ testimonial.MOV" },
  { id: 5, title: "Navratri WCS", category: "Events", thumbnail: project5, year: "2023", videoUrl: "/src/assets/festival/Navratari WCS.MOV" },
  { id: 6, title: "Retro Tandooriya Fondue", category: "Restaurant", thumbnail: project6, year: "2023", videoUrl: "/src/assets/restarsnt/Retro_Tandooriya Fondue 2.MOV" },
  { id: 7, title: "Jaydeep Real Estate Reel", category: "Service", thumbnail: project7, year: "2023", videoUrl: "/src/assets/service/Jaydeep_real estate _reel_1.MOV" },
  { id: 8, title: "Ganpati Festival", category: "Festival", thumbnail: project8, year: "2023", videoUrl: "/src/assets/festival/Ganpati.MOV" },
  { id: 9, title: "Sizzle Saints Campaign", category: "Restaurant", thumbnail: project1, year: "2023", videoUrl: "/src/assets/restarsnt/Sizzle _saints_January .MOV" },
  { id: 10, title: "Retro Bistro Hot and Sour", category: "Restaurant", thumbnail: project2, year: "2023", videoUrl: "/src/assets/restarsnt/Retro bistro hot and sour.MOV" },
  { id: 11, title: "Shreenathji Solutions", category: "Service", thumbnail: project2, year: "2022", videoUrl: "/src/assets/service/Shreenathji 2 solutions .MOV" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Portfolio
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Selected Works
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              A showcase of commercial projects, brand films, and creative productions crafted with passion and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-y border-border sticky top-20 z-40 backdrop-blur-lg bg-background/95">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <Filter size={18} className="text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedVideo(project.videoUrl)}
                className={`group project-card aspect-video cursor-pointer ${
                  index === 0 && activeCategory === "All" ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                >
                  <source src={project.videoUrl} />
                </video>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-20" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-glow transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play size={24} className="text-primary-foreground ml-1" />
                  </div>
                </div>
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-primary text-sm font-medium tracking-wider uppercase">
                      {project.category}
                    </p>
                    <span className="text-muted-foreground text-sm">•</span>
                    <span className="text-muted-foreground text-sm">{project.year}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="w-full max-w-4xl aspect-video relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              className="w-full h-full bg-black"
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Video Placeholder Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Add Your Video Projects Here
            </h2>
            <p className="text-muted-foreground">
              Replace these placeholder images with your actual video thumbnails. 
              Click on any card to embed your Vimeo or YouTube videos.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;

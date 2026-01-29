import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
}

interface FeaturedWorkProps {
  projects: Project[];
}

const FeaturedWork = ({ projects }: FeaturedWorkProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const videosWithUrls = projects.filter(p => p.videoUrl);

  useEffect(() => {
    if (videosWithUrls.length === 0 || !hasStarted || isStopped) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videosWithUrls.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [videosWithUrls.length, hasStarted, isStopped]);

  const currentVideo = videosWithUrls[currentVideoIndex];

  const handleVideoPlay = () => {
    setHasStarted(true);
    setIsStopped(false);
  };

  const handleVideoPause = () => {
    setIsStopped(true);
  };

  const handleVideoEnd = () => {
    if (!isStopped) {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videosWithUrls.length);
    }
  };

  return (
    <section className="w-full bg-background">
      <div className="w-full">
        {/* Video Hero */}
        {currentVideo && (
          <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
            <video
              key={currentVideo.id}
              className="h-full w-full object-contain transition-opacity duration-1000"
              controls
              autoPlay={hasStarted && !isStopped}
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onEnded={handleVideoEnd}
            >
              <source src={currentVideo.videoUrl} />
            </video>
          </div>
        )}

        {/* Header */}
        <div className="px-6 lg:px-12 py-24 container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Cinematic & Storytelling Emphasis
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A curated selection of commercial projects showcasing brand storytelling and visual excellence.
            </p>
          </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio`}
              className="group project-card aspect-video"
            >
              {project.videoUrl ? (
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                >
                  <source src={project.videoUrl} />
                </video>
              ) : (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-20" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-glow transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Play size={24} className="text-primary-foreground ml-1" />
                </div>
              </div>
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-foreground border-b border-border pb-1 hover:border-primary hover:text-primary transition-colors duration-300"
          >
            View All Projects
            <span className="text-lg">→</span>
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;

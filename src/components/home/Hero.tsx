import { Play } from "lucide-react";
import { Link } from "react-router-dom";
interface HeroProps {
  heroImage: string;
}
const Hero = ({
  heroImage
}: HeroProps) => {
  return <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Showreel preview" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Letterbox Effect */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm animate-fade-up opacity-0 stagger-1">
            Videographer & Editor
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight animate-fade-up opacity-0 stagger-2"> Hii! I'm <br />
KARAN PATIL
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-0 stagger-3 text-muted-foreground text-center">Transforming ideas into cinematic experiences through the art of video production and editing 
Turning Moments into Motion. Stories into Impact.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 animate-fade-up opacity-0 stagger-4">
            <button className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-medium transition-all duration-300 hover:shadow-glow">
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Watch Showreel
            </button>
            
            <Link to="/portfolio" className="text-foreground border border-border px-8 py-4 rounded-sm font-medium transition-all duration-300 hover:border-primary hover:text-primary">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
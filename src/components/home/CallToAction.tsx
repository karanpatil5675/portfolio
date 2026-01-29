import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-32 bg-cinematic relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            Let's Create Something
            <span className="block text-gradient">Extraordinary</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project and create content that resonates with your audience.
          </p>
          
          <div className="pt-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-sm font-medium text-lg transition-all duration-300 hover:shadow-glow"
            >
              Start a Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

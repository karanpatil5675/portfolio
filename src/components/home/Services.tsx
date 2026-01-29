import { Video, Film, Palette, Sparkles } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Production",
    description: "End-to-end video production from concept to final delivery, ensuring your vision comes to life.",
  },
  {
    icon: Film,
    title: "Post-Production",
    description: "Professional editing, color grading, and sound design to polish your footage to perfection.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Cinematic color correction and grading to establish the perfect mood and visual style.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Dynamic animations and visual effects that add impact and professionalism to your content.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Comprehensive video services tailored to bring your brand's story to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-secondary/50 rounded-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-cinematic"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <service.icon
                  size={24}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

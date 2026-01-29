import Layout from "@/components/layout/Layout";
import { Award, Film, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

import aboutPortrait from "@/assets/krn-about-me-updated.jpeg";

const stats = [
  { icon: Film, value: "150+", label: "Projects Completed" },
  { icon: Users, value: "80+", label: "Happy Clients" },
  { icon: Award, value: "12", label: "Awards Won" },
  { icon: Calendar, value: "8+", label: "Years Experience" },
];

const skills = [
  "Video Production",
  "Cinematography",
  "Video Editing",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "DaVinci Resolve",
  "Adobe Premiere Pro",
  "After Effects",
  "Final Cut Pro",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-cinematic">
                <img
                  src={aboutPortrait}
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30 rounded-sm -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-sm -z-10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                  About Me
                </p>
                <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6">
                  Visual
                  <span className="block text-gradient">Storyteller</span>
                </h1>
              </div>

              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I create story-driven films that go beyond visuals. My work blends cinematic technique with brand strategy to produce content that connects, engages, and leaves a lasting impression. From live events to commercial campaigns, I focus on capturing authentic moments and transforming them into powerful visual narratives.
                </p>
                <p>
                  With an eye for detail and a passion for storytelling, I help brands communicate not just what they do — but who they are.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-medium transition-all duration-300 hover:shadow-glow"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <p className="font-display text-4xl font-semibold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Expertise
              </p>
              <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
                Skills & Tools
              </h2>
              <p className="text-muted-foreground text-lg">
                A comprehensive toolkit for delivering exceptional video content.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-secondary text-foreground text-sm font-medium rounded-sm border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6">
              Philosophy
            </p>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-8">
              "Every frame is an opportunity to capture emotion, tell a story, and create
              something that resonates long after the video ends."
            </blockquote>
            <p className="text-muted-foreground text-lg">
              — My approach to every project
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

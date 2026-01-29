import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold text-foreground">
            Portfolio
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Crafting visual stories that captivate, inspire, and leave a lasting impression.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Navigation
          </h4>
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Home
            </Link>
            <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Portfolio
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </Link>
          </nav>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Connect
          </h4>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/krn_patil_5675?igsh=YjV0Zmw5OHcybnI0&utm_source=qr" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Youtube size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="mailto:patilcreation5675@gmail.com" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        <p className="text-muted-foreground text-sm">© 2026 Karan Patil — Videographer & Video Editor
          Crafting visuals that tell stories.</p>
      </div>
    </div>
  </footer>;
};
export default Footer;

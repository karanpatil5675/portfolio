import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";
import CallToAction from "@/components/home/CallToAction";

import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const featuredProjects = [
  { id: 1, title: "Retro Bistro Campaign", category: "Restaurant", thumbnail: project1, videoUrl: "/src/assets/restarsnt/Retro .MP4" },
  { id: 2, title: "InspiredByU Facewash", category: "Products", thumbnail: project2, videoUrl: "/src/assets/product/InspiredByU facewash description .MP4" },
  { id: 3, title: "Real Estate Tour", category: "Service", thumbnail: project3, videoUrl: "/src/assets/service/House tour.MP4" },
  { id: 4, title: "Retro Anniversary", category: "Restaurant", thumbnail: project4, videoUrl: "/src/assets/restarsnt/Retro_ Anniversary_ testimonial.MOV" },
  { id: 5, title: "Navratri WCS", category: "Events", thumbnail: project5, videoUrl: "/src/assets/festival/Navratari WCS.MOV" },
  { id: 6, title: "Retro Tandooriya Fondue", category: "Restaurant", thumbnail: project6, videoUrl: "/src/assets/restarsnt/Retro_Tandooriya Fondue 2.MOV" },
];

const Index = () => {
  return (
    <Layout>
      <Hero heroImage={heroBg} />
      <FeaturedWork projects={featuredProjects} />
      <Services />
      <CallToAction />
    </Layout>
  );
};

export default Index;

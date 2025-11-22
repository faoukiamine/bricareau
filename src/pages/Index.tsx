import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import WaterProblems from "@/components/WaterProblems";
import Testimonials from "@/components/Testimonials";
import WaterTesting from "@/components/WaterTesting";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <WaterProblems />
        <Testimonials />
        <WaterTesting />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

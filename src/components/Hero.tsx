
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 animate-fade-in">
          <p className="text-portfolio-blue font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-dark">
            Eric Kinyanjui
          </h1>
          <h2 className="text-2xl md:text-3xl text-portfolio-dark/80 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            I build modern, responsive web applications with clean code and user-friendly interfaces.
            Let's turn your ideas into reality with the power of technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View My Work
            </a>
          </div>
        </div>
        
        <div className="lg:w-2/5 animate-scale-in">
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/lovable-uploads/66e43efe-5e4e-4abf-8e7e-af43bd9fe495.png"
                alt="Professional portrait of Eric Kinyanjui"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-portfolio-blue/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

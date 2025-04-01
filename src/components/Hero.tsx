
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-portfolio-secondary/30 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-portfolio-primary font-medium mb-2 animate-fade-in">Hello, I'm</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4 heading-gradient animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Maria Paula Lauria
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-portfolio-muted mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Marketing & Data Professional
            </h2>
            <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              A bridge between business and tech with over 6 years of experience in marketing and data analytics, passionate about innovative strategies and consumer behavior.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild className="bg-portfolio-primary hover:bg-portfolio-primary/90">
                <a href="#experience">View Experience</a>
              </Button>
              <Button asChild variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-primary shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Maria Paula Lauria"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-portfolio-primary/10"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 md:mt-24 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a 
            href="#about" 
            className="text-portfolio-primary hover:text-portfolio-accent transition-colors"
            aria-label="Scroll down to about section"
          >
            <ArrowDown size={32} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

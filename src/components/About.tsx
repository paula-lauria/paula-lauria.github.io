
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-12">
            Marketer with +6 years of work experience and 5 years working in data. I like being a bridge between business and tech. 
            Used to working with multidisciplinary teams, tracking projects, and organizing processes. 
            Passionate about understanding consumer behavior and coming up with innovative marketing strategies integrating technology, creativity, and data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardContent className="flex flex-col items-center p-6">
                <div className="h-12 w-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-portfolio-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Profile</h3>
                <p className="text-center text-portfolio-muted">
                  Marketing & Data professional with a passion for technology and innovation
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="flex flex-col items-center p-6">
                <div className="h-12 w-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-portfolio-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-center text-portfolio-muted">
                  Over 6 years in marketing and 5 years in data analytics across global markets
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="flex flex-col items-center p-6">
                <div className="h-12 w-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-portfolio-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-center text-portfolio-muted">
                  Based in Milan, Italy
                  <br />
                  Open to relocation
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-portfolio-secondary/30 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-display font-semibold mb-4">Soft Skills</h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Strategic thinking", 
                "Process optimization", 
                "Team player", 
                "Proactivity", 
                "Interpersonal relationships", 
                "Leadership", 
                "Creativity", 
                "Continuous learning"
              ].map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-portfolio-primary mr-2"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

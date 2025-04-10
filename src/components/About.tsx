
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
            Data Strategy & Innovation Professional with +8 years of experience leading digital acceleration, audience intelligence, and data-driven transformation. 
            Proven track record in business model strategy, analytics, and cross-functional leadership.
            Bridging business insight, technology, and storytelling to deliver impactful solutions at scale.
            Fluent in Spanish, English and Italian.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardContent className="flex flex-col items-center p-6">
                <div className="h-12 w-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-portfolio-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Profile</h3>
                <p className="text-center text-portfolio-muted">
                  Data & Marketing professional with a passion for technology and innovation
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
                  Over 8 years in marketing and data analytics across global markets
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
                  Italian citizen
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

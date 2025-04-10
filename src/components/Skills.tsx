
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, GraduationCap } from "lucide-react";

interface SkillItemProps {
  name: string;
}

const SkillItem = ({ name }: SkillItemProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span>{name}</span>
      </div>
      <Progress value={100} className="h-2" />
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "Social Listening & SNA Tools (Brandwatch, Netbase, Gephi)" },
    { name: "Analytics (Google, Adobe)" },
    { name: "BI Tools (Data Studio, PBI, Tableau, Qlikview, etc.)" },
    { name: "Project Management, AGILE Methodologies & PM Tools" },
    { name: "SQL, ETL Tools and Cloud" },
    { name: "Python" },
  ];

  const languages = [
    { name: "Spanish (Native Language)" },
    { name: "English (C2 - CAE and IELTS score: 8)" },
    { name: "Italian (C1)" },
  ];

  const certifications = [
    { name: "Forward Program", organization: "McKinsey Academy", status: "on course" },
    { name: "Cloud Digital Leader", organization: "Google Cloud Skills Boost", date: "Apr 2024" },
    { name: "Project Management", organization: "Choralia", date: "Nov 2023" },
    { name: "Product Management", organization: "BrainStation", date: "Jul-Aug 2023" },
    { name: "Google Analytics 4 (GA4)", organization: "Google Skillshop", date: "May 2023" },
    { name: "Certified Marketer (CM1)", organization: "General Assembly", date: "May 2022" },
    { name: "Public Speaking", organization: "Academia de Comunicación Mai Pistiner", date: "Mar 2022" },
    { name: "Excel Essentials", organization: "Udemy", date: "2021" },
    { name: "SQL for Beginners", organization: "Udemy", date: "2021" },
  ];

  const sideProjects = [
    { name: "Talks and Workshops for private organizations and ONGs", details: "SheTech (May 2024), Ethical Nutrition (Jan 2025)" },
    { name: "Semestral contribution to UADE's Digital Business Bachelor Program", details: "since 2022" },
    { name: "Contribution for Sole24Ore's Master in Digital Marketing Program", details: "March 2025" },
  ];

  const coreCompetencies = {
    strategic: [
      "Strategic Vision & Planning",
      "Business Model Innovation",
      "Process Optimization",
      "Data-Driven Decision Making",
      "Product & Go-to-Market Strategy",
    ],
    leadership: [
      "Cross-Functional Team Leadership",
      "Initiative & Ownership",
      "Narrative Thinking & Storytelling",
      "Continuous Learning & Development",
      "Stakeholder Engagement & Influence",
    ],
  };

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title text-center">Skills & Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="flex flex-col gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display text-portfolio-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              {technicalSkills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} />
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display text-portfolio-primary">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              {languages.map((language, index) => (
                <SkillItem key={index} name={language.name} />
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-portfolio-primary">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex gap-3 p-3 border border-portfolio-secondary/50 rounded-lg hover:border-portfolio-primary/50 transition-all">
                    <div className="flex-shrink-0 mt-1">
                      <Award className="h-5 w-5 text-portfolio-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <span className="text-sm text-portfolio-muted flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {cert.date || cert.status}
                        </span>
                      </div>
                      <p className="text-sm text-portfolio-muted">{cert.organization}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 text-portfolio-primary flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Side Projects
                </h3>
                <div className="space-y-3">
                  {sideProjects.map((project, index) => (
                    <div key={index} className="p-3 border border-portfolio-secondary/50 rounded-lg">
                      <h4 className="font-medium">{project.name}</h4>
                      <p className="text-sm text-portfolio-muted">{project.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 bg-portfolio-secondary/30 rounded-2xl p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-display text-portfolio-primary font-semibold mb-6">Core Competencies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-3">Strategic & Business Capabilities</h4>
            <ul className="space-y-2">
              {coreCompetencies.strategic.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-portfolio-primary mr-2"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Leadership & Organizational Strengths</h4>
            <ul className="space-y-2">
              {coreCompetencies.leadership.map((skill, index) => (
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

export default Skills;


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

interface SkillItemProps {
  name: string;
  level: number;
}

const SkillItem = ({ name, level }: SkillItemProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span>{name}</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "Data Strategy & Storytelling", level: 95 },
    { name: "Project Management & AGILE", level: 90 },
    { name: "Social Listening & SNA Tools", level: 85 },
    { name: "BI Tools (Tableau, PowerBI, etc.)", level: 90 },
    { name: "Analytics (Google, Adobe)", level: 85 },
    { name: "Figma", level: 75 },
    { name: "SQL & ETL Tools", level: 80 },
    { name: "Python", level: 70 },
  ];

  const languages = [
    { name: "Spanish (Native)", level: 100 },
    { name: "English (C2)", level: 95 },
    { name: "Italian (B1)", level: 70 },
    { name: "French (A1)", level: 35 },
  ];

  const certifications = [
    { name: "Cloud Digital Leader", organization: "Google Cloud Skills Boost", status: "in progress" },
    { name: "Project Management", organization: "Choralia", date: "Nov 2023" },
    { name: "Product Management", organization: "BrainStation", date: "Jul-Aug 2023" },
    { name: "Google Analytics 4 (GA4)", organization: "Google Skillshop", date: "May 2023" },
    { name: "IELTS", organization: "British Council", date: "Mar 2022" },
    { name: "Certified Marketer (CM1)", organization: "General Assembly", date: "May 2022" },
    { name: "Public Speaking", organization: "Academia de Comunicación Mai Pistiner", date: "Mar 2022" },
    { name: "Project Management", organization: "Udemy", date: "Dec 2021 - Jan 2022" },
    { name: "Excel Essentials", organization: "Udemy", date: "2021" },
    { name: "SQL for Beginners", organization: "Udemy", date: "2021" },
  ];

  const softSkills = [
    "Strategic thinking", 
    "Process optimization", 
    "Team player", 
    "Proactivity", 
    "Interpersonal relationships", 
    "Leadership", 
    "Creativity", 
    "Continuous learning"
  ];

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
                <SkillItem key={index} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display text-portfolio-primary">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              {languages.map((language, index) => (
                <SkillItem key={index} name={language.name} level={language.level} />
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
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex flex-col p-3 border border-portfolio-secondary/50 rounded-lg hover:border-portfolio-primary/50 transition-all">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">{cert.name}</h4>
                      {cert.status ? (
                        <Badge variant="outline" className="bg-portfolio-secondary/20">{cert.status}</Badge>
                      ) : (
                        <span className="text-sm text-portfolio-muted">{cert.date}</span>
                      )}
                    </div>
                    <p className="text-sm text-portfolio-muted">{cert.organization}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 bg-portfolio-secondary/30 rounded-2xl p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-display text-portfolio-primary font-semibold mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, index) => (
            <Badge key={index} className="bg-portfolio-primary/10 text-portfolio-primary hover:bg-portfolio-primary/20 px-3 py-1 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

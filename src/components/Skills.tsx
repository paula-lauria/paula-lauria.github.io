
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillItemProps {
  name: string;
  level: number;
}

const SkillItem = ({ name, level }: SkillItemProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span>{name}</span>
        <span className="text-sm text-portfolio-muted">{level}%</span>
      </div>
      <Progress value={level} className="h-2" indicatorClassName="bg-portfolio-primary" />
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
    "Cloud Digital Leader - Google Cloud Skills Boost (in progress)",
    "Project Management - Choralia (Nov 2023)",
    "Product Management - BrainStation (Jul-Aug 2023)",
    "Google Analytics 4 (GA4) - Google Skillshop (May 2023)",
    "IELTS - British Council (Mar 2022)",
    "Certified Marketer (CM1) - General Assembly (May 2022)",
    "Public Speaking - Academia de Comunicación Mai Pistiner (Mar 2022)",
    "Project Management - Udemy (Dec 2021 - Jan 2022)",
    "Excel Essentials - Udemy (2021)",
    "SQL for Beginners - Udemy (2021)",
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title text-center">Skills & Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-portfolio-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              {technicalSkills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col gap-8">
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
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display text-portfolio-primary">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-portfolio-muted">{cert}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

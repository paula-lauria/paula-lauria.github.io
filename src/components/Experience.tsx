
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const ExperienceItem = ({ title, company, location, period, responsibilities }: ExperienceItemProps) => {
  return (
    <Card className="mb-6 card-hover border-l-4 border-l-portfolio-primary">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-portfolio-primary font-medium">{company}</p>
          </div>
          <div className="text-right">
            <p className="text-portfolio-muted">{location}</p>
            <p className="text-sm">{period}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-portfolio-muted">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Data & Digital Strategy Manager",
      company: "Omnicom Media Group",
      location: "Milan, Italy",
      period: "May 2024 - Present",
      responsibilities: [
        "Develop and implement data and digital strategies for new business initiatives and client portfolios, while co-leading the digital strategy team.",
        "Develop business models, promote innovation and AI use, and align data-driven solutions with the company's objectives.",
        "Work with cross-functional teams to streamline data orchestration and activation.",
        "Direct reporting to C-level and presentation to the board."
      ]
    },
    {
      title: "Data & Analytics Lead",
      company: "Publicis Groupe",
      location: "Milan, Italy",
      period: "Sept 2022 - May 2024",
      responsibilities: [
        "Led Data & MarTech strategy and product development, driving efficiency through AI integration and process standardization.",
        "Led the data visualization team, mentoring onshore and offshore colleagues.",
        "Managed the development of internal products across the company to enhance operational impact through product management methodologies."
      ]
    },
    {
      title: "Data Analytics Project Manager",
      company: "Publicis Groupe",
      location: "Buenos Aires, Argentina",
      period: "Nov 2021 - Sept 2022",
      responsibilities: [
        "Streamlined cross-market BI projects using AGILE methodologies (Tableau, Tibco, PowerBI).",
        "Consulted on data-driven solutions, contributing to pitches and business model development.",
        "Delivered Social Network Analysis and social listening insights to drive strategy.",
        "Led regional training sessions for data teams, enhancing media-related data skills and knowledge."
      ]
    },
    {
      title: "Sr Data Analyst",
      company: "Publicis Groupe",
      location: "Buenos Aires, Argentina",
      period: "Apr 2021 - Nov 2021",
      responsibilities: [
        "Coordinated campaign brand lift studies across key LOBs.",
        "Tracked budget and enhanced collaboration across research partners and internal teams.",
        "Optimized internal practices such as documentation, process trackers, and taxonomy criteria files."
      ]
    },
    {
      title: "Jr Data Analyst",
      company: "Publicis Groupe",
      location: "Buenos Aires, Argentina",
      period: "Aug 2019 - Apr 2021",
      responsibilities: [
        "Generated performance reports and insights for USA clients' digital campaigns and website activity.",
        "Analyzed social media data and automated reporting processes, reducing workload by over 50%.",
        "Developed ad-hoc data strategies for the local team, provided consulting, and mentored interns and new team members."
      ]
    },
    {
      title: "Jr Digital Analyst",
      company: "UTAG",
      location: "Buenos Aires, Argentina",
      period: "Jan 2019 - Aug 2019",
      responsibilities: [
        "Developed paid media strategies for USA and UK-based clients.",
        "Daily managed offshore +17 clients regarding end-to-end operations, from the brief to reporting.",
        "Planned, implemented, optimized, and built reports of cross-media digital campaigns (Social Media, Search, and Programmatic)."
      ]
    },
    {
      title: "Marketing Intern",
      company: "Laboratorios Roemmers",
      location: "Buenos Aires, Argentina",
      period: "Mar 2017 - Dec 2018",
      responsibilities: [
        "Built market analysis, assisted the Trade & Product Marketing management, customer service, and controlled billing for the area."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-portfolio-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

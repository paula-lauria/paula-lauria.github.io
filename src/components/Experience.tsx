
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
      title: "Data & Analytics Lead (EMEA)",
      company: "Publicis Groupe - Zenith",
      location: "Milan, Italy",
      period: "Sept 2022 - Present",
      responsibilities: [
        "Strategy, proposal, and management of Marketing Tech solutions.",
        "End-to-end Data Analytics and Marketing Tech product coordination, including development and release.",
        "Collaboration on internal tech developments to increase efficiency by automating processes and standardizing data structure cross-client and cross-agency.",
        "Collaboration on the application of AI-based products on offered services.",
        "Direct report of data visualization team and internal mentorship to fellow team members and off-shore colleagues."
      ]
    },
    {
      title: "Data Strategy Project Manager (LATAM and Global)",
      company: "Publicis Groupe - Digitas",
      location: "Buenos Aires, Argentina",
      period: "Nov 2021 - Sept 2022",
      responsibilities: [
        "Optimized processes and coordinated them cross-market and cross-areas by applying AGILE methodologies for the creation and maintenance of BI projects within Tableau, Tibco, and PowerBI.",
        "Provided consulting to other areas of the agency and contributed to pitches.",
        "Came up with business models for data-based solutions -primarily focused on social media-, which were later offered to our clients and for which I tracked the later development.",
        "Provided ad-hoc Social Network Analysis (SNA) and social listening insights.",
        "Led and designed regional media and research training sessions for data-oriented profiles."
      ]
    },
    {
      title: "Sr Data Analyst (USA)",
      company: "Publicis Groupe",
      location: "Buenos Aires, Argentina",
      period: "Apr 2021 - Nov 2021",
      responsibilities: [
        "Responsible for coordination of campaign brand lift studies across key LOBs.",
        "Budget and collaboration management across research partners and internal teams.",
        "Optimized internal practices such as documentation, process trackers, and taxonomy criteria files."
      ]
    },
    {
      title: "Jr Data Analyst (USA)",
      company: "Publicis Groupe",
      location: "Buenos Aires, Argentina",
      period: "Aug 2019 - Apr 2021",
      responsibilities: [
        "Led performance reporting and insight generation for US clients' digital media campaigns and websites.",
        "Generated social media analysis using different data insights and visualization tools.",
        "Optimized reporting processes through automation and machine learning technology, leading to a 50% reduction in workload.",
        "Handled ad-hoc data strategy and consulting requests from US clients and coached interns and new entries."
      ]
    },
    {
      title: "Jr Digital Analyst (USA, UK and LATAM)",
      company: "UTAG",
      location: "Buenos Aires, Argentina",
      period: "Jan 2019 - Aug 2021",
      responsibilities: [
        "Planning, implementation, optimization, and reporting of cross-media digital campaigns (Social Media, Google Ads, and Programmatic).",
        "Daily client management of offshore accounts, briefing, budget pacing, and performance tracking.",
        "Paid Media strategy building for USA and UK-based clients."
      ]
    },
    {
      title: "Marketing Intern (ARG)",
      company: "Laboratorios Roemmers",
      location: "Buenos Aires, Argentina",
      period: "Mar 2017 - Dec 2018",
      responsibilities: [
        "Sales reports, competitors analysis, and assistance to the Sales & Marketing management.",
        "Web content creation, customer service & billing control for paid offline and online media."
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


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

const EducationItem = ({ institution, degree, period, details }: EducationItemProps) => {
  return (
    <Card className="mb-6 card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{institution}</CardTitle>
        <p className="text-portfolio-primary font-medium">{degree}</p>
        <p className="text-sm text-portfolio-muted">{period}</p>
      </CardHeader>
      {details && details.length > 0 && (
        <CardContent>
          <ul className="list-disc list-inside space-y-1 text-portfolio-muted">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};

const Education = () => {
  const educationItems = [
    {
      institution: "Universidad Argentina de la Empresa (UADE)",
      degree: "4-year Degree in Marketing",
      period: "Graduated Feb 2022",
      details: [
        "Accredited by the Accreditation Council for Business Schools and Programs (ACBSP)"
      ]
    },
    {
      institution: "Instituto Modelo Banfield",
      degree: "HS Diploma in Humanities & Social Studies",
      period: "Graduated Dec 2014",
      details: [
        "Participated in Model United Nations for two consecutive years",
        "School choir"
      ]
    }
  ];

  return (
    <section id="education" className="section-container bg-portfolio-secondary/10">
      <h2 className="section-title text-center">Education</h2>
      
      <div className="max-w-3xl mx-auto mt-12">
        {educationItems.map((item, index) => (
          <EducationItem 
            key={index}
            institution={item.institution}
            degree={item.degree}
            period={item.period}
            details={item.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;

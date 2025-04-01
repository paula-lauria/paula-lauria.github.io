
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "m.paula.lauria@gmail.com",
      href: "mailto:m.paula.lauria@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+39 345 523 5721",
      href: "tel:+393455235721"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "#"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Milan, Italy",
      href: null
    }
  ];

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title text-center">Get In Touch</h2>
      
      <div className="max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
            <p className="text-portfolio-muted mb-8">
              Feel free to reach out if you're looking for a marketing and data professional, 
              have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-portfolio-primary/10 flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-portfolio-muted hover:text-portfolio-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-portfolio-muted">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <Input id="name" required placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <Input id="email" type="email" required placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">Subject</label>
                <Input id="subject" required placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <Textarea id="message" required placeholder="Your message" className="min-h-[150px]" />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

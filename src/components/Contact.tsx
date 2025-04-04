
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Get In Touch</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-8">
            <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <MapPin className="text-portfolio-blue" />
              </div>
              <div>
                <h4 className="font-medium text-portfolio-dark">Location</h4>
                <p className="text-muted-foreground">Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <Mail className="text-portfolio-blue" />
              </div>
              <div>
                <h4 className="font-medium text-portfolio-dark">Email</h4>
                <p className="text-muted-foreground">ericmbugua825@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <Phone className="text-portfolio-blue" />
              </div>
              <div>
                <h4 className="font-medium text-portfolio-dark">Phone</h4>
                <p className="text-muted-foreground">+254704948242</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Contact Me</h3>
              
              <p className="mb-6 text-muted-foreground">
                Please use the contact information provided to get in touch with me. 
                You can reach me directly via email or phone for any inquiries, project discussions, or collaboration opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-medium text-portfolio-dark mb-2">Preferred Contact Method</h4>
                  <p className="text-muted-foreground mb-4">Email is the fastest way to reach me. I typically respond within 24-48 hours.</p>
                  <a 
                    href="mailto:ericmbugua825@gmail.com" 
                    className="inline-flex items-center text-portfolio-blue hover:text-portfolio-purple transition-colors gap-1 font-medium"
                  >
                    <Mail size={16} />
                    <span>ericmbugua825@gmail.com</span>
                  </a>
                </div>
                
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-medium text-portfolio-dark mb-2">Available For</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                    <li>Project Collaborations</li>
                    <li>Freelance Opportunities</li>
                    <li>Technical Consultations</li>
                    <li>Networking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

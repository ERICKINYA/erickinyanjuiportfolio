
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
                <p className="text-muted-foreground">San Francisco, CA, USA</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <Mail className="text-portfolio-blue" />
              </div>
              <div>
                <h4 className="font-medium text-portfolio-dark">Email</h4>
                <p className="text-muted-foreground">john@developer.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <Phone className="text-portfolio-blue" />
              </div>
              <div>
                <h4 className="font-medium text-portfolio-dark">Phone</h4>
                <p className="text-muted-foreground">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-portfolio-dark mb-1">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="john@example.com" 
                      required 
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-portfolio-dark mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Project Inquiry" 
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-dark mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    placeholder="Your message here..." 
                    required 
                    className="form-input resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

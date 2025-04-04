
import React from 'react';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'SQL/Database', level: 85 },
  { name: 'Python', level: 70 }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-portfolio-dark">Who I Am</h3>
            <p className="text-lg mb-4 text-muted-foreground">
              A passionate software engineer with a knack for creating elegant solutions to complex problems.
              With a strong foundation in both front-end and back-end technologies, I take pride in building
              applications that are not only functional but also intuitive and user-friendly.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              My journey in technology started with a curiosity about how things work, which evolved into a
              career dedicated to continuous learning and improvement. When I'm not coding, you'll find me
              exploring new technologies, contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm">
                Team Player
              </span>
              <span className="px-3 py-1 bg-portfolio-pink/10 text-portfolio-pink rounded-full text-sm">
                Creative Thinker
              </span>
              <span className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm">
                Fast Learner
              </span>
              <span className="px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm">
                Detail-Oriented
              </span>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-dark">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-portfolio-dark">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

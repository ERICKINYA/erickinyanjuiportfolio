
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Week 3A - Database Design',
    description: 'Fundamentals of database design.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&q=80',
    githubLink: 'https://github.com/PLP-Database-Design/wk-3a-ERICKINYA',
    tags: ['SQL', 'Database', 'Normalization']
  },
  {
    id: 2,
    title: 'Week 2A - Database Design',
    description: 'Fundamentals of database design.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&q=80',
    githubLink: 'https://github.com/PLP-Database-Design/wk-2a-ERICKINYA',
    tags: ['SQL', 'ER Diagrams', 'Modeling']
  },
  {
    id: 3,
    title: 'Python Projects',
    description: 'Fundamentals of python.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&q=80',
    githubLink: 'https://github.com/ERICKINYA/python',
    tags: ['Python', 'Data Analysis', 'Web Scraping']
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-portfolio-dark">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-blue hover:text-portfolio-purple transition-colors gap-1 font-medium"
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

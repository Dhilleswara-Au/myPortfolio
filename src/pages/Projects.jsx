import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Users, Code } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'VanaEkam',
      description: 'VanaEkam was my first group-project for HackAP Hackathon. VanaEkam was created primarily with tribal welfare in mind.',
      image: '/portfolio/tribal.png',
      features: [
        'Unique e-commerce platform for tribal people to market their regional goods',
        'Global recognition at competitive prices',
        'Financial assistance through partnerships with large organizations'
      ],
      technologies: ['HTML', 'CSS', 'React', 'MongoDB'],
      type: 'Group Project',
      status: 'Completed',
      role: 'Front-end Developer'
    },
    {
      title: 'Portfolio Website',
      description: 'A solo project for CS50 week 8 Homepage project. Creating a portfolio website serves as a centralized, professional platform to showcase my skills, projects and achievements.',
      image: '/portfolio/portfolio.png',
      features: [
        'Home page with brief personal description',
        'Resume highlighting skills and educational background',
        'Projects showcase page',
        'Contact page with social media links'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      type: 'Solo Project',
      status: 'Completed',
      role: 'Full-stack Developer'
    },
    {
      title: 'Amazon Clone',
      description: 'My future project, which I intend to undertake in order to advance my skills and discover more new things. This will be my first solo full-stack project.',
      image: '/portfolio/clone1.jpg',
      features: [
        'Complete e-commerce functionality',
        'User authentication and authorization',
        'Shopping cart and payment integration',
        'Product search and filtering'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      type: 'Solo Project',
      status: 'Planned',
      role: 'Full-stack Developer'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Planned':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-accent-50 to-accent-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-work-sans">
              Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my development journey, from hackathon projects to personal endeavors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl"></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-work-sans">
                        {project.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{project.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Code className="w-4 h-4" />
                        <span>{project.role}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed italic">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {project.status === 'Completed' && (
                    <div className="flex flex-wrap gap-4">
                      <button className="btn-primary group">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </button>
                      <button className="btn-secondary group">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a href="/contact" className="btn-primary">
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects
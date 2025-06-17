import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, FolderOpen, MessageSquare, ArrowRight } from 'lucide-react'

const Home = () => {
  const quickLinks = [
    {
      title: 'Resume',
      description: 'View my educational background and skills',
      icon: FileText,
      href: '/resume',
      color: 'bg-amber-500 hover:bg-amber-600',
      delay: 0.1
    },
    {
      title: 'Projects',
      description: 'Explore my development projects',
      icon: FolderOpen,
      href: '/projects',
      color: 'bg-red-500 hover:bg-red-600',
      delay: 0.2
    },
    {
      title: 'Contact',
      description: 'Get in touch with me',
      icon: MessageSquare,
      href: '/contact',
      color: 'bg-cyan-500 hover:bg-cyan-600',
      delay: 0.3
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-work-sans"
              >
                Hello!
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl font-semibold text-gray-700 font-work-sans"
              >
                A bit about me
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed font-work-sans italic"
              >
                I'm Dhilleswara Rao, an Andhra University (AUCE) second-year engineering student. 
                I'm a motivated learner with a passion for computer science. My favorite field to 
                explore in computer science is web development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-primary group">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/projects" className="btn-secondary">
                  View Projects
                </Link>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/portfolio/self.jpeg"
                    alt="Dhilleswara Rao"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 animate-bounce-gentle"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-500 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore My Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover my journey, projects, and ways to connect with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: link.delay }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="block group"
                  >
                    <div className="card p-8 text-center h-full">
                      <div className={`w-20 h-20 ${link.color} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 font-work-sans">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {link.description}
                      </p>
                      <div className="flex items-center justify-center text-primary-600 group-hover:text-primary-700 transition-colors">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
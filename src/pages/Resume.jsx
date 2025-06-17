import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Globe, ChevronDown, ChevronUp } from 'lucide-react'

const Resume = () => {
  const [activeSection, setActiveSection] = useState('education')

  const sections = [
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills & Expertise', icon: Award },
    { id: 'languages', label: 'Languages', icon: Globe }
  ]

  const education = [
    {
      period: '2022 - 2026',
      institution: 'Andhra University',
      degree: 'B.Tech in Computer Science',
      description: "I'm currently a second-year Andhra University CSE B.Tech student, which will be finished in 2026. AUCE has exceeded my expectations in every way. Enrolling in this college has allowed me to learn a lot about myself, try a lot of new things, and take part in a variety of activities.",
      grade: '7.69 CGPA (1st year)'
    },
    {
      period: '2020 - 2022',
      institution: 'Kendriya Vidyalaya',
      degree: '11th - 12th Grade',
      description: "India is home to several branches of the CBSE board school Kendriya Vidyalaya. My postgraduate studies was done at the NAD branch of Visakhapatnam. I joined KV during a challenging covid time, but the instructors and students there really encouraged me to stay focused on my objectives.",
      grade: '85% (12th)'
    },
    {
      period: '2017 - 2020',
      institution: 'BSF Senior Secondary School',
      degree: '8th - 10th Grade',
      description: "BSF Senior Secondary is another CBSE board school with sites across India. My secondary schooling was done at the BSF Shillong, Meghalaya branch. My time at BSF Senior Secondary School allowed me to be very free to experiment with many different things.",
      grade: '84% (10th)'
    },
    {
      period: '2012 - 2017',
      institution: 'Army Public School',
      degree: '3rd - 7th Grade',
      description: "Army Public School is a CBSE board school with campuses all throughout India. I finished my elementary schooling at APS Madhopur's Punjab branch. I have become strong and resilient because of the tough and disciplined life I had at APS."
    }
  ]

  const skills = [
    'C Language',
    'Data Structures and Algorithms Using C',
    'Python',
    'Java',
    'Web Development (Front-end)',
    'HTML & CSS',
    'JavaScript',
    'React.js'
  ]

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Telugu', level: 'Native' }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-work-sans">
              Resume
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My educational journey, skills, and expertise in computer science and web development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="sticky top-16 bg-white shadow-sm z-40">
        <div className="container-max">
          <div className="flex justify-center px-4 py-4">
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{section.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          {/* Education Section */}
          {activeSection === 'education' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6 md:p-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      <div className="md:w-32 flex-shrink-0">
                        <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {edu.institution}
                        </h3>
                        <h4 className="text-lg text-primary-600 mb-3 font-medium">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 mb-3 leading-relaxed italic">
                          {edu.description}
                        </p>
                        {edu.grade && (
                          <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Grade: {edu.grade}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary-500"
                  >
                    <h3 className="font-medium text-gray-900">{skill}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Languages Section */}
          {activeSection === 'languages' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Languages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6 text-center"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{lang.name}</h3>
                    <span className="inline-block bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium">
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Resume
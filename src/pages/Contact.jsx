import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Linkedin, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6304851323',
      href: 'tel:+916304851323'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'dhilleswararao19@gmail.com',
      href: 'mailto:dhilleswararao19@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Visakhapatnam, Andhra Pradesh, India',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: "https://www.linkedin.com/in/dhilleswara-rao-009335257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: "https://www.instagram.com/dhilleswara_rao_19?igshid=OGQ5ZDc2ODk2ZA==",
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      href: "https://www.facebook.com/dhilleswara.rao.754",
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: "https://twitter.com/Dhilles19",
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      href: "https://discord.com/users/891208458567819325",
      color: 'bg-indigo-600 hover:bg-indigo-700'
    }
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
              Contact
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'd love to hear from you. Let's discuss your ideas and how we can work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4"
                      >
                        <div className="p-3 bg-primary-100 rounded-lg">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          {info.href !== '#' ? (
                            <a
                              href={info.href}
                              className="text-gray-600 hover:text-primary-600 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect with me</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center space-x-3 p-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 ${social.color}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{social.name}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Address */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Address</h3>
                <address className="text-gray-600 not-italic leading-relaxed">
                  14-40, Dronamraju Nagar,<br />
                  Chinnamushidiwada, Pendurthi,<br />
                  Visakhapatnam, Andhra Pradesh,<br />
                  India - 530051
                </address>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-vertical"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
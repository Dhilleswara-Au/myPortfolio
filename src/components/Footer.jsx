import React from 'react'
import { Linkedin, Instagram, Facebook, Twitter, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dhilleswara-rao-009335257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dhilleswara_rao_19?igshid=OGQ5ZDc2ODk2ZA==",
      color: "text-pink-600 hover:text-pink-700"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/dhilleswara.rao.754",
      color: "text-blue-700 hover:text-blue-800"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/Dhilles19",
      color: "text-gray-800 hover:text-gray-900"
    },
    {
      icon: MessageCircle,
      href: "https://discord.com/users/891208458567819325",
      color: "text-indigo-600 hover:text-indigo-700"
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-400" />
              <span className="text-gray-300">+91 6304851323</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-400" />
              <span className="text-gray-300">dhilleswararao19@gmail.com</span>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <address className="text-gray-300 not-italic">
                14-40, Dronamraju Nagar,<br />
                Chinnamushidiwada, Pendurthi,<br />
                Visakhapatnam, Andhra Pradesh,<br />
                India - 530051
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/resume" className="block text-gray-300 hover:text-primary-400 transition-colors">Resume</a>
              <a href="/projects" className="block text-gray-300 hover:text-primary-400 transition-colors">Projects</a>
              <a href="/contact" className="block text-gray-300 hover:text-primary-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 G Dhilleswara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Leaf, 
  Target, 
  Users, 
  TrendingUp, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Lightbulb,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollButton, setShowScrollButton] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const services = [
    {
      icon: Target,
      title: "Sustainability Strategy & Advisory",
      description: "We assist clients in developing bespoke sustainability frameworks, ESG roadmaps, and climate-smart policies aligned to national and international standards."
    },
    {
      icon: FileText,
      title: "Sustainability & ESG Reporting",
      description: "We offer end-to-end support in compiling and designing GRI-aligned and integrated reports that enhance transparency and stakeholder trust."
    },
    {
      icon: Users,
      title: "Capacity Building & Training",
      description: "Through workshops, seminars, and accredited training, we build internal capacity on climate change, environmental compliance, and sustainability leadership."
    },
    {
      icon: MessageSquare,
      title: "Stakeholder & Community Engagement",
      description: "We design and facilitate inclusive engagement strategies that connect communities, businesses, and government stakeholders around shared sustainability goals."
    },
    {
      icon: BarChart3,
      title: "Monitoring, Evaluation & Learning (MEL)",
      description: "We build custom MEL frameworks to track, assess, and report on the effectiveness of sustainability programmes and climate adaptation interventions."
    },
    {
      icon: TrendingUp,
      title: "Proposal Writing & Resource Mobilisation",
      description: "We write donor proposals, grant applications, and funding concept notes to support the programme growth and sustainability of our clients."
    },
    {
      icon: Lightbulb,
      title: "Impact Storytelling",
      description: "We capture and communicate the real-world impact of our programmes through human-centred stories, case studies, and visual narratives."
    },
    {
      icon: Target,
      title: "Strategic Communication Planning",
      description: "We develop integrated communication and marketing strategies aligned with your organisational goals and stakeholder needs."
    }
  ]

  const whyChooseUs = [
    {
      number: "01",
      title: "Cross-sector expertise",
      description: "We bring proven experience working with corporates, municipalities, and NGOs to deliver practical and measurable sustainability outcomes."
    },
    {
      number: "02",
      title: "Purpose-driven approach",
      description: "We are committed to impactful, values-based work that puts people, planet, and partnerships at the centre of everything we do."
    },
    {
      number: "03",
      title: "Innovation & impact",
      description: "We work hand-in-hand with local stakeholders to co-create solutions that are inclusive, culturally appropriate, and sustainable."
    },
    {
      number: "04",
      title: "Innovation & impact",
      description: "From digital sustainability tools to nature-based solutions, we embrace innovation that drives long-term environmental and social impact."
    },
    {
      number: "05",
      title: "Collaborative ecosystem",
      description: "We work closely with a network of certified experts, technical advisors, and industry partners to ensure that our clients benefit from specialist input where needed."
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'why-choose-us', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">LaSos Ranelo</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'services', 'why-choose-us', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-green-100"
            >
              {['home', 'about', 'services', 'why-choose-us', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-green-600"
                >
                  {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 to-green-800/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              LaSos Ranelo
              <span className="block text-green-200">Green Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              A purpose driven communications for a sustainable future
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-4xl mx-auto">
              We are a dynamic, black and female-owned sustainability consultancy based in the Eastern Cape, 
              dedicated to helping organisations embed sustainability into their core operations and take bold, effective climate action.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our work sits at the intersection of sustainability strategy, environmental governance, and impactful communication. 
                We offer integrated services that include climate strategy development, ESG and sustainability reporting, 
                impact storytelling, stakeholder engagement, and capacity building.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We proudly serve a diverse client base, including SMEs, NGOs, local government, and mission-driven enterprises 
                across South Africa. Through flagship initiatives like SCALE (Sustainable Climate Action for Local Environments), 
                we champion climate-resilient development and support a just transition that prioritises people, planet, and prosperity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To lead transformative sustainability solutions that empower communities, institutions, 
                    and businesses across South Africa to thrive in a resilient, inclusive, and climate-smart future.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our mission is to drive meaningful environmental and social impact by delivering innovative 
                    sustainability strategies, ESG reporting, and purpose-driven communications.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer comprehensive sustainability solutions tailored to your organization's unique needs and goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Card className="h-full relative bg-white/95 backdrop-blur-sm group-hover:bg-white/100 transition-all duration-300 border border-gray-100 group-hover:border-green-200 group-hover:shadow-lg overflow-hidden">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-lg bg-green-50 group-hover:bg-green-100 flex items-center justify-center mb-4 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-green-200 transition-colors duration-300">
                        <div className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-300">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-green-600 mr-4">{item.number}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-24 w-24 text-green-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ready to start your sustainability journey? Contact us today to discuss how we can help your organization thrive in a sustainable future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+27 82 484 0161</p>
                      <p className="text-gray-600">+27 72 149 7491</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">veliswa@lasosrenelo.co.za</p>
                      <p className="text-gray-600">wandile@lasosrenelo.co.za</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Makhanda, Eastern Cape, South Africa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input 
                          placeholder="Your Name" 
                          className="border-green-200 focus:border-green-500 w-full" 
                        />
                      </div>
                      <div>
                        <Input 
                          placeholder="Your Email" 
                          type="email" 
                          className="border-green-200 focus:border-green-500 w-full" 
                        />
                      </div>
                    </div>
                    <Input 
                      placeholder="Your Organisation" 
                      className="border-green-200 focus:border-green-500" 
                    />
                    <select 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-green-200 focus:border-green-500"
                    >
                      <option value="">Select Service Needed</option>
                      <option value="sustainability">Sustainability Consultation</option>
                      <option value="marketing">Marketing and Communication</option>
                      <option value="both">Both Services</option>
                    </select>
                    <Textarea 
                      placeholder="Your message..." 
                      rows={4} 
                      className="border-green-200 focus:border-green-500"
                    />
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">LaSos Ranelo Green Solutions</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                A purpose driven communications for a sustainable future. 
                Empowering organizations to thrive in a climate-smart future.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Services', 'Why Choose Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>+27 82 484 0161</p>
                <p>+27 72 149 7491</p>
                <p>veliswa@lasosrenelo.co.za</p>
                <p>Makhanda, Eastern Cape, South Africa</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LaSos Ranelo Green Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

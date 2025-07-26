import React, { useState } from 'react';
import { Rocket, Star, Target, TrendingUp, Lightbulb, Globe, Users, Calendar, Code, Brain, Heart } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';

const Future = ({ onBack }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('shortTerm');

  const visionAreas = [
    {
      id: 1,
      title: "AI-Driven Healthcare Revolution",
      icon: Brain,
      description: "Leading the transformation of healthcare through advanced AI and machine learning technologies",
      color: "from-purple-500 to-pink-500",
      borderColors: { from: '#a855f7', to: '#ec4899' },
      impact: "Democratize advanced healthcare AI for global accessibility"
    },
    {
      id: 2,
      title: "Global Health Technology Leadership",
      icon: Globe,
      description: "Establishing standards and best practices for healthcare technology implementation worldwide",
      color: "from-blue-500 to-cyan-500",
      borderColors: { from: '#3b82f6', to: '#06b6d4' },
      impact: "Bridge technology gaps in underserved healthcare markets"
    },
    {
      id: 3,
      title: "Innovation & Mentorship",
      icon: Users,
      description: "Building the next generation of healthcare technologists through education and mentorship",
      color: "from-green-500 to-emerald-500",
      borderColors: { from: '#22c55e', to: '#10b981' },
      impact: "Empower 1000+ developers in healthcare technology"
    },
    {
      id: 4,
      title: "Sustainable Healthcare Solutions",
      icon: Heart,
      description: "Creating environmentally conscious and economically sustainable healthcare technology solutions",
      color: "from-orange-500 to-red-500",
      borderColors: { from: '#f97316', to: '#ef4444' },
      impact: "Reduce healthcare technology carbon footprint by 50%"
    }
  ];

  const roadmap = {
    shortTerm: [
      {
        id: 1,
        title: "Complete Advanced AI Certifications",
        timeframe: "Next 6 Months",
        description: "Obtain specialized certifications in healthcare AI, machine learning operations, and clinical informatics",
        milestones: [
          "AWS Machine Learning Specialty",
          "Google Cloud Professional ML Engineer",
          "Clinical Informatics Certification",
          "Healthcare AI Ethics Certification"
        ],
        status: "In Progress",
        priority: "High"
      },
      {
        id: 2,
        title: "Launch Personal Healthcare AI Research",
        timeframe: "Next 12 Months",
        description: "Begin independent research on AI applications in preventive healthcare and publish findings",
        milestones: [
          "Establish research partnership",
          "Develop proof of concept",
          "Publish first research paper",
          "Present at healthcare conferences"
        ],
        status: "Planning",
        priority: "Medium"
      },
      {
        id: 3,
        title: "Expand Technical Leadership Role",
        timeframe: "Next 18 Months",
        description: "Transition to senior technical leadership position with broader organizational impact",
        milestones: [
          "Lead cross-functional teams",
          "Drive technical strategy",
          "Mentor junior developers",
          "Establish best practices"
        ],
        status: "Planning",
        priority: "High"
      }
    ],
    midTerm: [
      {
        id: 4,
        title: "Found Healthcare AI Startup",
        timeframe: "2-3 Years",
        description: "Launch innovative healthcare AI company focused on democratizing advanced medical technologies",
        milestones: [
          "Develop MVP product",
          "Secure seed funding",
          "Build core team",
          "Acquire first customers"
        ],
        status: "Conceptual",
        priority: "High"
      },
      {
        id: 5,
        title: "Establish Global Healthcare Initiative",
        timeframe: "3-4 Years",
        description: "Create nonprofit organization to bring healthcare technology solutions to underserved communities",
        milestones: [
          "Partner with global health organizations",
          "Develop scalable solutions",
          "Deploy pilot programs",
          "Measure impact metrics"
        ],
        status: "Conceptual",
        priority: "Medium"
      },
      {
        id: 6,
        title: "Complete Advanced Degree",
        timeframe: "3-4 Years",
        description: "Pursue PhD in Healthcare Informatics or related field to deepen research capabilities",
        milestones: [
          "Apply to top programs",
          "Complete coursework",
          "Conduct original research",
          "Defend dissertation"
        ],
        status: "Considering",
        priority: "Medium"
      }
    ],
    longTerm: [
      {
        id: 7,
        title: "Transform Global Healthcare Standards",
        timeframe: "5-10 Years",
        description: "Lead international efforts to establish new standards for AI ethics and implementation in healthcare",
        milestones: [
          "Join international committees",
          "Publish definitive guidelines",
          "Influence policy development",
          "Create certification programs"
        ],
        status: "Vision",
        priority: "High"
      },
      {
        id: 8,
        title: "Build Healthcare Technology Ecosystem",
        timeframe: "7-10 Years",
        description: "Create comprehensive platform connecting healthcare providers, patients, and technology innovators",
        milestones: [
          "Develop integrated platform",
          "Scale to global markets",
          "Partner with major institutions",
          "Achieve sustainable impact"
        ],
        status: "Vision",
        priority: "High"
      },
      {
        id: 9,
        title: "Establish Educational Foundation",
        timeframe: "10+ Years",
        description: "Create educational institution focused on healthcare technology and AI ethics",
        milestones: [
          "Secure funding and partnerships",
          "Develop curriculum",
          "Recruit world-class faculty",
          "Graduate first cohort"
        ],
        status: "Vision",
        priority: "Medium"
      }
    ]
  };

  const timeframes = [
    { id: 'shortTerm', name: 'Next 2 Years', icon: Target, count: roadmap.shortTerm.length },
    { id: 'midTerm', name: '3-5 Years', icon: TrendingUp, count: roadmap.midTerm.length },
    { id: 'longTerm', name: '5+ Years', icon: Rocket, count: roadmap.longTerm.length }
  ];

  const personalValues = [
    {
      title: "Innovation with Purpose",
      description: "Every technological advancement should serve to improve human health and well-being",
      icon: Lightbulb
    },
    {
      title: "Ethical AI Development",
      description: "Ensuring AI systems in healthcare are transparent, fair, and respect patient privacy",
      icon: Brain
    },
    {
      title: "Global Health Equity",
      description: "Working to make advanced healthcare technology accessible to all, regardless of geography or economic status",
      icon: Globe
    },
    {
      title: "Continuous Learning",
      description: "Staying at the forefront of technology while maintaining deep healthcare domain expertise",
      icon: Star
    },
    {
      title: "Collaborative Impact",
      description: "Building solutions through meaningful partnerships and knowledge sharing",
      icon: Users
    },
    {
      title: "Sustainable Innovation",
      description: "Creating solutions that are environmentally responsible and economically viable",
      icon: Heart
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'text-green-400 bg-green-500/20';
      case 'Planning': return 'text-blue-400 bg-blue-500/20';
      case 'Conceptual': return 'text-purple-400 bg-purple-500/20';
      case 'Considering': return 'text-yellow-400 bg-yellow-500/20';
      case 'Vision': return 'text-pink-400 bg-pink-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-400 bg-red-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'Low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 relative overflow-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-30 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        ← Back to Home
      </button>

      {/* Page content */}
      <div className="flex flex-col items-center justify-start min-h-screen px-8 py-20">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Future Vision & Goals
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Shaping the future of healthcare through technology innovation, ethical AI development, and global impact
          </p>
        </div>

        <div className="max-w-7xl w-full space-y-16">
          {/* Vision Areas */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-teal-400" />
              Vision Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visionAreas.map((area, index) => (
                <div
                  key={area.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative group hover:bg-white/15 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <BorderBeam
                    duration={15 + index * 2}
                    delay={index * 0.3}
                    colorFrom={area.borderColors.from}
                    colorTo={area.borderColors.to}
                    borderWidth={2}
                  />

                  <div className="mb-4">
                    <div 
                      className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${area.borderColors.from}, ${area.borderColors.to})`
                      }}
                    >
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="p-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-white mb-1">Impact Goal</h4>
                    <p className="text-teal-200 text-xs">{area.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Target className="w-8 h-8 text-cyan-400" />
              Strategic Roadmap
            </h2>

            {/* Timeframe Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe.id}
                  onClick={() => setSelectedTimeframe(timeframe.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedTimeframe === timeframe.id
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <timeframe.icon className="w-5 h-5" />
                  <span>{timeframe.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{timeframe.count}</span>
                </button>
              ))}
            </div>

            {/* Roadmap Items */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {roadmap[selectedTimeframe].map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <BorderBeam
                    duration={12 + index * 2}
                    delay={index * 0.2}
                    colorFrom="#14b8a6"
                    colorTo="#06b6d4"
                    borderWidth={2}
                  />

                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                        {item.priority} Priority
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.timeframe}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Milestones */}
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-3">Key Milestones</h4>
                    <div className="space-y-2">
                      {item.milestones.map((milestone, milestoneIndex) => (
                        <div key={milestoneIndex} className="flex items-center gap-2">
                          <Target className="w-3 h-3 text-teal-400 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Personal Values */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Heart className="w-8 h-8 text-pink-400" />
              Core Values & Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative group hover:bg-white/15 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <BorderBeam
                    duration={10 + index}
                    delay={index * 0.15}
                    colorFrom="#14b8a6"
                    colorTo="#06b6d4"
                    borderWidth={1}
                  />

                  <value.icon className="w-8 h-8 text-teal-400 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-200 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto relative">
            <BorderBeam
              duration={20}
              delay={1}
              colorFrom="#14b8a6"
              colorTo="#06b6d4"
              borderWidth={3}
            />
            
            <Rocket className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Building Tomorrow's Healthcare
            </h3>
            <p className="text-gray-300 mb-6">
              The future of healthcare lies at the intersection of technology, ethics, and human compassion. Join me on this journey to create meaningful change that improves lives worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={onBack}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Other Sections
              </button>
              <button
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                Connect & Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Future;

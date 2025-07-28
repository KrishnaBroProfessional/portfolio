import React, { useState } from 'react';
import { Rocket, Star, Target, TrendingUp, Lightbulb, Globe, Users, Calendar, Code, Brain, Zap, Cpu, Bot, GraduationCap } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';
import { TracingBeam } from './ui/tracing-beam';
import Footer from './Footer';

const Future = ({ onBack }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('shortTerm');

  const visionAreas = [
    {
      id: 1,
      title: "AI & Automation Innovation",
      icon: Brain,
      description: "Leading the development of cutting-edge AI solutions and intelligent automation systems that transform business operations",
      color: "from-purple-500 to-pink-500",
      borderColors: { from: '#a855f7', to: '#ec4899' },
      impact: "Democratize AI technology for businesses of all sizes"
    },
    {
      id: 2,
      title: "Next-Gen Technology Leadership",
      icon: Cpu,
      description: "Establishing expertise in emerging technologies like quantum computing, edge AI, and advanced cloud architectures",
      color: "from-blue-500 to-cyan-500",
      borderColors: { from: '#3b82f6', to: '#06b6d4' },
      impact: "Bridge the gap between cutting-edge research and practical implementation"
    },
    {
      id: 3,
      title: "Innovation & Mentorship Ecosystem",
      icon: Users,
      description: "Building communities of tech innovators through mentorship, knowledge sharing, and collaborative development",
      color: "from-green-500 to-emerald-500",
      borderColors: { from: '#22c55e', to: '#10b981' },
      impact: "Mentor 1000+ developers in AI and automation technologies"
    },
    {
      id: 4,
      title: "Sustainable Tech Solutions",
      icon: Zap,
      description: "Creating environmentally conscious and energy-efficient technology solutions that scale responsibly",
      color: "from-orange-500 to-red-500",
      borderColors: { from: '#f97316', to: '#ef4444' },
      impact: "Reduce technology carbon footprint through intelligent optimization"
    }
  ];

  const roadmap = {
    shortTerm: [
      {
        id: 1,
        title: "Master Advanced AI & ML Technologies",
        timeframe: "Next 6 Months",
        description: "Deep dive into cutting-edge AI technologies, large language models, and advanced machine learning frameworks",
        milestones: [
          "LLM Fine-tuning and Optimization",
          "Advanced MLOps and Model Deployment",
          "AI Ethics and Responsible AI Development",
          "Quantum Computing Fundamentals"
        ],
        status: "In Progress",
        priority: "High"
      },
      {
        id: 2,
        title: "Launch Innovation Lab & Mentorship Program",
        timeframe: "Next 12 Months",
        description: "Establish personal innovation lab and begin mentoring aspiring AI/ML engineers and tech innovators",
        milestones: [
          "Set up advanced development environment",
          "Launch mentorship program",
          "Create open-source AI tools",
          "Host tech innovation workshops"
        ],
        status: "Planning",
        priority: "Medium"
      },
      {
        id: 3,
        title: "Expand Leadership in AI & Automation",
        timeframe: "Next 18 Months",
        description: "Transition to senior technical leadership position focusing on AI strategy and automation initiatives",
        milestones: [
          "Lead AI/ML transformation projects",
          "Drive automation strategy",
          "Mentor technical teams",
          "Establish innovation best practices"
        ],
        status: "Planning",
        priority: "High"
      }
    ],
    midTerm: [
      {
        id: 4,
        title: "Found AI Innovation Startup",
        timeframe: "2-3 Years",
        description: "Launch innovative AI company focused on democratizing intelligent automation and advanced AI solutions",
        milestones: [
          "Develop revolutionary AI platform",
          "Secure venture funding",
          "Build world-class AI team",
          "Acquire enterprise customers"
        ],
        status: "Conceptual",
        priority: "High"
      },
      {
        id: 5,
        title: "Establish Global Tech Innovation Initiative",
        timeframe: "3-4 Years",
        description: "Create nonprofit organization to advance AI education and provide cutting-edge technology access globally",
        milestones: [
          "Partner with tech education platforms",
          "Develop scalable AI learning solutions",
          "Launch global mentorship network",
          "Measure technology adoption impact"
        ],
        status: "Conceptual",
        priority: "Medium"
      },
      {
        id: 6,
        title: "Complete Advanced AI Research Degree",
        timeframe: "3-4 Years",
        description: "Pursue PhD in AI/ML or Computer Science to deepen research capabilities and contribute to field advancement",
        milestones: [
          "Apply to top-tier programs",
          "Complete advanced coursework",
          "Conduct groundbreaking AI research",
          "Publish impactful research papers"
        ],
        status: "Considering",
        priority: "Medium"
      }
    ],
    longTerm: [
      {
        id: 7,
        title: "Transform Global AI Standards & Ethics",
        timeframe: "5-10 Years",
        description: "Lead international efforts to establish ethical AI standards and responsible automation practices worldwide",
        milestones: [
          "Join AI ethics committees",
          "Publish definitive AI guidelines",
          "Influence global AI policy",
          "Create AI certification programs"
        ],
        status: "Vision",
        priority: "High"
      },
      {
        id: 8,
        title: "Build Global Technology Innovation Ecosystem",
        timeframe: "7-10 Years",
        description: "Create comprehensive platform connecting technologists, innovators, and organizations for collaborative AI development",
        milestones: [
          "Develop integrated innovation platform",
          "Scale to global tech communities",
          "Partner with major tech institutions",
          "Achieve sustainable technology impact"
        ],
        status: "Vision",
        priority: "High"
      },
      {
        id: 9,
        title: "Establish AI & Innovation Educational Foundation",
        timeframe: "10+ Years",
        description: "Create educational institution focused on AI innovation, automation, and ethical technology development",
        milestones: [
          "Secure funding and partnerships",
          "Develop cutting-edge AI curriculum",
          "Recruit world-class tech faculty",
          "Graduate first cohort of AI innovators"
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
      description: "Every technological advancement should serve to solve real-world problems and improve human experiences",
      icon: Lightbulb
    },
    {
      title: "Ethical AI Development",
      description: "Ensuring AI systems are transparent, fair, and respect privacy while promoting beneficial outcomes for society",
      icon: Brain
    },
    {
      title: "Global Technology Access",
      description: "Working to make advanced AI and automation technologies accessible to innovators worldwide",
      icon: Globe
    },
    {
      title: "Continuous Learning & Growth",
      description: "Staying at the forefront of emerging technologies while maintaining expertise across multiple domains",
      icon: GraduationCap
    },
    {
      title: "Collaborative Innovation",
      description: "Building breakthrough solutions through meaningful partnerships, mentorship, and knowledge sharing",
      icon: Users
    },
    {
      title: "Sustainable Technology",
      description: "Creating solutions that are environmentally responsible, scalable, and economically viable",
      icon: Zap
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
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-30 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        ← Back to Home
      </button>

      {/* Tracing Beam Wrapper */}
      <TracingBeam>
        {/* Page content */}
        <div className="flex flex-col items-center justify-start min-h-screen px-8 pt-20">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Future Vision & Goals
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Shaping the future through AI innovation, cutting-edge technology, intelligent automation, and transformative mentorship
          </p>
        </div>

        <div className="max-w-7xl w-full space-y-16">
          {/* Vision Areas */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-indigo-400" />
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
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-white mb-1">Impact Goal</h4>
                    <p className="text-indigo-200 text-xs">{area.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Target className="w-8 h-8 text-purple-400" />
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
                      ? 'bg-indigo-600 text-white shadow-lg'
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
                    colorFrom="#6366f1"
                    colorTo="#a855f7"
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
                          <Target className="w-3 h-3 text-indigo-400 flex-shrink-0" />
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
              <Bot className="w-8 h-8 text-green-400" />
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
                    colorFrom="#6366f1"
                    colorTo="#8b5cf6"
                    borderWidth={1}
                  />

                  <value.icon className="w-8 h-8 text-indigo-400 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">
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
              colorFrom="#6366f1"
              colorTo="#8b5cf6"
              borderWidth={2}
            />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Innovate Together?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join me on this journey of technological innovation and transformation. Let's build the future together through cutting-edge solutions and meaningful mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Let's Collaborate
              </button>
              <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
        </div> {/* Closing max-w-7xl div */}
        </div> {/* Closing main content div */}
      </TracingBeam>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-30 animate-pulse"
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

      {/* Footer - Outside TracingBeam for full width */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Future;

import React, { useState } from 'react';
import { 
  Star, Target, Calendar, Zap, 
  Bot, GraduationCap, Cpu, 
  MessageCircle, ChevronLeft, ArrowRight 
} from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';
import { TracingBeam } from './ui/tracing-beam';
import { LineShadowText } from './magicui/line-shadow-text';
import { MacbookScroll } from './ui/macbook-scroll';
import { CoolMode } from './magicui/cool-mode';
import Footer from './Footer';

const Future = ({ onBack }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('short');

  // Vision areas focused on tech innovation
  const visionAreas = [
    {
      id: 1,
      title: "AI & Automation Innovation",
      description: "Leading breakthrough developments in artificial intelligence and intelligent automation systems that transform industries and enhance human capabilities.",
      icon: Bot,
      borderColors: { from: "#6366f1", to: "#8b5cf6" }
    },
    {
      id: 2,
      title: "Next-Gen Technology Leadership",
      description: "Pioneering cutting-edge technology solutions and frameworks that set new industry standards and drive digital transformation across sectors.",
      icon: Cpu,
      borderColors: { from: "#8b5cf6", to: "#d946ef" }
    },
    {
      id: 3,
      title: "Innovation & Mentorship Ecosystem",
      description: "Building comprehensive mentorship programs and innovation hubs that nurture the next generation of tech leaders and entrepreneurs.",
      icon: GraduationCap,
      borderColors: { from: "#d946ef", to: "#ec4899" }
    },
    {
      id: 4,
      title: "Sustainable Tech Solutions",
      description: "Developing environmentally conscious technology solutions that drive progress while maintaining ecological responsibility and sustainability.",
      icon: Zap,
      borderColors: { from: "#ec4899", to: "#6366f1" }
    }
  ];

  // Career-focused roadmap with aspiring roles
  const roadmap = {
    short: [
      {
        id: 1,
        title: "Senior Project Engineer Role Preparation",
        description: "Develop advanced project management and technical leadership skills to transition into a Senior Project Engineer position within the next year.",
        timeframe: "2025-2026",
        status: "In Progress",
        priority: "High",
        milestones: [
          "Complete PMP/Agile certification",
          "Lead 2-3 complex cross-functional projects",
          "Build stakeholder management expertise",
          "Demonstrate cost optimization impact"
        ]
      },
      {
        id: 2,
        title: "Technical Leadership Excellence",
        description: "Strengthen technical leadership capabilities and expand expertise in system design and architecture fundamentals.",
        timeframe: "Q3-Q4 2025",
        status: "Active",
        priority: "High",
        milestones: [
          "Complete system design courses",
          "Mentor junior engineers",
          "Lead technical architecture decisions",
          "Publish technical blog posts"
        ]
      }
    ],
    medium: [
      {
        id: 3,
        title: "Solution Architect Transition",
        description: "Advance to Solution Architect role by mastering enterprise architecture, cloud solutions, and strategic technology planning.",
        timeframe: "2026-2029",
        status: "Planning",
        priority: "High",
        milestones: [
          "Earn AWS/Azure Solution Architect certification",
          "Design end-to-end enterprise solutions",
          "Build cross-domain architecture expertise",
          "Establish thought leadership in industry"
        ]
      },
      {
        id: 4,
        title: "Innovation & Architecture Mastery",
        description: "Develop deep expertise in emerging technologies and establish reputation as a strategic technology advisor and innovation catalyst.",
        timeframe: "2027-2029",
        status: "Conceptual",
        priority: "Medium",
        milestones: [
          "Lead digital transformation initiatives",
          "Speak at industry conferences",
          "Build strategic vendor partnerships",
          "Mentor solution architect teams"
        ]
      }
    ],
    long: [
      {
        id: 5,
        title: "AI/Automation Leadership Role",
        description: "Transition to executive leadership in AI and automation, driving organizational transformation and industry innovation.",
        timeframe: "2030+",
        status: "Vision",
        priority: "High",
        milestones: [
          "Lead AI/automation center of excellence",
          "Drive enterprise-wide AI strategy",
          "Build innovation partnerships",
          "Establish industry thought leadership"
        ]
      },
      {
        id: 6,
        title: "Technology Visionary & Influencer",
        description: "Become a recognized technology visionary, shaping the future of AI and automation across industries and mentoring the next generation.",
        timeframe: "2032+",
        status: "Vision",
        priority: "Medium",
        milestones: [
          "Establish innovation think tank",
          "Advisory roles in tech startups",
          "Global speaking and consulting",
          "Technology policy influence"
        ]
      }
    ]
  };

  // Personal values focused on tech innovation
  const personalValues = [
    {
      title: "Innovation Excellence",
      description: "Pursuing breakthrough innovations that push the boundaries of what's possible in technology and automation.",
      icon: Zap,
      keywords: ["Innovation", "Excellence", "Breakthrough"]
    },
    {
      title: "Continuous Learning",
      description: "Maintaining a growth mindset and staying at the forefront of emerging technologies and industry trends.",
      icon: GraduationCap,
      keywords: ["Learning", "Growth", "Adaptation"]
    },
    {
      title: "Collaborative Impact",
      description: "Building meaningful partnerships and fostering collaboration to amplify technological advancement and innovation.",
      icon: Bot,
      keywords: ["Collaboration", "Impact", "Partnership"]
    },
    {
      title: "Ethical Technology",
      description: "Ensuring that technological advancement is guided by strong ethical principles and serves humanity's best interests.",
      icon: Cpu,
      keywords: ["Ethics", "Responsibility", "Humanity"]
    }
  ];

  const timeframes = [
    { id: 'short', name: 'Next 1-2 Years', icon: Zap, count: roadmap.short.length },
    { id: 'medium', name: '2-4 Years', icon: Target, count: roadmap.medium.length },
    { id: 'long', name: '5+ Years', icon: Star, count: roadmap.long.length }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'In Progress': 'bg-green-500/20 text-green-300',
      'Active': 'bg-blue-500/20 text-blue-300',
      'Planning': 'bg-yellow-500/20 text-yellow-300',
      'Research': 'bg-orange-500/20 text-orange-300',
      'Conceptual': 'bg-purple-500/20 text-purple-300',
      'Vision': 'bg-indigo-500/20 text-indigo-300'
    };
    return colors[status] || 'bg-gray-500/20 text-gray-300';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'High': 'bg-red-500/20 text-red-300',
      'Medium': 'bg-orange-500/20 text-orange-300',
      'Low': 'bg-green-500/20 text-green-300'
    };
    return colors[priority] || 'bg-gray-500/20 text-gray-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-slate-900"></div>
      
      {/* Back button */}
      <CoolMode>
        <button
          onClick={onBack}
          className="fixed top-8 left-8 z-30 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          ← Back to Home
        </button>
      </CoolMode>

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
                  <CoolMode key={timeframe.id}>
                    <button
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
                  </CoolMode>
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

            {/* What's Next */}
            <section className="mt-24">
              <div className="text-center mb-2">
                <h2 
                  className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none whitespace-nowrap inline-block"
                  style={{
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  <LineShadowText shadowColor="#a855f7">
                    What's Next
                  </LineShadowText>
                </h2>
              </div>
              
              {/* MacBook with Meme */}
              <div className="relative">
                <MacbookScroll
                  src="https://media.licdn.com/dms/image/v2/D5622AQHpTnxbA2A1-g/feedshare-shrink_800/B56Zf9pm76G0As-/0/1752307234476?e=2147483647&v=beta&t=NeRH2cLjRE70wOphkO6D3zVMPxffmf9D9cY78YQYkCU"
                  showGradient={true}
                />
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="mt-32 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto relative">
                <BorderBeam
                  duration={20}
                  delay={1}
                  colorFrom="#6366f1"
                  colorTo="#8b5cf6"
                  borderWidth={2}
                />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Innovate Together?</h3>
                {/* <p className="text-gray-300 mb-6 leading-relaxed">
                  Join me on this journey of technological innovation and transformation. Let's build the future together through cutting-edge solutions and meaningful mentorship.
                </p> */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CoolMode>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Let's Collaborate
                    </button>
                  </CoolMode>
                  <CoolMode>
                    <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Start a Conversation
                    </button>
                  </CoolMode>
                </div>
              </div>
            </section>
          </div>
        </div>
      </TracingBeam>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite alternate, pulse ${3 + Math.random() * 2}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>

      {/* Custom CSS Animations */}
      <style>{`
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(-25px) translateX(5px);
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

import React, { useState, useEffect } from 'react';
import { Clock, Activity, Code, BookOpen, Target, TrendingUp, Calendar, Briefcase, Coffee, Building2, Award, Star } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';
import { TracingBeam } from './ui/tracing-beam';
import { ScratchToReveal } from './magicui/scratch-to-reveal';
import { ShineBorder } from './magicui/shine-border';
import { SparklesText } from './magicui/sparkles-text';
import Footer from './Footer';
import { CoolMode } from './magicui/cool-mode';

const Now = ({ onBack }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentProjects = [
    {
      id: 1,
      title: "PACT Predictor",
      client: "UnitedHealth Group",
      status: "Completed",
      progress: 100,
      description: "Advanced predictive analytics system for PACT (Patient Care Team) optimization, providing comprehensive insights for healthcare delivery optimization.",
      technologies: ["Python", "Machine Learning", "TensorFlow", "FastAPI", "React"],
      deadline: "2025-12-31",
      priority: "High",
      bgColor: "from-purple-500 to-pink-500",
      borderColors: { from: '#a855f7', to: '#ec4899' }
    },
    {
      id: 2,
      title: "PACT Analyzer",
      client: "UnitedHealth Group",
      status: "Active Development",
      progress: 90,
      description: "Comprehensive analysis platform for PACT data, providing real-time insights and actionable recommendations for healthcare team performance.",
      technologies: ["Python", "Data Analytics", "ML", "PostgreSQL", "React"],
      deadline: "2025-11-30",
      priority: "High",
      bgColor: "from-blue-500 to-purple-500",
      borderColors: { from: '#3b82f6', to: '#a855f7' }
    },
    {
      id: 3,
      title: "VBF Impact Assessment",
      client: "UnitedHealth Group",
      status: "In Development",
      progress: 50,
      description: "Value-Based Framework impact assessment tool for measuring and analyzing the effectiveness of healthcare initiatives and interventions.",
      technologies: ["Python", "Analytics", "FastAPI", "React", "PostgreSQL"],
      deadline: "2025-03-31",
      priority: "Medium",
      bgColor: "from-green-500 to-blue-500",
      borderColors: { from: '#22c55e', to: '#3b82f6' }
    },
    {
      id: 4,
      title: "Metrics Auditor",
      client: "UnitedHealth Group",
      status: "Planning",
      progress: 10,
      description: "Automated metrics auditing system for healthcare data quality assurance, compliance monitoring, and performance validation.",
      technologies: ["Python", "Data Validation", "FastAPI", "React", "MongoDB"],
      deadline: "2025-06-30",
      priority: "Low",
      bgColor: "from-orange-500 to-red-500",
      borderColors: { from: '#f97316', to: '#ef4444' }
    },
    {
      id: 5,
      title: "Security Vulnerability Remediation",
      client: "UnitedHealth Group",
      status: "Completed",
      progress: 100,
      description: "Systematically addressed and resolved 200+ security vulnerabilities across multiple healthcare applications, achieving 90% security posture improvement.",
      technologies: ["SonarQube", "OWASP", "Static Analysis", "Java", "Python"],
      deadline: "2025-08-31",
      priority: "Critical",
      bgColor: "from-red-500 to-pink-500",
      borderColors: { from: '#ef4444', to: '#ec4899' }
    },
    {
      id: 6,
      title: "NewRelic AMS Monitoring Setup",
      client: "UnitedHealth Group",
      status: "Operational",
      progress: 100,
      description: "Set up comprehensive monitoring dashboards for PROD, Stage, and QA environments using NewRelic AMS, reducing incident response time by 60%.",
      technologies: ["NewRelic", "Terraform", "AWS", "Kubernetes", "Grafana"],
      deadline: "2025-07-31",
      priority: "High",
      bgColor: "from-orange-500 to-red-500",
      borderColors: { from: '#f97316', to: '#ef4444' }
    },
    {
      id: 7,
      title: "E2E Checkout Tool Revision",
      client: "UnitedHealth Group",
      status: "Completed",
      progress: 100,
      description: "Completely revised and modernized the end-to-end checkout tool achieving 50% improvement in completion rate and 40% reduction in processing time.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      deadline: "2025-08-20",
      priority: "Medium",
      bgColor: "from-purple-500 to-pink-500",
      borderColors: { from: '#a855f7', to: '#ec4899' }
    }
  ];

  const currentLearning = [
    {
      id: 1,
      topic: "Golang Gin Framework",
      platform: "Self-paced Learning",
      progress: 25,
      description: "Learning modern Go web framework for building high-performance microservices and APIs",
      estimatedCompletion: "2025-08-31",
      icon: Code,
      color: "text-blue-400"
    },
    {
      id: 2,
      topic: "STEP Up Program",
      platform: "UnitedHealth Group",
      progress: 0,
      description: "Strategic Technology Enhancement Program for advanced leadership and technical skills development",
      estimatedCompletion: "2025-09-30",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      id: 3,
      topic: "Salesforce AI Associate Certification",
      platform: "Salesforce Trailhead",
      progress: 15,
      description: "Comprehensive certification program focusing on AI implementation and best practices within Salesforce ecosystem",
      estimatedCompletion: "2025-09-30",
      icon: Activity,
      color: "text-purple-400"
    }
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'text-red-400 bg-red-500/20';
      case 'High': return 'text-orange-400 bg-orange-500/20';
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
      <CoolMode>
        <button
          onClick={onBack}
          className="fixed top-8 left-8 z-30 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          ← Back to Home
        </button>
      </CoolMode>

      <TracingBeam className="px-6">
        {/* Page content */}
        <div className="flex flex-col items-center justify-start min-h-screen px-8 pt-20">
        {/* Page title with live time */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            What I'm Doing Now
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Real-time view of my current projects, learning goals, and daily activities
          </p>
          
          {/* Live Clock */}
          <div className="flex items-center justify-center gap-4 text-lg text-gray-300">
            <Clock className="w-6 h-6 text-indigo-400" />
            <span className="font-mono">{formatTime(currentTime)}</span>
            <span>•</span>
            <span>{formatDate(currentTime)}</span>
          </div>
        </div>

        <div className="max-w-7xl w-full space-y-16">
          {/* Current Projects */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-indigo-400" />
              Active Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <BorderBeam
                    duration={15 + index * 2}
                    delay={index * 0.3}
                    colorFrom={project.borderColors.from}
                    colorTo={project.borderColors.to}
                    borderWidth={2}
                  />

                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                        {project.priority} Priority
                      </span>
                      <span className="text-xs text-gray-400">{project.status}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.client}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${project.progress}%`,
                          background: `linear-gradient(to right, ${project.borderColors.from}, ${project.borderColors.to})`
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>Deadline: {new Date(project.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Current Learning */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-green-400" />
              Learning Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentLearning.map((learning, index) => (
                <div
                  key={learning.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <BorderBeam
                    duration={12 + index * 2}
                    delay={index * 0.2}
                    colorFrom="#22c55e"
                    colorTo="#10b981"
                    borderWidth={2}
                  />

                  <div className="mb-4">
                    <learning.icon className={`w-12 h-12 ${learning.color} mb-3`} />
                    <h3 className="text-lg font-bold text-white mb-2">{learning.topic}</h3>
                    <p className="text-gray-400 text-sm">{learning.platform}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Progress</span>
                      <span>{learning.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${learning.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {learning.description}
                  </p>

                  <div className="text-xs text-gray-400">
                    <span>Target completion: {new Date(learning.estimatedCompletion).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Current Account Role */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-blue-400" />
              Current Account Role
            </h2>
            
            <div className="w-full max-w-6xl mx-auto">
              <div className="relative w-full rounded-xl">
                <div className="relative w-full h-[400px] rounded-xl bg-gray-900 overflow-hidden">
                  {/* Hidden content */}
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
                    <div className="text-center">
                      <SparklesText
                        className="text-6xl md:text-8xl font-black text-white"
                        colors={{ first: "#fbbf24", second: "#f97316" }}
                        sparklesCount={30}
                      >
                        Below B1
                      </SparklesText>
                    </div>
                  </div>
                  
                  {/* Scratch overlay */}
                  <ScratchToReveal
                    width={1200}
                    height={400}
                    minScratchPercentage={95}
                    className="absolute inset-0 z-10"
                    gradientColors={["#4b5563", "#6b7280", "#9ca3af"]}
                  >
                    <div className="opacity-0"></div>
                  </ScratchToReveal>
                </div>
                <ShineBorder
                  className="absolute inset-0 pointer-events-none rounded-xl"
                  shineColor={["#a855f7", "#3b82f6", "#06b6d4"]}
                  borderWidth={3}
                  duration={14}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Offers from Other Accounts */}
        <section className="max-w-7xl w-full mt-24">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Award className="w-8 h-8 text-green-400" />
            Offers from Other Accounts
          </h2>
          
          {/* Continuous Marquee */}
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <BorderBeam
              duration={20}
              delay={0.5}
              colorFrom="#22c55e"
              colorTo="#10b981"
              borderWidth={2}
            />
            
            <div className="marquee-container">
              <div className="marquee-content">
                {/* First set */}
                <div className="flex items-center space-x-16">
                  <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                    <img 
                      src="https://northwestfatigueclinic.co.uk/wp-content/uploads/2014/09/aviva-logo.gif" 
                      alt="Aviva Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                    <img 
                      src="https://wp.logos-download.com/wp-content/uploads/2022/11/Lloyds_Banking_Group_Logo.png" 
                      alt="Lloyds Banking Group Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center space-x-16">
                  <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                    <img 
                      src="https://northwestfatigueclinic.co.uk/wp-content/uploads/2014/09/aviva-logo.gif" 
                      alt="Aviva Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                    <img 
                      src="https://wp.logos-download.com/wp-content/uploads/2022/11/Lloyds_Banking_Group_Logo.png" 
                      alt="Lloyds Banking Group Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto relative">
            <BorderBeam
              duration={20}
              delay={1}
              colorFrom="#6366f1"
              colorTo="#a855f7"
              borderWidth={3}
            />
            
            <Coffee className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Moving Forward
            </h3>
            <p className="text-gray-300 mb-6">
               Every project milestone, learning achievement, and career opportunity reflects my commitment to driving innovation in technology .
            </p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Other Sections
            </button>
          </div>
        </div>
      </div>

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
        
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        
        .marquee-content {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
        
        .marquee-content > div {
          margin-right: 8rem;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      </TracingBeam>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Now;

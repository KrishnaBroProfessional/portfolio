import React, { useState, useEffect } from 'react';
import { Clock, Activity, Code, BookOpen, Users, Target, TrendingUp, Calendar, Briefcase, Coffee } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';

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
      title: "PillBottle Scanner AI",
      client: "UnitedHealth Group",
      status: "In Production",
      progress: 95,
      description: "AI-powered vision tool for scanning medication bottle labels and providing comprehensive medication information with 95% accuracy in label recognition.",
      technologies: ["Python", "OpenCV", "TensorFlow", "FastAPI", "React"],
      teamSize: 5,
      deadline: "2024-12-31",
      priority: "High",
      bgColor: "from-purple-500 to-pink-500",
      borderColors: { from: '#a855f7', to: '#ec4899' }
    },
    {
      id: 2,
      title: "Telesales Agent Chatbot",
      client: "UnitedHealth Group",
      status: "Active Development",
      progress: 85,
      description: "Advanced AI chatbot with RAG capabilities, multimodal support, multi SearchIndex, and comprehensive guardrails for telesales operations.",
      technologies: ["Python", "LangChain", "RAG", "Vector DB", "FastAPI", "React"],
      teamSize: 8,
      deadline: "2024-11-30",
      priority: "Critical",
      bgColor: "from-blue-500 to-purple-500",
      borderColors: { from: '#3b82f6', to: '#a855f7' }
    },
    {
      id: 3,
      title: "Guardians Chatbot 3.0",
      client: "UnitedHealth Group",
      status: "Deployed",
      progress: 100,
      description: "Enterprise AI chatbot platform serving Engineering, Project Owners, Business, OPS, and Release teams with enhanced collaboration features.",
      technologies: ["Python", "LLM", "Microservices", "Kubernetes", "React"],
      teamSize: 12,
      deadline: "2024-09-30",
      priority: "High",
      bgColor: "from-green-500 to-blue-500",
      borderColors: { from: '#22c55e', to: '#3b82f6' }
    },
    {
      id: 4,
      title: "Security Vulnerability Remediation",
      client: "UnitedHealth Group",
      status: "Completed",
      progress: 100,
      description: "Systematically addressed and resolved 200+ security vulnerabilities across multiple healthcare applications, achieving 90% security posture improvement.",
      technologies: ["SonarQube", "OWASP", "Static Analysis", "Java", "Python"],
      teamSize: 6,
      deadline: "2024-08-31",
      priority: "Critical",
      bgColor: "from-red-500 to-pink-500",
      borderColors: { from: '#ef4444', to: '#ec4899' }
    },
    {
      id: 5,
      title: "NewRelic AMS Monitoring Setup",
      client: "UnitedHealth Group",
      status: "Operational",
      progress: 100,
      description: "Set up comprehensive monitoring dashboards for PROD, Stage, and QA environments using NewRelic AMS, reducing incident response time by 60%.",
      technologies: ["NewRelic", "Terraform", "AWS", "Kubernetes", "Grafana"],
      teamSize: 4,
      deadline: "2024-07-31",
      priority: "High",
      bgColor: "from-orange-500 to-red-500",
      borderColors: { from: '#f97316', to: '#ef4444' }
    },
    {
      id: 6,
      title: "E2E Checkout Tool Revision",
      client: "UnitedHealth Group",
      status: "Completed",
      progress: 100,
      description: "Completely revised and modernized the end-to-end checkout tool achieving 50% improvement in completion rate and 40% reduction in processing time.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      teamSize: 6,
      deadline: "2024-08-20",
      priority: "Medium",
      bgColor: "from-purple-500 to-pink-500",
      borderColors: { from: '#a855f7', to: '#ec4899' }
    }
  ];

  const currentLearning = [
    {
      id: 1,
      topic: "Advanced Large Language Models",
      platform: "Stanford CS224N",
      progress: 60,
      description: "Deep dive into transformer architectures and their applications in healthcare NLP",
      estimatedCompletion: "2024-05-30",
      icon: BookOpen,
      color: "text-blue-400"
    },
    {
      id: 2,
      topic: "Kubernetes Advanced Orchestration",
      platform: "CNCF Certification",
      progress: 80,
      description: "Mastering advanced container orchestration for healthcare microservices",
      estimatedCompletion: "2024-04-15",
      icon: Code,
      color: "text-green-400"
    },
    {
      id: 3,
      topic: "Healthcare Data Interoperability",
      platform: "HL7 FHIR Certification",
      progress: 45,
      description: "Understanding modern healthcare data exchange standards and implementation",
      estimatedCompletion: "2024-06-15",
      icon: Activity,
      color: "text-purple-400"
    }
  ];

  const weeklySchedule = [
    {
      day: "Monday",
      activities: [
        { time: "9:00 AM", activity: "Team Standup", type: "meeting" },
        { time: "10:00 AM", activity: "AI Platform Development", type: "coding" },
        { time: "2:00 PM", activity: "Architecture Review", type: "meeting" },
        { time: "4:00 PM", activity: "Code Review & Mentoring", type: "collaboration" }
      ]
    },
    {
      day: "Tuesday",
      activities: [
        { time: "9:00 AM", activity: "Sprint Planning", type: "meeting" },
        { time: "11:00 AM", activity: "ML Model Training", type: "coding" },
        { time: "3:00 PM", activity: "Learning: LLM Course", type: "learning" },
        { time: "5:00 PM", activity: "Technical Documentation", type: "documentation" }
      ]
    },
    {
      day: "Wednesday",
      activities: [
        { time: "9:00 AM", activity: "Client Demo Preparation", type: "preparation" },
        { time: "11:00 AM", activity: "Telehealth Testing", type: "testing" },
        { time: "2:00 PM", activity: "Team 1:1 Meetings", type: "meeting" },
        { time: "4:00 PM", activity: "Infrastructure Optimization", type: "coding" }
      ]
    }
  ];

  const currentGoals = [
    {
      id: 1,
      title: "Complete AI Platform MVP",
      deadline: "2024-06-30",
      progress: 75,
      description: "Deliver the first version of our next-generation AI healthcare platform",
      priority: "High"
    },
    {
      id: 2,
      title: "Obtain Kubernetes Expert Certification",
      deadline: "2024-04-15",
      progress: 80,
      description: "Achieve advanced Kubernetes certification for better container orchestration",
      priority: "Medium"
    },
    {
      id: 3,
      title: "Publish Healthcare AI Research Paper",
      deadline: "2024-09-30",
      progress: 30,
      description: "Co-author research paper on AI applications in clinical decision support",
      priority: "Medium"
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

  const getActivityIcon = (type) => {
    switch (type) {
      case 'meeting': return Users;
      case 'coding': return Code;
      case 'learning': return BookOpen;
      case 'collaboration': return Users;
      case 'testing': return Activity;
      case 'documentation': return BookOpen;
      case 'preparation': return Target;
      default: return Activity;
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

      {/* Page content */}
      <div className="flex flex-col items-center justify-start min-h-screen px-8 py-20">
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
                      <Users className="w-3 h-3" />
                      <span>Team: {project.teamSize} members</span>
                    </div>
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

          {/* Current Goals */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Target className="w-8 h-8 text-purple-400" />
              Current Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentGoals.map((goal, index) => (
                <div
                  key={goal.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <BorderBeam
                    duration={14 + index * 2}
                    delay={index * 0.25}
                    colorFrom="#a855f7"
                    colorTo="#ec4899"
                    borderWidth={2}
                  />

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                        {goal.priority}
                      </span>
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{goal.title}</h3>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {goal.description}
                  </p>

                  <div className="text-xs text-gray-400">
                    <span>Deadline: {new Date(goal.deadline).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Weekly Schedule Preview */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-blue-400" />
              This Week's Focus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {weeklySchedule.map((day, dayIndex) => (
                <div
                  key={day.day}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative"
                  style={{
                    animationDelay: `${dayIndex * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <BorderBeam
                    duration={16 + dayIndex * 2}
                    delay={dayIndex * 0.2}
                    colorFrom="#3b82f6"
                    colorTo="#06b6d4"
                    borderWidth={2}
                  />

                  <h3 className="text-lg font-bold text-white mb-4">{day.day}</h3>
                  
                  <div className="space-y-3">
                    {day.activities.map((activity, actIndex) => {
                      const IconComponent = getActivityIcon(activity.type);
                      return (
                        <div key={actIndex} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-gray-300">{activity.activity}</div>
                            <div className="text-xs text-gray-500">{activity.time}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
              colorTo="#a855f7"
              borderWidth={3}
            />
            
            <Coffee className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Moving Forward
            </h3>
            <p className="text-gray-300 mb-6">
              This page reflects my current focus and ongoing commitments. Every project, learning goal, and daily activity is aligned with my mission to advance healthcare through technology.
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
      `}</style>
    </div>
  );
};

export default Now;

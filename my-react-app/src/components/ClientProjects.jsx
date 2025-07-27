import React, { useState } from 'react';
import { Building2, Star, Calendar, ArrowRight, ExternalLink, Code, Database, Cloud } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';
import Footer from './Footer';

const ClientProjects = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "ASK ISAAC Chatbot",
      client: "UnitedHealth Group",
      domain: "AI Conversational Technology",
      duration: "2024 - Present",
      role: "AI Engineer",
      technologies: ["Azure OpenAI", "Python", "Flask", "React", "Persona AI", "NLP"],
      description: "Persona-based AI chatbot developed on Azure OpenAI and Python for intelligent healthcare conversations and user assistance.",
      achievements: [
        "Persona-based conversational AI implementation",
        "Azure OpenAI integration for advanced responses",
        "Healthcare-specific knowledge base",
        "Improved user engagement by 85%"
      ],
      impact: "Enhanced patient interaction and support through AI-powered conversations",
      bgColor: "from-blue-500 to-cyan-500",
      borderColors: { from: '#3b82f6', to: '#06b6d4' }
    },
    {
      id: 2,
      title: "PillBottle Scanner",
      client: "UnitedHealth Group",
      domain: "AI Vision Technology",
      duration: "2024 - Present",
      role: "AI/ML Engineer",
      technologies: ["Python", "OpenCV", "TensorFlow", "FastAPI", "React", "Docker"],
      description: "Developed AI-powered vision tool for scanning medication bottle labels and providing comprehensive medication information to users.",
      achievements: [
        "95% accuracy in label recognition",
        "Real-time medication information retrieval",
        "Integrated with pharmacy databases",
        "Improved medication safety compliance"
      ],
      impact: "Enhanced medication safety for thousands of patients",
      bgColor: "from-purple-500 to-pink-500",
      borderColors: { from: '#a855f7', to: '#ec4899' }
    },
    {
      id: 3,
      title: "Telesales Agent Chatbot",
      client: "UnitedHealth Group",
      domain: "AI Conversational Technology",
      duration: "2024 - Present",
      role: "Senior AI Engineer",
      technologies: ["Python", "LangChain", "RAG", "Vector DB", "FastAPI", "React", "Azure"],
      description: "Built advanced AI chatbot with RAG capabilities, multimodal support, multi SearchIndex, and comprehensive guardrails for telesales operations.",
      achievements: [
        "Implemented RAG for contextual responses",
        "Multimodal capabilities (text, voice, image)",
        "Multi SearchIndex for enhanced information retrieval",
        "Comprehensive guardrails for safe interactions"
      ],
      impact: "Revolutionized telesales operations with AI-powered assistance",
      bgColor: "from-blue-500 to-purple-500",
      borderColors: { from: '#3b82f6', to: '#a855f7' }
    },
    {
      id: 4,
      title: "NewRelic AMS Monitoring Dashboards",
      client: "UnitedHealth Group",
      domain: "Infrastructure Monitoring",
      duration: "2024",
      role: "DevOps Engineer",
      technologies: ["NewRelic", "Terraform", "AWS", "Kubernetes", "Grafana", "Prometheus"],
      description: "Set up comprehensive monitoring dashboards for PROD, Stage, and QA environments using NewRelic AMS.",
      achievements: [
        "100% environment coverage (PROD, Stage, QA)",
        "Real-time performance monitoring",
        "Automated alerting systems",
        "Reduced incident response time by 60%"
      ],
      impact: "Enhanced system reliability and operational visibility",
      bgColor: "from-orange-500 to-red-500",
      borderColors: { from: '#f97316', to: '#ef4444' }
    },
    {
      id: 5,
      title: "Guardians Chatbot 3.0",
      client: "UnitedHealth Group",
      domain: "Enterprise AI Platform",
      duration: "2024 - Present",
      role: "Technical Lead",
      technologies: ["Python", "LLM", "Microservices", "Kubernetes", "React", "PostgreSQL"],
      description: "Deployed comprehensive AI chatbot platform serving multiple stakeholder teams including Engineering, Project Owners, Business, OPS, and Release teams.",
      achievements: [
        "Multi-stakeholder deployment success",
        "Integrated with enterprise workflows",
        "Real-time collaboration features",
        "Enhanced team productivity by 40%"
      ],
      impact: "Streamlined operations across multiple business units",
      bgColor: "from-green-500 to-blue-500",
      borderColors: { from: '#22c55e', to: '#3b82f6' }
    },
    {
      id: 6,
      title: "Ticket's Microservice Application",
      client: "UnitedHealth Group",
      domain: "AI-Powered Service Management",
      duration: "2024 - Present",
      role: "Senior Software Engineer",
      technologies: ["Java", "Spring Boot", "AI/ML", "Microservices", "Elasticsearch", "React"],
      description: "AI-based application designed to query similar incident and problem tickets for enhanced service management and resolution.",
      achievements: [
        "AI-powered ticket similarity detection",
        "Microservices architecture implementation",
        "Advanced search and query capabilities",
        "Reduced ticket resolution time by 50%"
      ],
      impact: "Improved incident management efficiency and faster problem resolution",
      bgColor: "from-teal-500 to-green-500",
      borderColors: { from: '#14b8a6', to: '#22c55e' }
    },
    {
      id: 7,
      title: "AI Alert Processing Dashboard",
      client: "UnitedHealth Group",
      domain: "Unified AI Monitoring",
      duration: "2024 - Present",
      role: "AI/ML Lead",
      technologies: ["Python", "AI/ML", "Dynatrace", "Splunk", "Glassbox", "Zabbix", "React", "Flask"],
      description: "Unified AI monitoring dashboard that integrates with all available monitoring tools, filters alerts, and provides insights, RCA, and resolution steps.",
      achievements: [
        "Integration with multiple monitoring tools (Dynatrace, Splunk, Glassbox, Zabbix)",
        "AI-powered alert filtering and prioritization",
        "Automated RCA (Root Cause Analysis)",
        "Intelligent resolution step recommendations"
      ],
      impact: "Centralized monitoring with AI-driven insights for faster incident resolution",
      bgColor: "from-purple-500 to-indigo-500",
      borderColors: { from: '#a855f7', to: '#6366f1' }
    },
    {
      id: 8,
      title: "Anomaly Detector",
      client: "UnitedHealth Group",
      domain: "ML-Based Monitoring",
      duration: "2024 - Present",
      role: "ML Engineer",
      technologies: ["Python", "Machine Learning", "TensorFlow", "Scikit-learn", "Time Series Analysis", "FastAPI"],
      description: "Comprehensive ML-based tool to detect anomalies in various metrics such as enrollment counts, user traffic, resource utilization, and more.",
      achievements: [
        "Multi-metric anomaly detection (enrollment, traffic, resources)",
        "Advanced machine learning algorithms",
        "Real-time anomaly alerting",
        "Predictive analytics capabilities"
      ],
      impact: "Proactive identification of system anomalies preventing potential issues",
      bgColor: "from-red-500 to-pink-500",
      borderColors: { from: '#ef4444', to: '#ec4899' }
    },
    {
      id: 9,
      title: "Report Email Automation",
      client: "UnitedHealth Group",
      domain: "Automation & Reporting",
      duration: "2024",
      role: "Automation Engineer",
      technologies: ["Python", "Email Automation", "Cron Jobs", "Report Generation", "SMTP"],
      description: "Automation system that generates daily reports and distributes them across distribution lists for operational transparency.",
      achievements: [
        "Automated daily report generation",
        "Multi-format report support",
        "Distribution list management",
        "Reduced manual reporting effort by 90%"
      ],
      impact: "Streamlined reporting process with automated daily insights distribution",
      bgColor: "from-yellow-500 to-orange-500",
      borderColors: { from: '#eab308', to: '#f97316' }
    },
    {
      id: 10,
      title: "Automated User Flow Testing Tool",
      client: "UnitedHealth Group",
      domain: "End-to-End Testing Automation",
      duration: "2024 - Present",
      role: "Test Automation Lead",
      technologies: ["Playwright", "JavaScript", "React", "Dashboard", "CI/CD", "Automated Testing"],
      description: "Comprehensive End-to-End testing tool based on Playwright that runs twice daily with beautiful dashboard, featuring trends, history tracing, error detection, and manual checkout substitution.",
      achievements: [
        "End-to-End testing automation with Playwright",
        "Twice-daily automated test execution",
        "Comprehensive dashboard with trends and history",
        "Flow error tracing and JS error catching",
        "Manual checkout process automation"
      ],
      impact: "Enhanced software quality with automated testing and reduced manual testing overhead",
      bgColor: "from-indigo-500 to-blue-500",
      borderColors: { from: '#6366f1', to: '#3b82f6' }
    },
    {
      id: 11,
      title: "AEP Dashboard",
      client: "UnitedHealth Group",
      domain: "Metrics & Monitoring Integration",
      duration: "2024",
      role: "Dashboard Developer",
      technologies: ["React", "Dashboard", "API Integration", "Monitoring Tools", "Data Visualization"],
      description: "Comprehensive dashboard containing all metrics integrated with several automated monitoring tools for unified operational visibility.",
      achievements: [
        "Unified metrics dashboard",
        "Integration with multiple monitoring tools",
        "Real-time data visualization",
        "Centralized operational insights"
      ],
      impact: "Consolidated monitoring with single-pane-of-glass visibility for operations teams",
      bgColor: "from-cyan-500 to-teal-500",
      borderColors: { from: '#06b6d4', to: '#14b8a6' }
    },
    {
      id: 12,
      title: "VBF Checkout Tool",
      client: "UnitedHealth Group",
      domain: "API Testing Automation",
      duration: "2024",
      role: "API Test Engineer",
      technologies: ["Newman", "Postman", "API Testing", "Automation", "JavaScript"],
      description: "Automated tool based on Newman library designed to test API collections for validation and quality assurance.",
      achievements: [
        "Automated API collection testing",
        "Newman library integration",
        "Comprehensive API validation",
        "Reduced manual API testing by 80%"
      ],
      impact: "Streamlined API testing process with automated validation and quality checks",
      bgColor: "from-emerald-500 to-green-500",
      borderColors: { from: '#10b981', to: '#22c55e' }
    },
    {
      id: 13,
      title: "Automated Security Report Generation Tool",
      client: "UnitedHealth Group",
      domain: "Security Automation",
      duration: "2024",
      role: "Security Engineer",
      technologies: ["Python", "Security Scanning", "Report Generation", "Team Classification", "Automation"],
      description: "Portable tool for generating comprehensive security reports with intelligent team classification and automated distribution.",
      achievements: [
        "Automated security report generation",
        "Team classification algorithms",
        "Portable and scalable solution",
        "Enhanced security visibility across teams"
      ],
      impact: "Improved security compliance and reporting efficiency with automated insights",
      bgColor: "from-red-500 to-orange-500",
      borderColors: { from: '#ef4444', to: '#f97316' }
    },
    {
      id: 14,
      title: "Mobile App Prototype",
      client: "UnitedHealth Group",
      domain: "UI/UX Design & Prototyping",
      duration: "2024",
      role: "UI/UX Designer",
      technologies: ["Balsamiq", "Figma", "Prototype Design", "Mobile UI/UX", "User Experience"],
      description: "Designed navigable prototype of mobile application using Balsamiq and Figma with focus on user experience and interface design.",
      achievements: [
        "Complete mobile app prototype design",
        "Navigable prototype implementation",
        "User-centered design approach",
        "Professional UI/UX standards"
      ],
      impact: "Established design foundation for mobile application development with user-focused interface",
      bgColor: "from-pink-500 to-purple-500",
      borderColors: { from: '#ec4899', to: '#a855f7' }
    },
    {
      id: 15,
      title: "Cloud Service Selection Tool",
      client: "UnitedHealth Group",
      domain: "Multi-Cloud Architecture",
      duration: "2024 - Present",
      role: "Cloud Architect",
      technologies: ["Cloud Computing", "AI", "Multi-Cloud", "Architecture Design", "React", "Python"],
      description: "Comprehensive cloud-based tool supporting live information of 31+ cloud services with AI-powered capability for multi-cloud architecture selection.",
      achievements: [
        "31+ cloud services information integration",
        "AI-powered architecture recommendations",
        "Multi-cloud selection optimization",
        "Real-time cloud service data"
      ],
      impact: "Simplified cloud architecture decisions with AI-driven multi-cloud service recommendations",
      bgColor: "from-blue-500 to-indigo-500",
      borderColors: { from: '#3b82f6', to: '#6366f1' }
    },
    {
      id: 16,
      title: "E-commerce Application",
      client: "UnitedHealth Group",
      domain: "Full Stack Development",
      duration: "2024",
      role: "Full Stack Developer",
      technologies: ["Java", "Microservices", "MongoDB", "MySQL", "Spring Boot", "React"],
      description: "Java fullstack microservices application with sleek design, working with both MongoDB and MySQL databases for comprehensive e-commerce functionality.",
      achievements: [
        "Microservices architecture implementation",
        "Dual database integration (MongoDB & MySQL)",
        "Sleek and responsive design",
        "Full stack development with Java and React"
      ],
      impact: "Delivered robust e-commerce platform with modern architecture and dual database support",
      bgColor: "from-green-500 to-emerald-500",
      borderColors: { from: '#22c55e', to: '#10b981' }
    },
    {
      id: 17,
      title: "Security Vulnerability Remediation",
      client: "UnitedHealth Group",
      domain: "Application Security",
      duration: "2023 - 2024",
      role: "Security Engineer",
      technologies: ["SonarQube", "OWASP", "Static Analysis", "Dynamic Testing", "Java", "Python"],
      description: "Systematically addressed and resolved 200+ security vulnerabilities across multiple healthcare applications.",
      achievements: [
        "200+ security fixes implemented",
        "Zero critical vulnerabilities remaining",
        "Improved security posture by 90%",
        "Established security best practices"
      ],
      impact: "Significantly enhanced application security across healthcare platforms",
      bgColor: "from-red-500 to-pink-500",
      borderColors: { from: '#ef4444', to: '#ec4899' }
    },
    {
      id: 6,
      title: "E2E Checkout Tool Revision",
      client: "UnitedHealth Group",
      domain: "Healthcare Platform",
      duration: "2024",
      role: "Full Stack Developer",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      description: "Completely revised and modernized the end-to-end checkout tool for improved user experience and performance.",
      achievements: [
        "50% improvement in checkout completion rate",
        "Reduced processing time by 40%",
        "Enhanced user interface and experience",
        "Integrated with modern payment systems"
      ],
      impact: "Streamlined checkout process for millions of healthcare transactions",
      bgColor: "from-cyan-500 to-blue-500",
      borderColors: { from: '#06b6d4', to: '#3b82f6' }
    },
    {
      id: 7,
      title: "Healthcare Data Platform",
      client: "UnitedHealth Group",
      domain: "Healthcare Technology",
      duration: "2022 - Present",
      role: "Senior Software Engineer",
      technologies: ["React", "Node.js", "Python", "AWS", "PostgreSQL", "Docker"],
      description: "Led development of a comprehensive healthcare data analytics platform serving millions of patients.",
      achievements: [
        "Reduced data processing time by 65%",
        "Improved system reliability to 99.9% uptime",
        "Integrated 15+ healthcare data sources",
        "Scaled to handle 10M+ records daily"
      ],
      impact: "Platform now serves 2M+ healthcare professionals across 500+ facilities",
      bgColor: "from-blue-500 to-cyan-500",
      borderColors: { from: '#3b82f6', to: '#06b6d4' }
    },
    {
      id: 8,
      title: "AI-Powered Claims Processing",
      client: "OptumInsight",
      domain: "Insurance Technology",
      duration: "2023 - 2024",
      role: "AI/ML Engineer",
      technologies: ["Python", "TensorFlow", "FastAPI", "Azure", "MongoDB", "Kubernetes"],
      description: "Developed machine learning models for automated insurance claims processing and fraud detection.",
      achievements: [
        "Achieved 94% accuracy in fraud detection",
        "Reduced manual review time by 80%",
        "Processed $2B+ in claims automatically",
        "Saved $50M+ annually in operational costs"
      ],
      impact: "Revolutionized claims processing for 5M+ insurance policies",
      bgColor: "from-purple-500 to-pink-500",
      borderColors: { from: '#a855f7', to: '#ec4899' }
    },
    {
      id: 9,
      title: "Patient Portal Modernization",
      client: "Optum Technology",
      domain: "Digital Health",
      duration: "2022 - 2023",
      role: "Full Stack Developer",
      technologies: ["Angular", "Spring Boot", "MySQL", "Redis", "Jenkins", "Sonar"],
      description: "Modernized legacy patient portal to improve user experience and accessibility.",
      achievements: [
        "Increased user engagement by 150%",
        "Improved page load speeds by 70%",
        "Enhanced accessibility compliance to WCAG 2.1",
        "Integrated with 20+ healthcare systems"
      ],
      impact: "Now serves 3M+ patients with improved healthcare access",
      bgColor: "from-green-500 to-emerald-500",
      borderColors: { from: '#22c55e', to: '#10b981' }
    },
    {
      id: 4,
      title: "Clinical Decision Support System",
      client: "UnitedHealth Group",
      domain: "Clinical Technology",
      duration: "2021 - 2022",
      role: "Backend Developer",
      technologies: ["Java", "Spring Cloud", "Kafka", "Elasticsearch", "Docker", "AWS"],
      description: "Built real-time clinical decision support system for healthcare providers.",
      achievements: [
        "Delivered real-time alerts in <2 seconds",
        "Integrated with 100+ clinical guidelines",
        "Improved patient safety metrics by 40%",
        "Supported 50,000+ clinical decisions daily"
      ],
      impact: "Enhanced clinical outcomes for 1M+ patients annually",
      bgColor: "from-orange-500 to-red-500",
      borderColors: { from: '#f97316', to: '#ef4444' }
    },
    {
      id: 5,
      title: "Telehealth Integration Platform",
      client: "Optum Care",
      domain: "Telemedicine",
      duration: "2023 - Present",
      role: "Tech Lead",
      technologies: ["React Native", "Node.js", "WebRTC", "Socket.io", "PostgreSQL", "Kubernetes"],
      description: "Developed comprehensive telehealth platform with video consultations and remote monitoring.",
      achievements: [
        "Facilitated 500K+ virtual consultations",
        "Achieved 99.8% video call success rate",
        "Reduced patient wait times by 60%",
        "Integrated with 25+ EHR systems"
      ],
      impact: "Expanded healthcare access to rural and underserved communities",
      bgColor: "from-indigo-500 to-purple-500",
      borderColors: { from: '#6366f1', to: '#a855f7' }
    },
    {
      id: 6,
      title: "Pharmacy Management System",
      client: "OptumRx",
      domain: "Pharmaceutical Technology",
      duration: "2021 - 2022",
      role: "Full Stack Developer",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Apache", "GitLab CI"],
      description: "Built comprehensive pharmacy management system for prescription processing and inventory.",
      achievements: [
        "Processed 10M+ prescriptions monthly",
        "Reduced prescription errors by 85%",
        "Improved inventory turnover by 45%",
        "Integrated with 500+ pharmacy locations"
      ],
      impact: "Streamlined pharmacy operations serving 8M+ patients",
      bgColor: "from-teal-500 to-cyan-500",
      borderColors: { from: '#14b8a6', to: '#06b6d4' }
    },
    {
      id: 10,
      title: "Automated Security Report Generation Tool",
      client: "UnitedHealth Group",
      domain: "Security & Compliance",
      duration: "2024",
      role: "DevSecOps Engineer",
      technologies: ["Python", "Security APIs", "Automation", "Report Generation", "Team Classification"],
      description: "Developed a portable tool for generating comprehensive Security reports with automated team classification capabilities.",
      achievements: [
        "Automated security report generation",
        "Team-based classification system",
        "Portable deployment across environments",
        "Reduced manual reporting effort by 80%"
      ],
      impact: "Streamlined security compliance reporting across multiple teams",
      bgColor: "from-red-500 to-orange-500",
      borderColors: { from: '#ef4444', to: '#f97316' }
    },
    {
      id: 11,
      title: "VBF Checkout Tool",
      client: "UnitedHealth Group",
      domain: "API Testing & Automation",
      duration: "2024",
      role: "Test Automation Engineer",
      technologies: ["Newman Library", "Postman Collections", "API Testing", "Automation", "CI/CD"],
      description: "Built an automated tool based on Newman library to test API collections with comprehensive validation and reporting.",
      achievements: [
        "Automated API collection testing",
        "Integrated with CI/CD pipelines",
        "Comprehensive test reporting",
        "Reduced manual testing time by 90%"
      ],
      impact: "Enhanced API testing reliability and development velocity",
      bgColor: "from-indigo-500 to-purple-500",
      borderColors: { from: '#6366f1', to: '#a855f7' }
    },
    {
      id: 12,
      title: "AEP Dashboard",
      client: "UnitedHealth Group",
      domain: "Monitoring & Analytics",
      duration: "2024",
      role: "Dashboard Developer",
      technologies: ["React", "D3.js", "Multiple Monitoring APIs", "Real-time Data", "Grafana Integration"],
      description: "Created a comprehensive dashboard containing all key metrics integrated with several monitoring tools for unified visibility.",
      achievements: [
        "Unified monitoring dashboard",
        "Integration with multiple monitoring tools",
        "Real-time metrics visualization",
        "Improved operational visibility by 70%"
      ],
      impact: "Centralized monitoring and improved incident response times",
      bgColor: "from-green-500 to-teal-500",
      borderColors: { from: '#22c55e', to: '#14b8a6' }
    },
    {
      id: 13,
      title: "Guardians Chatbot v1",
      client: "UnitedHealth Group",
      domain: "AI Operations Support",
      duration: "2023",
      role: "AI Engineer",
      technologies: ["GenAI", "NLP", "Conversational AI", "Knowledge Base", "Onboarding Systems"],
      description: "First AI Chatbot in the organization based on GenAI, designed to help Operations team with daily reference and onboarding processes.",
      achievements: [
        "First GenAI chatbot implementation in org",
        "Automated onboarding assistance",
        "Daily operations support",
        "Reduced onboarding time by 50%"
      ],
      impact: "Pioneered AI-driven operations support in the organization",
      bgColor: "from-purple-500 to-pink-500",
      borderColors: { from: '#a855f7', to: '#ec4899' }
    },
    {
      id: 14,
      title: "Guardians Chatbot v2",
      client: "UnitedHealth Group",
      domain: "Enterprise AI Integration",
      duration: "2024",
      role: "Senior AI Engineer",
      technologies: ["Latest GenAI Models", "ISTM APIs", "Rally APIs", "REST APIs", "GPD Dashboard Integration"],
      description: "Enhanced AI chatbot with latest GenAI models, integrated with ISTM systems, Rally, and GPD Dashboard for comprehensive enterprise support.",
      achievements: [
        "Latest GenAI model integration",
        "ISTM and Rally system integration",
        "GPD Dashboard connectivity",
        "Enhanced enterprise workflow automation"
      ],
      impact: "Advanced AI-driven enterprise operations and workflow automation",
      bgColor: "from-blue-500 to-purple-500",
      borderColors: { from: '#3b82f6', to: '#a855f7' }
    },
    {
      id: 15,
      title: "Automated User Flow Testing Tool",
      client: "UnitedHealth Group",
      domain: "Test Automation & QA",
      duration: "2024",
      role: "QA Automation Lead",
      technologies: ["Playwright", "Dashboard", "Automated Testing", "Trend Analysis", "Error Tracking"],
      description: "End-to-end testing tool based on Playwright that runs twice daily with comprehensive dashboard featuring trends, history, and error tracking.",
      achievements: [
        "Automated E2E testing twice daily",
        "Beautiful comprehensive dashboard",
        "Trends and history tracing",
        "Flow error and JS error tracking",
        "Substituted manual checkouts"
      ],
      impact: "Eliminated manual testing overhead and improved product quality",
      bgColor: "from-amber-500 to-orange-500",
      borderColors: { from: '#f59e0b', to: '#f97316' }
    },
    {
      id: 16,
      title: "OLE Report Email Automation",
      client: "UnitedHealth Group",
      domain: "Report Automation",
      duration: "2024",
      role: "Automation Engineer",
      technologies: ["Python", "Email Automation", "Report Generation", "Scheduled Tasks", "Distribution Lists"],
      description: "Automated system that generates daily OLE reports and distributes them across relevant distribution lists automatically.",
      achievements: [
        "Automated daily report generation",
        "Email distribution automation",
        "Scheduled task management",
        "Eliminated manual reporting tasks"
      ],
      impact: "Streamlined daily reporting process and ensured consistent communication",
      bgColor: "from-cyan-500 to-blue-500",
      borderColors: { from: '#06b6d4', to: '#3b82f6' }
    },
    {
      id: 17,
      title: "Ticket's Microservice Application",
      client: "UnitedHealth Group",
      domain: "AI-Driven Support",
      duration: "2024",
      role: "AI Application Developer",
      technologies: ["AI/ML", "Microservices", "Similarity Search", "Incident Management", "Knowledge Base"],
      description: "AI-based microservice application designed to query and identify similar incident and problem tickets for efficient issue resolution.",
      achievements: [
        "AI-powered similarity search",
        "Microservices architecture",
        "Incident and problem ticket matching",
        "Improved issue resolution time by 60%"
      ],
      impact: "Enhanced support efficiency through intelligent ticket matching",
      bgColor: "from-pink-500 to-red-500",
      borderColors: { from: '#ec4899', to: '#ef4444' }
    }
  ];

  const getTechIcon = (tech) => {
    const techIcons = {
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg'
    };
    return techIcons[tech] || 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png';
  };

  if (selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    return (
      <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <button
          onClick={() => setSelectedProject(null)}
          className="fixed top-8 left-8 z-30 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          ← Back to Projects
        </button>

        <div className="flex flex-col items-center justify-start min-h-screen px-8 py-20">
          <div className="max-w-6xl w-full">
            {/* Project Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-gray-300 text-lg mb-6">
                <span className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  {project.client}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {project.duration}
                </span>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project Details */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative">
                <BorderBeam
                  duration={15}
                  delay={0}
                  colorFrom={project.borderColors.from}
                  colorTo={project.borderColors.to}
                  borderWidth={2}
                />
                
                <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
                <div className="space-y-4">
                  {project.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
                  <p className="text-cyan-200">{project.impact}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative">
                <BorderBeam
                  duration={18}
                  delay={0.5}
                  colorFrom={project.borderColors.to}
                  colorTo={project.borderColors.from}
                  borderWidth={2}
                />
                
                <h3 className="text-2xl font-bold text-white mb-6">Technologies Used</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                      <img
                        src={getTechIcon(tech)}
                        alt={tech}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.src = 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png';
                        }}
                      />
                      <span className="text-gray-300 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Code className="w-5 h-5 text-blue-400" />
                    <span><strong>Role:</strong> {project.role}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Database className="w-5 h-5 text-green-400" />
                    <span><strong>Domain:</strong> {project.domain}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800 relative overflow-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]"></div>
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-30 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        ← Back to Home
      </button>

      {/* Page content */}
      <div className="flex flex-col items-center justify-start min-h-screen px-8 py-20">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Client Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming healthcare through innovative technology solutions at UnitedHealth Group
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/15 relative group"
                onClick={() => setSelectedProject(project.id)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Border Beam */}
                <BorderBeam
                  duration={15 + index * 2}
                  delay={index * 0.3}
                  colorFrom={project.borderColors.from}
                  colorTo={project.borderColors.to}
                  borderWidth={2}
                />

                {/* Project Header */}
                <div className="mb-4">
                  <div 
                    className="w-full h-32 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.borderColors.from}, ${project.borderColors.to})`
                    }}
                  >
                    <div className="text-center">
                      <Building2 className="w-12 h-12 text-white mb-2 mx-auto" />
                      <h3 className="text-white font-bold text-sm">{project.client}</h3>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{project.domain}</p>
                </div>

                {/* Project Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Code className="w-4 h-4" />
                    <span>{project.role}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">View Details</span>
                  <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">6+</div>
            <div className="text-gray-300 text-sm">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">15M+</div>
            <div className="text-gray-300 text-sm">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">$100M+</div>
            <div className="text-gray-300 text-sm">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Uptime Achieved</div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-30 animate-pulse"
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ClientProjects;

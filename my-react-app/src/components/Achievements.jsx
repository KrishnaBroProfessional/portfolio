import React, { useState } from 'react';
import { Trophy, Medal, Star, Award, Target, TrendingUp, Users, Calendar, Code } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';

const Achievements = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('professional');

  const achievements = {
    professional: [
      {
        id: 1,
        title: "UHG Academy Champion Award",
        category: "Professional Excellence",
        year: "2025",
        description: "Received multiple UHG Academy Champion Awards for outstanding performance and contributions to healthcare technology innovation",
        icon: Trophy,
        color: "from-yellow-500 to-amber-500",
        borderColors: { from: '#eab308', to: '#f59e0b' },
        metrics: ["₹3000 total award amount", "Multiple recognitions", "Excellence in AI implementation"],
        impact: "Recognized by leadership for exceptional contributions to healthcare innovation"
      },
      {
        id: 2,
        title: "Excellence Award - UnitedHealth Group",
        category: "Professional Excellence",
        year: "2024",
        description: "Recognized for outstanding performance in developing healthcare AI solutions that improved patient outcomes by 40%",
        icon: Trophy,
        color: "from-yellow-500 to-amber-500",
        borderColors: { from: '#eab308', to: '#f59e0b' },
        metrics: ["40% improvement in patient outcomes", "95% stakeholder satisfaction", "$2M+ cost savings"],
        impact: "Transformed healthcare delivery for 500K+ patients"
      },
      {
        id: 3,
        title: "AWS Project Design Challenge Winner",
        category: "Cloud Innovation",
        year: "2024",
        description: "Won AWS Project Design Challenge with innovative cloud architecture solutions for healthcare platforms",
        icon: Award,
        color: "from-orange-500 to-yellow-500",
        borderColors: { from: '#f97316', to: '#eab308' },
        metrics: ["₹8000 award amount", "Top design solution", "Industry recognition"],
        impact: "Set new standards for cloud architecture in healthcare"
      },
      {
        id: 4,
        title: "AWS GenAI Ideation Challenge Winner",
        category: "AI Innovation",
        year: "2024",
        description: "Recognized for innovative GenAI solutions and ideation in healthcare technology applications",
        icon: Star,
        color: "from-purple-500 to-pink-500",
        borderColors: { from: '#a855f7', to: '#ec4899' },
        metrics: ["₹5000 award amount", "GenAI innovation", "Healthcare AI advancement"],
        impact: "Pioneered new approaches to AI in healthcare"
      },
      {
        id: 5,
        title: "AWS GameDay - Migration & Modernization",
        category: "Cloud Excellence",
        year: "2024",
        description: "Excelled in AWS GameDay challenge focusing on cloud migration and modernization strategies",
        icon: Target,
        color: "from-blue-500 to-cyan-500",
        borderColors: { from: '#3b82f6', to: '#06b6d4' },
        metrics: ["₹2000 award amount", "Migration expertise", "Modernization leadership"],
        impact: "Demonstrated exceptional cloud migration and modernization skills"
      },
      {
        id: 6,
        title: "Innovation Champion",
        category: "Technology Innovation",
        year: "2023",
        description: "Led breakthrough AI implementation in claims processing, achieving industry-leading fraud detection rates",
        icon: Star,
        color: "from-purple-500 to-pink-500",
        borderColors: { from: '#a855f7', to: '#ec4899' },
        metrics: ["94% fraud detection accuracy", "80% reduction in manual reviews", "$50M+ annual savings"],
        impact: "Set new industry standards for automated claims processing"
      },
      {
        id: 7,
        title: "Technical Leadership Award",
        category: "Leadership Excellence",
        year: "2023",
        description: "Recognized for exceptional technical leadership in guiding cross-functional teams through complex healthcare platform development",
        icon: Award,
        color: "from-blue-500 to-cyan-500",
        borderColors: { from: '#3b82f6', to: '#06b6d4' },
        metrics: ["Led 15+ member team", "100% project delivery success", "Zero critical incidents"],
        impact: "Mentored 10+ junior developers and established best practices"
      },
      {
        id: 8,
        title: "Patient Safety Excellence",
        category: "Healthcare Impact",
        year: "2022",
        description: "Developed clinical decision support systems that significantly improved patient safety metrics across healthcare networks",
        icon: Medal,
        color: "from-green-500 to-emerald-500",
        borderColors: { from: '#22c55e', to: '#10b981' },
        metrics: ["40% improvement in safety metrics", "50K+ clinical decisions supported daily", "99.9% system uptime"],
        impact: "Enhanced clinical outcomes for 1M+ patients annually"
      },
      {
        id: 5,
        title: "Digital Transformation Leader",
        category: "Digital Innovation",
        year: "2022",
        description: "Spearheaded the modernization of legacy patient portal systems, dramatically improving user experience and accessibility",
        icon: TrendingUp,
        color: "from-orange-500 to-red-500",
        borderColors: { from: '#f97316', to: '#ef4444' },
        metrics: ["150% increase in user engagement", "70% faster load times", "3M+ patients served"],
        impact: "Revolutionized patient experience across healthcare systems"
      },
      {
        id: 6,
        title: "Quality Assurance Excellence",
        category: "Process Excellence",
        year: "2021",
        description: "Implemented comprehensive testing frameworks that reduced production defects by 90% across multiple healthcare applications",
        icon: Target,
        color: "from-indigo-500 to-purple-500",
        borderColors: { from: '#6366f1', to: '#a855f7' },
        metrics: ["90% reduction in production defects", "99.8% test coverage", "Zero security vulnerabilities"],
        impact: "Established gold standard for healthcare software quality"
      },
      {
        id: 9,
        title: "Top 500 Winner Circle Leaderboard",
        category: "Performance Excellence",
        year: "2024",
        description: "Achieved position in Top 500 of Winner Circle Leaderboard for exceptional performance and contributions",
        icon: Trophy,
        color: "from-yellow-500 to-amber-500",
        borderColors: { from: '#eab308', to: '#f59e0b' },
        metrics: ["Top 500 performer", "Consistent excellence", "Leadership recognition"],
        impact: "Recognized among top performers organization-wide"
      },
      {
        id: 10,
        title: "AWS Gen AI Ideathon Challenge - 1st Place",
        category: "AI Innovation",
        year: "2024",
        description: "Won 1st rank in AWS Gen AI Ideathon Challenge with innovative generative AI solutions",
        icon: Trophy,
        color: "from-purple-500 to-pink-500",
        borderColors: { from: '#a855f7', to: '#ec4899' },
        metrics: ["1st place winner", "AWS credits earned", "GenAI innovation"],
        impact: "Led breakthrough innovations in generative AI applications"
      },
      {
        id: 11,
        title: "AWS Migration/Modernization GameDay Contest - 1st Place",
        category: "Cloud Excellence",
        year: "2024",
        description: "Secured 1st rank in AWS Migration/Modernization GameDay Contest demonstrating cloud expertise",
        icon: Award,
        color: "from-blue-500 to-cyan-500",
        borderColors: { from: '#3b82f6', to: '#06b6d4' },
        metrics: ["1st place winner", "Migration expertise", "Modernization leadership"],
        impact: "Demonstrated exceptional cloud migration and modernization skills"
      },
      {
        id: 12,
        title: "AWS Project Design Challenge - 1st Place",
        category: "Architecture Excellence",
        year: "2024",
        description: "Won 1st rank in AWS Project Design Challenge with innovative cloud architecture solutions",
        icon: Star,
        color: "from-green-500 to-emerald-500",
        borderColors: { from: '#22c55e', to: '#10b981' },
        metrics: ["1st place winner", "Design excellence", "Architecture innovation"],
        impact: "Set new standards for cloud project design and architecture"
      },
      {
        id: 13,
        title: "AWS Cloud Quest - 1st Place",
        category: "Cloud Mastery",
        year: "2024",
        description: "Achieved 1st rank in AWS Cloud Quest demonstrating comprehensive cloud platform knowledge",
        icon: Medal,
        color: "from-orange-500 to-red-500",
        borderColors: { from: '#f97316', to: '#ef4444' },
        metrics: ["1st place winner", "Cloud mastery", "Comprehensive knowledge"],
        impact: "Demonstrated exceptional AWS cloud platform expertise"
      },
      {
        id: 14,
        title: "GameJAM AWS Solution Architect - 2nd Place",
        category: "Solution Architecture",
        year: "2024",
        description: "Secured 2nd rank in GameJAM based on AWS Solution Architect competencies",
        icon: Award,
        color: "from-indigo-500 to-purple-500",
        borderColors: { from: '#6366f1', to: '#a855f7' },
        metrics: ["2nd place winner", "Solution architecture", "AWS expertise"],
        impact: "Showcased advanced solution architecture skills in competitive setting"
      },
      {
        id: 15,
        title: "100% User Story Completion Excellence",
        category: "Delivery Excellence",
        year: "2024",
        description: "Completed all User Stories with 100% acceptance rate and on-time delivery without any leakage",
        icon: Target,
        color: "from-green-500 to-teal-500",
        borderColors: { from: '#22c55e', to: '#14b8a6' },
        metrics: ["100% acceptance rate", "Zero leakage", "On-time delivery"],
        impact: "Set benchmark for project delivery excellence and quality standards"
      },
      {
        id: 16,
        title: "Client Recognition & Appreciation",
        category: "Client Excellence",
        year: "2024",
        description: "Recognized and appreciated by clients multiple times for exceptional service and solution delivery",
        icon: Users,
        color: "from-pink-500 to-rose-500",
        borderColors: { from: '#ec4899', to: '#f43f5e' },
        metrics: ["Multiple recognitions", "Client satisfaction", "Service excellence"],
        impact: "Built strong client relationships and trust through consistent high-quality delivery"
      },
      {
        id: 17,
        title: "Dedication & Extra Mile Recognition",
        category: "Work Ethic Excellence",
        year: "2024",
        description: "Went above and beyond by working overtime, night shifts, and weekends to support team and deliveries",
        icon: TrendingUp,
        color: "from-amber-500 to-orange-500",
        borderColors: { from: '#f59e0b', to: '#f97316' },
        metrics: ["Overtime commitment", "Weekend support", "Team dedication"],
        impact: "Ensured project success through exceptional commitment and work ethic"
      },
      {
        id: 19,
        title: "Top Performer Award from Client",
        category: "Client Excellence",
        year: "2024",
        description: "Received Top Performer Award directly from client for exceptional service delivery and innovation",
        icon: Trophy,
        color: "from-yellow-500 to-amber-500",
        borderColors: { from: '#eab308', to: '#f59e0b' },
        metrics: ["Client recognition", "Service excellence", "Innovation delivery"],
        impact: "Direct client acknowledgment of exceptional performance and value delivery"
      },
      {
        id: 20,
        title: "AWS Gameday Winner - Workload and Database Migration",
        category: "Cloud Migration Excellence",
        year: "2024",
        description: "Won AWS Gameday challenge focused on workload and database migration strategies",
        icon: Award,
        color: "from-orange-500 to-yellow-500",
        borderColors: { from: '#f97316', to: '#eab308' },
        metrics: ["Migration expertise", "Database optimization", "AWS gameday winner"],
        impact: "Demonstrated advanced skills in complex cloud migration scenarios"
      },
      {
        id: 21,
        title: "AWS Cloud Quest Tournament Winner - Cloud Certified Practitioner",
        category: "Cloud Mastery",
        year: "2024",
        description: "Won AWS Cloud Quest Tournament in the Cloud Certified Practitioner category",
        icon: Trophy,
        color: "from-blue-500 to-cyan-500",
        borderColors: { from: '#3b82f6', to: '#06b6d4' },
        metrics: ["Tournament winner", "Cloud practitioner mastery", "Competitive excellence"],
        impact: "Showcased foundational cloud knowledge in competitive tournament setting"
      },
      {
        id: 22,
        title: "AWS Cloud JAM Architecture Winner - Certified Solution Architect",
        category: "Solution Architecture",
        year: "2024",
        description: "Won AWS Cloud JAM Architecture challenge in Certified Solution Architect category",
        icon: Star,
        color: "from-purple-500 to-blue-500",
        borderColors: { from: '#a855f7', to: '#3b82f6' },
        metrics: ["Architecture winner", "Solution design excellence", "JAM competition"],
        impact: "Demonstrated advanced solution architecture skills in competitive environment"
      },
      {
        id: 23,
        title: "AWS Ideathon Winner - Policy Genie 2.0 AI Chatbot",
        category: "AI Innovation",
        year: "2024",
        description: "Won AWS Ideathon with Policy Genie 2.0, an AI-based chatbot for policy management",
        icon: Trophy,
        color: "from-green-500 to-emerald-500",
        borderColors: { from: '#22c55e', to: '#10b981' },
        metrics: ["AI chatbot innovation", "Policy automation", "Ideathon winner"],
        impact: "Created innovative AI solution for automated policy management and guidance"
      },
      {
        id: 24,
        title: "AWS Project Designer Challenge Winner - AI Incident Ticket Management",
        category: "AI System Design",
        year: "2024",
        description: "Won AWS Project Designer Challenge with AI-based Incident Ticket Management System",
        icon: Award,
        color: "from-indigo-500 to-purple-500",
        borderColors: { from: '#6366f1', to: '#a855f7' },
        metrics: ["AI system design", "Incident management", "Project design winner"],
        impact: "Designed innovative AI system for automated incident ticket management and resolution"
      },
      {
        id: 25,
        title: "Twice Excelsior Winner - Mobile App Prototype Development",
        category: "Mobile Innovation",
        year: "2024",
        description: "Won Excelsior award twice for developing prototypes of all activity pages of mobile application",
        icon: Medal,
        color: "from-pink-500 to-rose-500",
        borderColors: { from: '#ec4899', to: '#f43f5e' },
        metrics: ["Twice winner", "Mobile prototyping", "Activity page design"],
        impact: "Created comprehensive mobile app prototypes demonstrating innovation in user experience"
      },
      {
        id: 26,
        title: "3rd Rank - GSI Global Delivery Summit 2023 (Google Cloud)",
        category: "Cloud Excellence",
        year: "2023",
        description: "Achieved 3rd rank in GSI Global Delivery Summit 2023 in Google Cloud category",
        icon: Trophy,
        color: "from-yellow-500 to-orange-500",
        borderColors: { from: '#eab308', to: '#f97316' },
        metrics: ["3rd rank achievement", "Global competition", "Google Cloud expertise"],
        impact: "Recognized globally for Google Cloud expertise and delivery excellence"
      },
      {
        id: 27,
        title: "GameJam 2022-23 Budding Gamer - 3D Interstellar Escape Game",
        category: "Game Development",
        year: "2023",
        description: "Won Budding Gamer award at GameJam 2022-23 for developing 3D Interstellar Escape Game",
        icon: Star,
        color: "from-purple-500 to-pink-500",
        borderColors: { from: '#a855f7', to: '#ec4899' },
        metrics: ["Game development", "3D programming", "Creative innovation"],
        impact: "Demonstrated creative programming skills through immersive 3D game development"
      },
      {
        id: 28,
        title: "Corporate Awards - Victory League | Inspiring Performance | Top Performance",
        category: "Corporate Recognition",
        year: "2024",
        description: "Received multiple corporate awards including Victory League, Inspiring Performance, and Top Performance",
        icon: Award,
        color: "from-emerald-500 to-teal-500",
        borderColors: { from: '#10b981', to: '#14b8a6' },
        metrics: ["Multiple corporate awards", "Performance excellence", "Leadership recognition"],
        impact: "Consistent recognition for outstanding performance across multiple categories"
      },
      {
        id: 18,
        title: "Delivery Excellence & Best Practices",
        category: "Project Management",
        year: "2024",
        description: "Consistently meeting deliverable requirements on time with standard best practices in code across all projects",
        icon: Target,
        color: "from-emerald-500 to-green-500",
        borderColors: { from: '#10b981', to: '#22c55e' },
        metrics: ["On-time delivery", "Code quality standards", "Best practices implementation", "Requirements fulfillment"],
        impact: "Established reputation for reliable project delivery and code excellence"
      }
    ],
    technical: [
      {
        id: 7,
        title: "OCI (Oracle Cloud Infrastructure) Certification",
        category: "Cloud Architecture",
        year: "2024",
        description: "Achieved Oracle Cloud Infrastructure certification demonstrating expertise in enterprise cloud solutions",
        icon: Award,
        color: "from-red-500 to-orange-500",
        borderColors: { from: '#ef4444', to: '#f97316' },
        metrics: ["Oracle certified professional", "Cloud infrastructure expertise", "Enterprise-grade solutions"],
        impact: "Enhanced cloud architecture capabilities for enterprise healthcare platforms"
      },
      {
        id: 8,
        title: "OCI AI Associate Certification",
        category: "AI/Cloud Integration",
        year: "2024",
        description: "Certified as Oracle Cloud Infrastructure AI Associate, specializing in AI services and machine learning on OCI",
        icon: Star,
        color: "from-purple-500 to-blue-500",
        borderColors: { from: '#a855f7', to: '#3b82f6' },
        metrics: ["AI associate level", "OCI AI services expertise", "ML on cloud platforms"],
        impact: "Advanced AI implementation capabilities on Oracle Cloud Infrastructure"
      },
      {
        id: 9,
        title: "Certified Cloud Security Professional",
        category: "Cloud Security",
        year: "2024",
        description: "Completed comprehensive training in cloud security best practices and implementation strategies",
        icon: Award,
        color: "from-green-500 to-cyan-500",
        borderColors: { from: '#22c55e', to: '#06b6d4' },
        metrics: ["Security professional certification", "Cloud security expertise", "Best practices implementation"],
        impact: "Enhanced security posture for cloud-based healthcare applications"
      },
      {
        id: 10,
        title: "AI Practitioner GenAI Certification",
        category: "Generative AI",
        year: "2024",
        description: "Completed specialized training in Generative AI technologies and practical implementation strategies",
        icon: Star,
        color: "from-pink-500 to-purple-500",
        borderColors: { from: '#ec4899', to: '#a855f7' },
        metrics: ["GenAI practitioner level", "LLM implementation", "AI innovation strategies"],
        impact: "Advanced generative AI capabilities for healthcare innovation"
      },
      {
        id: 11,
        title: "Rust Programming Certification",
        category: "Systems Programming",
        year: "2024",
        description: "Mastered Rust programming language to build high-performance AI package tools using TikToken",
        icon: Code,
        color: "from-orange-500 to-red-500",
        borderColors: { from: '#f97316', to: '#ef4444' },
        metrics: ["Systems programming expertise", "AI tool development", "High-performance computing"],
        impact: "Enabled development of efficient AI package tools and tokenization systems"
      },
      {
        id: 13,
        title: "Salesforce Certified Associate",
        category: "CRM Platform",
        year: "2024",
        description: "Certified Salesforce Associate demonstrating expertise in CRM platform administration and customization",
        icon: Award,
        color: "from-blue-500 to-cyan-500",
        borderColors: { from: '#3b82f6', to: '#06b6d4' },
        metrics: ["Salesforce platform expertise", "CRM administration", "Custom solutions"],
        impact: "Enhanced CRM integration capabilities for healthcare client management"
      },
      {
        id: 14,
        title: "AWS Certified Cloud Practitioner",
        category: "Cloud Fundamentals",
        year: "2024",
        description: "AWS Cloud Practitioner certification demonstrating foundational cloud computing knowledge",
        icon: Award,
        color: "from-orange-500 to-yellow-500",
        borderColors: { from: '#f97316', to: '#eab308' },
        metrics: ["AWS cloud fundamentals", "Cloud best practices", "Cost optimization"],
        impact: "Established strong foundation for advanced AWS cloud implementations"
      },
      {
        id: 15,
        title: "AWS Partner Accreditation (Technical)",
        category: "Partner Certification",
        year: "2024",
        description: "AWS Partner Technical Accreditation demonstrating expertise in partner solution delivery",
        icon: Star,
        color: "from-orange-500 to-red-500",
        borderColors: { from: '#f97316', to: '#ef4444' },
        metrics: ["Partner technical expertise", "Solution delivery", "AWS partnership"],
        impact: "Enabled advanced partner-level AWS solution implementations"
      },
      {
        id: 16,
        title: "Azure Odyssey Certification",
        category: "Microsoft Cloud",
        year: "2024",
        description: "Microsoft Azure Odyssey certification demonstrating comprehensive Azure platform knowledge",
        icon: Award,
        color: "from-blue-500 to-indigo-500",
        borderColors: { from: '#3b82f6', to: '#6366f1' },
        metrics: ["Azure platform mastery", "Cloud services expertise", "Microsoft certified"],
        impact: "Enhanced multi-cloud architecture capabilities with Azure integration"
      },
      {
        id: 17,
        title: "Azure NLP Certified",
        category: "AI/Natural Language",
        year: "2024",
        description: "Azure Natural Language Processing certification for AI-powered text analysis and processing",
        icon: Star,
        color: "from-purple-500 to-blue-500",
        borderColors: { from: '#a855f7', to: '#3b82f6' },
        metrics: ["NLP expertise", "Text analytics", "Azure AI services"],
        impact: "Advanced natural language processing capabilities for healthcare text analysis"
      },
      {
        id: 18,
        title: "Azure Intelligent Document Certified",
        category: "Document AI",
        year: "2024",
        description: "Azure Intelligent Document Processing certification for automated document analysis and extraction",
        icon: Award,
        color: "from-green-500 to-blue-500",
        borderColors: { from: '#22c55e', to: '#3b82f6' },
        metrics: ["Document AI", "Automated extraction", "Intelligent processing"],
        impact: "Automated document processing for healthcare claims and patient records"
      },
      {
        id: 19,
        title: "Kong Gateway Foundations",
        category: "API Management",
        year: "2024",
        description: "Kong Gateway Foundations certification for API gateway management and microservices architecture",
        icon: Medal,
        color: "from-teal-500 to-green-500",
        borderColors: { from: '#14b8a6', to: '#22c55e' },
        metrics: ["API gateway expertise", "Microservices architecture", "Kong platform"],
        impact: "Enhanced API management and microservices orchestration capabilities"
      },
      {
        id: 20,
        title: "IBM Cloud Advocate Essentials",
        category: "IBM Cloud Platform",
        year: "2024",
        description: "IBM Cloud Advocate Essentials certification demonstrating IBM cloud platform proficiency",
        icon: Award,
        color: "from-indigo-500 to-blue-500",
        borderColors: { from: '#6366f1', to: '#3b82f6' },
        metrics: ["IBM cloud expertise", "Platform advocacy", "Cloud solutions"],
        impact: "Expanded multi-cloud capabilities with IBM cloud platform integration"
      },
      {
        id: 21,
        title: "Google Cloud Badges (20+)",
        category: "Google Cloud Skills",
        year: "2024",
        description: "Earned 20+ Google Cloud skill badges demonstrating comprehensive GCP platform knowledge",
        icon: Star,
        color: "from-yellow-500 to-orange-500",
        borderColors: { from: '#eab308', to: '#f97316' },
        metrics: ["20+ skill badges", "GCP platform mastery", "Hands-on expertise"],
        impact: "Comprehensive Google Cloud platform capabilities for enterprise solutions"
      },
      {
        id: 22,
        title: "Udemy Courses (25+)",
        category: "Continuous Learning",
        year: "2024",
        description: "Completed 25+ Udemy courses covering diverse technology topics and emerging trends",
        icon: Medal,
        color: "from-purple-500 to-pink-500",
        borderColors: { from: '#a855f7', to: '#ec4899' },
        metrics: ["25+ courses completed", "Diverse technology topics", "Continuous learning"],
        impact: "Maintained cutting-edge knowledge across multiple technology domains"
      },
      {
        id: 23,
        title: "Coursera Courses (7)",
        category: "Professional Development",
        year: "2024",
        description: "Completed 7 Coursera courses from top universities focusing on advanced technology concepts",
        icon: Award,
        color: "from-blue-500 to-purple-500",
        borderColors: { from: '#3b82f6', to: '#a855f7' },
        metrics: ["7 university courses", "Advanced concepts", "Professional development"],
        impact: "Advanced academic knowledge in cutting-edge technology fields"
      },
      {
        id: 24,
        title: "Wipro Certified Skills (40+)",
        category: "Enterprise Skills",
        year: "2024",
        description: "Achieved 40+ Wipro certified skills across various technology domains and business processes",
        icon: Star,
        color: "from-orange-500 to-red-500",
        borderColors: { from: '#f97316', to: '#ef4444' },
        metrics: ["40+ certified skills", "Technology domains", "Business processes"],
        impact: "Comprehensive enterprise-grade skills across multiple technology verticals"
      },
      {
        id: 12,
        title: "AWS Solutions Architect Certification",
        category: "Cloud Architecture",
        year: "2023",
        description: "Advanced certification in designing scalable, secure cloud solutions for enterprise healthcare systems",
        icon: Award,
        color: "from-orange-500 to-yellow-500",
        borderColors: { from: '#f97316', to: '#eab308' },
        metrics: ["Advanced level certification", "100+ hours of preparation", "Top 10% score"],
        impact: "Enabled complex cloud migrations saving $500K+ annually"
      },
      {
        id: 13,
        title: "Machine Learning Specialist",
        category: "AI/ML Expertise",
        year: "2023",
        description: "Specialized certification in developing production-ready ML models for healthcare applications",
        icon: Star,
        color: "from-purple-500 to-blue-500",
        borderColors: { from: '#a855f7', to: '#3b82f6' },
        metrics: ["5 major ML projects", "94% model accuracy achieved", "10+ algorithms mastered"],
        impact: "Deployed ML solutions processing $2B+ in healthcare claims"
      },
      {
        id: 9,
        title: "Kubernetes Certified Developer",
        category: "Container Orchestration",
        year: "2022",
        description: "Expert-level certification in container orchestration and microservices architecture for healthcare platforms",
        icon: Medal,
        color: "from-blue-500 to-green-500",
        borderColors: { from: '#3b82f6', to: '#22c55e' },
        metrics: ["20+ containerized applications", "99.9% uptime achieved", "50% cost reduction"],
        impact: "Architected scalable infrastructure serving millions of patients"
      },
      {
        id: 10,
        title: "Security+ Certification",
        category: "Cybersecurity",
        year: "2022",
        description: "Advanced security certification focusing on healthcare data protection and HIPAA compliance",
        icon: Trophy,
        color: "from-red-500 to-pink-500",
        borderColors: { from: '#ef4444', to: '#ec4899' },
        metrics: ["Zero security incidents", "100% HIPAA compliance", "Advanced threat detection"],
        impact: "Secured platforms handling 10M+ patient records"
      }
    ],
    academic: [
      {
        id: 11,
        title: "Master's in Computer Science",
        category: "Academic Excellence",
        year: "2020",
        description: "Specialized in Artificial Intelligence and Machine Learning with focus on healthcare applications",
        icon: Award,
        color: "from-indigo-500 to-blue-500",
        borderColors: { from: '#6366f1', to: '#3b82f6' },
        metrics: ["3.9/4.0 GPA", "Dean's List 4 semesters", "Research publication"],
        impact: "Thesis on AI in healthcare cited 50+ times"
      },
      {
        id: 12,
        title: "Bachelor's in Software Engineering",
        category: "Foundation Excellence",
        year: "2018",
        description: "Graduated Summa Cum Laude with specialization in software architecture and system design",
        icon: Medal,
        color: "from-green-500 to-blue-500",
        borderColors: { from: '#22c55e', to: '#3b82f6' },
        metrics: ["Summa Cum Laude", "4.0/4.0 GPA", "Top 5% of class"],
        impact: "Established strong foundation for healthcare technology career"
      },
      {
        id: 13,
        title: "Institute Topper - B.Tech Graduation",
        category: "Academic Excellence",
        year: "2018",
        description: "Achieved Institute Topper position during B.Tech graduation with highest academic performance",
        icon: Trophy,
        color: "from-yellow-500 to-amber-500",
        borderColors: { from: '#eab308', to: '#f59e0b' },
        metrics: ["Institute topper", "Highest academic performance", "Distinguished achievement"],
        impact: "Set academic excellence benchmark with top performance throughout B.Tech program"
      }
    ]
  };

  const categories = [
    { id: 'professional', name: 'Professional Awards', icon: Trophy, count: achievements.professional.length },
    { id: 'technical', name: 'Technical Certifications', icon: Star, count: achievements.technical.length },
    { id: 'academic', name: 'Academic Excellence', icon: Award, count: achievements.academic.length }
  ];

  const getAchievementStats = () => {
    const totalAchievements = Object.values(achievements).flat().length;
    const currentYear = new Date().getFullYear();
    const recentAchievements = Object.values(achievements).flat().filter(a => currentYear - parseInt(a.year) <= 2).length;
    
    return {
      total: totalAchievements,
      recent: recentAchievements,
      professional: achievements.professional.length,
      technical: achievements.technical.length
    };
  };

  const stats = getAchievementStats();

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 relative overflow-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-30 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        ← Back to Home
      </button>

      {/* Page content */}
      <div className="flex flex-col items-center justify-start min-h-screen px-8 py-20">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional excellence, technical expertise, and academic achievements in healthcare technology
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center relative">
            <BorderBeam duration={12} delay={0} colorFrom="#ef4444" colorTo="#f97316" borderWidth={2} />
            <div className="text-3xl font-bold text-red-400 mb-2">{stats.total}</div>
            <div className="text-gray-300 text-sm">Total Achievements</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center relative">
            <BorderBeam duration={14} delay={0.2} colorFrom="#f97316" colorTo="#eab308" borderWidth={2} />
            <div className="text-3xl font-bold text-orange-400 mb-2">{stats.recent}</div>
            <div className="text-gray-300 text-sm">Recent (2022+)</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center relative">
            <BorderBeam duration={16} delay={0.4} colorFrom="#eab308" colorTo="#22c55e" borderWidth={2} />
            <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.professional}</div>
            <div className="text-gray-300 text-sm">Professional Awards</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center relative">
            <BorderBeam duration={18} delay={0.6} colorFrom="#22c55e" colorTo="#3b82f6" borderWidth={2} />
            <div className="text-3xl font-bold text-green-400 mb-2">{stats.technical}</div>
            <div className="text-gray-300 text-sm">Certifications</div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements[selectedCategory].map((achievement, index) => (
              <div
                key={achievement.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/15 relative group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Border Beam */}
                <BorderBeam
                  duration={15 + index * 2}
                  delay={index * 0.3}
                  colorFrom={achievement.borderColors.from}
                  colorTo={achievement.borderColors.to}
                  borderWidth={2}
                />

                {/* Achievement Header */}
                <div className="mb-4">
                  <div 
                    className="w-full h-32 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${achievement.borderColors.from}, ${achievement.borderColors.to})`
                    }}
                  >
                    <achievement.icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{achievement.year}</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-gray-300">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-200 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2 mb-4">
                  {achievement.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-400 text-xs">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <div className="p-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg">
                  <h4 className="text-sm font-semibold text-white mb-1">Impact</h4>
                  <p className="text-red-200 text-xs">{achievement.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto relative">
            <BorderBeam
              duration={20}
              delay={1}
              colorFrom="#ef4444"
              colorTo="#ec4899"
              borderWidth={3}
            />
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Driven by Excellence
            </h3>
            <p className="text-gray-300 mb-6">
              Every achievement represents a commitment to pushing boundaries and delivering exceptional results in healthcare technology. The journey continues with new challenges and opportunities ahead.
            </p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore More Sections
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-400 rounded-full opacity-30 animate-pulse"
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

export default Achievements;

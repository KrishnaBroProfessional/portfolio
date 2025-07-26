import React from 'react';

const OtherProjects = ({ onBack }) => {
  const projects = [
    {
      id: 'resu-ai',
      title: 'Resu AI - Automated Resume Generator',
      description: 'AI-based automated resume generator that creates professional resumes using artificial intelligence and natural language processing.',
      technologies: ['AI/ML', 'Python', 'Natural Language Processing', 'React', 'FastAPI'],
      highlights: [
        'AI-powered resume content generation',
        'Intelligent formatting and layout optimization',
        'Industry-specific template recommendations',
        'Skills and experience extraction',
        'Professional resume templates'
      ],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500'
    },
    {
      id: 'mikrotech',
      title: 'Mikrotech Data Analysis Platform',
      description: 'Comprehensive data analysis platform for retail e-commerce data utilizing Azure Fabric, Databricks, and advanced analytics tools.',
      technologies: ['Azure Fabric', 'Databricks', 'Lakehouse', 'Dataflow', 'KQL', 'PowerBI', 'Python'],
      highlights: [
        'Advanced retail e-commerce data analysis',
        'Azure Fabric integration for data processing',
        'Databricks for machine learning workflows',
        'Lakehouse architecture implementation',
        'PowerBI reporting and visualization',
        'KQL queries for data insights'
      ],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-500'
    },
    {
      id: 'orkristra-ai',
      title: 'Orkristra AI - Agentic Chatbot',
      description: 'Persona-based Agentic AI chatbot developed on Google Cloud Platform using Vertex AI and Langchain for intelligent conversational experiences.',
      technologies: ['Google Cloud Platform', 'Vertex AI', 'Langchain', 'Python', 'AI/ML'],
      highlights: [
        'Persona-based conversational AI',
        'Agentic AI capabilities for autonomous actions',
        'GCP Vertex AI integration',
        'Langchain framework implementation',
        'Advanced natural language understanding',
        'Intelligent context management'
      ],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500'
    },
    {
      id: 'wireviewz',
      title: 'Wi-reviewz - Movie Rating Platform',
      description: 'Comprehensive movie rating platform where users can watch movie reviews for free, write reviews after sign-up, and admins can manage users, movies, and moderate reviews. Features automatic rating calculation based on user reviews.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Kubernetes', 'Microservices', 'Grafana', 'Prometheus', 'Zipkin', 'Kafka', 'Bootstrap', 'Axios', 'SweetAlert'],
      highlights: [
        'Implemented 12-factor app methodology with Spring Boot best practices',
        '3-layer testing strategy (Unit, Integration, Proxy testing)',
        'Microservices architecture with load balancing and circuit breakers',
        'Microfrontend architecture with React and responsive Bootstrap design',
        'Comprehensive monitoring with Grafana, Prometheus, and Zipkin tracing',
        'Kubernetes deployment with MySQL database',
        'Authentication & authorization system with proper validation',
        'Admin panel for user management, movie CRUD, and review moderation',
        'Automatic average rating calculation system',
        'SweetAlert notifications and error handling'
      ],
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500'
    },
    {
      id: 'interstellar-escape',
      title: 'Interstellar Escape - 3D Indie Game',
      description: 'Developed indie game with 3D graphics featuring storyline and missions using Unreal Engine with development server sponsored by Epic Games.',
      technologies: ['Unreal Engine', 'C++', 'Blueprint', '3D Graphics', 'Game Development'],
      highlights: [
        '3D graphics and immersive gameplay',
        'Compelling storyline with multiple missions',
        'Unreal Engine development',
        'Epic Games sponsored development server',
        'Indie game design and implementation',
        'Advanced 3D modeling and animation'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500'
    },
    {
      id: 'npm-lib',
      title: 'NPM Library - Mass Certificate Generator',
      description: 'Developed popular NPM library "mass_cert" - a polyglot library based on Node.js and Python for generating mass certificates for big events.',
      technologies: ['Node.js', 'Python', 'NPM', 'JavaScript', 'Certificate Generation'],
      highlights: [
        'Popular NPM library with multiple dependencies',
        'Polyglot implementation (Node.js + Python)',
        'Mass certificate generation for events',
        'Widely adopted by other libraries',
        'Automated certificate customization',
        'Scalable for large event processing'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500'
    },
    {
      id: 'wpz-chatbot',
      title: 'WPZ Chatbot - WhatsApp Multipurpose Bot',
      description: 'Multipurpose WhatsApp chatbot with utility and infotainment capabilities for enhanced user engagement and automation.',
      technologies: ['Python', 'WhatsApp API', 'NLP', 'Bot Framework', 'AI'],
      highlights: [
        'Multipurpose WhatsApp integration',
        'Utility and infotainment features',
        'Natural language processing',
        'Automated user interactions',
        'Entertainment content delivery',
        'Utility service automation'
      ],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500'
    },
    {
      id: 'careers-doorway',
      title: 'Careers Doorway - Job Portal Platform',
      description: 'Fullstack job portal webapp designed with best UI/UX practices using Figma and developed with Node.js and MongoDB.',
      technologies: ['Node.js', 'MongoDB', 'Figma', 'UI/UX Design', 'Express.js', 'React'],
      highlights: [
        'Comprehensive job portal functionality',
        'Best UI/UX design practices',
        'Figma-based design system',
        'Node.js backend development',
        'MongoDB database integration',
        'Responsive and user-friendly interface'
      ],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500'
    },
    {
      id: 'farms-online',
      title: 'Farms Online - Agricultural Solution Platform',
      description: 'Comprehensive fullstack webapp comprising warehousing solution, e-commerce platform, and IoT integration for agricultural management.',
      technologies: ['Full Stack', 'IoT', 'E-commerce', 'Database', 'Warehouse Management'],
      highlights: [
        'Warehousing solution implementation',
        'E-commerce platform for agricultural products',
        'IoT solution integration',
        'Comprehensive agricultural management',
        'End-to-end supply chain management',
        'Real-time monitoring and analytics'
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500'
    },
    {
      id: 'sims-game',
      title: 'Sims Game - Simulation Storyline Game',
      description: 'Simulation storyline game developed using Ren\'Py and Python, featuring interactive narrative and character development.',
      technologies: ['Ren\'Py', 'Python', 'Game Development', 'Interactive Fiction'],
      highlights: [
        'Simulation game mechanics',
        'Engaging storyline development',
        'Ren\'Py framework utilization',
        'Interactive narrative design',
        'Character development system',
        'Python-based game logic'
      ],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500'
    },
    {
      id: 'j2ee',
      title: 'J2EE Full Stack Microservices Application',
      description: 'Comprehensive training project built during November 2022 at UHG. Developed a complete enterprise-level application using Java Enterprise Edition technologies.',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'MySQL', 'Angular', 'Docker'],
      highlights: [
        'Built scalable microservices architecture',
        'Implemented secure REST APIs',
        'Database design and optimization',
        'Frontend integration with Angular',
        'Containerization with Docker'
      ],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500'
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio Website',
      description: 'Interactive portfolio website built with React and modern web technologies, featuring Wipro-inspired circular navigation design.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'CSS3', 'HTML5'],
      highlights: [
        'Responsive design with Tailwind CSS',
        'Interactive circular navigation',
        'Smooth animations and transitions',
        'Modern React hooks implementation',
        'Optimized performance with Vite'
      ],
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-500'
    },
    {
      id: 'mnr',
      title: 'M&R Account Projects (NGA)',
      description: 'Selected as Next Generation Associate (NGA) for M&R account projects at UHG, working on critical healthcare technology solutions.',
      technologies: ['Java', 'Spring Framework', 'Healthcare APIs', 'Cloud Technologies', 'Agile Development'],
      highlights: [
        'Selected as NGA from hundreds of associates',
        'Healthcare domain expertise',
        'Critical system implementations',
        'Team collaboration and leadership',
        'Agile development practices'
      ],
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-30 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        ← Back to Timeline
      </button>

      {/* Page content */}
      <div className="flex flex-col items-center justify-start min-h-screen px-8 py-20">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Other Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of key projects and achievements throughout my journey
          </p>
        </div>

        {/* Projects grid */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Project header */}
              <div className={`w-16 h-16 rounded-full ${project.bgColor} flex items-center justify-center mb-6 shadow-lg`}>
                <span className="text-white font-bold text-xl">
                  {project.title.split(' ')[0].charAt(0)}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key highlights */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project indicator */}
              <div className={`mt-6 h-2 rounded-full bg-gradient-to-r ${project.color} opacity-80`}></div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-300 mb-6">
              Each project has been a stepping stone in my journey, building expertise in enterprise technologies and healthcare solutions.
            </p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Back to My Journey
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

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

export default OtherProjects;

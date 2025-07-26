import React from 'react';
import { Code, Award, Building2, Rocket, Users, Zap } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';

const HowIStarted = ({ onBack, onNavigate }) => {
  const milestones = [
    {
      year: '2014',
      title: 'First Steps in Programming',
      description: 'Started learning programming fundamentals with Java and basic web technologies.',
      color: 'bg-blue-500',
      icon: Code,
      organizations: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ],
      borderColor: { from: '#3b82f6', to: '#1d4ed8' }
    },
    {
      year: 'Feb 2022',
      title: 'Graduation and Career Start',
      description: 'Completed my Graduation holding 1st rank in my institution and 17 Internships and trainings with different roles and organizations such as IIRS/ISRO, IIT kanpur ,IIT Hyderabad and Migrant Solutions.',
      color: 'bg-green-500',
      icon: Award,
      organizations: [
        { name: 'ISRO', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg' },
        { name: 'IIT', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_System_logo.svg/1200px-Indian_Institute_of_Technology_System_logo.svg.png' },
        { name: 'University', logo: 'https://cdn-icons-png.flaticon.com/512/2602/2602414.png' }
      ],
      borderColor: { from: '#10b981', to: '#059669' }
    },
    {
      year: 'May 2022',
      title: 'Wipro to UHG Journey',
      description: 'Completed internship at Wipro and became a full-time employee. In August 2022, joined UHG account.',
      color: 'bg-orange-500',
      icon: Building2,
      organizations: [
        { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png' },
        { name: 'UHG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/UnitedHealth_Group_logo.svg/1200px-UnitedHealth_Group_logo.svg.png' }
      ],
      borderColor: { from: '#f97316', to: '#ea580c' }
    },
    {
      year: 'Nov 2022',
      title: 'J2EE Full Stack Training',
      description: 'Completed training and project in J2EE fullstack microservices application.',
      color: 'bg-teal-500',
      icon: Rocket,
      organizations: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ],
      isClickable: true,
      projectType: 'j2ee',
      borderColor: { from: '#14b8a6', to: '#0d9488' }
    },
    {
      year: '2023',
      title: 'M&R Account & NGA Selection',
      description: 'Got allocated to M&R account of UHG. Our team was selected as NGA for this project out of hundreds of associates.',
      color: 'bg-red-500',
      icon: Users,
      organizations: [
        { name: 'UHG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/UnitedHealth_Group_logo.svg/1200px-UnitedHealth_Group_logo.svg.png' },
        { name: 'Healthcare', logo: 'https://cdn-icons-png.flaticon.com/512/3063/3063635.png' },
        { name: 'NGA', logo: 'https://cdn-icons-png.flaticon.com/512/2913/2913465.png' }
      ],
      borderColor: { from: '#ef4444', to: '#dc2626' }
    },
    {
      year: '2024-2025',
      title: 'Growing & Leading',
      description: 'Expanded skills in full-stack and AI/ML development, mentoring others, and driving innovation.',
      color: 'bg-indigo-500',
      icon: Zap,
      organizations: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'AI/ML', logo: 'https://cdn-icons-png.flaticon.com/512/8618/8618883.png' }
      ],
      borderColor: { from: '#6366f1', to: '#4f46e5' }
    }
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 relative overflow-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-30 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        ← Back to Home
      </button>

      {/* Page content */}
      <div className="flex flex-col items-center justify-start min-h-screen px-8 py-20">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            How I Started
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey from curiosity to becoming a software developer at UnitedHealth Group
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl w-full">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-blue-400 opacity-50"></div>
          
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-green-400 z-10"></div>
              
              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div 
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                    milestone.isClickable 
                      ? 'hover:bg-white/20 cursor-pointer border-2 border-transparent hover:border-teal-400' 
                      : 'hover:bg-white/20'
                  }`}
                  onClick={() => {
                    if (milestone.isClickable && milestone.projectType === 'j2ee') {
                      onNavigate('otherProjects');
                    }
                  }}
                >
                  {/* Magic UI Border Beam */}
                  <BorderBeam
                    size={80}
                    duration={12 + index * 2}
                    delay={index * 0.5}
                    colorFrom={milestone.borderColor.from}
                    colorTo={milestone.borderColor.to}
                    borderWidth={2}
                  />
                  
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center ${milestone.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                      <milestone.icon className="w-4 h-4 mr-2" />
                      {milestone.year}
                    </div>
                    {milestone.isClickable && (
                      <span className="text-teal-400 text-xs animate-pulse">Click to explore →</span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Organization/Skills Tags */}
                  <div className="flex flex-wrap gap-2 justify-start">
                    {milestone.organizations.map((org, orgIndex) => (
                      <span
                        key={orgIndex}
                        className="inline-flex items-center px-3 py-2 bg-white/20 text-white text-xs rounded-full border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                        style={{
                          animationDelay: `${index * 0.1 + orgIndex * 0.1}s`,
                          animation: 'fadeInScale 0.6s ease-out forwards'
                        }}
                      >
                        <img 
                          src={org.logo} 
                          alt={org.name}
                          className="w-4 h-4 mr-2 object-contain bg-white rounded-sm p-0.5"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        {org.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Continue the Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              This is just the beginning. Every day brings new challenges and opportunities to grow.
            </p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore More Sections
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30 animate-pulse"
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
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default HowIStarted;

import React, { useRef, forwardRef, useEffect, useState } from 'react';
import { Brain, Code, Palette, Server, Database, Cloud, Cog, TestTube, Layers } from 'lucide-react';
import { AnimatedBeam } from './magicui/animated-beam';
import { BorderBeam } from './magicui/border-beam';

// Create a Circle component following the sample pattern
const Circle = forwardRef(({ className, children, style }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center rounded-full cursor-pointer transform transition-all duration-300 hover:scale-110 z-10 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Skills = ({ onBack }) => {
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  
  // Use effect to ensure DOM is ready before rendering beams
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500); // Wait for animations to settle
    return () => clearTimeout(timer);
  }, []);
  
  // Create individual refs for each category header (following sample pattern)
  const aiHeaderRef = useRef(null);
  const fullstackHeaderRef = useRef(null);
  const frontendHeaderRef = useRef(null);
  const designHeaderRef = useRef(null);
  const backendHeaderRef = useRef(null);
  const languagesHeaderRef = useRef(null);
  const databasesHeaderRef = useRef(null);
  const cloudHeaderRef = useRef(null);
  const devopsHeaderRef = useRef(null);
  const testingHeaderRef = useRef(null);

  // Create individual refs for each skill circle (sample approach)
  const skill1Ref = useRef(null);
  const skill2Ref = useRef(null);
  const skill3Ref = useRef(null);
  const skill4Ref = useRef(null);
  const skill5Ref = useRef(null);
  const skill6Ref = useRef(null);
  const skill7Ref = useRef(null);
  const skill8Ref = useRef(null);
  const skill9Ref = useRef(null);
  const skill10Ref = useRef(null);
  const skill11Ref = useRef(null);
  const skill12Ref = useRef(null);
  const skill13Ref = useRef(null);
  const skill14Ref = useRef(null);
  const skill15Ref = useRef(null);
  const skill16Ref = useRef(null);
  const skill17Ref = useRef(null);
  const skill18Ref = useRef(null);
  const skill19Ref = useRef(null);
  const skill20Ref = useRef(null);
  const skill21Ref = useRef(null);
  const skill22Ref = useRef(null);
  const skill23Ref = useRef(null);
  const skill24Ref = useRef(null);
  const skill25Ref = useRef(null);
  const skill26Ref = useRef(null);
  const skill27Ref = useRef(null);
  const skill28Ref = useRef(null);
  const skill29Ref = useRef(null);
  const skill30Ref = useRef(null);
  const skill31Ref = useRef(null);
  const skill32Ref = useRef(null);
  const skill33Ref = useRef(null);
  const skill34Ref = useRef(null);
  const skill35Ref = useRef(null);
  const skill36Ref = useRef(null);
  const skill37Ref = useRef(null);
  const skill38Ref = useRef(null);
  const skill39Ref = useRef(null);
  const skill40Ref = useRef(null);
  const skill41Ref = useRef(null);
  const skill42Ref = useRef(null);
  const skill43Ref = useRef(null);
  const skill44Ref = useRef(null);
  const skill45Ref = useRef(null);
  const skill46Ref = useRef(null);
  const skill47Ref = useRef(null);
  const skill48Ref = useRef(null);
  const skill49Ref = useRef(null);
  const skill50Ref = useRef(null);
  const skill51Ref = useRef(null);
  const skill52Ref = useRef(null);
  const skill53Ref = useRef(null);
  const skill54Ref = useRef(null);
  const skill55Ref = useRef(null);
  const skill56Ref = useRef(null);
  const skill57Ref = useRef(null);
  const skill58Ref = useRef(null);
  const skill59Ref = useRef(null);
  const skill60Ref = useRef(null);

  // Map category IDs to refs
  const headerRefs = {
    'ai': aiHeaderRef,
    'fullstack': fullstackHeaderRef,
    'frontend': frontendHeaderRef,
    'design': designHeaderRef,
    'backend': backendHeaderRef,
    'languages': languagesHeaderRef,
    'databases': databasesHeaderRef,
    'cloud': cloudHeaderRef,
    'devops': devopsHeaderRef,
    'testing': testingHeaderRef
  };

  // Map skill indices to refs (create a mapping function)
  const getSkillRef = (index) => {
    const skillRefs = [
      skill1Ref, skill2Ref, skill3Ref, skill4Ref, skill5Ref, skill6Ref, skill7Ref, skill8Ref, skill9Ref, skill10Ref,
      skill11Ref, skill12Ref, skill13Ref, skill14Ref, skill15Ref, skill16Ref, skill17Ref, skill18Ref, skill19Ref, skill20Ref,
      skill21Ref, skill22Ref, skill23Ref, skill24Ref, skill25Ref, skill26Ref, skill27Ref, skill28Ref, skill29Ref, skill30Ref,
      skill31Ref, skill32Ref, skill33Ref, skill34Ref, skill35Ref, skill36Ref, skill37Ref, skill38Ref, skill39Ref, skill40Ref,
      skill41Ref, skill42Ref, skill43Ref, skill44Ref, skill45Ref, skill46Ref, skill47Ref, skill48Ref, skill49Ref, skill50Ref,
      skill51Ref, skill52Ref, skill53Ref, skill54Ref, skill55Ref, skill56Ref, skill57Ref, skill58Ref, skill59Ref, skill60Ref
    ];
    return skillRefs[index] || null;
  };

  const skillCategories = [
    {
      id: 'ai',
      title: 'AI Technology',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500',
      borderColors: { from: '#a855f7', to: '#ec4899' },
      skills: [
        { name: 'NLP', logo: 'https://cdn-icons-png.flaticon.com/512/8618/8618883.png' },
        { name: 'Computer Vision', logo: 'https://cdn-icons-png.flaticon.com/512/4341/4341134.png' },
        { name: 'LLM/LRM', logo: 'https://cdn-icons-png.flaticon.com/512/8637/8637101.png' },
        { name: 'GENAI', logo: 'https://cdn-icons-png.flaticon.com/512/11865/11865331.png' },
        { name: 'ML/DL', logo: 'https://cdn-icons-png.flaticon.com/512/8618/8618857.png' },
        { name: 'Analytics', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' }
      ]
    },
    {
      id: 'fullstack',
      title: 'Fullstack Architecture',
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      borderColors: { from: '#3b82f6', to: '#06b6d4' },
      skills: [
        { name: 'MEAN', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MERN', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'LAMP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'JAM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'J2EE', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Microservices', logo: 'https://cdn-icons-png.flaticon.com/512/9496/9496773.png' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Technology',
      icon: Palette,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500',
      borderColors: { from: '#22c55e', to: '#10b981' },
      skills: [
        { name: 'SCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'Svelte', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JSP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
      ]
    },
    {
      id: 'design',
      title: 'Prototype Designing',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500',
      borderColors: { from: '#ec4899', to: '#f43f5e' },
      skills: [
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Balsamiq', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
        { name: 'Adobe XD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
        { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Technology',
      icon: Server,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500',
      borderColors: { from: '#f97316', to: '#ef4444' },
      skills: [
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
        { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'KOA', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Spring Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Hibernate', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' }
      ]
    },
    {
      id: 'languages',
      title: 'Core Languages',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500',
      borderColors: { from: '#6366f1', to: '#a855f7' },
      skills: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Go Lang', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Groovy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg' },
        { name: 'Rust', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg' },
        { name: 'Mojo', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: Database,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500',
      borderColors: { from: '#14b8a6', to: '#06b6d4' },
      skills: [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        { name: 'JSON', logo: 'https://cdn-icons-png.flaticon.com/512/136/136443.png' },
        { name: 'PineCone', logo: 'https://cdn-icons-png.flaticon.com/512/9496/9496773.png' },
        { name: 'Neo4j', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud',
      icon: Cloud,
      color: 'from-sky-500 to-blue-500',
      bgColor: 'bg-sky-500',
      borderColors: { from: '#0ea5e9', to: '#3b82f6' },
      skills: [
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Oracle Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
        { name: 'IBM', logo: 'https://cdn-icons-png.flaticon.com/512/882/882681.png' },
        { name: 'Salesforce', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
        { name: 'IICS', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'Kong', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: Cog,
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-500',
      borderColors: { from: '#6b7280', to: '#64748b' },
      skills: [
        { name: 'Github Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Podman', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Insomnia', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'ArgoCD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' }
      ]
    },
    {
      id: 'testing',
      title: 'Testing Frameworks',
      icon: TestTube,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500',
      borderColors: { from: '#f59e0b', to: '#f97316' },
      skills: [
        { name: 'Playwright + Allure', logo: 'https://playwright.dev/img/playwright-logo.svg' },
        { name: 'Selenium + Cucumber', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
        { name: 'Junit + Mockito', logo: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
        { name: 'Karma + Jasmine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg' },
        { name: 'Jest + Enzyme', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
        { name: 'TOSCA', logo: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'WireMock Chaos Testing', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
        { name: 'PyTest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg' }
      ]
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
        ← Back to Home
      </button>

      {/* Page content */}
      <div ref={containerRef} className="flex flex-col items-center justify-start min-h-screen px-8 py-20">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of technologies, frameworks, and tools I've mastered throughout my journey
          </p>
        </div>

        {/* Skills Grid - 2 Column Satellite Layout */}
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {skillCategories.map((category, categoryIndex) => {
              // Calculate global skill index for this category
              let globalSkillIndex = 0;
              for (let i = 0; i < categoryIndex; i++) {
                globalSkillIndex += skillCategories[i].skills.length;
              }
              
              return (
                <div
                  key={category.id}
                  className="relative mb-16 flex justify-center"
                  style={{
                    animationDelay: `${categoryIndex * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Container for the satellite layout */}
                  <div className="relative w-[500px] h-[400px]">
                    {/* Category Title Circle - Center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Circle
                        ref={headerRefs[category.id]}
                        className="w-32 h-32 shadow-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${category.borderColors.from}, ${category.borderColors.to})`,
                          boxShadow: `0 0 40px ${category.borderColors.from}60`
                        }}
                      >
                        {/* Border Beam for Header */}
                        <BorderBeam
                          duration={20 + categoryIndex * 3}
                          delay={categoryIndex * 0.5}
                          colorFrom={category.borderColors.from}
                          colorTo={category.borderColors.to}
                          borderWidth={3}
                        />
                        
                        <div className="text-center">
                          <category.icon className="w-8 h-8 text-white mb-2 mx-auto" />
                          <h3 className="text-white font-bold text-sm leading-tight">
                            {category.title}
                          </h3>
                        </div>
                      </Circle>
                    </div>

                    {/* Skills Circles arranged as satellites around center */}
                    {category.skills.map((skill, skillIndex) => {
                      // Calculate position for satellite circles in a smaller radius for 2-column layout
                      const angle = (skillIndex * 360) / category.skills.length;
                      const radian = (angle * Math.PI) / 180;
                      const radius = 160; // Smaller radius for 2-column layout
                      const x = Math.cos(radian) * radius;
                      const y = Math.sin(radian) * radius;
                      const currentGlobalIndex = globalSkillIndex + skillIndex;
                      
                      return (
                        <div key={skillIndex}>
                          {/* Skill Satellite Circle */}
                          <Circle
                            ref={getSkillRef(currentGlobalIndex)}
                            className="absolute w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 group hover:bg-white/20 overflow-hidden"
                            style={{
                              left: `calc(50% + ${x}px)`,
                              top: `calc(50% + ${y}px)`,
                              transform: 'translate(-50%, -50%)',
                              animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.15}s`,
                              animation: 'fadeInScale 0.8s ease-out forwards'
                            }}
                          >
                            {/* Border Beam for Skill Circle */}
                            <BorderBeam
                              duration={12 + skillIndex * 2}
                              delay={skillIndex * 0.3}
                              colorFrom={category.borderColors.from}
                              colorTo={category.borderColors.to}
                              borderWidth={2}
                            />
                            
                            <div className="text-center p-1">
                              <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-6 h-6 object-contain bg-white rounded-md p-0.5 mx-auto mb-1 group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.src = 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png';
                                }}
                              />
                              <span className="text-white text-xs font-medium group-hover:text-purple-200 transition-colors duration-300 block leading-tight">
                                {skill.name}
                              </span>
                            </div>
                          </Circle>
                        </div>
                      );
                    })}

                    {/* Orbiting particles effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => {
                        const orbitAngle = (i * 60);
                        const orbitRadian = (orbitAngle * Math.PI) / 180;
                        const orbitRadius = 120;
                        const orbitX = Math.cos(orbitRadian) * orbitRadius;
                        const orbitY = Math.sin(orbitRadian) * orbitRadius;
                        
                        return (
                          <div
                            key={i}
                            className="absolute w-1 h-1 rounded-full opacity-60"
                            style={{
                              left: `calc(50% + ${orbitX}px)`,
                              top: `calc(50% + ${orbitY}px)`,
                              background: category.borderColors.from,
                              animation: `orbit-${categoryIndex} ${8 + i}s linear infinite`,
                              animationDelay: `${i * 0.3}s`
                            }}
                          />
                        );
                      })}
                    </div>

                    {/* AnimatedBeam connections from center to satellites - moved outside to prevent offset */}
                    {/* Will be rendered separately after all elements are positioned */}

                    {/* Category Progress Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center">
                      <div className={`h-1 w-32 rounded-full bg-gradient-to-r`} 
                           style={{
                             background: `linear-gradient(to right, ${category.borderColors.from}, ${category.borderColors.to})`
                           }}>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AnimatedBeam connections - Render after all elements are positioned */}
        {isReady && (
          <div className="absolute inset-0 pointer-events-none">
            {skillCategories.map((category, categoryIndex) => {
              // Calculate global skill index for this category
              let globalSkillIndex = 0;
              for (let i = 0; i < categoryIndex; i++) {
                globalSkillIndex += skillCategories[i].skills.length;
              }
              
              return category.skills.map((skill, skillIndex) => {
                const currentGlobalIndex = globalSkillIndex + skillIndex;
                const skillRef = getSkillRef(currentGlobalIndex);
                const headerRef = headerRefs[category.id];
                
                return (
                  headerRef && skillRef && (
                    <AnimatedBeam
                      key={`beam-${category.id}-${skillIndex}`}
                      containerRef={containerRef}
                      fromRef={headerRef}
                      toRef={skillRef}
                      duration={3 + Math.random() * 1}
                      delay={skillIndex * 0.1}
                      pathColor={category.borderColors.from}
                      pathOpacity={0.6}
                      gradientStartColor={category.borderColors.from}
                      gradientStopColor={category.borderColors.to}
                      pathWidth={2}
                    />
                  )
                );
              });
            })}
          </div>
        )}

        {/* Bottom Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">60+</div>
            <div className="text-gray-300 text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">11</div>
            <div className="text-gray-300 text-sm">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Learning</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Innovation
            </h3>
            <p className="text-gray-300 mb-6">
              Technology evolves rapidly, and so do I. These skills represent my current expertise, but I'm always exploring new technologies and frameworks.
            </p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore More Sections
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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

        @keyframes orbit-0 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }

        @keyframes orbit-1 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(125px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(125px) rotate(-360deg);
          }
        }

        @keyframes orbit-2 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(130px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(130px) rotate(-360deg);
          }
        }

        @keyframes orbit-3 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(115px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(115px) rotate(-360deg);
          }
        }

        @keyframes orbit-4 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(125px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(125px) rotate(-360deg);
          }
        }

        @keyframes orbit-5 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(135px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(135px) rotate(-360deg);
          }
        }

        @keyframes orbit-6 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }

        @keyframes orbit-7 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(128px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(128px) rotate(-360deg);
          }
        }

        @keyframes orbit-8 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(122px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(122px) rotate(-360deg);
          }
        }

        @keyframes orbit-9 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(127px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(127px) rotate(-360deg);
          }
        }

        @keyframes orbit-10 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(132px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(132px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;

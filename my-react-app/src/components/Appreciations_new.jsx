import React, { useState } from 'react';
import { Heart, MessageSquare, Users, Star, Quote, Calendar, User, Building2 } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';
import { TracingBeam } from './ui/tracing-beam';
import Footer from './Footer';

const Appreciations = ({ onBack }) => {
  const [selectedType, setSelectedType] = useState('all');

  const appreciations = [
    {
      id: 1,
      type: 'manager',
      name: 'JANNU LAVANYA',
      role: 'Manager',
      company: 'UnitedHealth Group',
      date: '2024-07-27',
      message: "Krishna is a Junior rookie working completed a POC on aiops by developing a chatbot that uses artificial intelligence and natural language processing to enhance customer service and satisfaction. Krishna Worked on • Automation tool for security vulnerability report generation that reduces the manual work effort from one day to just two minutes • He Strengthened the monitoring for our team by developing a vbf checkout tool that tracks the performance and availability of our systems and applications. • He have great skills in using monitoring tools such as dynatrace, splunk, and openlens. Krishna done very well in delivering the features of • Handled multiple task at a Time. Krishna Received customer appreciation as a part of successful release.",
      project: 'AIOps Chatbot & Security Automation',
      rating: 5,
      avatar: '👩‍💼',
      bgColor: 'from-green-500 to-blue-500',
      borderColors: { from: '#22c55e', to: '#3b82f6' }
    },
    {
      id: 2,
      type: 'manager',
      name: 'R Rajkishore Kishore',
      role: 'Manager',
      company: 'UnitedHealth Group',
      date: '2024-07-15',
      message: "He has delivered his deliverables on time, and the client appreciated his work. He is one of the best talents I mentored as a next-gen resource, and he got into the billable opportunity for DevOps monitoring work in the project. He is always keen to learn new technologies required for the project. However, he needs to focus on what he wants to be next year based on his career ambitions. He should focus on becoming a full-stack Java engineer with expertise in any cloud.",
      project: 'DevOps Monitoring & Next-Gen Development',
      rating: 5,
      avatar: '👨‍💼',
      bgColor: 'from-blue-500 to-cyan-500',
      borderColors: { from: '#3b82f6', to: '#06b6d4' }
    },
    {
      id: 3,
      type: 'manager',
      name: 'JANNU LAVANYA',
      role: 'Manager - Digital Acquisition POD',
      company: 'UnitedHealth Group',
      date: '2024-06-20',
      message: "Krishna is a Very Strong resource and Talented resource of Digital Acquistion POD. Krishna is Been Taking the command and full responsibility of the deliverables and ensuring quality. Krsihna have completed 19courses in Udemy. He gained30+ Skills. Krishna achieved 7certifications and accredations: • Salesforce Associate Engineer • AWS Certified Cloud Practitioner • Azure Odessys • Azure NLP certified • Azure Intelligent Document certified • IBM Cloud Advocate Essentials • Earned several Badges in Google Cloud Skill boost Understanding & clarifying business requirements and making the customer is satisfied with the high quality work.",
      project: 'Digital Acquisition & Multi-Cloud Certifications',
      rating: 5,
      avatar: '👩‍💼',
      bgColor: 'from-purple-500 to-pink-500',
      borderColors: { from: '#a855f7', to: '#ec4899' }
    },
    {
      id: 4,
      type: 'manager',
      name: 'Valerian Joseph Cuthinha',
      role: 'L1 Manager',
      company: 'UnitedHealth Group',
      date: '2024-05-10',
      message: "Good job on completing training.next Focus is to get into a billable role within the account or other accounts by next quarter.Profile to be updated 100% with relevant training and project skills for better visibility on project availability.",
      project: 'Training Completion & Career Development',
      rating: 4,
      avatar: '👨‍💼',
      bgColor: 'from-orange-500 to-red-500',
      borderColors: { from: '#f97316', to: '#ef4444' }
    },
    {
      id: 5,
      type: 'manager',
      name: 'R Rajkishore Kishore',
      role: 'Manager',
      company: 'UnitedHealth Group',
      date: '2022-04-15',
      message: "Krishna Gupta is one excellent performer in Wase and TeamRBW candidates UHG project specific training program. • He has completed phase-1 training and later undergone the training for Phase 2 training. • He lead the team for capstone project and complete with industry standard. • He performed well and completed his training on JBE and microservices and he is going to part UHG project by april or max May 1 week. • In upcoming quarter focus to completed the certificates based on the trained skillset and he already completed couple certificates too. • He should focus get in to the project and leverage his technical skill to deliver his deliverables on time once he get in to the project. Overall is good performer and scale up his skill set what is required to get to the project. Keep your work and stay focus on outcome......",
      project: 'UHG Training Program & Team Leadership',
      rating: 5,
      avatar: '👨‍💼',
      bgColor: 'from-indigo-500 to-purple-500',
      borderColors: { from: '#6366f1', to: '#a855f7' }
    }
  ];

  const types = [
    { id: 'all', name: 'All Feedback', icon: MessageSquare, count: appreciations.length },
    { id: 'manager', name: 'Managers', icon: Users, count: appreciations.filter(a => a.type === 'manager').length },
    { id: 'colleague', name: 'Colleagues', icon: User, count: appreciations.filter(a => a.type === 'colleague').length },
    { id: 'client', name: 'Clients', icon: Building2, count: appreciations.filter(a => a.type === 'client').length }
  ];

  const filteredAppreciations = selectedType === 'all' 
    ? appreciations 
    : appreciations.filter(a => a.type === selectedType);

  const getStats = () => {
    const totalRating = appreciations.reduce((sum, a) => sum + a.rating, 0);
    const avgRating = (totalRating / appreciations.length).toFixed(1);
    const uniqueProjects = [...new Set(appreciations.map(a => a.project))].length;
    const uniqueCompanies = [...new Set(appreciations.map(a => a.company))].length;
    
    return {
      average: avgRating,
      projects: uniqueProjects,
      companies: uniqueCompanies,
      total: appreciations.length
    };
  };

  const stats = getStats();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-800 relative overflow-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]"></div>
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-30 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        ← Back to Home
      </button>

      <TracingBeam className="px-6">
        {/* Page content */}
        <div className="flex flex-col items-center justify-start min-h-screen px-8 pt-20">
        {/* Page title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
            Appreciations & Testimonials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Feedback from managers, colleagues, and clients who have experienced my work firsthand
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center relative">
            <BorderBeam duration={12} delay={0} colorFrom="#eab308" colorTo="#f59e0b" borderWidth={2} />
            <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.average}</div>
            <div className="text-gray-300 text-sm">Average Rating</div>
            <div className="flex justify-center mt-2">
              {renderStars(Math.round(stats.average))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center relative">
            <BorderBeam duration={14} delay={0.2} colorFrom="#f59e0b" colorTo="#f97316" borderWidth={2} />
            <div className="text-3xl font-bold text-amber-400 mb-2">{stats.total}</div>
            <div className="text-gray-300 text-sm">Total Reviews</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center relative">
            <BorderBeam duration={16} delay={0.4} colorFrom="#f97316" colorTo="#22c55e" borderWidth={2} />
            <div className="text-3xl font-bold text-orange-400 mb-2">{stats.projects}</div>
            <div className="text-gray-300 text-sm">Projects Reviewed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center relative">
            <BorderBeam duration={18} delay={0.6} colorFrom="#22c55e" colorTo="#3b82f6" borderWidth={2} />
            <div className="text-3xl font-bold text-green-400 mb-2">{stats.companies}</div>
            <div className="text-gray-300 text-sm">Organizations</div>
          </div>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedType === type.id
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <type.icon className="w-5 h-5" />
              <span>{type.name}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{type.count}</span>
            </button>
          ))}
        </div>

        {/* Appreciations Grid */}
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAppreciations.map((appreciation, index) => (
              <div
                key={appreciation.id}
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
                  colorFrom={appreciation.borderColors.from}
                  colorTo={appreciation.borderColors.to}
                  borderWidth={2}
                />

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-yellow-400 mb-4" />

                {/* Message */}
                <p className="text-gray-300 text-sm mb-6 leading-relaxed italic">
                  "{appreciation.message}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(appreciation.rating)}
                </div>

                {/* Author Info */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${appreciation.borderColors.from}, ${appreciation.borderColors.to})`
                      }}
                    >
                      {appreciation.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{appreciation.name}</h4>
                      <p className="text-gray-400 text-sm">{appreciation.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {appreciation.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(appreciation.date)}
                    </span>
                  </div>
                  
                  <div className="mt-2 text-xs">
                    <span className="bg-white/10 px-2 py-1 rounded-full text-gray-300">
                      {appreciation.project}
                    </span>
                  </div>
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
              colorFrom="#eab308"
              colorTo="#f59e0b"
              borderWidth={3}
            />
            
            <Heart className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Building Relationships Through Excellence
            </h3>
            <p className="text-gray-300 mb-6">
              These testimonials represent more than just professional feedback—they reflect the meaningful relationships built through collaborative success and shared commitment to healthcare innovation.
            </p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30 animate-pulse"
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
      </TracingBeam>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Appreciations;

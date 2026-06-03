import { useState } from 'react';

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const newsData = [
    {
      id: 1,
      tag: 'Governance',
      tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      headline: 'NJP Launches Smart Governance Mission',
      shortArticle: 'The NextGen Janata Party officially launched its Smart Governance Mission, a comprehensive initiative aimed at digitizing public services and reducing administrative delays. The program focuses on online service delivery, AI-assisted grievance systems, and faster citizen support mechanisms. The mission seeks to improve efficiency, transparency, and accessibility while reducing unnecessary paperwork and bureaucratic hurdles.'
    },
    {
      id: 2,
      tag: 'Youth',
      tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      headline: 'Youth Participation Reaches Record Levels',
      shortArticle: "NJP's youth engagement programs have witnessed unprecedented participation from students, young professionals, and aspiring entrepreneurs across the country. The initiative encourages active involvement in policy discussions, innovation projects, and community development programs, ensuring that future leaders contribute directly to nation-building efforts."
    },
    {
      id: 3,
      tag: 'Economy',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      headline: 'Startup Growth Mission Attracts Thousands of Applications',
      shortArticle: 'The Startup Growth Mission has received overwhelming interest from aspiring entrepreneurs. The program offers mentorship opportunities, business development guidance, and access to innovation networks designed to support emerging startups. The initiative aims to strengthen the entrepreneurial ecosystem and encourage innovation-driven economic growth.'
    },
    {
      id: 4,
      tag: 'Education',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      headline: 'National Skill Development Initiative Announced',
      shortArticle: 'To prepare citizens for the future economy, NJP has introduced a large-scale skill development initiative focusing on coding, artificial intelligence, communication skills, financial literacy, and entrepreneurship. The program is designed to improve employability and bridge the gap between education and industry requirements.'
    },
    {
      id: 5,
      tag: 'Education',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      headline: 'AI-Powered Education Framework Revealed',
      shortArticle: 'NJP unveiled its proposed AI-Powered Education Framework, which aims to integrate technology into classrooms through interactive learning tools, digital content, and personalized educational support systems. The framework seeks to make learning more engaging, accessible, and practical for students.'
    },
    {
      id: 6,
      tag: 'Technology',
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      headline: 'Digital Complaint Resolution System Achieves 99% Efficiency',
      shortArticle: 'The NJP Digital Complaint Resolution System has reported significant improvements in citizen service delivery through automated tracking and faster response mechanisms. The system allows citizens to monitor complaint status in real time, ensuring accountability and transparency throughout the resolution process.'
    },
    {
      id: 7,
      tag: 'Infrastructure',
      tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      headline: 'National Free WiFi Campus Initiative Gains Momentum',
      shortArticle: 'Educational institutions participating in the Free WiFi Campus Initiative have reported improved access to learning resources and digital research tools. The program aims to support students by providing reliable internet connectivity within educational campuses and public learning spaces.'
    },
    {
      id: 8,
      tag: 'Entertainment',
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      headline: 'Gaming & Esports Development Council Formed',
      shortArticle: 'Recognizing the rapid growth of the gaming industry, NJP announced the formation of a Gaming & Esports Development Council. The council will focus on skill development, tournament organization, creator support programs, and promoting esports as a legitimate professional industry.'
    },
    {
      id: 9,
      tag: 'Technology',
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      headline: 'Citizens Support One Nation Digital ID Platform',
      shortArticle: 'Public feedback on the proposed One Nation Digital ID Platform has been largely positive. The platform aims to simplify access to government services through a unified and secure digital identity system. The initiative seeks to reduce administrative complexity while improving user convenience.'
    },
    {
      id: 10,
      tag: 'Technology',
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      headline: 'Innovation Summit 2030 Draws Global Attention',
      shortArticle: 'The NJP Innovation Summit 2030 brought together students, innovators, entrepreneurs, and technology experts to discuss the future of governance, digital transformation, and sustainable economic development. The summit highlighted emerging technologies and their potential role in creating efficient public administration systems.'
    },
    {
      id: 11,
      tag: 'Healthcare',
      tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
      headline: 'Mental Wellness Program Expanded Nationwide',
      shortArticle: 'NJP announced the expansion of its Mental Wellness Program to provide increased access to counseling services, awareness campaigns, and stress management resources. The initiative focuses on supporting students, working professionals, and communities facing modern lifestyle challenges.'
    },
    {
      id: 12,
      tag: 'Media',
      tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
      headline: 'Meme Campaign Becomes Unexpected Success',
      shortArticle: "NJP's digital awareness campaign gained significant online attention through creative content, relatable humor, and youth-focused messaging. The campaign demonstrated how modern communication strategies can effectively engage younger audiences while promoting meaningful discussions about innovation and governance."
    }
  ];

  const categories = ['All', 'Governance', 'Youth', 'Economy', 'Education', 'Technology', 'Infrastructure', 'Healthcare'];

  const filteredNews = activeFilter === 'All' 
    ? newsData 
    : newsData.filter(item => item.tag === activeFilter);

  return (
    <div className="min-h-screen pt-24 px-6 relative overflow-hidden pb-12">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold gradient-text mb-4 font-['Space_Grotesk'] text-center">
          News & Media
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay updated with the latest announcements, updates, and milestones of the NextGen Janata Party.
        </p>

        {/* Categories / Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white border-transparent shadow-lg scale-105'
                  : 'glass text-gray-600 border-gray-200/50 hover:border-[#3B82F6]/30 hover:text-[#3B82F6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Headlines List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              onClick={() => setSelectedNews(news)}
              className="glass-card p-6 flex flex-col justify-between hover:scale-[1.03] hover:border-[#3B82F6]/30 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${news.tagColor} mb-4`}>
                  {news.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-800 leading-snug group-hover:text-[#3B82F6] transition-colors duration-300 font-['Space_Grotesk']">
                  {news.headline}
                </h3>
              </div>
              <div className="mt-6 flex items-center text-sm font-semibold text-[#3B82F6] group-hover:translate-x-1 transition-transform duration-300">
                Read Article
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal Overlay */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-fadeIn">
          <div className="glass-card max-w-2xl w-full p-8 relative rounded-2xl border border-white/20 shadow-2xl animate-scaleUp max-h-[85vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 hover:bg-gray-100/50 p-2 rounded-full transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Body */}
            <div>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${selectedNews.tagColor} mb-4`}>
                {selectedNews.tag}
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-['Space_Grotesk'] leading-tight pr-6">
                {selectedNews.headline}
              </h2>
              
              <div className="text-gray-700 leading-relaxed text-lg mb-8 border-l-4 border-[#3B82F6] pl-4 py-2 bg-[#3B82F6]/5 rounded-r-lg">
                {selectedNews.shortArticle}
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <span className="text-sm text-gray-500">NextGen Janata Party &copy; 2026</span>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="btn-primary text-sm py-2 px-6"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;

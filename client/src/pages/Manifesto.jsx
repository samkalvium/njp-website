import { useState } from 'react';
import ManifestoCard from '../components/ManifestoCard';

const Manifesto = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const manifestoData = [
    {
      category: 'Education',
      points: [
        'Free high-quality education for all children up to age 18',
        'Modern curriculum with coding, AI, and financial literacy',
        'Digital classrooms in every government school',
        'Scholarship programs for higher education',
        'Vocational training centers in every district'
      ]
    },
    {
      category: 'Economy',
      points: [
        'Startup funding of ₹10 lakh for young entrepreneurs',
        'Tax benefits for small businesses and MSMEs',
        'Digital payment infrastructure in rural areas',
        'Job creation through green energy initiatives',
        'Support for gig workers and freelancers'
      ]
    },
    {
      category: 'Technology',
      points: [
        'High-speed internet in every village',
        'Digital governance with transparent systems',
        'AI-powered public services',
        'Cybersecurity education for citizens',
        'Smart city initiatives across India'
      ]
    },
    {
      category: 'Healthcare',
      points: [
        'Universal health coverage for all citizens',
        'Digital health records accessible via mobile',
        'Telemedicine services in remote areas',
        'Mental health support and awareness programs',
        'Affordable medicines and diagnostic services'
      ]
    },
    {
      category: 'Infrastructure',
      points: [
        'World-class roads and transportation',
        '24/7 electricity and water supply',
        'Sustainable urban development',
        'Affordable housing for all',
        'Green spaces and parks in every city'
      ]
    },
    {
      category: 'Governance',
      points: [
        'Real-time tracking of politician attendance',
        'Digital complaint resolution within 48 hours',
        'Transparent budget allocation and spending',
        'Citizen participation in policy making',
        'Anti-corruption measures with blockchain technology'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold gradient-text mb-4 font-['Space_Grotesk'] text-center">
          Our Manifesto
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          A roadmap for India's future
        </p>

        {/* Grid layout for selector cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manifestoData.map((item, index) => (
            <ManifestoCard
              key={index}
              category={item.category}
              onClick={() => setActiveCategory(item)}
            />
          ))}
        </div>
      </div>

      {/* Premium Animated Modal */}
      {activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
            onClick={() => setActiveCategory(null)}
          />
          
          {/* Glassmorphic Modal Panel */}
          <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(30,41,59,0.25)] z-10 transform scale-100 transition-all duration-300 animate-scale-up overflow-hidden">
            {/* Glowing Accent Orbs in Backdrop */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div>
                <h2 className="text-3xl font-bold gradient-text font-['Space_Grotesk']">
                  {activeCategory.category}
                </h2>
                <p className="text-sm text-gray-500 font-medium mt-1">Our detailed roadmap & commitments</p>
              </div>
              <button 
                onClick={() => setActiveCategory(null)}
                className="text-gray-400 hover:text-gray-600 transition-all duration-200 p-2 rounded-full hover:bg-slate-100/60"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Points List */}
            <div className="relative z-10 max-h-[60vh] overflow-y-auto pr-1">
              <ul className="space-y-4">
                {activeCategory.points.map((point, index) => (
                  <li 
                    key={index} 
                    className="flex items-start bg-slate-50/70 hover:bg-slate-100/70 border border-slate-100 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span className="text-[#10B981] mr-4 text-lg font-bold flex-shrink-0">✦</span>
                    <span className="text-gray-700 leading-relaxed font-medium text-[15px]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Footer */}
            <div className="mt-8 flex justify-end relative z-10">
              <button
                onClick={() => setActiveCategory(null)}
                className="btn-primary py-2.5 px-8 text-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manifesto;

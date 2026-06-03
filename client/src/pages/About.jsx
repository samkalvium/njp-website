const About = () => {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold gradient-text mb-12 font-['Space_Grotesk'] text-center">
          About NJP
        </h1>

        {/* Who We Are */}
        <section className="glass-card p-8 mb-8">
          <h2 className="text-3xl font-bold text-[#3B82F6] mb-4 font-['Space_Grotesk']">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            NextGen Janata Party is not just another political party. We are a movement born from the frustration 
            of millions who believe that politics can be different. We combine technology, transparency, and 
            innovative thinking to create a government that actually works for the people.
          </p>
        </section>

        {/* Vision */}
        <section className="glass-card p-8 mb-8">
          <h2 className="text-3xl font-bold text-[#3B82F6] mb-4 font-['Space_Grotesk']">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To build India where every citizen has access to world-class infrastructure, quality education, 
            healthcare, and opportunities. A nation where technology empowers governance and transparency 
            is the norm, not the exception.
          </p>
        </section>

        {/* Mission */}
        <section className="glass-card p-8 mb-8">
          <h2 className="text-3xl font-bold text-[#3B82F6] mb-4 font-['Space_Grotesk']">Our Mission</h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-[#10B981] mr-3 text-2xl">🚀</span>
              <span>Transform governance through digital innovation and smart policies</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#10B981] mr-3 text-2xl">🎓</span>
              <span>Revolutionize education with modern curriculum and accessible learning</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#10B981] mr-3 text-2xl">💡</span>
              <span>Empower startups and entrepreneurs with funding and support</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#10B981] mr-3 text-2xl">🤝</span>
              <span>Build inclusive communities where every voice matters</span>
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold text-[#3B82F6] mb-8 font-['Space_Grotesk']">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: '2024', event: 'NJP Founded by young visionaries' },
              { year: '2025', event: '1 Million supporters joined online' },
              { year: '2026', event: 'Contesting first elections across 5 states' },
              { year: 'Future', event: 'Transforming India, one policy at a time' }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="glass p-4 rounded-lg text-center min-w-[100px] mr-6">
                  <span className="text-2xl font-bold gradient-text font-['Space_Grotesk']">{item.year}</span>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

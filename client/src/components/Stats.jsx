const Stats = () => {
  const stats = [
    { number: '10,00,000+', label: 'Future Supporters' },
    { number: '5000+', label: 'Startup Ideas Funded' },
    { number: '99%', label: 'Faster Complaint Resolution' },
    { number: '24/7', label: 'Chai Availability Mission' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-8 text-center">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-['Space_Grotesk']">
                {stat.number}
              </h3>
              <p className="text-gray-700 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

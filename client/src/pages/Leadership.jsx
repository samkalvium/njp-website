import LeaderCard from '../components/LeaderCard';

const Leadership = () => {
  const leaders = [
    {
      name: 'Neha',
      role: 'Chief Prosperity Officer (CPO)',
      tagline: 'Building a Nation Where Opportunity Leads to Prosperity',
      description:
        'The Chief Prosperity Officer serves as the principal architect of the nation’s economic vision, ensuring that every policy, reform, and initiative contributes to improving the quality of life for citizens. The mission is to ensure that economic growth is measured by the opportunities, security, and prosperity experienced by every citizen.',
      image: '/leaders/neha.jpeg',
      delay: 0,
    },
    {
      name: 'Swaroop',
      role: 'Ministry of Economic Growth',
      tagline: 'Building a stronger economy for a stronger nation.',
      description:
        'Responsible for designing strategies that accelerate sustainable economic development, attract investments, strengthen industries, and create long-term prosperity for the nation.',
      image: '/leaders/swaroop.jpeg',
      delay: 100,
    },
    {
      name: 'Vivashwath',
      role: 'Ministry of Entrepreneurship & Startups',
      tagline: 'Empowering innovation, enabling success.',
      description:
        'Focused on empowering innovators, entrepreneurs, and startups through mentorship, funding opportunities, policy support, and access to resources that help transform ideas into successful enterprises.',
      image: '/leaders/Vivashwath.jpeg',
      delay: 200,
    },
    {
      name: 'Gauthami',
      role: 'Ministry of Taxation & Revenue',
      tagline: 'Fair taxes. Simple systems. Greater trust.',
      description:
        'Dedicated to creating a transparent, efficient, and citizen-friendly tax ecosystem through simplified compliance procedures and technology-driven governance.',
      image: '/leaders/Gautami.jpeg',
      delay: 300,
    },
    {
      name: 'Sharun',
      role: 'Ministry of Employment & Skills',
      tagline: 'Skills today, opportunities tomorrow.',
      description:
        'Works to bridge the gap between education and industry through skill development programs, internships, apprenticeships, and workforce readiness initiatives.',
      image: '/leaders/Sharun.jpeg',
      delay: 400,
    },
    {
      name: 'Shambhavi',
      role: 'Ministry of Citizen Prosperity',
      tagline: 'Prosperity measured by people, not just numbers.',
      description:
        'Focused on improving the financial well-being of individuals and families through financial literacy, economic opportunity, savings awareness, and long-term prosperity initiatives.',
      image: '/leaders/Shambhavi.jpeg',
      delay: 500,
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold gradient-text mb-4 font-['Space_Grotesk'] text-center">
          Party Leadership
        </h1>

        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Meet the leaders responsible for shaping economic growth,
          entrepreneurship, employment, taxation, and prosperity for a
          future-ready nation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <LeaderCard
              key={index}
              name={leader.name}
              role={leader.role}
              tagline={leader.tagline}
              description={leader.description}
              image={leader.image}
              delay={leader.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Space_Grotesk'] animate-gradient">
          NEXTGEN JANATA PARTY
        </h1>
        <p className="text-2xl md:text-3xl text-[#3B82F6] mb-8 animate-float">
          Future First. Excuses Last.
        </p>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Join the revolution that's transforming politics with technology, transparency, and tomorrow's solutions today.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/signup" className="btn-primary text-lg">
            Join The Revolution
          </Link>
          <Link to="/manifesto" className="btn-secondary text-lg">
            Explore Manifesto
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

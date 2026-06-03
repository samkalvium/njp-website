const LeaderCard = ({
  name,
  role,
  tagline,
  description,
  image,
}) => {
  return (
    <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
      
      <div className="flex justify-center mb-5">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
          onError={(e) => {
            e.target.src =
              'https://placehold.co/300x300?text=Leader';
          }}
        />
      </div>

      <h3 className="text-2xl font-bold text-center mb-2">
        {name}
      </h3>

      <h4 className="text-primary font-semibold text-center mb-2">
        {role}
      </h4>

      <p className="text-sm italic text-center text-gray-500 mb-4">
        {tagline}
      </p>

      <p className="text-gray-600 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default LeaderCard;
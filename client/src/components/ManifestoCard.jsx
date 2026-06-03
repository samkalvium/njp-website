const ManifestoCard = ({ category, onClick }) => {
  return (
    <button
      className="glass-card w-full p-8 text-left flex justify-between items-center group cursor-pointer hover:border-[#3B82F6]/50 transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-[#3B82F6] group-hover:text-[#1E40AF] font-['Space_Grotesk'] transition-colors">
          {category}
        </h3>
        <p className="text-sm text-gray-500 font-medium">Click to view key roadmap plans & goals</p>
      </div>
      <div className="p-3 rounded-full bg-slate-100 group-hover:bg-[#3B82F6]/10 text-gray-400 group-hover:text-[#3B82F6] transition-all duration-300 transform group-hover:translate-x-1">
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default ManifestoCard;

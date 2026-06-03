import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  console.log("Navbar User:", user);

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate("/");
  };

  return (
    <nav className="glass fixed w-full top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <img src="/logo.jpg" alt="NJP Logo" className="h-10 w-10 object-contain rounded-lg border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300" />
          <span className="text-2xl font-bold gradient-text font-['Space_Grotesk']">
            NJP
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-[#3B82F6] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#3B82F6] transition-colors">About</Link>
          <Link to="/manifesto" className="hover:text-[#3B82F6] transition-colors">Manifesto</Link>
          <Link to="/leadership" className="hover:text-[#3B82F6] transition-colors">Leadership</Link>
          <Link to="/community" className="hover:text-[#3B82F6] transition-colors">Community</Link>
          <Link to="/news" className="hover:text-[#3B82F6] transition-colors">News</Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          {user ? (
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-bold flex items-center justify-center hover:shadow-lg transition-shadow"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 glass-card rounded-lg shadow-xl p-4 z-50">
                  <div className="border-b border-gray-200 pb-3 mb-3">
                    <p className="font-semibold text-gray-800">{user.name || 'User'}</p>
                    <p className="text-sm text-gray-600">{user.email || ''}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full btn-secondary text-sm py-2 px-4"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="btn-secondary text-sm py-2 px-4">Login</Link>
              <Link to="/signup" className="btn-primary text-sm py-2 px-4">Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1E293B]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 pb-4">
          <Link to="/" className="block hover:text-[#3B82F6] transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-[#3B82F6] transition-colors" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/manifesto" className="block hover:text-[#3B82F6] transition-colors" onClick={() => setIsOpen(false)}>Manifesto</Link>
          <Link to="/leadership" className="block hover:text-[#3B82F6] transition-colors" onClick={() => setIsOpen(false)}>Leadership</Link>
          <Link to="/community" className="block hover:text-[#3B82F6] transition-colors" onClick={() => setIsOpen(false)}>Community</Link>
          <Link to="/news" className="block hover:text-[#3B82F6] transition-colors" onClick={() => setIsOpen(false)}>News</Link>
          {user ? (
            <div className="pt-4">
              <div className="glass-card rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-bold flex items-center justify-center">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{user.name || 'User'}</p>
                    <p className="text-sm text-gray-600">{user.email || ''}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full btn-secondary text-sm py-2 px-4"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex space-x-4 pt-4">
              <Link to="/login" className="btn-secondary text-sm py-2 px-4 flex-1 text-center" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/signup" className="btn-primary text-sm py-2 px-4 flex-1 text-center" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

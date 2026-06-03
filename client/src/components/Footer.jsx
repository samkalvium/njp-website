import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="glass mt-20 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.jpg" alt="NJP Logo" className="h-10 w-10 object-contain rounded-lg border border-white/20 shadow-sm" />
              <span className="text-2xl font-bold gradient-text font-['Space_Grotesk']">
                NJP
              </span>
            </div>
            <p className="text-gray-600">NextGen Janata Party<br />Future First. Excuses Last.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#3B82F6]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-[#1E293B] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-[#1E293B] transition-colors">About</Link></li>
              <li><Link to="/manifesto" className="text-gray-600 hover:text-[#1E293B] transition-colors">Manifesto</Link></li>
              <li><Link to="/leadership" className="text-gray-600 hover:text-[#1E293B] transition-colors">Leadership</Link></li>
              <li><Link to="/news" className="text-gray-600 hover:text-[#1E293B] transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#3B82F6]">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>📍 Mangalore, India</li>
              <li>📧 contact@njp.in</li>
              <li>📱 +91 98765 43210</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-[#3B82F6]">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#3B82F6] transition-colors text-2xl">𝕏</a>
              <a href="#" className="text-gray-600 hover:text-[#3B82F6] transition-colors text-2xl">📘</a>
              <a href="#" className="text-gray-600 hover:text-[#3B82F6] transition-colors text-2xl">📸</a>
              <a href="#" className="text-gray-600 hover:text-[#3B82F6] transition-colors text-2xl">▶️</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2026 NextGen Janata Party. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

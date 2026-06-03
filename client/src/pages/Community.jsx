import { useState } from 'react';

const Community = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/community/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', reason: '' });
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold gradient-text mb-4 font-['Space_Grotesk'] text-center">
          Join The Movement
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Be part of India's political revolution
        </p>

        {submitted ? (
          <div className="glass-card p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-[#3B82F6] mb-4">Welcome to NJP!</h2>
            <p className="text-gray-700 text-lg">
              You've successfully joined the movement. We'll be in touch soon!
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn-primary mt-6"
            >
              Join Another Member
            </button>
          </div>
        ) : (
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">
                  Why do you support NJP?
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us why you believe in our vision..."
                />
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                Join Movement
              </button>
            </form>
          </div>
        )}

        {/* Volunteer Section */}
        <div className="mt-12 glass-card p-8">
          <h2 className="text-3xl font-bold text-[#3B82F6] mb-6 font-['Space_Grotesk'] text-center">
            Become a Volunteer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '📱', title: 'Social Media Warrior', desc: 'Spread our message online' },
              { icon: '🗣️', title: 'Ground Campaigner', desc: 'Connect with voters locally' },
              { icon: '💻', title: 'Tech Volunteer', desc: 'Help with digital initiatives' }
            ].map((role, index) => (
              <div key={index} className="glass p-6 text-center">
                <div className="text-4xl mb-3">{role.icon}</div>
                <h3 className="text-xl font-bold text-[#10B981] mb-2">{role.title}</h3>
                <p className="text-gray-700">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-[#3B82F6] mb-6">Follow Our Journey</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="glass p-4 rounded-full hover:bg-[#1E40AF]/10 transition-colors text-3xl">𝕏</a>
            <a href="#" className="glass p-4 rounded-full hover:bg-[#1E40AF]/10 transition-colors text-3xl">📘</a>
            <a href="#" className="glass p-4 rounded-full hover:bg-[#1E40AF]/10 transition-colors text-3xl">📸</a>
            <a href="#" className="glass p-4 rounded-full hover:bg-[#1E40AF]/10 transition-colors text-3xl">▶️</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

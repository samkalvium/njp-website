import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log("Login Response:", data);
      
      if (response.ok) {
        login(data.user, data.token);
        navigate('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to connect to server');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          credential: credentialResponse.credential
        })
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user, data.token);
        navigate('/');
      } else {
        setError(data.message || 'Google Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to connect to server');
    }
  };

  const handleGoogleError = () => {
    setError('Google Authentication failed');
  };

  return (
    <div className="min-h-screen pt-24 px-6 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="glass-card p-8">
          <h1 className="text-4xl font-bold gradient-text mb-2 font-['Space_Grotesk'] text-center">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-center mb-8">Login to your NJP account</p>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn-primary w-full text-lg cursor-pointer">
              Login
            </button>
          </form>

          <div className="relative flex py-6 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs font-bold uppercase tracking-wider">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="flex justify-center w-full">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="outline"
              size="large"
              shape="rectangular"
              width="352px"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#3B82F6] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

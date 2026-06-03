export const API_BASE_URL = import.meta.env.MODE === 'production'
  ? 'https://njp-backend.onrender.com'
  : 'http://localhost:5000';

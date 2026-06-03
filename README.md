# NextGen Janata Party (NJP) Website

A modern MERN stack website for a fictional political party with dark futuristic UI, glassmorphism design, and full authentication.

## Tech Stack

### Frontend
- React.js + Vite
- Tailwind CSS
- React Router
- Google Fonts (Poppins, Space Grotesk)

### Backend
- Node.js + Express
- MongoDB
- JWT Authentication
- bcryptjs for password hashing

## Features

- **Home Page**: Hero section with animated gradient text, stats counters
- **About Page**: Mission, vision, timeline with glassmorphism cards
- **Manifesto Page**: Accordion-style policy cards (Education, Economy, Technology, Healthcare, Infrastructure, Governance)
- **Leadership Page**: Fun minister cards with hover animations
- **Community Page**: Join movement form, volunteer section, social links
- **Authentication**: Login and Signup with JWT tokens
- **Responsive Design**: Mobile, tablet, and desktop support

## Design

- Dark futuristic UI with blue/purple gradients
- Glassmorphism cards with backdrop blur
- Modern typography (Poppins, Space Grotesk)
- Smooth animations and hover effects
- Custom scrollbar styling

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB running locally (default: mongodb://localhost:27017)

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (already created):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/njp-website
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

4. Start the server:
```bash
npm run dev
```

Server will run on http://localhost:5000

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies (already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on http://localhost:5173

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/status` - Get user status (protected)

### Community
- `POST /api/community/join` - Join the movement

### Health
- `GET /api/status` - Server health check

## Pages

- `/` - Home page
- `/about` - About page
- `/manifesto` - Manifesto page
- `/leadership` - Leadership page
- `/community` - Community page
- `/login` - Login page
- `/signup` - Signup page

## Color Palette

- Primary: #4F46E5 (Indigo)
- Secondary: #7C3AED (Purple)
- Background: #0F172A (Dark Blue)
- Text: #F8FAFC (White)
- Accent: #22D3EE (Cyan)

## Future Enhancements

- Add actual MongoDB models for community members
- Implement protected routes for authenticated users
- Add admin dashboard
- Integrate real social media APIs
- Add more animations and micro-interactions
- Implement email verification
- Add password reset functionality

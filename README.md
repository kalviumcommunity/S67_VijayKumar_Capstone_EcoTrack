# ♻️ EcoTrack

## Concept

**EcoTrack** is a sustainability-driven platform designed to help users **track their eco-friendly actions** and promote conscious living. Inspired by apps like JouleBug and Recycle Coach, EcoTrack lets individuals log their daily green activities, discover local recycling centers, and engage in community challenges to encourage eco-awareness.

The mission of EcoTrack is to **bridge technology and environmental responsibility**—turning small sustainable habits into impactful change.

---

## 🌟 Core Features

📌 **Eco Action Logging**  
Track activities such as recycling, using reusable items, saving energy, and more.

📍 **Location-based Recycling Centers**  
Find nearby recycling centers based on your current location with interactive map support.

🏆 **Gamification & Rewards**  
Earn points, unlock badges, and climb leaderboards for consistently green behavior.

📸 **Photo Uploads**  
Upload images as proof of your eco actions to inspire others and validate achievements.

📊 **Progress Dashboard**  
Personal dashboard to monitor your impact, streaks, and eco-metrics.

💬 **Community Challenges**  
Join global or local eco-challenges, and team up with friends to achieve sustainability goals.

🚀 **Future Enhancements** *(Planned)*  
- AI-based waste classification (e.g., scan a photo to detect recyclable material)  
- Carbon footprint estimator  
- Monthly sustainability reports  
- Personalized recommendations for greener habits

---

## 🛠️ Tech Stack

### Frontend (React + Vite)
- **Framework**: React.js with Vite  
- **UI**: Tailwind CSS / ShadCN for sleek and responsive components  
- **Maps**: Leaflet.js / Google Maps API for location-based features  
- **Media Uploads**: Firebase Storage / Cloudinary  
- **Authentication**: Firebase Auth / NextAuth.js for Google OAuth

### Backend (Node.js + Express + MongoDB)
- **API**: RESTful API with Express.js  
- **Database**: MongoDB with Mongoose ODM  
- **Authentication**: JWT + Google OAuth  
- **Geospatial Queries**: MongoDB’s `$geoNear` for recycling center discovery  
- **AI Integrations (future)**: Google Vision API, TensorFlow.js

---

## 🚀 Deployment & DevOps

- **Frontend**: Vercel / Netlify  
- **Backend**: Railway / Render  
- **Database**: MongoDB Atlas  
- **Media Storage**: Cloudinary / Firebase Storage  
- **Monitoring**: LogRocket (frontend), Datadog (backend)

---

## ✅ Key Highlights

1️⃣ **Eco Activity Logs**  
Users can log daily sustainable actions and get visual feedback.

2️⃣ **Location-aware Recycling Centers**  
Real-time search for nearby centers and categorized recycling info.

3️⃣ **Photo-Based Verification**  
Upload images as proof for community challenges or self-records.

4️⃣ **Community Engagement**  
Participate in sustainability goals, eco-runs, and challenge friends.

5️⃣ **Gamified Learning**  
Achievements, streaks, and leaderboards to build healthy green habits.

---

## 🧠 Development Timeline

✅ **Phase 1: Ideation & Planning**  
- Finalized core concept  
- Defined MVP features

🎨 **Phase 2: UI/UX Design**  
- Wireframes and user flows in Figma  
- High-fidelity designs for key screens

💻 **Phase 3: Development**  
- Project initialized on GitHub  
- Frontend + Backend structure setup  
- Deployment and hosting under progress

📈 **Phase 4: Future Features**  
- Advanced analytics  
- Mobile app integration

---
Day	Task
Day 1	📝 Create GitHub repository and add a detailed README.md file with project goals and setup instructions.

Day 2	⚙️ Set up the backend with Express. Create a basic GET / API route and test it using Postman or Thunder Client.

Day 3	📤 Implement POST /data API route to receive and handle JSON data using Express middleware.

Day 4	🔁 Implement PUT /data/:id and DELETE /data/:id routes to update and delete data entries (using mock IDs initially).

Day 5	🚀 Deploy the backend to Render or Railway. Ensure all API routes are live and publicly accessible.


Day 6	🧬 Create MongoDB schema using Mongoose and connect the backend to MongoDB Atlas. Define basic models like User or Task.

Day 7	🗃️ Add database operations: Create (.save()), Read (.find()), Update, and Delete. Link these to respective API routes.

Day 8	🌐 Initialize the frontend using Vite or Create React App. Set up folder structure and install Tailwind CSS.

Day 9	🚢 Deploy the frontend to Vercel or Netlify. Make sure it connects to the backend APIs correctly.

Day 10	🧱 Build frontend components: Login form, Dashboard, and Data List. Integrate with backend using Axios or Fetch API.


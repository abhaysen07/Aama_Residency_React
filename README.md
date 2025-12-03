# 🏨 Aama Residency — React Website  
A modern, responsive, and fast hotel website built using **React + Vite**.  
This project is the React version of the original HTML/CSS/JS website created for **Aama Residency**, a family-run budget hotel chain operating in Agra, Aligarh, and Greater Noida.

Live Demo (GitHub Pages):  
👉 https://abhaysen07.github.io/Aama_Residency_React/

---

## 📌 Project Overview

Aama Residency aims to provide **affordable, clean, and hassle-free stays** designed for working professionals, students, families, and travelers. This React version brings:

- Better performance  
- Component-based UI  
- Reusable pages  
- Cleaner routing  
- Scalable structure for future backend integration (Django / Node)

This project includes all pages:
- Home  
- About  
- Rooms  
- Services  
- Contact  
- Authentication (Login/Signup — coming soon)

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | **React JS**, **Vite**, React Router |
| Styling | CSS Modules / Global Stylesheets |
| Assets | Image imports via `/src/assets` |
| Deployment | GitHub Pages |

---

## ✨ Features

### ⭐ Fully Responsive Layout  
Mobile-friendly navbar, grid layouts, and optimized images.

### ⭐ Modular Architecture  
Every page has its own component + its own CSS file.

### ⭐ Fast Routing with React Router  
Smooth transitions between pages:
- `/` → Home  
- `/about` → About  
- `/rooms` → Room Details  
- `/services` → Services  
- `/contact` → Contact  

### ⭐ Modern UI  
Clean theme inspired by the original hotel website:
- Warm cream page background  
- Soft green navbar  
- Glow hover effects  
- CTA buttons styled consistently  

---

## 📁 Folder Structure

Aama_Residency_React/
│
├── public/
│ └── images/ (optional for public assets)
│
├── src/
│ ├── assets/
│ │ └── images/
│ │ ├── lobby.png
│ │ ├── room.png
│ │ ├── family-suite.png
│ │ ├── abhi.png
│ │ ├── papa.jpg
│ │ ├── mummy.jpeg
│ │ └── anuj.jpg
│ │
│ ├── components/
│ │ └── Navbar.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Rooms.jsx
│ │ ├── Services.jsx
│ │ └── Contact.jsx
│ │
│ ├── styles/
│ │ ├── navbar.css
│ │ ├── home.css
│ │ ├── about.css
│ │ ├── rooms.css
│ │ └── services.css
│ │
│ ├── App.jsx
│ └── main.jsx
│
└── package.json

yaml
Copy code

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository:

```bash
git clone https://github.com/abhaysen07/Aama_Residency_React.git
2️⃣ Install dependencies:
bash
Copy code
npm install
3️⃣ Run the development server:
bash
Copy code
npm run dev
4️⃣ Build for production:
bash
Copy code
npm run build
🌐 Deployment (GitHub Pages)
This project uses Vite, so we must set the base path.

✔ Step 1: Edit vite.config.js
js
Copy code
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Aama_Residency_React/",
  plugins: [react()],
});
✔ Step 2: Install gh-pages
bash
Copy code
npm install --save-dev gh-pages
✔ Step 3: Add scripts to package.json
json
Copy code
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
✔ Step 4: Deploy
bash
Copy code
npm run deploy
Your site will deploy to:

👉 https://abhaysen07.github.io/Aama_Residency_React/

📸 Screenshots (Add after deployment)
You can later add:

scss
Copy code
![Home Page](screenshots/home.png)
![Rooms Page](screenshots/rooms.png)
![Services Page](screenshots/services.png)
🔮 Future Enhancements
Backend integration (Django / Node)

Online room booking system

Payment gateway (Razorpay)

Admin dashboard

Guest reviews & ratings

Multi-language support

SEO metadata + sitemap

🧑‍💻 Developer
Abhishek Kumar
Founder & Developer
Email: abhishek.abhishek1996@gmail.com

📜 License
This project is licensed under the MIT License — free to use, modify, and distribute.

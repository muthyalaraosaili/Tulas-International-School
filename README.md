# Tula's International School (TIS) — Animated Homepage Redesign

> **Frontend Developer Assessment Project for NetPuppys**  
> A modern, premium, responsive, and animated homepage redesign for **Tula's International School (TIS)**, Dehradun — "The Modern Gurukul".

---

## 🌟 Project Overview

This project is a complete single-page homepage redesign built for **Tula's International School (TIS)**. It reimagines the school's online identity with a luxury editorial aesthetic, smooth animations, micro-interactions, responsive design, accessibility standards, and clean modular React code architecture.

The project preserves all factual information about TIS (CBSE affiliation, 22-acre eco-friendly campus, Class IV to XII offerings, Horse Riding, Swimming, Shooting facilities, 100% residential co-ed boarding, contact numbers, and campus address in Dehradun).

---

## ✨ Features & Highlights

### Required Website Sections
1. **Responsive Navbar:** Sticky header with glassmorphism backdrop on scroll, active section pill indicator, desktop CTAs, accessible mobile drawer menu.
2. **Hero Section:** Large editorial heading (*Where Ancient Gurukul Wisdom Meets Modern World*), factual description, primary CTA, secondary CTA, high-resolution campus photography, floating verified stat badges, entrance animations.
3. **About TIS:** 2-column editorial layout showcasing the Gurukul philosophy, 22-acre Himalayan foothill campus, and verified stat metrics.
4. **Academics:** CBSE curriculum cards for Junior & Middle School (IV-VIII), Secondary (IX-X), and Senior Secondary (XI-XII with Science, Commerce, Humanities). Includes an interactive modal for detailed syllabus requests.
5. **Campus & Facilities Showcase:** Bento grid layout featuring Horse Riding Arena, Semi-Olympic Swimming Pool, Precision Shooting Range, Robotics Labs, Boarding Hostels, and Multi-Cuisine Dining.
6. **Why Choose TIS:** Visual feature cards with Lucide icons highlighting mentorship (1:8 ratio), 24/7 security, mind-body-soul focus, and competitive exam preparation (JEE/NEET).
7. **Life at TIS / Student Activities:** Gallery with category filters (Sports, Clubs, Arts, Culture, Events) for campus life, equestrian sports, astronomy, taekwondo, and the annual *Sanskriti* fest.
8. **Testimonials:** Verified quotes from parents, alumni, and school leadership with star ratings and verified badges.
9. **Admissions CTA:** Distinctive section outlining the 3-step admission journey with quick call and enquiry actions.
10. **Contact Section:** Verified school address, landline & helpline numbers, email, Google Maps embed, and a client-side validated contact form with real-time validation and feedback banners.
11. **Footer:** Comprehensive footer with school description, quick links, contact details, social links, and copyright.

### 🚀 Advanced Features Implemented
1. **Scroll-Triggered Reveals:** Framer Motion `whileInView` viewport triggers with reusable fade-up, staggered children, and scale variants.
2. **Scroll Progress Bar:** Thin gold gradient progress bar at the top of the viewport powered by Framer Motion `useScroll` and `useSpring`.
3. **Custom Cursor:** Mouse-following outer ring and inner dot for desktop pointer devices. Dynamically expands over interactive links/buttons and displays context labels (`Enquire`, `Explore`, `Apply`). Disabled on touch devices and respects `prefers-reduced-motion`.
4. **Interactive Enquire Modal:** Global modal triggered from anywhere on the site with lead capture fields for parent name, email, phone number, and target grade.

---

## 🛠️ Technology Stack

- **Frontend Framework:** React.js (v19)
- **Build Tool:** Vite
- **Language:** JavaScript with JSX
- **Styling:** Tailwind CSS (v4) with custom typography & glassmorphism utilities
- **Animations:** Framer Motion (v12)
- **Icons:** Lucide React
- **Typography:** Google Fonts (*Outfit*, *Plus Jakarta Sans*, *Playfair Display*)
- **Deployment Platform:** Vercel

---

## 📁 Project Structure

```text
tis-frontend-assignment/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   aria/
│   │   ├── AnimatedSection.jsx
│   │   ├── Button.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── EnquireModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── SectionHeading.jsx
│   ├── data/
│   │   └── schoolData.js
│   ├── hooks/
│   │   └── useReducedMotionPreference.js
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Activities.jsx
│   │   ├── AdmissionsCTA.jsx
│   │   ├── Contact.jsx
│   │   ├── Facilities.jsx
│   │   ├── Hero.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyTIS.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 💻 Prerequisites

Ensure you have the following installed on your machine:
- **Node.js:** `v18.0.0` or higher (Recommended: `v20.x` or `v24.x`)
- **npm:** `v9.0.0` or higher

---

## 🚀 Installation & Local Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/tis-frontend-assignment.git
   cd tis-frontend-assignment
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for Production:**
   ```bash
   npm run build
   ```

5. **Preview Production Build Locally:**
   ```bash
   npm run preview
   ```

---

## 🖼️ Screenshots Section

To add project screenshots to this repository:
1. Run `npm run dev` and take high-resolution screenshots at 1440px (Desktop), 768px (Tablet), and 375px (Mobile).
2. Save images in `public/screenshots/` (e.g., `hero-desktop.png`, `facilities-bento.png`, `mobile-menu.png`).
3. Embed them in your repository markdown:
   ```markdown
   ![TIS Desktop Hero](public/screenshots/hero-desktop.png)
   ![Facilities Bento Grid](public/screenshots/facilities-bento.png)
   ```

---

## 🌐 Deployment to Vercel

### Step-by-Step Vercel Deployment:
1. Push your code to a public GitHub repository named `tis-frontend-assignment`.
2. Log in to your [Vercel Dashboard](https://vercel.com).
3. Click **"Add New"** → **"Project"**.
4. Import your `tis-frontend-assignment` repository from GitHub.
5. Select framework preset **Vite**.
6. Set root directory to `./` (default).
7. Click **"Deploy"**.

- **Live Demo URL:** `https://tis-frontend-assignment.vercel.app` *(Placeholder)*
- **GitHub Repository:** `https://github.com/your-username/tis-frontend-assignment` *(Placeholder)*

---

## 📝 Contact Form Behavior Note

The contact and inquiry forms implemented on this website feature full **client-side input validation**, interactive state management, required field checks, and real-time user feedback notifications.

> **Note:** As specified for this frontend developer assessment, no actual backend or email delivery service (e.g., EmailJS/SendGrid) is connected. Form submissions demonstrate complete UI/UX state flow and client validation.

---

## 📄 License & Attribution

Designed and developed for NetPuppys Frontend Developer Assessment. Factual information and branding referenced from [Tula's International School Official Website](https://tis.edu.in/).

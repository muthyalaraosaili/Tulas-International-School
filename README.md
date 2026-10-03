# Tula's International School (TIS) — Animated Homepage Redesign

**Frontend Developer Assessment Project for NetPuppys**

A modern, premium, responsive, and animated homepage redesign for **Tula's International School (TIS), Dehradun**, inspired by the school's “The Modern Gurukul” identity.

## 🌟 Project Overview

This project is a single-page homepage redesign created as part of the NetPuppys Frontend Developer Assessment. It combines a modern editorial aesthetic, responsive layouts, smooth animations, interactive components, and reusable React architecture to create an engaging user experience.

The website showcases school information, academics, campus facilities, student activities, admissions, and contact details. School-specific facts and claims should be checked against the official website before submission.

## 🌐 Project Links

* **Live Demo:** https://tulas-international-school-delta.vercel.app/
* **GitHub Repository:** https://github.com/muthyalaraosaili/Tulas-International-School
* **Official School Website:** https://tis.edu.in/

## ✨ Features & Highlights

### 1. Responsive Navbar

* Sticky navigation with a glassmorphism effect.
* Active section indicator.
* Desktop call-to-action buttons.
* Responsive mobile navigation drawer.
* Smooth section navigation.

### 2. Hero Section

* Large editorial heading and introductory content.
* Prominent call-to-action buttons.
* Campus imagery and animated elements.
* Responsive layout and entrance animations.

### 3. About TIS

* School introduction and educational philosophy.
* Editorial two-column layout.
* Campus information and statistics.

### 4. Academics

* Junior and Middle School (Classes IV–VIII).
* Secondary School (Classes IX–X).
* Senior Secondary School (Classes XI–XII).
* Subject streams and interactive syllabus enquiry interface.

### 5. Campus & Facilities

* Horse riding.
* Swimming facilities.
* Shooting facilities.
* Robotics and learning spaces.
* Boarding accommodation.
* Dining facilities.

### 6. Why Choose TIS

* Feature cards with Lucide icons.
* Student mentorship and learning environment.
* Campus safety and student development information.
* Competitive examination preparation information.

### 7. Life at TIS & Student Activities

* Campus activity gallery.
* Category filters for sports, clubs, arts, culture, and events.
* Visual presentation of student life and extracurricular activities.

### 8. Testimonials

* Testimonial cards for parents, alumni, and school representatives.
* Responsive layouts and visual feedback elements.

*Testimonials and any associated ratings should be included only when their sources have been verified.*

### 9. Admissions CTA

* Admission journey information.
* Enquiry and call-to-action buttons.
* Links to admission-related information.

### 10. Contact Section

* School contact information.
* Address and map embed.
* Contact form with client-side validation.
* Input feedback and submission status messages.

### 11. Footer

* School introduction.
* Quick navigation links.
* Contact information and social links.
* Copyright information.

## 🚀 Advanced Features Implemented

* **Scroll-Triggered Animations:** Uses Framer Motion viewport triggers to reveal sections as users scroll.
* **Scroll Progress Indicator:** Displays page scrolling progress using Framer Motion scroll utilities.
* **Custom Cursor:** Includes a mouse-following cursor with interactive hover effects on supported desktop pointer devices.
* **Interactive Enquiry Modal:** Provides an enquiry interface with fields for parent name, email, phone number, and target grade.
* **Light and Dark Theme Switcher:** Allows users to switch between light and dark themes.
* **Responsive Interactions:** Adapts navigation and interactive elements for smaller screens.
* **Reduced-Motion Support:** Respects reduced-motion preferences where implemented.

## 🛠️ Technology Stack

| Technology        | Purpose                                 |
| ----------------- | --------------------------------------- |
| React.js          | Component-based user interface          |
| Vite              | Development server and build tool       |
| JavaScript (ES6+) | Application logic                       |
| JSX               | React component markup                  |
| Tailwind CSS      | Responsive styling and layout           |
| Framer Motion     | Animations and transitions              |
| Lucide React      | Icons                                   |
| Google Fonts      | Typography                              |
| Vercel            | Deployment and hosting                  |
| Git and GitHub    | Version control and source code hosting |

## 🎨 Design System

The design uses a modern visual style with deep teal, mint, off-white, and coral accents.

| Color           | Hex Code  | Usage                  |
| --------------- | --------- | ---------------------- |
| Deep Teal       | `#164E63` | Primary color          |
| Mint            | `#67C9B8` | Highlights and accents |
| Off-white       | `#F1F7F5` | Light backgrounds      |
| Coral           | `#F28C72` | Buttons and accents    |
| Dark Background | `#081921` | Dark theme background  |

The theme switcher provides light and dark viewing options. Theme persistence across page reloads is supported if localStorage has been implemented.

## 📁 Project Structure

```text
tis-frontend-assignment/
├── public/
│   ├── favicon.svg
│   └── screenshots/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
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

*This is a reference structure. Adjust it to match the actual files in your repository, including any theme-switcher components or context providers.*

## 💻 Prerequisites

Install the following before running the project:

* Node.js (version 18 or later, compatible with the project's dependencies).
* npm.
* Git.

## 🚀 Installation & Local Setup

### 1. Clone the repository

Replace the placeholder URL with your actual GitHub repository URL.

```bash
git clone https://github.com/YOUR_USERNAME/tis-frontend-assignment.git
```

### 2. Navigate to the project directory

```bash
cd tis-frontend-assignment
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal. With the default Vite configuration, it is usually:

```text
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## 🖼️ Screenshots

Add screenshots to showcase the design on desktop and mobile devices.

Suggested screenshots:

* Desktop homepage and hero section.
* Academics and facilities sections.
* Light theme and dark theme.
* Mobile navigation.
* Responsive layout on a smaller screen.

Save the screenshots under `public/screenshots/`, then reference them in Markdown. For example:

```markdown
![TIS Homepage](public/screenshots/hero-desktop.png)

![TIS Dark Theme](public/screenshots/dark-theme.png)

![TIS Mobile View](public/screenshots/mobile-view.png)
```

Use these image references only after adding the corresponding screenshot files.

## 🌐 Deployment to Vercel

The project is hosted on Vercel.

**Live Demo:** https://tulas-international-school-delta.vercel.app/

To deploy your own version:

1. Push your project to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/).
3. Select **Add New → Project**.
4. Import your GitHub repository.
5. Select Vite as the framework preset if it is not detected automatically.
6. Set the build command to `npm run build`.
7. Set the output directory to `dist`.
8. Click **Deploy**.

## 📝 Contact Form Behavior

The contact and enquiry forms provide client-side input validation, required-field checks, interactive form states, and user feedback.

**Important:** Unless a backend or email service has been connected, form submissions are not delivered to the school. The form demonstrates the frontend interaction and validation flow only.

## ♿ Accessibility & User Experience

The project aims to provide:

* Responsive layouts across desktop, tablet, and mobile.
* Clear navigation and interactive controls.
* Accessible labels for form inputs and buttons where implemented.
* Reduced-motion support for users who prefer fewer animations.
* Appropriate visual contrast across light and dark themes.

## 📄 License & Attribution

This project was developed for the **NetPuppys Frontend Developer Assessment**.

School branding and school-specific information are associated with Tula's International School. Refer to the [official website](https://tis.edu.in/) for school information.

---

**Built with React, Vite, Tailwind CSS, and Framer Motion.**

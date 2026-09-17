Phathutshedzo Lidzhade — Portfolio

A personal portfolio website showcasing my projects, technical skills, education, and experience as a Computer Science graduate focused on software development and modern web technologies.

🌐 Live Website

Portfolio: https://phathu-lidzhade-portfolio.vercel.app

📌 About

This portfolio was built to provide an overview of my background, technical skills, and software development projects.

The website includes a responsive interface, project galleries, dark mode, an accessible contact form, and a backend service for processing contact enquiries.

✨ Features

* Responsive design for desktop and mobile
* Light and dark mode
* Smooth navigation between sections
* Project showcase with image galleries
* Full-screen project image viewer
* Previous/next image navigation
* Keyboard navigation for image galleries
    * ← Previous image
    * → Next image
    * Esc Close viewer
* Contact form with backend integration
* Backend health check and Render cold-start handling
* Form validation and submission status feedback
* Privacy Policy modal
* Keyboard Esc support for closing the Privacy Policy
* Background scrolling disabled while modals are open
* Accessible focus states and ARIA attributes

🛠️ Technologies

Frontend

* React
* TypeScript
* Vite
* HTML
* CSS

Backend

* Node.js
* Express
* TypeScript
* Resend

Deployment

* Vercel — Frontend
* Render — Backend

📂 Project Structure

The project is separated into a frontend and backend application:

portfolio/
├── my-portfolio/
│   └── React + TypeScript + Vite frontend
│
└── my-portfolio-backend/
    └── Node.js + Express + TypeScript backend

🚀 Getting Started

Prerequisites

Make sure you have installed:

* Node.js
* npm

Clone the repository

git clone https://github.com/Phathu-Lidzhade/portfolio.git
cd portfolio

Frontend

Navigate to the frontend:

cd my-portfolio

Install dependencies:

npm install

Create a .env file:

VITE_API_URL=http://localhost:5000

Start the development server:

npm run dev

The frontend will normally be available at:

http://localhost:5173

Backend

Open another terminal and navigate to the backend:

cd my-portfolio-backend

Install dependencies:

npm install

Create a .env file with the required backend environment variables.

Then start the backend:

npm run dev

The backend API will run locally on:

http://localhost:5000

📬 Contact Form

The portfolio uses a separate Node.js/Express backend to process contact form submissions.

The general flow is:

Portfolio Contact Form
        ↓
React Frontend
        ↓
Express Backend
        ↓
Resend
        ↓
Portfolio Owner's Email

The backend also provides a health endpoint:

GET /api/health

This is used by the frontend to check whether the backend is available before submitting a contact request.

🖼️ Project Gallery

Project screenshots are stored within the frontend assets and loaded dynamically using Vite’s import.meta.glob.

Each project can contain multiple screenshots, allowing visitors to:

* Select different screenshots
* Open screenshots in a full-screen viewer
* Navigate between images
* Use keyboard controls

🔐 Privacy

The contact form collects information such as a visitor’s name, email address, and message.

A Privacy Policy is available directly within the contact section through a modal, so visitors can read how their information is handled without leaving the portfolio.

♿ Accessibility

Accessibility was considered throughout the project, including:

* Visible keyboard focus states
* ARIA labels
* ARIA live status messages
* Dialog semantics for modal interfaces
* Keyboard controls
* Esc support for closing overlays
* Disabled submit button while a message is being sent

📱 Responsive Design

The portfolio is designed to work across different screen sizes, including:

* Desktop
* Tablet
* Mobile

The layout adapts sections such as the navigation, project grid, education cards, contact section, and project image viewer for smaller screens.

👤 Author

Phathutshedzo Lidzhade

Computer Science graduate focused on web development, software engineering, and modern technologies.

* GitHub: https://github.com/Phathu-Lidzhade
* LinkedIn: https://www.linkedin.com/in/phathutshedzo-lidzhade-a502a2382

📄 License

This project is a personal portfolio website. The source code is available for viewing and learning purposes.

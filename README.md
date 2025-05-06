Omnidata Solutions LLC – Website
This is the official website for Omnidata Solutions LLC, built with Next.js and styled using Tailwind CSS. It serves as the central hub for showcasing services, accepting Stripe payments, and offering a clean, consistent user experience across web and mobile.

Features
⚙️ Built with Next.js App Router

💳 Integrated Stripe Checkout for product and service sales

🛒 Custom cart functionality with real-time counter

🎨 Unified design using Tailwind CSS

🧩 Modular structure for future expansion

📱 Fully responsive across devices

Pages
/ – Landing Page

/services – Overview of offered services

/cart – View and manage cart

/checkout – Stripe-powered payment processing

/watch – Demo or walkthrough video page

Getting Started (Development)
Install dependencies:

bash
Copy
Edit
npm install
Start local dev server:

bash
Copy
Edit
npm run dev
Then open http://localhost:3000 in your browser.

File Structure Overview
app/page.tsx – Home page content

app/layout.tsx – Global layout (Header/Footer)

components/ – Reusable UI components

lib/ – Stripe integration and utility functions

public/ – Static assets

styles/ – Tailwind configuration and global styles

Deployment
This site is designed to deploy seamlessly on Vercel.

To deploy:

Push your changes to GitHub.

Connect the repo to your Vercel dashboard.

Set environment variables if needed (e.g., Stripe keys).

Vercel will handle the rest.

Technologies Used
Next.js

React

Tailwind CSS

Stripe

TypeScript

License
This project is proprietary and maintained by Omnidata Solutions LLC. For partnership or usage inquiries, contact: contact@omnidata-solutions.com
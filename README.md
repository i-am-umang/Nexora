# Nexora — Digital Agency Website

Nexora is a modern, responsive digital agency website built with React and Vite. It showcases creative services, selected projects, team members, and contact information through a clean interface with smooth animations and light/dark theme support.

## ✨ Features

- **Modern UI:** Clean design for a digital agency website.
- **Responsive Design:** Adapts to mobile, tablet, and desktop screens.
- **Light & Dark Mode:** Switch between light and dark themes.
- **Interactive Animations:** Smooth entrance animations and interactive service cards.
- **Services Section:** Showcases web development, UI/UX design, digital strategy, and brand identity.
- **Selected Work:** Highlights projects in e-commerce, analytics dashboards, and project management.
- **Team Section:** Presents team members and their roles.
- **Contact Form:** Supports inquiry submissions through Web3Forms.
- **Newsletter UI:** Provides a newsletter interface with frontend feedback.

## 🛠️ Tech Stack

- **React** — Component-based UI development
- **Vite** — Development server and production build tooling
- **Tailwind CSS** — Utility-first styling
- **JavaScript (ES6+)** — Application logic
- **Motion** — UI animations
- **Web3Forms** — Contact form submissions

## 📁 Project Structure

```text
Nexora/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ContactUs.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── OurWork.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Services.jsx
│   │   ├── Teams.jsx
│   │   ├── ThemeToggleBtn.jsx
│   │   ├── Title.jsx
│   │   └── TrustedBy.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── README.md
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/i-am-umang/Nexora.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Nexora
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production-ready files are generated in the `dist/` directory.

## 🔐 Contact Form Configuration

Nexora uses [Web3Forms](https://web3forms.com/) to process contact form submissions.

1. Obtain an access key from Web3Forms.
2. Configure the key in your local `.env` file.
3. Add the corresponding environment variable to your hosting platform before building the application.

For a Vite frontend, environment variables prefixed with `VITE_` are included in the client-side build and can be viewed by users. Do not use them for private server-side secrets.

## 🌐 Deployment

Nexora is deployed as a static website on 

- [Render](https://render.com/)


### Render Static Site Configuration

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

## 📌 Project Highlights

Nexora demonstrates practical frontend development through reusable React components, responsive layouts, interactive UI elements, theme switching, and contact form integration.

## 🔮 Future Improvements

- Integrate the newsletter interface with a subscription service.
- Add a backend for additional functionality where needed.
- Improve accessibility and form validation.
- Integrate analytics to understand visitor engagement.

## 👨‍💻 Author

**Umang Agarwal**

- GitHub: [i-am-umang](https://github.com/i-am-umang)
Hosted live link: https://nexora-nz1l.onrender.com
---

If you find this project useful or inspiring, feel free to explore the code and share feedback.

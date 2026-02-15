# André Pettersson - Personal Portfolio

Welcome to my personal portfolio website! This project showcases my journey as a Fullstack Development student, featuring my projects, skills, and a glimpse into my coding activity.

The site is built with a **"Cyber/Tech"** aesthetic, utilizing neon glows, glassmorphism, and smooth animations to create an immersive user experience.

## Live Demo
[**Click here to view the Portfolio (Vercel)**](https://andres-portfolio-two.vercel.app/)

## Features

* **Cyber/Tech Design:** Dark theme with neon cyan/purple accents powered by CSS custom properties.
* **AI Chat Assistant:** An embedded chat interface backed by a Vercel serverless function calling the OpenAI API. It answers questions about me and my projects in first person.
* **Data-Driven Projects:** Project cards rendered from a single JS data array - adding a project is a data change, not an HTML change.
* **Fully Responsive:** Optimized for desktop, tablet, and mobile devices.
* **Animations:** Smooth entry animations via `IntersectionObserver`, floating background shapes, and gradient text effects.
* **GitHub Calendar:** Integrated live coding activity heatmap via the github-calendar library.
* **Contact Form:** Direct email delivery through EmailJS with success/error feedback.
* **Discord Logging:** Chat interactions are logged to a Discord webhook for monitoring.

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

## Project Structure

```
MyPortfolio/
├── api/
│   └── chat.js            # Vercel serverless function (OpenAI + Discord)
├── css/
│   └── style.css           # All styles with CSS custom properties
├── js/
│   ├── projects.js         # Project data array + renderer
│   ├── script.js           # Navigation, scroll effects, calendar init
│   ├── chat-ui.js          # Chat interface logic
│   └── contact.js          # EmailJS contact form handler
├── index.html              # Single-page HTML shell
├── profile.PNG
├── andre-pettersson-cv.pdf
└── README.md
```

## Featured Projects

1. **ShiftMate (Fullstack WMS):** A Workforce Management System for scheduling and shift swaps - .NET 8, React, PostgreSQL, Docker.
2. **Quest Tracker RPG:** A CLI-based task manager gamified with C#, OpenAI, and Twilio 2FA.
3. **Travel Journal:** A group project for managing travel plans and memories (C# & JSON Storage).
4. **Brogarden:** A responsive landing page for a hostel/campsite (HTML/CSS).
5. **Brogarden v2:** A complete React/Vite SPA rebuild of the Brogarden site.
6. **GitHub Projects:** A collection of coding experiments and continuous learning.

## How to Run Locally

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Burra17/Portfolio-Website.git
    ```
2. **Navigate to the folder:**
    ```bash
    cd Portfolio-Website
    ```
3. **Start a local server:**
    The static site works with any local server. If you have VS Code, use the Live Server extension. The AI chat feature requires the Vercel CLI to run the serverless function locally:
    ```bash
    npm i -g vercel
    vercel dev
    ```
    You will also need a `.env` file with `OPENAI_API_KEY` and optionally `DISCORD_WEBHOOK_URL`.

## Contact

* **Email:** andre20030417@gmail.com
* **LinkedIn:** [André Pettersson](https://linkedin.com/in/andre-pettersson)
* **GitHub:** [@Burra17](https://github.com/burra17)

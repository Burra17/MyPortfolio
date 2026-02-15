// Project data - edit this array to add/remove/reorder projects
const projects = [
    {
        icon: "\u{1F4C5}",
        title: "ShiftMate",
        badge: "FULLSTACK WMS",
        subtitle: "Planning \u2022 CQRS \u2022 Architecture",
        description: "A robust Workforce Management System for scheduling and shift swaps. Built with a focus on scalable architecture and complex business logic.",
        features: [
            { emoji: "\u{1F3D7}\uFE0F", label: "Architecture", text: "CQRS with MediatR & EF Core" },
            { emoji: "\u{1F5C4}\uFE0F", label: "Database", text: "PostgreSQL (Hosted on Supabase)" },
            { emoji: "\u{1F512}", label: "Security", text: "JWT Auth, Hashing & Roles" }
        ],
        focus: "Advanced Backend Patterns & React",
        tags: [
            { label: ".NET 8", color: "purple" },
            { label: "React", color: "cyan" },
            { label: "PostgreSQL", color: "pink" },
            { label: "Docker", color: "orange" }
        ],
        links: [
            { text: "Live Demo", url: "https://shiftmate-ruby.vercel.app/" },
            { text: "View Code", url: "https://github.com/Burra17/ShiftMate" }
        ]
    },
    {
        icon: "\u{1F6E1}\uFE0F",
        title: "Quest Tracker RPG",
        subtitle: "Gamify \u2022 Organize \u2022 Secure \u2022 Level Up",
        description: "My first major C# project designed to gamify task management. It combines classic CRUD functionality with modern AI assistance and secure SMS authentication.",
        features: [
            { emoji: "\u2694\uFE0F", label: "Quest Management", text: "Create & complete tasks" },
            { emoji: "\u{1F916}", label: "Guild Advisor", text: "OpenAI integration for tips" },
            { emoji: "\u{1F512}", label: "Security", text: "2FA Login via Twilio SMS" }
        ],
        focus: "OOP, Async Calls & API Integration",
        tags: [
            { label: "C# .NET 8", color: "purple" },
            { label: "OpenAI API", color: "cyan" },
            { label: "Twilio 2FA", color: "orange" },
            { label: "Spectre.Console", color: "pink" }
        ],
        links: [
            { text: "View Project", url: "https://github.com/Burra17/Portfolio-Projekt-Quest-Tracker" }
        ]
    },
    {
        icon: "\u2708\uFE0F",
        title: "Travel Journal",
        subtitle: "Plan \u2022 Save \u2022 Travel \u2022 Remember",
        description: "A comprehensive application to manage your entire travel experience. Developed as a group project at NBI Handelsakademin.",
        features: [
            { emoji: "\u{1F5FA}\uFE0F", label: "Plan", text: "Destinations & budget warnings" },
            { emoji: "\u{1F4B0}", label: "Save", text: "Savings goals & cost tracking" },
            { emoji: "\u{1F4C8}", label: "History", text: "Statistics & ratings for past trips" }
        ],
        focusLabel: "Team",
        focus: "André, Joakim, Bozhidar, Georgia, Yousuf",
        tags: [
            { label: "C# .NET", color: "cyan" },
            { label: "Group Project", color: "purple" },
            { label: "Agile / Scrum", color: "pink" },
            { label: "JSON Storage", color: "orange" }
        ],
        links: [
            { text: "View Project", url: "https://github.com/Burra17/Travel-Journal-Portfolio" }
        ]
    },
    {
        icon: "\u{1F3E1}",
        title: "Brogården",
        subtitle: "Nature \u2022 Comfort \u2022 Experience",
        description: "A modern, responsive landing page for a hostel and campsite. Built to drive bookings and showcase the facility with an inviting design.",
        features: [
            { emoji: "\u{1F4F1}", label: "Mobile First", text: "Fully responsive layout" },
            { emoji: "\u{1F3A8}", label: "Modern UI", text: "Clean aesthetics with CSS3" },
            { emoji: "\u{1F4C8}", label: "Conversion", text: "Strategic Call-to-Actions" }
        ],
        focus: "Frontend Design, UX & Accessibility",
        tags: [
            { label: "HTML5", color: "orange" },
            { label: "CSS3", color: "pink" },
            { label: "Responsive Design", color: "cyan" }
        ],
        links: [
            { text: "Live Demo", url: "https://burra17.github.io/Brogarden-website/index.html" },
            { text: "View Code", url: "https://github.com/Burra17/Brogarden-website" }
        ]
    },
    {
        icon: "\u{1F332}",
        title: "Brogården v2",
        badge: "REACT VERSION",
        badgeColor: "green",
        subtitleColor: "green",
        subtitle: "Modern SPA \u2022 React \u2022 Vite",
        description: "A complete overhaul of the Brogården website, rebuilt as a modern Single Page Application (SPA) focusing on performance and modularity.",
        features: [
            { emoji: "\u26A1", label: "Fast", text: "Powered by React and Vite for instant loads" },
            { emoji: "\u{1F3D7}\uFE0F", label: "Modular", text: "Component-based architecture" },
            { emoji: "\u{1F333}", label: "Enhanced", text: "Refined UI with modern interactions" }
        ],
        focus: "State Management & Modern Frontend Tooling",
        tags: [
            { label: "React", color: "cyan" },
            { label: "Vite", color: "purple" },
            { label: "JavaScript", color: "orange" },
            { label: "SPA", color: "pink" }
        ],
        links: [
            { text: "Live Demo", url: "https://burra17.github.io/Brogarden/#/" },
            { text: "View Code", url: "https://github.com/Burra17/Brogarden" }
        ]
    },
    {
        icon: "\u{1F680}",
        title: "GitHub Projects",
        subtitle: "Experiments \u2022 Prototypes \u2022 Code",
        description: "A collection of my coding experiments, smaller scripts, and learning exercises. This is where I test new ideas and sharpen my skills.",
        features: [
            { emoji: "\u{1F9E9}", label: "Algorithms", text: "Logic & problem solving" },
            { emoji: "\u{1F3AE}", label: "Mini-games", text: "Small interactive concepts" },
            { emoji: "\u{1F4DA}", label: "Learning", text: "Following tutorials & docs" }
        ],
        focus: "Continuous Learning & Syntax",
        tags: [
            { label: "Git", color: "pink" },
            { label: "GitHub", color: "purple" },
            { label: "JavaScript / C#", color: "cyan" }
        ],
        links: [
            { text: "View Profile", url: "https://github.com/burra17" }
        ]
    }
];

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = projects.map(project => {
        const hasBadge = project.badge;
        const badgeClass = project.badgeColor ? `project-badge ${project.badgeColor}` : 'project-badge';
        const subtitleClass = project.subtitleColor ? `project-subtitle ${project.subtitleColor}` : 'project-subtitle';
        const focusLabel = project.focusLabel || 'Focus';

        const header = hasBadge
            ? `<div class="project-card-header">
                   <h3>${project.title}</h3>
                   <span class="${badgeClass}">${project.badge}</span>
               </div>`
            : `<h3>${project.title}</h3>`;

        const features = project.features
            .map(f => `<li>${f.emoji} <strong>${f.label}:</strong> ${f.text}</li>`)
            .join('');

        const tags = project.tags
            .map(t => `<span class="tech-tag ${t.color}">${t.label}</span>`)
            .join('');

        const links = project.links
            .map(l => `<a href="${l.url}" class="project-link" target="_blank" rel="noopener noreferrer">${l.text} &rarr;</a>`)
            .join('');

        const linksWrapper = project.links.length > 1
            ? `<div class="project-links">${links}</div>`
            : links;

        return `
            <div class="project-card animate-on-scroll">
                <div class="icon">${project.icon}</div>
                ${header}
                <p class="${subtitleClass}">${project.subtitle}</p>
                <p class="project-description">${project.description}</p>
                <ul class="project-features">${features}</ul>
                <div class="project-focus">
                    <strong>\u{1F3AF} ${focusLabel}:</strong> ${project.focus}
                </div>
                <div class="tech-tags">${tags}</div>
                ${linksWrapper}
            </div>
        `;
    }).join('');
}

renderProjects();

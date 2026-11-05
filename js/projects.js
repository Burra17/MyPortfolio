// Project data - edit this array to add/remove/reorder projects
const projects = [
    {
        icon: "\u{1F4C5}",
        title: "ShiftMate",
        badge: "FULLSTACK",
        subtitle: "Schedule \u2022 Swap \u2022 Manage",
        description: "A shift management system where employees swap shifts on a marketplace and managers run the schedule. Invite-based registration, email verification and role-based access.",
        features: [
            { emoji: "\u{1F3D7}\uFE0F", label: "Architecture", text: "Clean Architecture with CQRS via MediatR" },
            { emoji: "\u{1F5C4}\uFE0F", label: "Database", text: "PostgreSQL (hosted on Supabase)" },
            { emoji: "\u{1F512}", label: "Security", text: "JWT auth, BCrypt hashing and roles" }
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
        icon: "\u{1F4F0}",
        title: "Articles",
        badge: "MICROSERVICES",
        subtitle: "Submit • Review • Publish",
        description: "An academic journal platform split into five microservices, from article submission and peer review to publishing and discovery.",
        features: [
            { emoji: "\u{1F9E9}", label: "Services", text: "Auth, Journals, Submission, Review & ArticleHub" },
            { emoji: "\u{1F4E8}", label: "Communication", text: "RabbitMQ messaging and gRPC" },
            { emoji: "\u{1F5C4}️", label: "Data", text: "SQL Server, MongoDB, Redis and PostgreSQL with GraphQL" }
        ],
        focus: "Distributed Systems & Domain-Driven Design",
        tags: [
            { label: ".NET 9", color: "purple" },
            { label: "RabbitMQ", color: "orange" },
            { label: "gRPC", color: "cyan" },
            { label: "Docker", color: "pink" }
        ],
        links: [
            { text: "View Code", url: "https://github.com/Burra17/articles" }
        ]
    },
    {
        icon: "\u{1F4CB}",
        title: "TaskBoard",
        subtitle: "Projects • Tickets • Auth",
        description: "A project and ticket management Web API built to show clean backend design: every request goes through MediatR, with validation and logging as pipeline behaviors.",
        features: [
            { emoji: "\u{1F3D7}️", label: "Architecture", text: "Clean Architecture, CQRS, Repository & Unit of Work" },
            { emoji: "\u{1F512}", label: "Security", text: "JWT auth, BCrypt hashing and rate-limited login" },
            { emoji: "\u{1FA7A}", label: "Operations", text: "Health checks, Serilog and Scalar API docs" }
        ],
        focus: "Production-Ready Backend Patterns",
        tags: [
            { label: ".NET 10", color: "purple" },
            { label: "EF Core", color: "cyan" },
            { label: "MediatR", color: "orange" },
            { label: "SQL Server", color: "pink" }
        ],
        links: [
            { text: "View Code", url: "https://github.com/Burra17/TaskBoard" }
        ]
    },
    {
        icon: "\u{1F332}",
        title: "Brogården",
        badge: "CLIENT PROJECT",
        badgeColor: "green",
        subtitleColor: "green",
        subtitle: "Nature • Comfort • Experience",
        description: "The live website for Brogården, a camp and hostel by the sea. Built for a real client with a focus on findability and fast loading.",
        features: [
            { emoji: "\u{1F50D}", label: "SEO", text: "Structured data and search-friendly pages" },
            { emoji: "⚡", label: "Performance", text: "WebP images, React and Vite" },
            { emoji: "\u{1F4F1}", label: "Responsive", text: "Custom mobile navigation and gallery" }
        ],
        focus: "Shipping a Real Site for a Real Client",
        tags: [
            { label: "React", color: "cyan" },
            { label: "TypeScript", color: "pink" },
            { label: "Vite", color: "purple" },
            { label: "SEO", color: "orange" }
        ],
        links: [
            { text: "Live Site", url: "https://www.efsbrogarden.se/" },
            { text: "View Code", url: "https://github.com/Burra17/Brogarden" }
        ]
    },
    {
        icon: "⚛️",
        title: "React Nexus",
        subtitle: "Learn • Experiment • Understand",
        description: "An interactive textbook and code lab that shows how React, TanStack Query and MUI work under the hood, from re-renders to cache invalidation.",
        features: [
            { emoji: "\u{1F4D6}", label: "Modules", text: "11 modules from state and effects to mutations and forms" },
            { emoji: "\u{1F9EA}", label: "Live demos", text: "Every concept shown in working code" },
            { emoji: "⚙️", label: "Quality", text: "CI pipeline with GitHub Actions" }
        ],
        focus: "Understanding Why, Not Just How",
        tags: [
            { label: "React 19", color: "cyan" },
            { label: "TypeScript", color: "pink" },
            { label: "TanStack Query", color: "orange" },
            { label: "MUI", color: "purple" }
        ],
        links: [
            { text: "Live Demo", url: "https://react-nexus.vercel.app" },
            { text: "View Code", url: "https://github.com/Burra17/react-nexus" }
        ]
    },
    {
        icon: "✅",
        title: "Todo App",
        badge: "MOBILE",
        subtitle: "Add • Complete • Remind",
        description: "My first mobile app, built with React Native and Expo. A to-do list that works the way you expect on a phone.",
        features: [
            { emoji: "\u{1F446}", label: "Gestures", text: "Swipe to delete, long press to edit" },
            { emoji: "\u{1F514}", label: "Reminders", text: "Local notifications that are cancelled when a task is done" },
            { emoji: "\u{1F319}", label: "Theming", text: "Follows the system light and dark mode" }
        ],
        focus: "Mobile Development & Local Storage",
        tags: [
            { label: "React Native", color: "cyan" },
            { label: "Expo", color: "purple" },
            { label: "TypeScript", color: "pink" },
            { label: "SQLite", color: "orange" }
        ],
        links: [
            { text: "View Code", url: "https://github.com/Burra17/todo-app" }
        ]
    },
    {
        icon: "\u{1F680}",
        title: "GitHub Projects",
        subtitle: "Experiments \u2022 Prototypes \u2022 Code",
        description: "Everything else: school projects, experiments and learning exercises. This is where I test new ideas and sharpen my skills.",
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

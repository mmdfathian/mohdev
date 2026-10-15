document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Initialization ---
    const currentYearEl = document.getElementById('current-year');
    if(currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    // --- 2. Mobile Navigation ---
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        siteNav.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // --- 3. Theme Management ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    htmlEl.setAttribute('data-theme', savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- 4. Localization Management ---
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'en';

    const setLanguage = (lang) => {
        currentLang = lang;
        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
        langToggleBtn.textContent = lang === 'fa' ? 'EN' : 'FA';
        localStorage.setItem('lang', lang);
        
        // Update static translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Re-render dynamic sections to match language
        renderDynamicContent(lang);
    };

    langToggleBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'fa' : 'en');
    });

    // --- 5. Render Dynamic Content ---
    const renderDynamicContent = (lang) => {
        
        // Render Projects
        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = '';
        siteData.projects.forEach(proj => {
            const card = document.createElement('article');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${proj.name}</h3>
                </div>
                <div class="project-category">${lang === 'fa' ? proj.category_fa : proj.category_en}</div>
                <p class="project-desc">${lang === 'fa' ? proj.desc_fa : proj.desc_en}</p>
                <a href="${proj.url}" target="_blank" rel="noopener noreferrer" class="project-link">
                    ${translations[lang].visit_project}
                </a>
            `;
            projectsContainer.appendChild(card);
        });

        // Render Skills
        const skillsContainer = document.getElementById('skills-container');
        skillsContainer.innerHTML = '';
        siteData.skills.forEach(skillCat => {
            const catDiv = document.createElement('div');
            catDiv.className = 'skill-category';
            const catTitle = lang === 'fa' ? skillCat.category_fa : skillCat.category_en;
            
            const tagsHtml = skillCat.items.map(item => `<li class="skill-tag">${item}</li>`).join('');
            
            catDiv.innerHTML = `
                <h3>${catTitle}</h3>
                <ul class="skill-list">${tagsHtml}</ul>
            `;
            skillsContainer.appendChild(catDiv);
        });

        // Render Journey
        const journeyContainer = document.getElementById('journey-container');
        journeyContainer.innerHTML = '';
        siteData.journey.forEach(step => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'timeline-item';
            
            const title = lang === 'fa' ? step.title_fa : step.title_en;
            const date = lang === 'fa' ? step.date_fa : step.date_en;
            const desc = lang === 'fa' ? step.desc_fa : step.desc_en;

            itemDiv.innerHTML = `
                <div class="timeline-date">${date}</div>
                <div class="timeline-content">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                </div>
            `;
            journeyContainer.appendChild(itemDiv);
        });
    };

    // Initialize content rendering
    setLanguage(currentLang);

    // --- 6. Copy Email Functionality ---
    const copyBtn = document.getElementById('copy-email');
    const emailText = document.getElementById('contact-email').textContent;
    const copyFeedback = document.getElementById('copy-feedback');

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(emailText);
            copyFeedback.classList.add('show');
            setTimeout(() => copyFeedback.classList.remove('show'), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            // Fallback
            copyFeedback.textContent = "Error";
            copyFeedback.classList.add('show');
            setTimeout(() => {
                copyFeedback.classList.remove('show');
                copyFeedback.textContent = translations[currentLang].copied_msg;
            }, 2000);
        }
    });

    // --- 7. Interactive Terminal Logic ---
    const termInput = document.getElementById('terminal-input');
    const termOutput = document.getElementById('interactive-output');

    const executeCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = '';

        switch(cleanCmd) {
            case 'help':
                response = "Available commands: about, projects, contact, whoami, clear";
                break;
            case 'whoami':
                response = "mohdev - Full-Stack Developer";
                break;
            case 'about':
                response = "Navigating to About section...";
                window.location.hash = '#about';
                break;
            case 'projects':
                response = "Navigating to Projects section...";
                window.location.hash = '#projects';
                break;
            case 'contact':
                response = "Navigating to Contact section...";
                window.location.hash = '#contact';
                break;
            case 'clear':
                termOutput.innerHTML = '';
                return; // Exit early to avoid printing empty prompt
            case '':
                return; // Do nothing on empty enter
            default:
                response = `Command not found: ${cleanCmd}. Type 'help' for available commands.`;
        }

        // Print User Command
        const userLine = document.createElement('div');
        userLine.className = 'term-line';
        userLine.innerHTML = `<span class="prompt">guest@mohdev:~$</span> <span class="cmd">${cleanCmd}</span>`;
        termOutput.appendChild(userLine);

        // Print Response safely using textContent to prevent XSS
        if (response) {
            const resLine = document.createElement('div');
            resLine.className = 'term-output';
            resLine.textContent = response;
            termOutput.appendChild(resLine);
        }

        // Auto-scroll to bottom
        termOutput.scrollTop = termOutput.scrollHeight;
    };

    termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            executeCommand(termInput.value);
            termInput.value = '';
        }
    });
});

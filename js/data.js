// Data configuration and Localization dict

const siteData = {
    projects: [
        {
            id: "hesabist",
            name: "Hesabist",
            url: "https://hesabist-app.ir",
            category_en: "Web Tools & Utilities",
            category_fa: "ابزارهای وب و کاربردی",
            desc_en: "A platform offering practical online tools and utilities, managed via the Myket platform.",
            desc_fa: "پلتفرمی برای ارائه ابزارها و امکانات کاربردی آنلاین، مدیریت شده از طریق پلتفرم مایکت."
        },
        {
            id: "polymer-kaveh",
            name: "Polymer Kaveh",
            url: "https://polymer-kaveh.ir",
            category_en: "E-Commerce",
            category_fa: "فروشگاه آنلاین",
            desc_en: "An online business platform focused on polymer products and commercial e-commerce.",
            desc_fa: "یک پلتفرم تجاری آنلاین با تمرکز بر محصولات پلیمری و تجارت الکترونیک."
        }
    ],
    
    skills: [
        {
            category_en: "Programming Languages",
            category_fa: "زبان‌های برنامه‌نویسی",
            items: ["Python", "Ruby", "JavaScript", "HTML/CSS"]
        },
        {
            category_en: "Tools & Environments",
            category_fa: "ابزارها و محیط‌ها",
            items: ["GitHub Actions", "Render", "PyPI", "n8n", "UptimeRobot", "Linux"]
        }
    ],

    journey: [
        {
            date_en: "June 2026",
            date_fa: "خرداد ۱۴۰۵",
            title_en: "Software Engineering Studies",
            title_fa: "مطالعات مهندسی نرم‌افزار",
            desc_en: "Studied Object-Oriented Programming, Data Structures, and Ruby via TopLearn.",
            desc_fa: "مطالعه برنامه‌نویسی شی‌گرا، ساختمان داده‌ها و زبان روبی از طریق تاپ‌لرن."
        },
        {
            date_en: "2025 - 2026",
            date_fa: "۱۴۰۴ - ۱۴۰۵",
            title_en: "Deployment & Infrastructure",
            title_fa: "استقرار و زیرساخت",
            desc_en: "Deployed web projects like LifeVPN to Render, configured CI/CD via GitHub, and managed Python packages on PyPI.",
            desc_fa: "استقرار پروژه‌های وب مانند LifeVPN در Render، پیکربندی CI/CD از طریق گیت‌هاب و مدیریت پکیج‌های پایتون در PyPI."
        },
        {
            date_en: "Dec 2025",
            date_fa: "آذر ۱۴۰۴",
            title_en: "Soft Craft Workshop",
            title_fa: "کارگاه Soft Craft",
            desc_en: "Attended software testing workshop focusing on quality assurance and testing engineering principles.",
            desc_fa: "حضور در کارگاه تست نرم‌افزار با تمرکز بر تضمین کیفیت و اصول مهندسی تست."
        }
    ],

    github: {
        username: "mohdev",
        url: "" // Intentionally empty; configure if public GitHub URL is provided
    }
};

const translations = {
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_journey: "Journey",
        nav_contact: "Contact",
        hero_title: "Full-Stack Developer",
        hero_subtitle: "Building useful things with code.",
        hero_cta_primary: "View Projects",
        hero_cta_secondary: "Contact Me",
        about_title: "About",
        about_text_1: "I am a software developer focused on building practical, reliable applications. My approach to engineering prioritizes clean architecture, problem-solving, and continuous learning.",
        about_text_2: "I enjoy working across the stack, from establishing backend workflows and managing deployments to crafting responsive interfaces. Whether investigating new programming languages or optimizing existing tools, my goal is to create software that serves a genuine purpose.",
        projects_title: "Featured Projects",
        skills_title: "Skills & Technologies",
        journey_title: "Development Journey",
        contact_title: "Contact",
        contact_text: "Interested in discussing projects or collaborations? Let's connect.",
        copied_msg: "Copied!",
        footer_signoff: "Engineering for the web.",
        visit_project: "Visit Project →",
        terminal_welcome: "Welcome to mohdev shell. Type 'help' to see available commands."
    },
    fa: {
        nav_about: "درباره من",
        nav_projects: "پروژه‌ها",
        nav_skills: "مهارت‌ها",
        nav_journey: "مسیر توسعه",
        nav_contact: "تماس",
        hero_title: "توسعه‌دهنده فول‌استک",
        hero_subtitle: "ساخت ابزارهای کاربردی با کد.",
        hero_cta_primary: "مشاهده پروژه‌ها",
        hero_cta_secondary: "تماس با من",
        about_title: "درباره من",
        about_text_1: "من یک توسعه‌دهنده نرم‌افزار هستم که بر ساخت برنامه‌های کاربردی و قابل اعتماد تمرکز دارم. رویکرد من در مهندسی اولویت دادن به معماری تمیز، حل مسئله و یادگیری مداوم است.",
        about_text_2: "از کار در تمام بخش‌های استک لذت می‌برم؛ از ایجاد جریان‌های کاری بک‌اند و مدیریت استقرار تا طراحی رابط‌های کاربری واکنش‌گرا. چه در حال بررسی زبان‌های برنامه‌نویسی جدید باشم و چه بهینه‌سازی ابزارهای موجود، هدف من ساخت نرم‌افزاری است که هدف واقعی را برآورده کند.",
        projects_title: "پروژه‌های منتخب",
        skills_title: "مهارت‌ها و فناوری‌ها",
        journey_title: "مسیر توسعه",
        contact_title: "تماس",
        contact_text: "علاقه‌مند به بحث در مورد پروژه‌ها یا همکاری هستید؟ در ارتباط باشیم.",
        copied_msg: "کپی شد!",
        footer_signoff: "مهندسی برای وب.",
        visit_project: "مشاهده پروژه ←",
        terminal_welcome: "به شل mohdev خوش آمدید. برای دیدن دستورات 'help' را تایپ کنید."
    }
};

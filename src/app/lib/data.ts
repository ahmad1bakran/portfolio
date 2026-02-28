// src/lib/data.ts

export type Language = "en" | "ar";

export const portfolioData = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      achievements: "Achievements",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Ahmad Bakran",
      role: "Frontend Web & Mobile Developer",
      description:
        "Frontend web and mobile developer specializing in React.js, Next.js, and React Native, with solid experience in building scalable, user-friendly applications. Graduated with a Bachelor's degree in Informatics Engineering from the Arab Private University. Strong background in problem-solving and competitive programming, including participation in Africa & Arab ICPC Regional Finals.",
      location: "Syria, Hama",
      phone: "+963 9388 70119",
      email: "ahmadbakran02@gmail.com",
      linkedin: "linkedin.com/in/ahmad-bakran-80735b226",
      cta: "View My Work",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      description:
        "Passionate about clean code, performance optimization, and transforming complex Figma designs into seamless user experiences. I blend deep algorithmic problem-solving with pixel-perfect UI/UX implementations.",
      education: {
        title: "Education",
        degree: "Bachelor's in Informatics Engineering",
        university: "Arab Private University",
        year: "2025",
      },
    },
    skills: {
      title: "Technical Skills",
      categories: {
        frontend: {
          title: "Frontend Development",
          items: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "TypeScript",
            "React.js",
            "Next.js",
            "React Native",
            "Tailwind CSS",
            "Bootstrap",
            "SASS",
          ],
        },
        design: {
          title: "Design & Tools",
          items: ["Figma", "Git & GitHub", "REST APIs", "Responsive Design"],
        },
        languages: {
          title: "Languages",
          items: ["Arabic: Native", "English: B2"],
        },
      },
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          role: "College Lecturer",
          date: "Oct 2025 – Present",
          desc: "Teaching foundational and advanced topics in computer science and programming. Supporting students with practical labs and real-world development concepts.",
        },
        {
          role: "Web & Mobile Applications Developer",
          date: "Aug 2024 – Present",
          desc: "Developed and maintained modern web applications using React.js and Next.js. Built cross-platform mobile applications using React Native. Implemented clean UI/UX designs with proper loading states, skeleton pages, and error handling. Integrated REST APIs and ensured optimal performance and responsiveness.",
        },
        {
          role: "Competitive Programming Coach",
          date: "Dec 2023 – Aug 2025",
          desc: "Trained students in algorithms, data structures, and problem-solving techniques. Prepared teams for local and regional competitive programming contests. Conducted workshops on time complexity, optimization, and coding best practices.",
        },
      ],
    },
    achievements: {
      title: "Professional Achievements",
      items: [
        {
          title: "Problem Solver | ICPC Regional Finalist",
          description:
            "Solved 2000+ programming problems on Codeforces, AtCoder, CSES, and USACO. Participated in ICPC for four consecutive seasons. Qualified for Africa & Arab ICPC Regional Finals, Egypt (2023).",
        },
        {
          title: "Awards",
          description:
            "2nd Place, Private Universities Programming Contest (Two consecutive years).",
        },
      ],
      certifications: {
        title: "Certifications",
        items: [
          "Advanced React – Meta",
          "Technical Support Fundamentals – Google",
          "Introduction to Back-End Development – Meta",
          "Introduction to Front-End Development – Meta",
          "Foundations of Cybersecurity – Google",
          "Play It Safe: Manage Security Risk - Google",
          "Web Development with HTML, CSS, JavaScript – IBM",
        ],
      },
    },
    projects: {
      title: "Featured Projects",
      viewAll: "View all projects",
      items: [
        {
          title: "Martyrs Documentation Platform",
          desc: "A comprehensive platform and archive to document martyrs, built with robust full-stack architecture.",
          tags: ["Next.js", "Node.js", "TypeScript"],
          image: "../projects/martyrs.webp",
        },
        {
          title: "E-Commerce Mobile Application",
          desc: "A full-featured e-commerce mobile app with product listing, cart management, authentication, and order tracking. Focused on smooth UX with optimized loading pages and reusable components.",
          tags: ["React Native", "Expo", "Tailwind", "TypeScript"],
          image: "../projects/ecommerce-app.webp",
        },
        {
          title: "Real Estate Admin Dashboard",
          desc: "A comprehensive control panel for a real estate company to manage properties and client interactions.",
          tags: ["Next.js", "Tailwind CSS", "Chadcn/UI"],
          image: "../projects/real-estate-dashboard.webp",
        },
        {
          title: "AI-Powered Educational Platform",
          desc: "Web-based education support platform integrating AI tools to assist students with learning, content generation, and problem-solving. Implemented responsive layouts, dynamic dashboards, and performance-friendly loading states.",
          tags: ["Next.js", "TypeScript", "AI Integration"],
          image: "../projects/educational-platform.webp",
        },
        {
          title: "Educational Center App",
          desc: "A dedicated mobile application for an educational center to manage student resources and schedules.",
          tags: ["React Native", "Expo", "TypeScript"],
          image: "../projects/educational-center-app5.webp",
        },
        {
          title: "Digital Payments Landing Page & Dashboard",
          desc: "Landing page and custom dashboard for purchasing digital cards, numbers, and managing electronic payments.",
          tags: ["Next.js", "UI/UX", "Chadcn/UI"],
          image: "../projects/digital-payments.webp",
        },
        {
          title: "Recruitment Platform Dashboard",
          desc: "A centralized admin panel for managing job postings and hiring workflows.",
          tags: ["React.js", "Tailwind CSS"],
          image: "../projects/recruitment-dashboard.webp",
        },
        {
          title: "Medical Equipment Landing Page",
          desc: "A highly optimized, conversion-focused landing page for a medical supplies company.",
          tags: ["HTML5", "CSS3", "JS"],
          image: "../projects/medical-equipment.webp",
        },
        {
          title: "Landisng Page Template",
          desc: "A modern, responsive landing page template with clean sections, clear CTAs, and easy customization. Built for fast load times and conversion-focused design.",
          tags: ["HTML5", "CSS", "JS"],
          image: "../projects/landing-page-template.webp",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
      email: "ahmadbakran02@gmail.com",
      phone: "+963 9388 70119",
      location: "Syria, Hama",
    },
  },
  ar: {
    nav: {
      about: "نبذة عني",
      skills: "المهارات",
      experience: "الخبرات",
      achievements: "الإنجازات",
      projects: "المشاريع",
      contact: "تواصل معي",
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "أحمد بكران",
      role: "مطور واجهات أمامية وتطبيقات موبايل",
      description:
        "مطور واجهات أمامية وتطبيقات موبايل متخصص في React.js و Next.js و React Native، مع خبرة قوية في بناء تطبيقات قابلة للتوسع وسهلة الاستخدام. خريج هندسة معلوماتية من الجامعة العربية الخاصة. خلفية قوية في حل المشكلات والبرمجة التنافسية، بما في ذلك المشاركة في نهائيات ICPC الإقليمية لأفريقيا والعرب.",
      location: "سوريا، حماة",
      phone: "+963 9388 70119",
      email: "ahmadbakran02@gmail.com",
      linkedin: "linkedin.com/in/ahmad-bakran-80735b226",
      cta: "شاهد أعمالي",
      downloadCV: "تحميل السيرة الذاتية",
    },
    about: {
      title: "نبذة عني",
      description:
        "شغوف بالكود النظيف وتحسين الأداء وتحويل تصميمات Figma المعقدة إلى تجارب مستخدم سلسة. أدمج حل المشكلات الخوارزمية العميقة مع تطبيقات UI/UX مثالية.",
      education: {
        title: "التعليم",
        degree: "بكالوريوس في هندسة المعلوماتية",
        university: "الجامعة العربية الخاصة",
        year: "2025",
      },
    },
    skills: {
      title: "المهارات التقنية",
      categories: {
        frontend: {
          title: "تطوير الواجهات الأمامية",
          items: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "TypeScript",
            "React.js",
            "Next.js",
            "React Native",
            "Tailwind CSS",
            "Bootstrap",
            "SASS",
          ],
        },
        design: {
          title: "التصميم والأدوات",
          items: ["Figma", "Git & GitHub", "REST APIs", "التصميم المتجاوب"],
        },
        languages: {
          title: "اللغات",
          items: ["العربية: اللغة الأم", "الإنجليزية: B2"],
        },
      },
    },
    experience: {
      title: "الخبرات العملية",
      items: [
        {
          role: "محاضر جامعي",
          date: "أكتوبر 2025 – الحاضر",
          desc: "تدريس المواضيع الأساسية والمتقدمة في علوم الحاسوب والبرمجة. دعم الطلاب في المخابر العملية ومفاهيم التطوير الواقعية.",
        },
        {
          role: "مطور تطبيقات ويب وموبايل",
          date: "أغسطس 2024 – الحاضر",
          desc: "تطوير وصيانة تطبيقات ويب حديثة باستخدام React.js و Next.js. بناء تطبيقات موبايل متعددة المنصات باستخدام React Native. تنفيذ تصميمات UI/UX نظيفة مع حالات تحميل مناسبة وصفحات هيكلية ومعالجة الأخطاء. دمج REST APIs وضمان الأداء الأمثل والاستجابة.",
        },
        {
          role: "مدرب برمجة تنافسية",
          date: "ديسمبر 2023 – أغسطس 2025",
          desc: "تدريب الطلاب على الخوارزميات وهياكل البيانات وتقنيات حل المشكلات. إعداد الفرق للمسابقات البرمجية التنافسية المحلية والإقليمية. إجراء ورش عمل حول تعقيد الوقت والتحسين وأفضل ممارسات البرمجة.",
        },
      ],
    },
    achievements: {
      title: "الإنجازات المهنية",
      items: [
        {
          title: "حلال المشكلات | متأهل لنهائيات ICPC",
          description:
            "حل أكثر من 2000 مشكلة برمجية على Codeforces و AtCoder و CSES و USACO. شارك في ICPC لأربع مواسم متتالية. تأهل لنهائيات ICPC الإقليمية لأفريقيا والعرب، مصر (2023).",
        },
        {
          title: "الجوائز",
          description:
            "المركز الثاني، مسابقة البرمجة للجامعات الخاصة (سنتان متتاليتان).",
        },
      ],
      certifications: {
        title: "الشهادات",
        items: [
          "Advanced React – Meta",
          "Technical Support Fundamentals – Google",
          "Introduction to Back-End Development – Meta",
          "Introduction to Front-End Development – Meta",
          "Foundations of Cybersecurity – Google",
          "Play It Safe: Manage Security Risk - Google",
          "Web Development with HTML, CSS, JavaScript – IBM",
        ],
      },
    },
    projects: {
      title: "أبرز المشاريع",
      viewAll: "عرض جميع المشاريع",
      items: [
        {
          title: "موقع توثيق الشهداء",
          desc: "منصة وأرشيف شامل لتوثيق الشهداء، مبنية بهيكلية برمجية متطورة.",
          tags: ["Next.js", "Node.js", "TypeScript"],
          image: "../projects/martyrs.webp",
        },
        {
          title: "تطبيق تسوق الكتروني",
          desc: "تطبيق تسوق إلكتروني متكامل مع قائمة المنتجات وإدارة السلة والمصادقة وتتبع الطلبات. يركز على تجربة مستخدم سلسة مع صفحات تحميل محسنة ومكونات قابلة لإعادة الاستخدام.",
          tags: ["React Native", "Expo", "Tailwind", "TypeScript"],
          image: "../projects/ecommerce-app.webp",
        },
        {
          title: "لوحة تحكم لشركة بيع العقارات",
          desc: "لوحة تحكم شاملة لشركة عقارات لإدارة الممتلكات والتفاعل مع العملاء.",
          tags: ["Next.js", "Tailwind CSS", "Chadcn/UI"],
          image: "../projects/real-estate-dashboard.webp",
        },
        {
          title: "موقع تعليمي مدعوم بالذكاء الاصطناعي",
          desc: "منصة ويب تعليمية تدمج أدوات الذكاء الاصطناعي لمساعدة الطلاب في التعلم وإنشاء المحتوى وحل المشكلات. تنفيذ تخطيطات متجاوبة ولوحات تحكم ديناميكية وحالات تحميل صديقة للأداء.",
          tags: ["Next.js", "TypeScript", "AI Integration"],
          image: "../projects/educational-platform.webp",
        },
        {
          title: "تطبيق لمركز تعليمي",
          desc: "تطبيق موبايل مخصص لمركز تعليمي لإدارة الموارد التعليمية وجداول الطلاب.",
          tags: ["React Native", "Expo", "TypeScript"],
          image: "../projects/educational-center-app5.webp",
        },
        {
          title:
            "صفحة هبوط لتطبيق لشراء البطاقات والارقام والدفع الالكتروني ولوحة تحكم",
          desc: "صفحة هبوط ولوحة تحكم مخصصة لشراء البطاقات والأرقام وإدارة المدفوعات الإلكترونية.",
          tags: ["Next.js", "UI/UX", "Chadcn/UI"],
          image: "../projects/digital-payments.webp",
        },
        {
          title: "لوحة تحكم لمنصة توظيف",
          desc: "لوحة تحكم مركزية لإدارة الوظائف ومتابعة المتقدمين.",
          tags: ["React.js", "Tailwind CSS"],
          image: "../projects/recruitment-dashboard.webp",
        },
        {
          title: "صفحة هبوط لشركة ادوات طبيه",
          desc: "صفحة هبوط محسنة بتصميم عصري لشركة أدوات طبية.",
          tags: ["HTML5", "CSS3", "JS"],
          image: "../projects/medical-equipment.webp",
        },
        {
          title: "قالب صفحة هبوط",
          desc: "قالب صفحة هبوط حديث ومتجاوب بأقسام واضحة ونداءات إجراء واضحة وسهولة في التخصيص. مبني لأداء تحميل سريع وتصميم يركز على التحويل.",
          tags: ["HTML5", "CSS", "JS"],
          image: "../projects/landing-page-template.webp",
        },
      ],
    },
    contact: {
      title: "تواصل معي",
      subtitle:
        "أنا دائماً منفتح لمناقشة مشاريع جديدة أو أفكار إبداعية أو فرص لكوني جزءاً من رؤيتك.",
      email: "ahmadbakran02@gmail.com",
      phone: "+963 9388 70119",
      location: "سوريا، حماة",
    },
  },
};

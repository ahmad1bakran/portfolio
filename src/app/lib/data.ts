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
      role: "Full Stack Web & Mobile Developer",
      description:
        "Full stack web and mobile developer specializing in React.js, Next.js, React Native, Node.js, and Express.js, with solid experience in building scalable, user-friendly applications from the database to the UI. Graduated with a Bachelor's degree in Informatics Engineering from the Arab Private University. Strong background in problem-solving and competitive programming, including participation in Africa & Arab ICPC Regional Finals.",
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
        "Passionate about clean code, performance optimization, and building robust end-to-end solutions. I blend deep algorithmic problem-solving with scalable Node.js/Express.js backends and pixel-perfect React.js/Next.js UI/UX implementations.",
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
        backend: {
          title: "Backend Development",
          items: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"],
        },
        design: {
          title: "Design & Tools",
          items: ["Figma", "Git & GitHub", "Responsive Design"],
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
          role: "Computer Science Instructor, Elite Class Kw",
          date: "May 2026 – Present",
          desc: "Delivering interactive online lectures and technical training sessions to students and professionals. Conducting both one-on-one and group sessions tailored to various learning levels in programming and computer science.",
        },
        {
          role: "College Lecturer",
          date: "Oct 2025 – Jun 2026",
          desc: "Teaching foundational and advanced topics in computer science and programming. Supporting students with practical labs and real-world full-stack development concepts.",
        },
        {
          role: "Frontend Developer, Connect Digital Agency",
          date: "May 2025 – Present",
          desc: "Built full-stack applications integrating responsive React.js and Next.js frontends with robust Node.js and Express.js RESTful APIs. Optimized state management and database interactions for seamless performance.",
        },
        {
          role: "Web & Mobile Applications Developer",
          date: "Aug 2024 – Present",
          desc: "Developed and maintained modern full-stack web applications using React.js, Next.js, Node.js, and Express.js. Built cross-platform mobile applications using React Native. Implemented clean UI/UX designs alongside robust backend logic, proper loading states, and comprehensive error handling.",
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
      title: "Selected Projects & Works",
      viewAll: "View all projects",
      items: [
        {
          title: "Martyrs Documentation Platform",
          desc: "A comprehensive platform and archive to document martyrs, built with robust full-stack architecture using Node.js and Next.js.",
          tags: ["Next.js", "Node.js", "Express.js", "TypeScript"],
          image: "../projects/martyrs.webp",
          link: "https://martyrs-of-syrian-freedom.com",
        },
        {
          title: "E-Commerce Mobile Application",
          desc: "A full-featured e-commerce mobile app with product listing, cart management, authentication, and order tracking. Powered by a Node.js backend with smooth frontend UX.",
          tags: ["React Native", "Node.js", "Expo", "Tailwind", "TypeScript"],
          image: "../projects/ecommerce-app.webp",
          link: "",
        },
        {
          title: "Real Estate Admin Dashboard",
          desc: "A comprehensive control panel for a real estate company to manage properties and client interactions, supported by custom APIs.",
          tags: ["Next.js", "Node.js", "Tailwind CSS", "Chadcn/UI"],
          image: "../projects/real-estate-dashboard.webp",
          link: "",
        },
        {
          title: "AI-Powered Educational Platform",
          desc: "Web-based education support platform integrating AI tools to assist students with learning, content generation, and problem-solving. Implemented responsive layouts and secure backend data handling.",
          tags: ["Next.js", "Node.js", "TypeScript", "AI Integration"],
          image: "../projects/educational-platform.webp",
          link: "",
        },
        {
          title: "Educational Center App",
          desc: "A dedicated mobile application for an educational center to manage student resources and schedules.",
          tags: ["React Native", "Expo", "TypeScript"],
          image: "../projects/educational-center-app5.webp",
          link: "",
        },
        {
          title: "Digital Payments Landing Page & Dashboard",
          desc: "Landing page and custom dashboard for purchasing digital cards, numbers, and managing electronic payments.",
          tags: ["Next.js", "UI/UX", "Chadcn/UI"],
          image: "../projects/digital-payments.webp",
          link: "https://alrafah.store",
        },
        {
          title: "Recruitment Platform Dashboard",
          desc: "A centralized admin panel for managing job postings and hiring workflows.",
          tags: ["React.js", "Node.js", "Tailwind CSS"],
          image: "../projects/recruitment-dashboard.webp",
          link: "",
        },
        {
          title: "Medical Equipment Landing Page",
          desc: "A highly optimized, conversion-focused landing page for a medical supplies company.",
          tags: ["HTML5", "CSS3", "JS"],
          image: "../projects/medical-equipment.webp",
          link: "pmskw.com",
        },
        {
          title: "Landing Page",
          desc: "A modern, responsive landing page template with clean sections, clear CTAs, and easy customization. Built for fast load times and conversion-focused design.",
          tags: ["HTML5", "CSS", "JS"],
          image: "../projects/landing-page-template.webp",
          link: "",
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
      role: "مطور ويب وموبايل شامل (Full Stack)",
      description:
        "مطور ويب وموبايل شامل (Full Stack) متخصص في React.js و Next.js و React Native بالإضافة إلى Node.js و Express.js، مع خبرة قوية في بناء تطبيقات متكاملة، قابلة للتوسع، وسهلة الاستخدام من قاعدة البيانات وحتى واجهة المستخدم. خريج هندسة معلوماتية من الجامعة العربية الخاصة. خلفية قوية في حل المشكلات والبرمجة التنافسية، بما في ذلك المشاركة في نهائيات ICPC الإقليمية لأفريقيا والعرب.",
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
        "شغوف بالكود النظيف، وتحسين الأداء، وبناء حلول برمجية متكاملة (End-to-End). أدمج بين مهارات حل المشكلات الخوارزمية العميقة مع بناء واجهات خلفية (Backends) قوية وقابلة للتوسع باستخدام Node.js/Express.js وتطبيقات UI/UX مثالية عبر React.js و Next.js.",
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
        backend: {
          title: "تطوير الواجهات الخلفية",
          items: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"],
        },
        design: {
          title: "التصميم والأدوات",
          items: ["Figma", "Git & GitHub", "التصميم المتجاوب"],
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
          role: "مدرس علوم حاسوب، Elite Class Kw",
          date: "مايو 2026 – الحاضر",
          desc: "تقديم محاضرات تفاعلية عبر الإنترنت وجلسات تدريب تقنية للطلاب والمحترفين. إجراء جلسات فردية وجماعية مصممة لتناسب مستويات التعلم المختلفة في البرمجة وعلوم الحاسوب.",
        },
        {
          role: "محاضر جامعي",
          date: "أكتوبر 2025 – يونيو 2026",
          desc: "تدريس المواضيع الأساسية والمتقدمة في علوم الحاسوب والبرمجة. دعم الطلاب في المخابر العملية ومفاهيم تطوير الويب المتكامل (Full-Stack).",
        },
        {
          role: "مطور ويب Frontend، Connect Digital Agency",
          date: "مايو 2025 – الحاضر",
          desc: "بناء تطبيقات ويب شاملة تدمج واجهات React.js و Next.js المتجاوبة مع واجهات برمجة تطبيقات (RESTful APIs) قوية باستخدام Node.js و Express.js. تحسين إدارة الحالة وتفاعلات قاعدة البيانات لضمان أداء سلس.",
        },
        {
          role: "مطور تطبيقات ويب وموبايل",
          date: "أغسطس 2024 – الحاضر",
          desc: "تطوير وصيانة تطبيقات ويب شاملة وحديثة باستخدام React.js و Next.js و Node.js و Express.js. بناء تطبيقات موبايل متعددة المنصات باستخدام React Native. تنفيذ تصميمات UI/UX نظيفة إلى جانب منطق خلفي قوي مع معالجة سليمة للأخطاء وحالات التحميل.",
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
      title: "أبرز أعمالي ومشاريعي",
      viewAll: "عرض جميع المشاريع",
      items: [
        {
          title: "موقع توثيق الشهداء",
          desc: "منصة وأرشيف شامل لتوثيق الشهداء، مبنية بهيكلية برمجية متكاملة (Full-Stack) متطورة باستخدام Node.js و Next.js.",
          tags: ["Next.js", "Node.js", "Express.js", "TypeScript"],
          image: "../projects/martyrs.webp",
          link: "https://martyrs-of-syrian-freedom.com",
        },
        {
          title: "تطبيق تسوق الكتروني",
          desc: "تطبيق تسوق إلكتروني متكامل مع قائمة المنتجات وإدارة السلة والمصادقة وتتبع الطلبات. مدعوم بواجهة خلفية (Backend) عبر Node.js لتجربة مستخدم سلسة ومكونات قابلة لإعادة الاستخدام.",
          tags: ["React Native", "Node.js", "Expo", "Tailwind", "TypeScript"],
          image: "../projects/ecommerce-app.webp",
          link: "",
        },
        {
          title: "لوحة تحكم لشركة بيع العقارات",
          desc: "لوحة تحكم شاملة لشركة عقارات لإدارة الممتلكات والتفاعل مع العملاء، مدعومة بواجهات برمجة (APIs) مخصصة.",
          tags: ["Next.js", "Node.js", "Tailwind CSS", "Chadcn/UI"],
          image: "../projects/real-estate-dashboard.webp",
          link: "",
        },
        {
          title: "موقع تعليمي مدعوم بالذكاء الاصطناعي",
          desc: "منصة ويب تعليمية تدمج أدوات الذكاء الاصطناعي لمساعدة الطلاب في التعلم وإنشاء المحتوى وحل المشكلات. تنفيذ تخطيطات متجاوبة ومعالجة آمنة للبيانات في الواجهة الخلفية.",
          tags: ["Next.js", "Node.js", "TypeScript", "AI Integration"],
          image: "../projects/educational-platform.webp",
          link: "",
        },
        {
          title: "تطبيق لمركز تعليمي",
          desc: "تطبيق موبايل مخصص لمركز تعليمي لإدارة الموارد التعليمية وجداول الطلاب.",
          tags: ["React Native", "Expo", "TypeScript"],
          image: "../projects/educational-center-app5.webp",
          link: "",
        },
        {
          title:
            "صفحة هبوط لتطبيق لشراء البطاقات والارقام والدفع الالكتروني ولوحة تحكم",
          desc: "صفحة هبوط ولوحة تحكم مخصصة لشراء البطاقات والأرقام وإدارة المدفوعات الإلكترونية.",
          tags: ["Next.js", "UI/UX", "Chadcn/UI"],
          image: "../projects/digital-payments.webp",
          link: "https://alrafah.store",
        },
        {
          title: "لوحة تحكم لمنصة توظيف",
          desc: "لوحة تحكم مركزية لإدارة الوظائف ومتابعة المتقدمين.",
          tags: ["React.js", "Node.js", "Tailwind CSS"],
          image: "../projects/recruitment-dashboard.webp",
          link: "",
        },
        {
          title: "صفحة هبوط لشركة ادوات طبيه",
          desc: "صفحة هبوط محسنة بتصميم عصري لشركة أدوات طبية.",
          tags: ["HTML5", "CSS3", "JS"],
          image: "../projects/medical-equipment.webp",
          link: "pmskw.com",
        },
        {
          title: "صفحة هبوط",
          desc: "قالب صفحة هبوط حديث ومتجاوب بأقسام واضحة ونداءات إجراء واضحة وسهولة في التخصيص. مبني لأداء تحميل سريع وتصميم يركز على التحويل.",
          tags: ["HTML5", "CSS", "JS"],
          image: "../projects/landing-page-template.webp",
          link: "",
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

import resumeAsset from './assets/Gokul Nath S - Resume.pdf'
import intern1Certificate from './assets/certificates/intern-1.pdf'
import cscCertificate from './assets/certificates/csc.jpeg'
import eboxCertificate from './assets/certificates/e-box.pdf'
import internationalConference1 from './assets/certificates/ic-1.jpeg'
import internationalConference2 from './assets/certificates/ic-2.pdf'
import publicationCertificate from './assets/certificates/publication.jpeg'
import sdt1Certificate from './assets/certificates/std-1.jpeg'
import sdt2Certificate from './assets/certificates/std-2.jpeg'
import sdt3Certificate from './assets/certificates/std-3.jpeg'

export const profile = {
  name: 'GOKUL NATH S',
  role: 'Full-stack Web Developer | Python – Backend Developer',
  intro: 'Motivated and detail-oriented Information Technology student with hands-on experience in Full-Stack Web Development using React.js, Node.js, Express.js, and MongoDB, and also skilled in Backend engineering with Python, FastAPI, PostgreSQL, and SQLAlchemy.',
  location: 'Salem, Tamil Nadu',
  email: 'gokulsaravanan034@gmail.com',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gokul-nath-s/' },
    { label: 'GitHub', href: 'https://github.com/realgokulnath-dev' },
    { label: 'Instagram', href: 'https://www.instagram.com/gokulnath.dev' },
    { label: 'WhatsApp', href: 'https://wa.me/919342486977' },
    { label: 'Email', href: 'mailto:gokulsaravanan034@gmail.com' },
  ],
}

export const resumeUrl = resumeAsset

export const experiences = [
  {
    year: '05.10.2025 - 05.11.2025',
    company: 'CORIZO EDUTECH PROJECT',
    role: 'Web Development (Self Placed)',
    location: 'Self-Placed',
    description: 'Developed an e-commerce website that includes login page, user account page, add-to-cart management, wishlist, order management, and payment process. The project was developed using frontend technologies.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'Self Placed',
    certificateUrl: intern1Certificate,
    projectUrl: 'https://friendly-klepon-4696fc.netlify.app/login.html',
  },
  {
    year: '30.05.2026 – 30.06.2026',
    company: 'COGNIFYZ TECHNOLOGIES',
    role: 'Frontend Development (Online)',
    location: 'Online',
    description: 'Developed a responsive frontend application for job seekers and recruiters. Work included job listing module, application tracking module, company profile module, reusable React components, and frontend interfaces integrated with backend APIs.',
    tags: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    accent: 'Online',
    certificateUrl: '',
    projectUrl: 'https://connect-the-career.netlify.app/',
  },
  {
    year: '01.06.2026 – 30.06.2026',
    company: 'Tech Vedhu',
    role: 'Python Full Stack Development',
    location: 'Training',
    description: 'Completed Python Full Stack Development training covering Python programming, backend development, API development and database integration. The training also included hands-on learning with Python, FastAPI, PostgreSQL and SQLAlchemy.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy'],
    accent: 'Training',
    certificateUrl: '',
  },
]

export const skills = [
  { number: '01', title: 'Programming Languages', text: 'Python, JavaScript, C, C++', items: ['Python', 'JavaScript', 'C', 'C++'] },
  { number: '02', title: 'Frontend Technologies', text: 'HTML5, CSS3, TailwindCSS, React.js', items: ['HTML5', 'CSS3', 'TailwindCSS', 'React.js'] },
  { number: '03', title: 'Backend Technologies', text: 'FastAPI, Node.js, Express.js', items: ['FastAPI', 'Node.js', 'Express.js'] },
  { number: '04', title: 'Databases', text: 'MongoDB, PostgreSQL (SQLAlchemy)', items: ['MongoDB', 'PostgreSQL (SQLAlchemy)'] },
  { number: '05', title: 'API Development', text: 'RESTful APIs, JWT Authentication, API Testing (Postman)', items: ['RESTful APIs', 'JWT Authentication', 'API Testing (Postman)'] },
  { number: '06', title: 'Tools & Technologies', text: 'Git, GitHub, VS Code, Redis, Celery', items: ['Git', 'GitHub', 'VS Code', 'Redis', 'Celery'] },
  { number: '07', title: 'Core Concepts', text: 'Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), MVC Architecture, Authentication & Authorization', items: ['OOP', 'DSA', 'MVC Architecture', 'Authentication & Authorization'] },
]

export const projects = [
  {
    id: 5,
    slug: 'maizeking',
    title: 'MaizeKing — Maize Trading Management Application',
    type: 'Project',
    group: 'personal',
    year: '',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=85',
    description: 'Developed a business management platform for maize trading operations, designed to simplify business record management and provide a centralized digital workflow.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    rating: '',
    clientReview: '',
    clientName: '',
    clientRole: '',
    projectUrl: 'https://maize-trading-app.netlify.app/',
    status: '',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['Bill Import / Export', 'E-Bill Management', 'Interactive Dashboard', 'Transaction Monitoring', 'Business Analytics', 'Centralized Digital Storage'],
  },
  {
    id: 6,
    slug: 'smart-expense-tracker',
    title: 'Smart Expense Tracker',
    type: 'Project',
    group: 'personal',
    year: '',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85',
    description: 'Developed a web application for organizing and monitoring daily income and expenses, helping users understand their spending and manage their budgets effectively.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    rating: '',
    clientReview: '',
    clientName: '',
    clientRole: '',
    projectUrl: 'https://expenses-track-system.netlify.app/',
    status: '',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['Add financial transactions', 'Edit financial transactions', 'Delete financial transactions', 'Track total income', 'Track total expenses', 'Calculate available balance', 'Display financial data using charts', 'Monitor spending habits', 'Manage personal budgets'],
  },
  {
    id: 1,
    slug: 'developer-portfolio',
    title: 'Developer Portfolio',
    type: 'Freelancer Project',
    group: 'client',
    year: '⭐ 4.9/5',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85',
    description: 'Designed and developed a clean and responsive developer portfolio website with a strong focus on modern UI, professional presentation and mobile responsiveness.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    rating: '⭐ 4.9/5',
    clientReview: '“(Subakeerthi - Data Analyst) Gokul delivered a clean UI, premium design and responsive layout. Delivered exactly as expected.”',
    clientName: 'Subakeerthi',
    clientRole: 'Data Analyst',
    projectUrl: 'https://subakeerthi-portfolio.netlify.app/',
    status: '',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [],
  },
  {
    id: 2,
    slug: 'memory-vault',
    title: 'Memory Vault',
    type: 'Freelancer Project',
    group: 'client',
    year: '⭐ 4.8/5',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85',
    description: 'Developed a secure and visually clean web application for storing and managing personal messages and memories, with a unique concept designed to meet academic requirements.',
    technologies: ['React.js', 'TailwindCSS', 'JavaScript'],
    rating: '⭐ 4.8/5',
    clientReview: '“(Praveen - Web Developer) Unique concept with secure message storage. Perfect implementation for academic requirements.”',
    clientName: 'Praveen',
    clientRole: 'Web Developer',
    projectUrl: 'https://save-secure.netlify.app/',
    status: '',
    tags: ['React.js', 'TailwindCSS', 'JavaScript'],
    features: [],
  },
  {
    id: 3,
    slug: 'winner-bag-shop',
    title: 'Winner Bag Shop — Online Store',
    type: 'Freelancer Project',
    group: 'client',
    year: '⭐ 4.9/5',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=85',
    description: 'Developed a full-stack e-commerce solution for Winner Bag Shop with product management, online shopping functionality and smooth administrative management.',
    technologies: ['MongoDB', 'Node.js', 'React.js', 'Express.js'],
    rating: '⭐ 4.9/5',
    clientReview: '“(Riyaz Ahamed - Winner Bag Shop Owner) Gokul delivered a professional e-commerce solution with smooth admin management and excellent support. Highly recommended.”',
    clientName: 'Riyaz Ahamed',
    clientRole: 'Winner Bag Shop Owner',
    projectUrl: '',
    status: 'Update Soon...',
    tags: ['MongoDB', 'Node.js', 'React.js', 'Express.js'],
    features: [],
  },
  {
    id: 4,
    slug: 'tamilan888-salon-website',
    title: 'Tamilan888 Salon Website',
    type: 'Freelancer Project',
    group: 'client',
    year: '⭐ In Progress',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85',
    description: 'Currently developing a comprehensive salon management system with appointment booking, dashboard management and customer handling features.',
    technologies: ['MongoDB', 'Node.js', 'React.js', 'Express.js', 'TailwindCSS'],
    rating: '⭐ In Progress',
    clientReview: '“(Tamilan888 Salon Owner) Currently working on a comprehensive salon management system with appointment booking, dashboard management and customer handling features.”',
    clientName: 'Tamilan888 Salon Owner',
    clientRole: 'Salon Owner',
    projectUrl: '',
    status: 'Update Soon...',
    tags: ['MongoDB', 'Node.js', 'React.js', 'Express.js', 'TailwindCSS'],
    features: [],
  },
  {
    id: 7,
    slug: 'college-e-voting-system',
    title: 'College E-Voting System for B.Tech IT',
    type: 'Featured Project',
    group: 'featured',
    featured: true,
    year: '',
    image: `${import.meta.env.BASE_URL}assets/images/projects/college-e-voting-system.svg`,
    description: 'Developed a college-level e-voting system for conducting IT department association elections digitally, providing a structured and secure voting workflow for students across 2nd Year, 3rd Year and Final Year. Student email addresses and registration numbers can be maintained in Excel and uploaded as CSV data to manage eligible voters and voting access. The system validates one vote per student, providing a cleaner and more organized alternative to manual election processes.',
    technologies: ['React', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
    rating: '',
    clientReview: '',
    clientName: '',
    clientRole: '',
    projectUrl: '',
    status: 'Currently Private',
    tags: ['React', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
    features: ['Email-based voter identification', 'Registration-number-based voter records', 'One-vote-per-student validation', 'Structured election workflow'],
  },
]

export const services = [
  ['01', 'Full-Stack Web Development', 'Build modern, responsive and database-driven web applications using modern frontend and backend technologies.'],
  ['02', 'Frontend Development', 'Create clean, responsive and user-friendly interfaces using React.js, HTML5, CSS3 and Tailwind CSS.'],
  ['03', 'Backend Development', 'Develop scalable backend applications and server-side solutions using Node.js, Express.js, Python and FastAPI.'],
  ['04', 'REST API Development', 'Design and develop structured, scalable and secure RESTful APIs for modern web applications.'],
  ['05', 'Database Development', 'Build and manage database-driven applications using MongoDB, PostgreSQL and SQLAlchemy.'],
  ['06', 'Web Application Development', 'Develop complete web applications with real-world functionality, responsive interfaces and reliable backend integration.'],
  ['07', 'Authentication & Authorization', 'Implement secure authentication and authorization systems using JWT and modern access-control practices.'],
  ['08', 'Business Management Solutions', 'Develop digital solutions for business workflows such as billing, transaction management, dashboards and centralized record management.'],
  ['09', 'API Integration & Testing', 'Integrate REST APIs and external services into web applications and test API functionality using tools such as Postman.'],
  ['10', 'Technical Problem Solving', 'Solve real-world software development challenges with a focus on clean architecture, scalability, performance and maintainability.'],
]

export const achievements = [
  ['2026', 'Finalist – My Bharat Budget Quest 2026', 'Demonstrated strong analytical and communication skills through competitive quiz and essay rounds. Participated in national-level technical events and conferences.'],
]

export const courseCertifications = [
  {
    title: 'Diploma in Computer Application (DCA)',
    organization: 'Computer Software College (CSC)',
    certificateUrl: cscCertificate,
  },
  {
    title: 'Ebox',
    organization: 'C Programming Language, Problem Solving and Python Programming',
    certificateUrl: eboxCertificate,
  },
  {
    title: 'Web Development',
    organization: 'Corizo EduTech',
    certificateUrl: intern1Certificate,
  },
]

export const conferenceCertifications = [
  {
    title: 'International Conference on Advanced Innovation in Technology',
    organization: 'Arifa Institute of Technology',
    certificateUrl: internationalConference1,
  },
  {
    title: 'International Conference on Interactive Educational Technology and Storytelling for Children',
    organization: 'Kamaraj College of Technology, Virudhunagar',
    certificateUrl: internationalConference2,
  },
]

export const certifications = [
  ...courseCertifications,
  ...conferenceCertifications,
]

export const articles = [
  {
    slug: 'next-generation-computing-trends-and-innovation',
    category: 'Publication',
    title: 'Next Generation Computing Trends and Innovation',
    date: '',
    read: 'Research',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85',
    excerpt: 'Published research work focusing on emerging technologies and innovations in modern computing systems.',
    certificateUrl: publicationCertificate,
  },
]

export const sdtTraining = [
  {
    organization: 'INITZ TECHNOLOGIES',
    specialization: 'Python Development',
    description: 'Completed intensive Python training covering programming fundamentals, problem solving, object-oriented programming and real-world application development.',
    certificateUrl: sdt1Certificate,
  },
  {
    organization: 'SPARKOUT TECH SOLUTIONS',
    specialization: 'Generative AI & LLM',
    description: 'Learned Generative AI concepts, Prompt Engineering, Large Language Models (LLMs), AI integrations and Python-based AI application development.',
    certificateUrl: sdt2Certificate,
  },
  {
    organization: 'YARDSICK',
    specialization: 'Java Full Stack Development',
    description: 'Completed training in Java Full Stack Development including frontend technologies, backend development, databases and enterprise application architecture.',
    certificateUrl: sdt3Certificate,
  },
]

export const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85',
    title: 'Building Modern Web Applications',
    description: 'Explore the latest tools and frameworks for creating responsive, scalable web applications that deliver exceptional user experiences.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&w=1200&q=85',
    title: 'Backend Development Best Practices',
    description: 'Deep dive into server-side architecture, API design, and database optimization techniques for production-grade applications.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85',
    title: 'Full-Stack Development Workflow',
    description: 'Learn how to streamline your development process from concept to deployment using modern tools and best practices.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&w=1200&q=85',
    title: 'React.js Performance Optimization',
    description: 'Techniques for optimizing React applications, improving load times, and enhancing overall application performance.',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85',
    title: 'API Integration & Testing',
    description: 'Master the art of integrating third-party APIs and implementing comprehensive testing strategies for reliable systems.',
  },
]

export const stackvernInfo = {
  name: 'StackVern',
  role: 'CEO',
  description: 'StackVern is a freelancing website startup started in Tamil Nadu and created by final-year students, focused on building practical digital solutions for real-world needs.',
  fullDescription: 'StackVern focuses on designing and developing modern web applications and practical digital solutions for individuals, businesses and real-world use cases.',
  website: 'https://stackvern.github.io/website',
  instagram: '@stackvern_',
  email: 'stackverntech@gmail.com',
  linkedin: '@stack-vern',
  logo: `${import.meta.env.BASE_URL}stackvern.jpeg`,
}

export const founderInfo = {
  name: 'Gokulkannan R',
  role: 'Founder of StackVern',
  instagram: '@gokulkannan.dev',
  email: 'gokulkannan77335@gmail.com',
  github: 'github.com/gokulkannan55',
  linkedin: 'www.linkedin.com/in/gokul-kannanr',
  whatsapp: '7806921923',
}


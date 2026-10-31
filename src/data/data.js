// Central content file — edit everything here without touching component code.
// Items marked TODO are placeholders you asked to refine later.

export const profile = {
  name: 'T G Pravin Kumaar',
  shortName: 'Pravin Kumaar',
  role: 'Full Stack Developer | Java Programmer | Problem Solver',
  greeting: "Hi, I'm T G Pravin Kumaar",
  intro:
    "Final-year IT student building full-stack applications with the MERN stack. I also design user-friendly UI/UX and know software testing, alongside a passion for clean code, solving real-world problems, and sharpening my DSA skills in Java.",
  resumeUrl: '/resume.pdf', // TODO: replace public/resume.pdf with your actual resume
  email: 'pravinkumaar.t.g17@gmail.com',
  github: 'https://github.com/T-G-Pravin-Kumaar',
  linkedin: 'https://www.linkedin.com/in/t-g-pravin-kumaar-96456528a',
  leetcode: 'https://leetcode.com/u/Pravin_Kumaar/',
}

export const about = {
  paragraph: `Final-year B.Tech Information Technology student passionate about Full Stack Development and Software Engineering. I have hands-on experience building web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js) along with Java, JavaScript, MySQL, and REST APIs. I also know how to design user-friendly UI/UX and perform software testing. My projects include features like authentication, CRUD operations, database management, and role-based access control. I am continuously improving my problem-solving skills, DSA knowledge, and development practices while building real-world projects.`,
  techLine:
    'Java | JavaScript | React.js | Node.js | Express.js | MongoDB | MySQL | REST APIs | UI/UX Design | Software Testing | Git & GitHub',
  openTo:
    'Open to internship and full-time Software Development opportunities where I can learn, contribute, and build impactful solutions.',
  softSkills: ['Problem Solving', 'Critical Thinking', 'Communication', 'Adaptability', 'Leadership', 'Decision Making'],
  photo: '/profile.jpg',
}

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'JavaScript', 'C'],
  },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'React.js', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    category: 'Concepts',
    items: ['OOP', 'REST APIs', 'Data Structures & Algorithms'],
  },
  {
    category: 'Design & Testing',
    items: ['UI/UX Design', 'Software Testing'],
  },
]

export const projects = [
  {
    title: 'Hire Me',
    subtitle: 'Driver Hiring Platform',
    description:
      'A full-stack MERN application that lets customers hire drivers for trips, with role-based dashboards for customers and drivers, live driver management, and a review & rating system.',
    features: [
      'User authentication (JWT-based)',
      'Role-based access control',
      'Driver management dashboard',
      'REST API integration',
      'MongoDB database design',
      'Reviews and ratings system',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/T-G-Pravin-Kumaar/hire-me',
    live: 'https://hire-me-sigma-livid.vercel.app/',
    image: null, // TODO: add screenshot to src/assets and reference here
  },
  {
    title: 'TypeSprint',
    subtitle: 'Interactive Typing Performance Assessment Platform',
    description:
      'A modern typing speed test app that tracks WPM, CPM, accuracy, and mistakes in real time, with multiple difficulty and timer modes and a glassmorphism interface.',
    features: [
      'Real-time WPM / CPM / accuracy tracking',
      'Live character-level highlighting',
      '4 timer modes (15s / 30s / 60s / 120s)',
      '3 difficulty levels',
      'Light/dark theme with persistence',
      'Results modal with performance feedback',
    ],
    tech: ['React.js', 'Tailwind CSS', 'React Hooks', 'CSS Animations'],
    github: 'https://github.com/T-G-Pravin-Kumaar/TypeSprint-',
    live: 'https://type-sprint-ten.vercel.app/',
    image: null, // TODO: add screenshot to src/assets and reference here
  },
]

export const experience = [
  {
    title: 'Full Stack Web Development — Training',
    period: 'Ongoing',
    description:
      'Hands-on training in building end-to-end MERN applications — REST API design, authentication flows, database modeling, and deployment.', // TODO: add specific institute/platform name if applicable
  },
  {
    title: 'Software Development Practice',
    period: 'Ongoing',
    description:
      'Building and shipping real-world full-stack projects (Hire Me, TypeSprint) covering authentication, CRUD, role-based access, and REST APIs — from idea to deployment on Vercel.',
  },
  {
    title: 'DSA Learning Journey',
    period: 'Ongoing',
    description:
      'Strengthening problem-solving fundamentals in Java — arrays, strings, recursion, trees, and complexity analysis — through consistent practice on LeetCode.', // TODO: add problem count / other platforms if you'd like to show stats
  },
]

export const education = [
  {
    institute: 'Sri Shakthi Institute of Engineering and Technology, Coimbatore',
    degree: 'B.Tech, Information Technology',
    period: '2023 — 2027',
    detail: 'Final-year undergraduate, focused on Full Stack Development and Software Engineering.',
    stat: { label: 'Current CGPA', value: '8.13 / 10' },
  },
  {
    institute: 'Srivi Lions Matriculation Hr. Sec. School, Srivilliputtur',
    degree: 'Higher Secondary Education',
    period: '2022 — 2023',
    detail: 'Completed higher secondary schooling.',
    stat: { label: 'Percentage', value: '84%' },
  },
]

export const certifications = [
  {
    title: 'C, Advanced Python',
    issuer: 'CADD Centre',
    date: '2023',
    link: null,
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'CADD Centre',
    date: '2024 — 2025',
    link: null,
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Simplilearn',
    date: '2025',
    link: null,
  },
]

export const publications = [
  {
    title: 'EX-CHERISH (Knowledge Sharing Platform)',
    venue: 'International Journal of Progressive Research in Engineering Management and Science',
    date: '2025',
    link: null,
  },
]

export const codingProfiles = [
  {
    name: 'GitHub',
    handle: 'T-G-Pravin-Kumaar',
    description: 'Repositories, contributions, and full-stack project source code.',
    url: 'https://github.com/T-G-Pravin-Kumaar',
  },
  {
    name: 'LeetCode',
    handle: 'Pravin_Kumaar',
    description: 'Data Structures & Algorithms practice and problem-solving progress.',
    url: 'https://leetcode.com/u/Pravin_Kumaar/',
  },
]

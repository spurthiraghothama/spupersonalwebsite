export interface GitHubRepo {
  name: string;
  url: string;
  language: string | null;
  description: string;
  fork: boolean;
  stars: number;
}

export interface GitHubProfile {
  name: string;
  fullName: string;
  email: string;
  university: string;
  username: string;
  avatarUrl: string;
  bio: string;
  githubUrl: string;
  publicRepos: number;
  memberSince: string;
  repos: GitHubRepo[];
  topLanguages: { name: string; count: number; color: string }[];
}

const languageColors: Record<string, string> = {
  Python: '#FFD5E5',
  HTML: '#FFE4B5',
  'C++': '#C9B8FF',
  C: '#B8D4E3',
  JavaScript: '#FFF4A3',
  TypeScript: '#A8E6CF',
};

export const profile: GitHubProfile = {
  name: 'Spurthi',
  fullName: 'Spurthi Raghothama',
  email: 'spurthi.raghothama23@gmail.com',
  university: 'PES University',
  username: 'spurthiraghothama',
  avatarUrl: 'https://avatars.githubusercontent.com/u/153271558?v=4',
  bio: 'Fresher SDE · curious builder · turning ideas into cute, working code ✨',
  githubUrl: 'https://github.com/spurthiraghothama',
  publicRepos: 18,
  memberSince: 'December 2023',
  repos: [
    {
      name: 'AnomalyDetection',
      url: 'https://github.com/spurthiraghothama/AnomalyDetection',
      language: 'Python',
      description: 'Detecting outliers & anomalies in data with ML techniques.',
      fork: false,
      stars: 0,
    },
    {
      name: 'pet-adoption',
      url: 'https://github.com/spurthiraghothama/pet-adoption',
      language: 'HTML',
      description: 'A warm, friendly pet adoption platform interface.',
      fork: false,
      stars: 0,
    },
    {
      name: 'Sustainable-Product-Lifecycle-Management-System',
      url: 'https://github.com/shrujanna/Sustainable-Product-Lifecycle-Management-System',
      language: 'HTML',
      description: 'Tracking product lifecycles with sustainability in mind.',
      fork: false,
      stars: 0,
    },
    {
      name: 'SalesChatbotRAG',
      url: 'https://github.com/spurthiraghothama/SalesChatbotRAG',
      language: 'Python',
      description: 'RAG-powered sales chatbot for smarter customer conversations.',
      fork: false,
      stars: 0,
    },
    {
      name: 'Robotic-arm-with-stepper-motor',
      url: 'https://github.com/spurthiraghothama/Robotic-arm-with-stepper-motor',
      language: null,
      description: 'Robotic arm controlled with stepper motors — embedded fun.',
      fork: true,
      stars: 0,
    },
    {
      name: 'Yet-Another-UnionFS',
      url: 'https://github.com/spurthiraghothama/Yet-Another-UnionFS',
      language: 'C',
      description: 'A union filesystem implementation exploring OS internals.',
      fork: true,
      stars: 0,
    },
  ],
  topLanguages: [
    { name: 'Python', count: 2, color: languageColors.Python },
    { name: 'HTML', count: 2, color: languageColors.HTML },
    { name: 'C', count: 1, color: languageColors.C },
  ],
};

export interface SkillCategory {
  title: string;
  emoji: string;
  skills: { name: string; icon: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    emoji: '💻',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'HTML/CSS', icon: '🎨' },
    ],
  },
  {
    title: 'Backend & Frameworks',
    emoji: '⚡',
    skills: [
      { name: 'FastAPI', icon: '⚡' },
      { name: 'LangChain', icon: '🦜' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'Streamlit', icon: '🎈' },
    ],
  },
  {
    title: 'Data, Cloud & DevOps',
    emoji: '☁️',
    skills: [
      { name: 'Redis', icon: '🔴' },
      { name: 'Apache Kafka', icon: '📬' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Docker Compose', icon: '📦' },
      { name: 'GitHub Actions (CI/CD)', icon: '🚀' },
      { name: 'Git', icon: '🐙' },
      { name: 'AWS (EC2, S3)', icon: '☁️' },
    ],
  },
];


export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Venture Vertex LLC',
    role: 'Software Engineer Intern',
    period: 'May 2026 – Jul 2026',
  },
  {
    company: 'ISFCR, PESU',
    role: 'Security Operations Center Intern',
    period: 'Oct 2024 – Jul 2025',
  },
];


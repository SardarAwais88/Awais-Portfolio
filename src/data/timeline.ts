export interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  description: string;
  icon: string;
  type: 'work' | 'milestone' | 'education';
}

export const timeline: TimelineItem[] = [
  {
    year: '2019',
    title: 'Full Stack Developer',
    company: 'Kinitsol',
    description:
      'Started professional career as a Full Stack Developer at Kinitsol, building enterprise-grade web applications with modern tech stacks.',
    icon: '💼',
    type: 'work',
  },
  {
    year: '2020',
    title: 'Advanced Full-Stack Projects',
    company: 'Kinitsol',
    description:
      'Led development of complex web applications, mastered React, Node.js, and database design. Delivered multiple client projects successfully.',
    icon: '🚀',
    type: 'work',
  },
  {
    year: '2021',
    title: 'Started Freelancing Journey',
    description:
      'Launched freelancing career on Fiverr and Upwork. Completed first client projects in web development and WordPress customization.',
    icon: '🌟',
    type: 'milestone',
  },
  {
    year: '2022',
    title: 'E-Commerce & Automation Specialist',
    description:
      'Expanded into Shopify theme development, WooCommerce, and automation. Built WhatsApp bots, trading bots, and e-commerce integrations.',
    icon: '🛒',
    type: 'milestone',
  },
  {
    year: '2023',
    title: 'AI & Voice Agent Pioneer',
    description:
      'Dived into AI development — CrewAI agents, VAPI voice bots, LangChain applications. Built the Celebrity Voice Bot that earned the first 5-star Upwork review.',
    icon: '🤖',
    type: 'milestone',
  },
  {
    year: '2024',
    title: 'Multi-Platform Success',
    description:
      'Scaled to 50+ projects across Fiverr, Upwork, and Truelancer. Built SaaS products like AutoExec Mind, EduFlow Suite, and MicroRate.site.',
    icon: '📈',
    type: 'milestone',
  },
  {
    year: '2025',
    title: 'Enterprise AI Solutions',
    description:
      'Focused on high-value enterprise solutions — Composable Commerce engines, dental clinic AI voice systems, and ERP integrations. Targeting $10K+ projects.',
    icon: '💎',
    type: 'milestone',
  },
];

export const testimonials = [
  {
    name: 'Joshua C.',
    role: 'Owner',
    project: 'Celebrity Voice Bot',
    platform: 'Upwork',
    date: 'Aug 2023',
    rating: 5,
    text: "I hired Sardar to help me build an AI chat bot. I provided a brief description of my concept and Sardar was instantly able to provide his in depth knowledge and help firstly create a plan. He then started to work on my project which he has done and I just say the final draft is brilliant. I plan to continue to work with Sardar as he will be an asset to the growing project in months to come. I urge anyone looking for any help with their projects to contact Sardar for professional realistic advice. He's always on hand to answer any questions and assist in anyway he can.",
    avatar: '👨‍💼',
  },
];

export const stats = [
  { label: 'Projects Completed', value: 50, suffix: '+', icon: '🎯' },
  { label: 'Happy Clients', value: 35, suffix: '+', icon: '😊' },
  { label: 'Platforms Active', value: 4, suffix: '', icon: '🌐' },
  { label: 'Years Experience', value: 6, suffix: '+', icon: '⏰' },
];

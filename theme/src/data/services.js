export const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js. We create responsive, fast, and SEO-optimized websites that drive business growth.',
    features: [
      'Custom React & Next.js Development',
      'Responsive Design',
      'SEO Optimization',
      'Performance Optimization',
      'Cross-browser Compatibility',
      'Modern UI/UX Design'
    ],
    icon: '🌐',
    price: 'Starting at $50',
    duration: '4-8 weeks',
    category: 'development'
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Keep your website running smoothly with our comprehensive maintenance services. Regular updates, security patches, and performance monitoring.',
    features: [
      'Regular Security Updates',
      'Performance Monitoring',
      'Content Updates',
      'Backup Management',
      'SSL Certificate Management',
      '24/7 Support'
    ],
    icon: '🔧',
    price: 'Starting at $12/month',
    duration: 'Ongoing',
    category: 'maintenance'
  },
  {
    id: 'deployment',
    title: 'Deployment & DevOps',
    description: 'Professional deployment services with CI/CD pipelines, cloud infrastructure setup, and monitoring solutions for optimal performance.',
    features: [
      'CI/CD Pipeline Implementation',
      'Docker Containerization',
      'Load Balancing',
      'Monitoring & Logging',
      'Auto-scaling Configuration'
    ],
    icon: '🚀',
    price: 'Starting at $1,500',
    duration: '1-2 weeks',
    category: 'devops'
  },
  {
    id: 'analytics',
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics setup and reporting to help you understand your users and optimize your digital presence for better results.',
    features: [
      'Google Analytics 4 Setup',
      'User Behavior Insights',
      'Performance Reports',
      'A/B Testing Implementation'
    ],
    icon: '📊',
    price: 'Starting at $500',
    duration: '1-2 weeks',
    category: 'analytics'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and customer relationship tools.',
    features: [
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing System',
      'Customer Portal',
      'Multi-vendor Support',
      'Mobile Commerce'
    ],
    icon: '🛒',
    price: 'Starting at $8700',
    duration: '8-12 weeks',
    category: 'ecommerce'
  }, 
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Expert guidance on technology decisions, architecture planning, and digital transformation strategies for your business.',
    features: [
      'Technology Stack Recommendations',
      'Architecture Planning',
      'Code Review & Optimization',
      'Team Training',
      'Digital Strategy',
      'Migration Planning'
    ],
    icon: '💡',
    price: 'Free',
    duration: 'Flexible',
    category: 'consulting'
  }
];

export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category) => {
  return services.filter(service => service.category === category);
};

export const categories = [
  { id: 'development', name: 'Development', description: 'Custom web development services' },
  { id: 'maintenance', name: 'Maintenance', description: 'Ongoing website maintenance and support' },
  { id: 'devops', name: 'DevOps', description: 'Deployment and infrastructure services' },
  { id: 'analytics', name: 'Analytics', description: 'Data analysis and insights' },
  { id: 'ecommerce', name: 'E-commerce', description: 'Online store solutions' },
  { id: 'consulting', name: 'Consulting', description: 'Technical consulting and strategy' }
];

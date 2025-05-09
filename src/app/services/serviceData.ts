export const services = [
  {
    id: 1,
    name: 'Data Integration Membership',
    description: 'Get daily business data updates and actionable insights delivered to your inbox.',
    price: 29.99,
    period: 'month',
    icon: '📊',
    features: [
      'Real-time data updates delivered weekly via email',
      'Data in structured formats (Excel, CSV, etc.)',
      'Immediate actionable insights',
    ],
    examples: [
      'Your Monday promotions have the highest return of reviews: consider expanding this promotion to other days.',
      'Competitor X increased their prices on Fridays: consider adjusting your pricing strategy.',
      'Reviews indicate a lack of staff on Mondays.',
    ],
  },
  {
    id: 2,
    name: 'One-Time Business Optimization Consultation',
    description: 'A strategic, one-time consultation designed to restructure your business using targeted data insights.',
    price: 100.00,
    period: 'one-time',
    icon: '💡',
    features: [
      'In-depth analysis of your current business model',
      'Identification of actionable improvements',
      'Clear, step-by-step plan to boost profitability',
    ],
    examples: [
      'Restructure your pricing tiers: competitors operate at 10% lower price points.',
      'Streamline your onboarding process: 50% of customers do not complete their sign-up after the welcome email.',
      'Shift ad spend: Google ads underperform, most customers convert via TikTok.',
    ],
  },
  {
    id: 3,
    name: 'Social Signal Tracker',
    description: 'Weekly social media trend alerts for your business.',
    price: 14.99,
    period: 'month',
    icon: '📡',
    features: [
      'Weekly alerts on mentions, tags, and viral posts about your business across major platforms.',
      'Platform-specific insights: see which content performs best on TikTok, Instagram, Facebook, and Reddit.',
      'Real-time customer feedback monitoring and sentiment analysis.',
    ],
    examples: [
      'You were mentioned by @AcmeBand. Join the conversation.',
      'Your promotion Summer Splash is performing 33% better than regular content. Consider extending it.',
      'You are gaining traction on Reddit. Consider opening a subreddit for your brand.',
    ],
  },
];

export const uniformServiceCards = [
  {
    id: 3,
    icon: '📡',
    badge: 'Standalone',
    title: 'Social Signal Tracker',
    subtitle: 'Weekly social media trend alerts for your business.',
    features: [
      'Weekly alerts on mentions, tags, and viral posts about your business across major platforms.',
      'Platform-specific insights: see which content performs best on TikTok, Instagram, Facebook, and Reddit.',
      'Real-time customer feedback monitoring and sentiment analysis.'
    ],
    examples: [
      'You were mentioned by @AcmeBand. Join the conversation.',
      'Your promotion Summer Splash is performing 33% better than regular content. Consider extending it.',
      'You are gaining traction on Reddit. Consider opening a subreddit for your brand.'
    ],
    price: '$14.99',
    period: '/month',
    buttonText: 'Add to Cart',
  },
  {
    id: 1,
    icon: '📊',
    badge: 'Includes Social Signal Tracker',
    title: 'Data Integration Membership',
    subtitle: 'Get daily business data updates and actionable insights delivered to your inbox.',
    features: [
      'Real-time data updates delivered weekly via email',
      'Data in structured formats (Excel, CSV, etc.)',
      'Immediate actionable insights'
    ],
    examples: [
      'Your Monday promotions have the highest return of reviews: consider expanding this promotion to other days.',
      'Competitor X increased their prices on Fridays: consider adjusting your pricing strategy.',
      'Reviews indicate a lack of staff on Mondays.'
    ],
    price: '$29.99',
    period: '/month',
    buttonText: 'Add to Cart',
  },
  {
    id: 2,
    icon: '💡',
    badge: 'Includes 1 month Membership & Tracker',
    title: 'One-Time Business Optimization Consultation',
    subtitle: 'A strategic, one-time consultation designed to restructure your business using targeted data insights.',
    features: [
      'In-depth analysis of your current business model',
      'Identification of actionable improvements',
      'Clear, step-by-step plan to boost profitability'
    ],
    examples: [
      'Restructure your pricing tiers: competitors operate at 10% lower price points.',
      'Streamline your onboarding process: 50% of customers do not complete their sign-up after the welcome email.',
      'Shift ad spend: Google ads underperform, most customers convert via TikTok.'
    ],
    price: '$100.00',
    period: '/one-time',
    buttonText: 'Add to Cart',
  },
]; 
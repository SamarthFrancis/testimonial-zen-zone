export interface Testimonial {
  id: number;
  name: string;
  title?: string;
  company?: string;
  quote: string;
  rating?: number;
  image?: string;
  hasLinkedin?: boolean;
  variant?: "simple" | "detailed";
  badge?: string;
  reviewDate?: string;
  reviewTitle?: string;
  categories?: { label: string; rating: number }[];
  badges?: string[];
  pros?: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vishwajeet U",
    title: "Co-Founder",
    company: "Research, Self-employed",
    quote: "HubHopper's diverse content and user-friendly interface make it a winner in my book. It's like a treasure trove of interesting stuff, easily accessible.",
    image: "/lovable-uploads/31895b81-08a1-4c2e-be53-659cda4a3de1.png",
    rating: 5,
    hasLinkedin: false
  },
  {
    id: 2,
    name: "Mohit P.",
    title: "Junior Administrator",
    quote: "The features that come in addition to the usual hosting and podcasting are amazing. I have been using this for a long time and have always been a fan of the new features.",
    image: "/lovable-uploads/35667d4d-62a5-497a-aee6-a6bfa38113ad.png",
    rating: 4.5,
    hasLinkedin: true,
    badge: "Frequent User"
  },
  {
    id: 3,
    name: "Aswath S.",
    title: "Founder",
    quote: "What I like the most about HubHopper is the platform's fantastic support for creating my own podcasts.",
    image: "/lovable-uploads/7c88a1f1-a26e-40c3-93c8-43cb284bc9d4.png",
    rating: 5,
    hasLinkedin: true
  },
  {
    id: 4,
    name: "Lokeshkumar D.",
    title: "Content Creator",
    quote: "I'll like everything from classical to pop. Audio quality is outstanding, and membership costs are low.",
    image: "/lovable-uploads/0c475bea-5d9c-4753-af83-5f1cfc765cfb.png",
    rating: 4,
    hasLinkedin: true
  },
  {
    id: 5,
    name: "Adolfo R.",
    title: "Writing and Editing, self-employed",
    quote: "It was pleasant experience to use this application",
    image: "/lovable-uploads/2250aa20-1ee4-4a52-8acf-565e92a57ad8.png",
    rating: 5,
    hasLinkedin: true,
    reviewTitle: "Pleasant experience",
    reviewDate: "Reviewed 8 months ago",
    categories: [
      { label: "Value for money", rating: 5 },
      { label: "Ease of use", rating: 5 },
      { label: "Features", rating: 5 },
      { label: "Customer support", rating: 5 }
    ],
    badges: ["Highly Relevant", "Verified Review", "Incentivized Review"]
  },
  {
    id: 6,
    name: "Amar raj C.",
    title: "Partner support specialist",
    company: "Leisure, Travel & Tourism",
    quote: "I used hubhopper for creating podcasts and our whole team can easily listen to those podcasts together. It creates great work culture and all can participate in one go. Hubhopper is Easy to use for all and i suggest everyone to use it.",
    image: "/lovable-uploads/77d052a1-8b98-4173-9bda-8822c37467e1.png",
    rating: 5,
    hasLinkedin: true,
    reviewTitle: "Best podcast platform and its so easy to use",
    pros: [
      "Through hubhopper app i can easily create podcasts for my team from anywhere in the world.",
      "Anyone can edit the audio through the help of app.",
      "I can see detailed usage and analyse about user data.",
      "It got free audio editor in the app which makes it more convenient to use."
    ]
  },
  {
    id: 7,
    name: "Adam F.",
    title: "Apparel & Fashion, 51-200 employees",
    quote: "Overall I really love the site. Especially the distribution to other sites part. Those are fantastic.",
    image: "/lovable-uploads/6a6cb1d4-865d-4a6c-b085-b63d0923e25b.png",
    rating: 5,
    reviewTitle: "Amazing Site for Podcasters",
    reviewDate: "Reviewed 8 months ago",
    badges: ["Frequent User", "Highly Relevant", "Verified Review", "Incentivized Review"],
    pros: ["It's distribution system is remarkable. I am totally in love with this site."]
  },
  {
    id: 8,
    name: "Malaika H.",
    title: "Broadcast Media, 1-10 employees",
    quote: "So far it real good. I just pray it stay like that. I'm happy with this app.",
    image: "/lovable-uploads/4615b789-8a45-4d26-a526-bee9e7fc140c.png",
    rating: 5,
    reviewTitle: "For The Love of Music",
    reviewDate: "Reviewed a year ago",
    badges: ["Highly Relevant", "Organic Review", "Verified Review"],
    pros: ["It's was easy for me to stay up. And I like all the platform that they hook you up to. That's the cool part."]
  },
  {
    id: 9, 
    name: "Seth",
    title: "Health, Wellness and Fitness, Self-Employed",
    quote: "I like how easy it was to transfer my existing podcast into Hubhopper from a different platform. Once my podcast was moved over, I appreciated how intuitive the features are, as they allowed me to quickly grasp how to add new episodes and automatically distribute them to platforms like Spotify and Apple Podcast.",
    image: "/lovable-uploads/d547ffb7-97f7-40cc-b4ae-2b73edb6116a.png",
    rating: 5,
    hasLinkedin: true,
    reviewTitle: "Impressed with how easy Hubhopper makes podcasting",
    reviewDate: "Reviewed March 2025"
  },
  {
    id: 10,
    name: "Gopender M.",
    title: "Law Practice, Self-Employed",
    quote: "This app/site was suggested by my sister for podcasting. I have found it easy however due to busy schedule i am not regular. sometimes there are technical issues but overall it is an easy setup and anyone with clear content can easily create podcasts.",
    image: "/lovable-uploads/4651fbaa-56e5-4fd9-9898-8a25bde60cc1.png",
    rating: 5,
    hasLinkedin: true,
    reviewTitle: "EASY PODCASTING IF YOU HAVE CONTENT",
    reviewDate: "Reviewed January 2025",
    pros: ["Only hard work is creating content, otherwise the app and studio are not very tough to work upon."]
  },
  {
    id: 11,
    name: "Eli",
    title: "Health, Wellness and Fitness, 11-50 employees",
    quote: "My overall experience with Hubhopper has been positive. It's easy to use and gets the job done when it comes to podcast distribution. While it could use some improvements in analytics and customization, the platform offers excellent value for its price. I would definitely recommend it to both new and seasoned podcasters.",
    image: "/lovable-uploads/6aaa26a2-c8e4-4b2d-8ec2-8e49751a21e7.png",
    rating: 5,
    hasLinkedin: true,
    reviewTitle: "Great Platform for Podcast Distribution",
    reviewDate: "Reviewed September 2024",
    pros: ["I really enjoyed the seamless podcast distribution across multiple platforms. The interface is user-friendly, especially for beginners. I also appreciate how affordable it is compared to other services, with no hidden fees."]
  },
  {
    id: 12,
    name: "Robert",
    title: "Nanotechnology, 2-10 employees",
    quote: "The how-to articles and videos were helpful in guiding me along. I was able to start my setup and have my content published in a few hours.",
    image: "/lovable-uploads/6c96b85c-6fac-49a1-88a5-7a59e149ff81.png",
    rating: 5,
    hasLinkedin: true,
    reviewTitle: "Great Platform for Content Creators and Managers",
    reviewDate: "Reviewed August 2024",
    pros: ["I have no experience with publishing podcasts and had no idea where to start. Hubhopper was easy to set up and I published my podcast to multiple platforms in a few hours from start to finish."]
  }
];

export const featuredTestimonials = testimonials.slice(0, 6);

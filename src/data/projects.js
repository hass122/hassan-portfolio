// Real projects only. Leave githubUrl/liveUrl as '' until real values exist;
// the UI hides empty links. `images` is a list of screenshots (the card shows a switcher when there are several).
const projects = [
  {
    id: 'nexusbids',
    title: 'NexusBids',
    category: 'Online Auction System',
    featured: true,
    description:
      'A Pakistan-focused online auction platform designed to connect buyers and sellers through online bidding.',
    features: [
      'Architected an online auction platform supporting end-to-end buyer and seller workflows.',
      'Implemented secure auction listings, real-time bidding functionalities and intuitive user interface pages.',
      'NADRA KYC verification for sellers and bidders',
      'Escrow: funds stay locked until the buyer confirms the delivered item',
      'JazzCash and Easypaisa payment support',
      'Watchlist',
      'Admin dashboard',
      'AI product recommendation',
    ],
    technologies: ['PHP', 'Node.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'MySQL'],
    images: [{ src: '/images/nexusbids.webp', alt: 'NexusBids home page with a live auction card', label: 'Home' }],
    githubUrl: '',
    liveUrl: 'https://nexusbids.vercel.app/',
  },
  {
    id: 'durian-superman',
    title: 'Durian Superman',
    category: 'E-commerce Website',
    featured: false,
    description:
      'A responsive storefront for a durian seller: landing page, shop with search and categories, product pages and a shopping cart.',
    features: [
      'Home, shop and product detail pages with hash-based routing',
      'Product listing with category filters and search',
      'Product page with image gallery, quantity selector and member pricing',
      'Shopping cart drawer with items saved in the browser',
      'Membership plans, customer reviews and photo gallery sections',
      'Fully responsive layout',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    images: [
      { src: '/images/durian-home.webp', alt: 'Durian Superman home page', label: 'Home' },
      { src: '/images/durian-shop.webp', alt: 'Durian Superman shop page with category filters', label: 'Shop' },
      { src: '/images/durian-product.webp', alt: 'Durian Superman product page', label: 'Product' },
    ],
    githubUrl: '',
    liveUrl: '',
  },
]

export default projects

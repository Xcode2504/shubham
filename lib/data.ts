export interface Project {
  id: string;
  title: string;
  category: 'lighting' | 'furniture' | 'decor' | 'kitchen' | 'bathroom';
  excerpt: string;
  content: string;
  image: string;
  designer: string;
  date: string;
  featured: boolean;
}

export interface Designer {
  id: string;
  name: string;
  bio: string;
  image: string;
  projectIds: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Safari Adventure Kids Room',
    category: 'decor',
    excerpt: 'Transform your child\'s room into an exciting safari adventure with custom jungle murals and themed furniture.',
    content: `
      <p>Our Safari Adventure Kids Room design brings the wild beauty of nature indoors, creating an immersive environment that sparks imagination and wonder. This project features hand-painted jungle murals with exotic animals and lush vegetation.</p>
      
      <p>The centerpiece is a custom-designed wooden jeep bed that serves as both furniture and play element, encouraging creative storytelling and adventure play. Every detail is carefully crafted to create a cohesive safari theme.</p>
      
      <h3>Design Features</h3>
      <ul>
        <li>Hand-painted jungle wall murals</li>
        <li>Custom wooden jeep bed design</li>
        <li>Safari-themed accessories and textiles</li>
        <li>Child-safe materials and finishes</li>
        <li>Interactive play elements</li>
      </ul>
      
      <p>This room design promotes learning about wildlife while providing a comfortable and inspiring space for rest and play. The natural wood elements and earthy color palette create a calming environment perfect for bedtime stories.</p>
    `,
    image: '/assets/WhatsApp Image 2025-07-01 at 4.43.16 PM (1).jpeg',
    designer: 'Priya Mehta',
    date: '2025-01-15',
    featured: true
  },
  {
    id: '2',
    title: 'Jungle Leopard Wall Art',
    category: 'decor',
    excerpt: 'Stunning hand-painted leopard mural that brings the majesty of wildlife into your living space.',
    content: `
      <p>This magnificent jungle leopard wall art showcases the beauty and grace of one of nature's most elegant predators. The hand-painted mural captures the leopard in a moment of serene rest, surrounded by lush tropical foliage.</p>
      
      <p>The artwork demonstrates exceptional attention to detail, from the intricate spot patterns to the realistic rendering of jungle vegetation. The neutral color palette ensures it complements various interior design styles.</p>
      
      <h3>Artistic Features</h3>
      <ul>
        <li>Hand-painted realistic leopard portrait</li>
        <li>Detailed tropical foliage background</li>
        <li>Natural earth tone color palette</li>
        <li>Large-scale statement piece</li>
        <li>Custom sizing available</li>
      </ul>
      
      <p>Perfect for creating a focal point in living rooms, bedrooms, or office spaces, this artwork brings the tranquil beauty of the jungle indoors while maintaining sophisticated elegance.</p>
    `,
    image: '/assets/WhatsApp Image 2025-07-01 at 4.43.16 PM.jpeg',
    designer: 'Arjun Singh',
    date: '2025-01-20',
    featured: true
  },
  {
    id: '3',
    title: 'Bold Red Bathroom Design',
    category: 'bathroom',
    excerpt: 'A striking contemporary bathroom featuring vibrant red tiles and sophisticated black accents.',
    content: `
      <p>This bold red bathroom design makes a dramatic statement with its vibrant red subway tiles and sleek black vessel sink. The design demonstrates how color can transform a functional space into a work of art.</p>
      
      <p>The glossy red tiles reflect light beautifully, creating depth and visual interest, while the black granite countertop and vessel sink provide elegant contrast. Strategic lighting enhances the rich color palette.</p>
      
      <h3>Design Elements</h3>
      <ul>
        <li>Vibrant red subway tile walls</li>
        <li>Black granite countertop</li>
        <li>Contemporary vessel sink</li>
        <li>Modern chrome fixtures</li>
        <li>Strategic accent lighting</li>
      </ul>
      
      <p>This design proves that bold color choices can create sophisticated and luxurious spaces when executed with precision and attention to detail.</p>
    `,
    image: '/assets/WhatsApp Image 2025-07-01 at 4.43.15 PM (2).jpeg',
    designer: 'Kavya Patel',
    date: '2025-01-25',
    featured: true
  },
  {
    id: '4',
    title: 'Crimson Mosaic Powder Room',
    category: 'bathroom',
    excerpt: 'An intimate powder room featuring stunning red mosaic tiles and contemporary fixtures.',
    content: `
      <p>This intimate powder room showcases the dramatic impact of red mosaic tiles in a small space. The rich crimson color creates a luxurious and memorable experience for guests.</p>
      
      <p>Every surface is carefully considered, from the mosaic tile walls to the sleek modern fixtures. The monochromatic red scheme creates a bold, cohesive design statement.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Full red mosaic tile coverage</li>
        <li>Contemporary wall-mounted fixtures</li>
        <li>Integrated storage solutions</li>
        <li>Dramatic lighting design</li>
        <li>Seamless modern aesthetic</li>
      </ul>
      
      <p>This powder room demonstrates how small spaces can make big impressions through bold design choices and meticulous attention to detail.</p>
    `,
    image: '/assets/WhatsApp Image 2025-07-01 at 4.43.15 PM (1).jpeg',
    designer: 'Ashish Gupta',
    date: '2025-02-01',
    featured: false
  },
  {
    id: '5',
    title: 'Cozy Reading Nook Design',
    category: 'furniture',
    excerpt: 'A serene window seat reading nook with natural materials and garden views.',
    content: `
      <p>This cozy reading nook transforms a simple window into a peaceful retreat for relaxation and contemplation. The built-in seating with plush cushions creates the perfect spot for reading and enjoying garden views.</p>
      
      <p>Natural materials like wood and linen create a warm, inviting atmosphere, while the large window provides abundant natural light and a connection to the outdoors.</p>
      
      <h3>Design Elements</h3>
      <ul>
        <li>Built-in window seat with storage</li>
        <li>Comfortable cushions and throws</li>
        <li>Natural wood window frames</li>
        <li>Flowing linen curtains</li>
        <li>Garden view integration</li>
      </ul>
      
      <p>This reading nook exemplifies how thoughtful design can create intimate spaces for relaxation within larger rooms, promoting wellness and mindful living.</p>
    `,
    image: '/assets/WhatsApp Image 2025-07-01 at 4.43.15 PM.jpeg',
    designer: 'Rajesh Sharma',
    date: '2025-02-05',
    featured: false
  },
  {
    id: '6',
    title: 'Modern Pendant Collection',
    category: 'lighting',
    excerpt: 'Sleek pendant lights that transform any space with contemporary elegance.',
    content: `
      <p>Our Modern Pendant Collection represents the pinnacle of contemporary lighting design. Each piece is carefully crafted to provide both functional illumination and aesthetic appeal.</p>
      
      <p>The collection features clean lines, premium materials, and innovative LED technology that ensures both beauty and energy efficiency. Perfect for kitchen islands, dining areas, and living spaces.</p>
      
      <h3>Design Features</h3>
      <ul>
        <li>Minimalist geometric forms</li>
        <li>Premium brass and glass construction</li>
        <li>Dimmable LED integration</li>
        <li>Multiple finish options</li>
      </ul>
      
      <p>Each pendant is designed to make a statement while seamlessly integrating with your existing decor. The collection offers various sizes and configurations to suit different spaces and needs.</p>
    `,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    designer: 'Design Team',
    date: '2024-01-15',
    featured: false
  },
  {
    id: '7',
    title: 'Luxury Modular Kitchen',
    category: 'kitchen',
    excerpt: 'A sophisticated modular kitchen with marble countertops and ambient under-cabinet lighting.',
    content: `
      <p>This luxury modular kitchen combines functionality with elegance, featuring premium marble countertops and state-of-the-art appliances. The design maximizes storage while maintaining a clean, sophisticated aesthetic.</p>
      
      <p>Ambient under-cabinet lighting creates a warm atmosphere while providing practical task lighting for food preparation. The neutral color palette with warm wood accents creates a timeless appeal.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Premium marble countertops</li>
        <li>Soft-close cabinet hardware</li>
        <li>Under-cabinet LED lighting</li>
        <li>High-end stainless steel appliances</li>
        <li>Custom storage solutions</li>
      </ul>
      
      <p>This kitchen design proves that luxury and functionality can coexist beautifully, creating a space that's both practical for daily use and impressive for entertaining.</p>
    `,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    designer: 'Design Team',
    date: '2025-02-10',
    featured: true
  },
  {
    id: '8',
    title: 'Contemporary Chandelier Collection',
    category: 'lighting',
    excerpt: 'Statement chandeliers that blend modern design with timeless elegance.',
    content: `
      <p>Our Contemporary Chandelier Collection features stunning statement pieces that serve as the focal point of any room. Each chandelier combines modern design principles with classic elegance.</p>
      
      <p>Crafted with premium materials including crystal, brass, and hand-blown glass, these chandeliers provide both ambient and accent lighting while serving as sculptural art pieces.</p>
      
      <h3>Collection Highlights</h3>
      <ul>
        <li>Hand-blown glass elements</li>
        <li>Premium crystal accents</li>
        <li>Adjustable height options</li>
        <li>Dimmable LED compatibility</li>
        <li>Custom sizing available</li>
      </ul>
      
      <p>Perfect for dining rooms, entryways, and living spaces, these chandeliers create dramatic focal points while providing beautiful, functional lighting.</p>
    `,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    designer: 'Design Team',
    date: '2025-02-15',
    featured: false
  },
  {
    id: '9',
    title: 'Minimalist Dining Set',
    category: 'furniture',
    excerpt: 'Clean lines and natural materials create the perfect modern dining experience.',
    content: `
      <p>This minimalist dining set embodies the principles of modern design - simplicity, functionality, and beauty. Crafted from sustainably sourced walnut, the set brings warmth and sophistication to any dining space.</p>
      
      <p>The table features a live-edge design that celebrates the natural beauty of wood, while the accompanying chairs provide comfort without compromising the clean aesthetic.</p>
      
      <h3>Design Features</h3>
      <ul>
        <li>Solid walnut construction</li>
        <li>Live-edge table design</li>
        <li>Ergonomic chair design</li>
        <li>Sustainable materials</li>
        <li>Seats 6-8 people</li>
      </ul>
      
      <p>This dining set is designed for both everyday meals and special occasions, combining durability with refined aesthetics that will last for generations.</p>
    `,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    designer: 'Design Team',
    date: '2025-02-20',
    featured: false
  },
  {
    id: '10',
    title: 'Botanical Art Gallery Wall',
    category: 'decor',
    excerpt: 'Curated botanical prints and nature photography create a stunning gallery wall.',
    content: `
      <p>This botanical art gallery wall brings the serenity of nature indoors through carefully curated botanical illustrations and contemporary nature photography. Each piece is selected to create a cohesive yet dynamic display.</p>
      
      <p>The collection features both vintage botanical prints and modern photography, all professionally framed with museum-quality materials. The arrangement creates visual interest while maintaining balance.</p>
      
      <h3>Collection Features</h3>
      <ul>
        <li>Hand-selected botanical prints</li>
        <li>Contemporary nature photography</li>
        <li>Museum-quality framing</li>
        <li>Professional arrangement design</li>
        <li>Various sizes and orientations</li>
      </ul>
      
      <p>Perfect for living rooms, bedrooms, or office spaces, this gallery wall creates a sophisticated focal point that celebrates the beauty of the natural world.</p>
    `,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    designer: 'Design Team',
    date: '2025-02-25',
    featured: false
  }
];

export const designers: Designer[] = [
  {
    id: '1',
    name: 'Priya Mehta',
    bio: 'Priya is a curator and interior stylist who specializes in children\'s spaces and nature-inspired decor. Her eye for detail and passion for creating imaginative environments has made her a sought-after designer across India.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    projectIds: ['1']
  },
  {
    id: '2',
    name: 'Arjun Singh',
    bio: 'Arjun Singh is a mural artist and designer who creates stunning wall art pieces. His work celebrates traditional Indian art techniques while embracing contemporary design principles and wildlife themes.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    projectIds: ['2']
  },
  {
    id: '3',
    name: 'Kavya Patel',
    bio: 'Kavya Patel is a bold interior designer known for her fearless use of color and attention to detail. Her bathroom designs are featured in high-end residences and boutique hotels across India.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    projectIds: ['3']
  },
  {
    id: '4',
    name: 'Ashish Gupta',
    bio: 'Ashish Gupta specializes in dramatic interior spaces and powder room designs. His work bridges the gap between bold artistic expression and functional contemporary design.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    projectIds: ['4']
  },
  {
    id: '5',
    name: 'Rajesh Sharma',
    bio: 'Rajesh brings the essence of sustainable design to furniture creation. Based in Mumbai, he specializes in eco-friendly, comfortable furniture that celebrates natural materials and traditional craftsmanship.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    projectIds: ['5']
  },
  {
    id: '6',
    name: 'Tripti Solanki',
    bio: 'Tripti Solanki is a renowned lighting designer with over 15 years of experience in creating atmospheric lighting solutions. Her work has been featured in architectural digest and modern design magazines worldwide.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    projectIds: ['6']
  },
  {
    id: '7',
    name: 'Neha Agarwal',
    bio: 'Neha Agarwal is a kitchen design specialist who creates functional yet beautiful culinary spaces. Her modular kitchen designs are known for their innovative storage solutions and premium finishes.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    projectIds: ['7']
  },
  {
    id: '8',
    name: 'Vikram Malhotra',
    bio: 'Vikram Malhotra specializes in luxury lighting design, creating statement pieces that serve as both functional lighting and artistic sculptures. His chandeliers grace high-end residences and commercial spaces.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    projectIds: ['8']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Anita Sharma',
    role: 'Homeowner, Delhi',
    content: 'Classic Interiors transformed our home into a space we truly love. The attention to detail and quality of their pieces is exceptional. Priya and her team understood our vision perfectly.',
    image: '',
    date: '2025-01-15'
  },
  {
    id: '2',
    name: 'Vikram Agarwal',
    role: 'Architect, Mumbai',
    content: 'Working with Classic Interiors on our residential projects has been a pleasure. Their designs consistently exceed our expectations and clients are always delighted with the results.',
    image: '',
    date: '2025-01-22'
  },
  {
    id: '3',
    name: 'Deepika Malhotra',
    role: 'Interior Designer, Bangalore',
    content: 'The quality and craftsmanship of Classic Interiors pieces make them my go-to choice for discerning clients who value excellence. Their work speaks for itself.',
    image: '',
    date: '2025-02-05'
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getDesignerById = (id: string): Designer | undefined => {
  return designers.find(designer => designer.id === id);
};

export const getDesignerByName = (name: string): Designer | undefined => {
  return designers.find(designer => designer.name === name);
};

export const getProjectsByDesigner = (designerName: string): Project[] => {
  return projects.filter(project => project.designer === designerName);
};

export const searchProjects = (query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.excerpt.toLowerCase().includes(lowercaseQuery) ||
    project.content.toLowerCase().includes(lowercaseQuery) ||
    project.designer.toLowerCase().includes(lowercaseQuery)
  );
};
const sampleListings = [
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image:{
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60',
      filename:"listingimage"
    },
      price: 1500,
    location: 'Malibu',
    country: 'United States',
  },
  {
    title: 'Modern Loft in Downtown',
    description: 'Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!',
    image: {
     url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60',
     filename:"listingimage",
    },
    price: 1200,
    location: 'New York City',
    country: 'United States',
  },
  {
    title: 'Mountain Retreat',
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
      filename:"listingimage",
    },
    price: 1000,
    location: 'Aspen',
    country: 'United States',

  },
  {

    title: 'Historic Villa in Tuscany',
    description: 'Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.',
    image: {
      url:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
      filename:"listingimage",
    },
    price: 2500,
    location: 'Florence',
    country: 'Italy',
  },
  {
    title: 'Secluded Treehouse Getaway',
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:{
      url:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
      filename:"listingimage",
    },
    price: 800,
    location: 'Portland',
    country: 'United States'
  },
  {
    title: 'Desert Glamping Experience',
    description: 'Experience luxury camping in the desert under the stars. A magical blend of comfort and wilderness.',
    image: {
      url:'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename:"listingimage",
    },
    price: 1100,
    location: 'Sedona',
    country: 'United States',
  },
  {
    title: 'Canal-side Flat in Amsterdam',
    description: 'Charming flat with views of the canals. Walk to cafes, museums, and everything Amsterdam has to offer.',
    image:{
      url: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename:"listingimage",
    },
    price: 1800,
    location: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    title: 'Rustic Farmhouse',
    description: 'Reconnect with nature at this rustic farmhouse. Enjoy fresh air, fresh eggs, and peace and quiet.',
    image:{
      url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename:"listingimage",
    },
    price: 900,
    location: 'Nashville',
    country: 'United States',
  },
  {
    title: 'Luxury Penthouse with City View',
    description: 'Enjoy panoramic city views from this luxurious penthouse. Ideal for business or pleasure.',
    image:{
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60',
      filename:"listingimage",
    },
    price: 3000,
    location: 'Chicago',
    country: 'United States',
  },
  {
    title: 'Charming Cottage in the English Countryside',
    description: 'A picturesque retreat in the heart of the English countryside. Perfect for relaxing walks and cozy evenings.',
    image: {
      url:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60',
      filename:"listingimage",
    },
    price: 1400,
    location: 'Cotswolds',
    country: 'United Kingdom',
  },
  {
    title: 'Stylish Apartment in Berlin',
    description: 'Modern apartment in Berlin’s vibrant city center. Close to public transport, restaurants, and parks.',
    image:{
      url: 'https://images.unsplash.com/photo-1611602132416-da2045990f76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename:"listingimage",
    },
    price: 1600,
    location: 'Berlin',
    country: 'Germany',
  },
  {
    title: 'Luxury Ski Chalet',
    description: 'Enjoy the slopes and luxury in this ski chalet. Perfect for a winter holiday with style.',
    image:{
      url: 'https://images.unsplash.com/photo-1542662565-7e4b66bae529?auto=format&fit=crop&w=800&q=60',
      filename:"listingimage",
    },
    price: 2700,
    location: 'Zermatt',
    country: 'Switzerland',
  },
  {
    title: 'Tropical Bungalow',
    description: 'Relax in this cozy tropical bungalow surrounded by lush greenery and exotic birds.',
    image:{
      url: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename:"listingimage",
    },
    price: 1300,
    location: 'Bali',
    country: 'Indonesia',
  },
  {
    title: 'Artistic Loft in Paris',
    description: 'Charming artist loft filled with character and close to Montmartre. A true Parisian experience.',
    image:{
      url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60',
      filename:"listingimage",
    },
    price: 2200,
    location: 'Paris',
    country: 'France',

  },
  {
    title: 'Lakeside Cabin',
    description: 'Cozy lakeside cabin with kayaks, fishing, and peaceful vibes. Great for families and couples.',
    image:{
      url: 'https://images.unsplash.com/photo-1701201676460-d80b471505b3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename:"listingimage",
    },
    price: 1000,
    location: 'Lake Tahoe',
    country: 'United States'
  },
  {
    title: 'Skyline View Apartment',
    description: 'Modern apartment with a gorgeous skyline view, especially stunning at night.',
    image:{
      url: 'https://images.unsplash.com/photo-1591247378418-c77f1532d2f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename:"listingimage",
    },
    price: 1800,
    location: 'Dubai',
    country: 'United Arab Emirates'
  },
  {
    title: 'Cultural Stay in Kyoto',
    description: 'Traditional Japanese home with modern amenities. Perfect for cultural immersion.',
    image:{
      url: 'https://images.unsplash.com/photo-1498409505433-aff66f7ba9e6?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename:"listingimage",
    },
    price: 1500,
    location: 'Kyoto',
    country: 'Japan'
  },
  {
    title: 'Chic Studio in Barcelona',
    description: 'Trendy studio apartment near Las Ramblas and the beach.',
    image:{
      url: 'https://images.unsplash.com/photo-1607582544956-a874e6740135?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename:"listingimage",
    },
    price: 1350,
    location: 'Barcelona',
    country: 'Spain'
  },
  {
    title: 'Wine Country Retreat',
    description: 'Relax at this peaceful home located in the heart of wine country.',
    image: {
      url:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60',
      filename:"listingimage",
    },
    price: 1700,
    location: 'Napa Valley',
    country: 'United States'
  },
  {
    title: 'Jungle Treehouse',
    description: 'Adventure in this jungle treehouse surrounded by wildlife and nature trails.',
    image: {
      url:'https://images.unsplash.com/photo-1581467695675-7e3753e5ab26?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      filename:"listingimage",
    },
    price: 950,
    location: 'Costa Rica',
    country: 'Costa Rica'
  }
];

module.exports = {data:sampleListings};
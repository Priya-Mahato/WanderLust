const sampleListings = [
  {
    title: "Cozy Beachfront Cottage ",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Arjuna Beach, Goa",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        73.74, 15.57
      ]
    }
  },
  {
    title: "Whispers of Nainital",
    description:
      "Stay in the heart of the city in this cozy, comfortable homestay. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Nainital, Uttarakhand",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        79.4534, 29.3924
      ]
    }
  },
  {
    title: "Opulent Escape in Koramangala",
    description:
      "Experience ultimate luxury at this ultimate paradise, perfect for serene getaways and unforgettable stays.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1728048756938-de1ccee0ab15?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1000,
    location: "Koramangala, Bengaluru",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        77.6245, 12.9352
      ]
    }
  },
  {
    title: "Havelock Hideaway in the islands",
    description:
      "Secluded island retreat with private spaces, perfect for unwinding amidst nature and crystal-clear waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Havelock Islands, Andaman and Nicobar Islands",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        92.9876, 11.9761
      ]
    }
  },
  {
    title: "Ahilya By The Sea",
    description:
      "Step into paradise at our boutique retreat, blending local charm with modern luxuries, just steps from serene landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Palolem Beach, Goa",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        74.0232, 15.0100
      ]
    }
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Agatti Island, Lakshadweep",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        72.1934, 10.8576
      ]
    }
  },
  {
    title: "Emerald Greenery Horizons",
    description:
      "Immerse yourself in the serene beauty of Meghalaya at this peaceful retreat, featuring panoramic views of lush hills and shimmering lakes.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/29712059/pexels-photo-29712059/free-photo-of-serene-landscape-of-meghalaya-india.jpeg",
    },
    price: 900,
    location: "Umiam, Meghalaya",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        91.9029, 25.6649
      ]
    }
  },
  {
    title: "Golden Reflections by the Lake",
    description:
      "Enjoy magical sunsets and lakeside serenity at this beautiful heritage property, ideal for relaxation.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697729844084-c03db2377161?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Udaipur, Rajasthan",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        73.7125, 24.5854
      ]
    }
  },
  {
    title: "Waves and Wonders : A Tranquil Hideaway",
    description:
      "Indulge in barefoot luxury with direct access to pristine beaches, perfect for relaxation and beachside adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Calangute, Goa",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        73.7608, 15.5457
      ]
    }
  },
  {
    title: "The Cozy Nook : A Serene Homestay",
    description:
      "Your home away from home! Enjoy intimate comfort, peaceful surroundings, and a welcoming atmosphere in this cozy retreat.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1678752713875-17fe3fd98ba3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Lajpat Nagar, New Delhi",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        77.2403, 28.5649
      ]
    }
  },
  {
    title: "Starry Nights in Spiti",
    description:
      "Immerse yourself in the breathtaking beauty of the Spiti Valley. Camp under the starry sky, trek through rugged landscapes, and unique experience of this remote Himalayan region.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Spiti, Himachal Pradesh",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        78.0349, 32.2461
      ]
    }
  },
  {
    title: "Mountains, Mornings and Magic",
    description:
      "Your cozy home in Darjeeling—complete with stunning mountain views, personalized service, and the warmth of a true homestay experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Darjeeling, West Bengal",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        88.2664, 27.0416
      ]
    }
  },
  {
    title: "Whispers of Dal Lake",
    description:
      "Experience the serenity of Dal Lake with a stay on the water’s edge, where tranquility and stunning views await.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560853950-2502ec2ab867?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Srinagar, Jammu & Kashmir",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        74.8683, 34.1106
      ]
    }
  },
  {
    title: "The Taj Retreat",
    description:
      "A perfect getaway with the Taj Mahal as your backdrop. Enjoy peaceful comfort, unmatched views, and the charm of Agra.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1696887484490-715e7eb0e682?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Agra, Uttar Pradesh",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        78.0081, 27.1767
      ]
    }
  },
  {
    title: "Starry Nights and Azure Waters",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Ladakh, India",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        77.5619, 34.2268
      ]
    }
  },
  {
    title: "Cozy Colonial Cottage in the Heart of Pondicherry",
    description:
      "Escape to this restored colonial-style home, just a short walk from the beach. With vintage charm and modern amenities, its the perfect base for your Pondicherry adventure.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582610191340-fa501e6e5040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Pondicherry, India",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        79.8083, 11.9416
      ]
    }
  },
  {
    title: "Art Deco Apartment in Mumbai",
    description:
      "Step into the glamour of the roaring '20s in this stylish Art Deco apartment in Bandra.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1650138179459-b32b7fad75a3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1600,
    location: "Bandra, Mumbai",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        72.8295, 19.0596
      ]
    }
  },
  {
    title: "Cozy Fireside Retreats",
    description:
      "Experience Dalhousie with cozy homestays offering warm hospitality, stunning mountain views, and serene surroundings — a perfect retreat from the ature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Dalhousie, Himachal Pradesh",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        75.9710, 32.5387
      ]
    }
  },
  {
    title: "Royal Stay in the Pink City",
    description:
      "Experience Maharaja-Style Luxury and immerse yourself in Jaipur's Royal Past.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1691031429447-d8460e45f9ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Jaipur, Rajasthan",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        75.7873, 26.9124
      ]
    }
  },
  {
    title: "Urban Dreamy Nightscape",
    description:
      "Experience the magic of the city at night from your private balcony. Witness the iconic skyline illuminated, creating a breathtaking spectacle.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5000,
    location: "Gurgaon, Haryana",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        77.0266, 28.4595
      ]
    }
  },
  {
    title: "Rustic Log Cabin in Mussoorie",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Mussoorie.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Mussoorie, Uttarakhand",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        78.0820, 30.4547
      ]
    }
  },
  {
    title: "Opulent Villas in Alibaug",
    description:
      "Escape to luxury with our beautifully designed villas in Alibaug. Enjoy a private retreat surrounded by lush greenery, stunning beach views, modern amenities, and a tranquil atmosphere—your perfect getaway awaits.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Alibaug, Maharashtra",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        72.8773, 18.6584
      ]
    }
  },
  {
    title: "Viva La Vida in Shimla",
    description:
      "Stay in an beautiful cabin nestled in the heart of Shimla. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 750,
    location: "Shimla, Himachal Pradesh",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        77.1640, 31.1050
      ]
    }
  },
  {
    title: "Cedars & Saffron in Mcleodganj",
    description:
      "A serene cottage with Himalayan views, offering a peaceful getaway enriched by Buddhist teachings and meditation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Mcleodganj, Himachal Pradesh",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        76.3213, 32.2426
      ]
    }
  },
  {
    title: "The Sacred Stay in Rishikesh",
    description:
      "Charming homestay with traditional touches and breathtaking Ganga views, perfect for a peaceful escape and spiritual rejuvenation.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697729439457-85d4b9d3a2cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2000,
    location: "Rishikesh, Uttarakhand",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        78.2853, 30.1158
      ]
    }
  },
  {
    title: "Misty Mornings & Verdant Views",
    description:
      "Escape to Kerala's serene hills for an idyllic getaway in the city of Vagamon.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/13691355/pexels-photo-13691355.jpeg",
    },
    price: 1200,
    location: "Vagamon, Kerala",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        76.9052, 9.6862
      ]
    }
  },
  {
    title: "Udaipur City Palace",
    description:
      "Stay in Udaipur's iconic City Palace, offering royal charm, lake views, and rich history.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661964079694-ccfaf7dc8028?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6000,
    location: "Udaipur, Rajasthan",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        73.7125, 24.5854
      ]
    }
  },
  {
    title: "Rustic Mountain Getaway",
    description:
      "Experience the authentic charm of the Himalayas in our rustic cottage for those seeking a true escape from the city.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2314983/pexels-photo-2314983.jpeg",
    },
    price: 4000,
    location: "Kasauli, Himachal Pradesh",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        76.9649, 30.9013
      ]
    }
  },
  {
    title: "Secluded Beach House in Cherai",
    description:
      "Escape to a secluded beach house on the coast of Cherai Beach. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Cherai, Kerala",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [
        76.1783, 10.1416
      ]
    }
  },
];

module.exports = { data: sampleListings };
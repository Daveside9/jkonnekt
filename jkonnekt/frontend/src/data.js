const data = [
  // Event Centers
  {
    name: 'agwilo_hall',
    description: 'A stunning events center for all occasions.',
    categories: ['event centers'],
    price: 90000, //price in Naira
    images: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60://images.unsplash.com/photo-1571577092442-18a1163b14cd',
    ],
    location: 'Kaduna, Romi_new_extension',
  },
  {
    name: 'millinion_hall',
    description: 'A spacious hall with modern amenities.',
    categories: ['event centers'],
    price: 120000, //price in naira
    images: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://example.com/grand_celebration_hall_2.jpg',
    ],
    location: 'karji, kaduna',
  },
  {
      name: 'dj rege',
      description: 'DJ',
      categories: ['Vendor'],
      price: 40000, // Price in naira
      images: [
        'https://eventpiazza.com/uploads/event_photos/911/911_526_820.jpg'
      ],
      location: 'kaduna',
    },
  {
      name: 'mc osi',
      description: 'Baddest Hypeman.',
      categories: ['MC'],
      price: 40000, // Price in naira
      images: [
        'https://eventpiazza.com/uploads/event_photos/114/114_534_820.png'
      ],
      location: 'kaduna',
    },
  {
    name: 'Crystal Palace Events',
    description: 'A crystal-themed events center for a touch of elegance.',
    categories: ['event centers', 'decorations', 'general'],
    price: 1900, // Price in dollars
    images: [
      'https://example.com/crystal_palace_events_1.jpg',
      'https://example.com/crystal_palace_events_2.jpg',
    ],
    location: 'Paris, France',
  },
  {
    name: 'Majestic Ballroom',
    description: 'A majestic ballroom with luxurious decor.',
    categories: ['event centers', 'decorations', 'general'],
    price: 2500, // Price in dollars
    images: [
      'https://example.com/majestic_ballroom_1.jpg',
      'https://example.com/majestic_ballroom_2.jpg',
    ],
    location: 'Tokyo, Japan',
  },
  // Lightenings
  {
    name: 'Luminous Lights',
    description: 'Luminous lights to brighten up any event.',
    categories: ['lightenings', 'general'],
    price: 500, // Price in dollars
    images: [
      'https://example.com/luminous_lights_1.jpg',
      'https://example.com/luminous_lights_2.jpg',
    ],
    location: 'New York, USA',
  },
  {
    name: 'Twinkling Stars',
    description: 'Twinkling star lights for a magical ambiance.',
    categories: ['lightenings', 'general'],
    price: 400, // Price in dollars
    images: [
      'https://example.com/twinkling_stars_1.jpg',
      'https://example.com/twinkling_stars_2.jpg',
    ],
    location: 'Los Angeles, USA',
  },
  {
    name: 'Glowing Spheres',
    description: 'Glowing spheres to create an otherworldly atmosphere.',
    categories: ['lightenings', 'general'],
    price: 550, // Price in dollars
    images: [
      'https://example.com/glowing_spheres_1.jpg',
      'https://example.com/glowing_spheres_2.jpg',
    ],
    location: 'London, UK',
  },
  {
    name: 'Radiant Chandeliers',
    description: 'Radiant chandeliers for an opulent setting.',
    categories: ['lightenings', 'general'],
    price: 600, // Price in dollars
    images: [
      'https://example.com/radiant_chandeliers_1.jpg',
      'https://example.com/radiant_chandeliers_2.jpg',
    ],
    location: 'Paris, France',
  },
  {
    name: 'Enchanting Fireflies',
    description: 'Enchanting firefly lights for a whimsical touch.',
    categories: ['lightenings', 'general'],
    price: 450, // Price in dollars
    images: [
      'https://example.com/enchanting_fireflies_1.jpg',
      'https://example.com/enchanting_fireflies_2.jpg',
    ],
    location: 'Tokyo, Japan',
  },
  // Sound Systems
  {
    name: 'High-Definition Audio',
    description: 'High-definition audio systems for crystal clear sound.',
    categories: ['sound systems', 'general'],
    price: 800, // Price in dollars
    images: [
      'https://example.com/high_definition_audio_1.jpg',
      'https://example.com/high_definition_audio_2.jpg',
    ],
    location: 'New York, USA',
  },
  {
    name: 'Surround Sound Speakers',
    description: 'Surround sound speakers for an immersive experience.',
    categories: ['sound systems', 'general'],
    price: 750, // Price in dollars
    images: [
      'https://example.com/surround_sound_speakers_1.jpg',
      'https://example.com/surround_sound_speakers_2.jpg',
    ],
    location: 'Los Angeles, USA',
  },
  {
    name: 'Powerful Subwoofers',
    description: 'Powerful subwoofers to pump up the bass.',
    categories: ['sound systems', 'general'],
    price: 900, // Price in dollars
    images: [
      'https://example.com/powerful_subwoofers_1.jpg',
      'https://example.com/powerful_subwoofers_2.jpg',
    ],
    location: 'London, UK',
  },
  {
    name: 'Wireless Microphones',
    description: 'Wireless microphones for easy mobility.',
    categories: ['sound systems', 'general'],
    price: 600, // Price in dollars
    images: [
      'https://example.com/wireless_microphones_1.jpg',
      'https://example.com/wireless_microphones_2.jpg',
    ],
    location: 'Paris, France',
  },
  {
    name: 'DJ Turntables',
    description: 'Professional DJ turntables for spinning tracks.',
    categories: ['sound systems', 'general'],
    price: 1000, // Price in dollars
    images: [
      'https://example.com/dj_turntables_1.jpg',
      'https://example.com/dj_turntables_2.jpg',
    ],
    location: 'Tokyo, Japan',
  },
  // Decorations
  {
    name: 'Floral Arrangements',
    description: 'Exquisite floral arrangements for a touch of nature.',
    categories: ['decorations', 'general'],
    price: 300, // Price in dollars
    images: [
      'https://example.com/floral_arrangements_1.jpg',
      'https://example.com/floral_arrangements_2.jpg',
    ],
    location: 'New York, USA',
  },
  {
    name: 'Elegant Table Settings',
    description: 'Elegant table settings for a sophisticated look.',
    categories: ['decorations', 'general'],
    price: 250, // Price in dollars
    images: [
      'https://example.com/elegant_table_settings_1.jpg',
      'https://example.com/elegant_table_settings_2.jpg',
    ],
    location: 'Los Angeles, USA',
  },
  {
    name: 'Balloon Archways',
    description: 'Balloon archways to add a pop of color.',
    categories: ['decorations', 'general'],
    price: 200, // Price in dollars
    images: [
      'https://example.com/balloon_archways_1.jpg',
      'https://example.com/balloon_archways_2.jpg',
    ],
    location: 'London, UK',
  },
  {
    name: 'Fairy Light Curtains',
    description: 'Fairy light curtains for a magical backdrop.',
    categories: ['decorations', 'general'],
    price: 350, // Price in dollars
    images: [
      'https://example.com/fairy_light_curtains_1.jpg',
      'https://example.com/fairy_light_curtains_2.jpg',
    ],
    location: 'Paris, France',
  },
  {
    name: 'Satin Ribbons',
    description: 'Satin ribbons to add a touch of elegance.',
    categories: ['decorations', 'general'],
    price: 150, // Price in dollars
    images: [
      'https://example.com/satin_ribbons_1.jpg',
      'https://example.com/satin_ribbons_2.jpg',
    ],
    location: 'Tokyo, Japan',
  },
  // General
  {
    name: 'Event Planning Services',
    description: 'Comprehensive event planning services.',
    categories: ['general'],
    price: 1200, // Price in dollars
    images: [
      'https://example.com/event_planning_services_1.jpg',
      'https://example.com/event_planning_services_2.jpg',
    ],
    location: 'New York, USA',
  },
  {
    name: 'Photo Booth Rental',
    description: 'Photo booth rental for capturing memorable moments.',
    categories: ['general'],
    price: 500, // Price in dollars
    images: [
      'https://example.com/photo_booth_rental_1.jpg',
      'https://example.com/photo_booth_rental_2.jpg',
    ],
    location: 'Los Angeles, USA',
  },
  {
    name: 'Catering Services',
    description: 'Professional catering services for delectable food.',
    categories: ['general'],
    price: 800, // Price in dollars
    images: [
      'https://example.com/catering_services_1.jpg',
      'https://example.com/catering_services_2.jpg',
    ],
    location: 'London, UK',
  },
  {
    name: 'Event Photography',
    description: 'Event photography to capture precious moments.',
    categories: ['general'],
    price: 600, // Price in dollars
    images: [
      'https://example.com/event_photography_1.jpg',
      'https://example.com/event_photography_2.jpg',
    ],
    location: 'Paris, France',
  },
  {
    name: 'Event Security Services',
    description: 'Professional event security services for safety.',
    categories: ['general'],
    price: 1000, // Price in dollars
    images: [
      'https://example.com/event_security_services_1.jpg',
      'https://example.com/event_security_services_2.jpg',
    ],
    location: 'Tokyo, Japan',
  },
  {
      name: 'Elegant Events Center',
      description: 'A stunning events center for all occasions.',
      categories: ['event centers', 'decorations', 'general'],
      price: 1500, // Price in dollars
      images: [
        'https://example.com/elegant_events_center_1.jpg',
        'https://example.com/elegant_events_center_2.jpg',
      ],
      location: 'New York, USA',
    },
    // Add more event center objects from different countries
    {
      name: 'Royal Palace Banquet Hall',
      description: 'A regal banquet hall for grand celebrations.',
      categories: ['event centers', 'decorations', 'general'],
      price: 2000, // Price in dollars
      images: [
        'https://example.com/royal_palace_banquet_hall_1.jpg',
        'https://example.com/royal_palace_banquet_hall_2.jpg',
      ],
      location: 'London, UK',
    },
    {
      name: 'Grand Ballroom at Château Versailles',
      description: 'An opulent ballroom at the iconic Château Versailles.',
      categories: ['event centers', 'decorations', 'general'],
      price: 3000, // Price in dollars
      images: [
        'https://example.com/grand_ballroom_versailles_1.jpg',
        'https://example.com/grand_ballroom_versailles_2.jpg',
      ],
      location: 'Paris, France',
    },
    {
      name: 'Imperial Events Hall',
      description: 'An imperial events hall with luxurious amenities.',
      categories: ['event centers', 'decorations', 'general'],
      price: 1800, // Price in dollars
      images: [
        'https://example.com/imperial_events_hall_1.jpg',
        'https://example.com/imperial_events_hall_2.jpg',
      ],
      location: 'Tokyo, Japan',
    },
    {
      name: 'Exquisite Garden Pavilion',
      description: 'An exquisite garden pavilion surrounded by lush landscapes.',
      categories: ['event centers', 'decorations', 'general'],
      price: 2200, // Price in dollars
      images: [
        'https://example.com/exquisite_garden_pavilion_1.jpg',
        'https://example.com/exquisite_garden_pavilion_2.jpg',
      ],
      location: 'Sydney, Australia',
    },
    // Lightenings
    {
      name: 'Luminous Lights',
      description: 'Luminous lights to brighten up any event.',
      categories: ['lightenings', 'general'],
      price: 500, // Price in dollars
      images: [
        'https://example.com/luminous_lights_1.jpg',
        'https://example.com/luminous_lights_2.jpg',
      ],
      location: 'New York, USA',
    },
    // Add more lighting objects from different countries
    {
      name: 'Tokyo Lights Festival',
      description: 'A spectacular lights festival in the heart of Tokyo.',
      categories: ['lightenings', 'general'],
      price: 600, // Price in dollars
      images: [
        'https://example.com/tokyo_lights_festival_1.jpg',
        'https://example.com/tokyo_lights_festival_2.jpg',
      ],
      location: 'Tokyo, Japan',
    },
    {
      name: 'Eiffel Tower Illuminations',
      description: 'The iconic Eiffel Tower illuminations in Paris.',
      categories: ['lightenings', 'general'],
      price: 700, // Price in dollars
      images: [
        'https://example.com/eiffel_tower_illuminations_1.jpg',
        'https://example.com/eiffel_tower_illuminations_2.jpg',
      ],
      location: 'Paris, France',
    },
    {
      name: 'Sydney Opera House Lights',
      description: 'Mesmerizing lights at the Sydney Opera House.',
      categories: ['lightenings', 'general'],
      price: 550, // Price in dollars
      images: [
        'https://example.com/sydney_opera_house_lights_1.jpg',
        'https://example.com/sydney_opera_house_lights_2.jpg',
      ],
      location: 'Sydney, Australia',
    },
    {
      name: 'Garden of Lights',
      description: 'A serene garden adorned with enchanting lights.',
      categories: ['lightenings', 'general'],
      price: 450, // Price in dollars
      images: [
        'https://example.com/garden_of_lights_1.jpg',
        'https://example.com/garden_of_lights_2.jpg',
      ],
      location: 'Los Angeles, USA',
    },
    // Sound Systems
    {
      name: 'High-Definition Audio',
      description: 'High-definition audio systems for crystal clear sound.',
      categories: ['sound systems', 'general'],
      price: 800, // Price in dollars
      images: [
        'https://example.com/high_definition_audio_1.jpg',
        'https://example.com/high_definition_audio_2.jpg',
      ],
      location: 'New York, USA',
    },
    // Add more sound systems objects from different countries
    {
      name: 'London Symphony Sound System',
      description: 'The world-renowned sound system of London Symphony Orchestra.',
      categories: ['sound systems', 'general'],
      price: 1000, // Price in dollars
      images: [
        'https://example.com/london_symphony_sound_system_1.jpg',
        'https://example.com/london_symphony_sound_system_2.jpg',
      ],
      location: 'London, UK',
    },
    {
      name: 'Opera House Acoustics',
      description: 'The flawless acoustics of Sydney Opera House.',
      categories: ['sound systems', 'general'],
      price: 900, // Price in dollars
      images: [
        'https://example.com/opera_house_acoustics_1.jpg',
        'https://example.com/opera_house_acoustics_2.jpg',
      ],
      location: 'Sydney, Australia',
    },
    {
      name: 'Tokyo Concert Hall Sound',
      description: 'Immersive sound experience at a renowned concert hall in Tokyo.',
      categories: ['sound systems', 'general'],
      price: 850, // Price in dollars
      images: [
        'https://example.com/tokyo_concert_hall_sound_1.jpg',
        'https://example.com/tokyo_concert_hall_sound_2.jpg',
      ],
      location: 'Tokyo, Japan',
    },
    {
      name: 'Paris Music Studio Speakers',
      description: 'Top-of-the-line speakers at a Parisian music studio.',
      categories: ['sound systems', 'general'],
      price: 950, // Price in dollars
      images: [
        'https://example.com/paris_music_studio_speakers_1.jpg',
        'https://example.com/paris_music_studio_speakers_2.jpg',
      ],
      location: 'Paris, France',
    },
    // Decorations
    {
      name: 'Floral Arrangements',
      description: 'Exquisite floral arrangements for a charming ambiance.',
      categories: ['decorations', 'general'],
      price: 300, // Price in dollars
      images: [
        'https://example.com/floral_arrangements_1.jpg',
        'https://example.com/floral_arrangements_2.jpg',
      ],
      location: 'New York, USA',
    },
    // Add more decoration objects from different countries
    {
      name: 'London Garden Party Decor',
      description: 'Garden party decorations with a touch of London style.',
      categories: ['decorations', 'general'],
      price: 350, // Price in dollars
      images: [
        'https://example.com/london_garden_party_decor_1.jpg',
        'https://example.com/london_garden_party_decor_2.jpg',
      ],
      location: 'London, UK',
    },
    {
      name: 'Japanese Zen Decor',
      description: 'Zen-inspired decorations for a serene atmosphere.',
      categories: ['decorations', 'general'],
      price: 280, // Price in dollars
      images: [
        'https://example.com/japanese_zen_decor_1.jpg',
        'https://example.com/japanese_zen_decor_2.jpg',
      ],
      location: 'Tokyo, Japan',
    },
    {
      name: 'French Château Decor',
      description: 'Elegant château-inspired decorations for a luxurious event.',
      categories: ['decorations', 'general'],
      price: 380, // Price in dollars
      images: [
        'https://example.com/french_chateau_decor_1.jpg',
        'https://example.com/french_chateau_decor_2.jpg',
      ],
      location: 'Paris, France',
    },
    {
      name: 'Australian Beach Party Decor',
      description: 'Vibrant beach party decorations for a lively celebration.',
      categories: ['decorations', 'general'],
      price: 320, // Price in dollars
      images: [
        'https://example.com/australian_beach_party_decor_1.jpg',
        'https://example.com/australian_beach_party_decor_2.jpg',
      ],
      location: 'Sydney, Australia',
    },
    // General
    {
      name: 'Event Planning Services',
      description: 'Comprehensive event planning services.',
      categories: ['general'],
      price: 1200, // Price in dollars
      images: [
        'https://example.com/event_planning_services_1.jpg',
        'https://example.com/event_planning_services_2.jpg',
      ],
      location: 'New York, USA',
    },
    // Add more general service objects from different countries
    {
      name: 'London Event Concierge',
      description: 'Personalized event concierge services in London.',
      categories: ['general'],
      price: 1400, // Price in dollars
      images: [
        'https://example.com/london_event_concierge_1.jpg',
        'https://example.com/london_event_concierge_2.jpg',
      ],
      location: 'London, UK',
    },
    {
      name: 'Sydney Event Marketing',
      description: 'Effective event marketing solutions in Sydney.',
      categories: ['general'],
      price: 1100, // Price in dollars
      images: [
        'https://example.com/sydney_event_marketing_1.jpg',
        'https://example.com/sydney_event_marketing_2.jpg',
      ],
      location: 'Sydney, Australia',
    },
    {
      name: 'Tokyo Event Entertainment',
      description: 'Diverse event entertainment options in Tokyo.',
      categories: ['general'],
      price: 1300, // Price in dollars
      images: [
        'https://example.com/tokyo_event_entertainment_1.jpg',
        'https://example.com/tokyo_event_entertainment_2.jpg',
      ],
      location: 'Tokyo, Japan',
    },
    {
      name: 'Paris Event Rentals',
      description: 'Quality event rental services in Paris.',
      categories: ['general'],
      price: 1250, // Price in dollars
      images: [
        'https://example.com/paris_event_rentals_1.jpg',
        'https://example.com/paris_event_rentals_2.jpg',
      ],
      location: 'Paris, France',
    },
];

export default data;

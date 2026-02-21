// backend/routes/laptops.js - ALL BRANDS DYNAMIC VERSION
const express = require('express');
const router = express.Router();
const Laptop = require('../models/Laptop');

// Helper function to map category to categoryKey
const mapCategoryToKey = (category) => {
  switch (category?.toLowerCase()) {
    case 'entry': return 'entryLevel';
    case 'consumer': return 'consumer';
    case 'commercial': return 'commercial';
    case 'gaming': return 'gaming';
    case 'mid-range':
    case 'midrange': return 'midrange';
    case 'premium': return 'premium';
    default: return 'consumer';
  }
};

// Helper function to process laptops into series structure
const processLaptopsIntoSeries = (laptops, seriesStructure) => {
  laptops.forEach(laptop => {
    const series = seriesStructure.find(s => s.name === laptop.series?.toLowerCase());
    if (!series) return;

    // Handle both array and string categories for backward compatibility
    const categories = Array.isArray(laptop.category)
      ? laptop.category
      : (laptop.category ? [laptop.category] : []);

    categories.forEach(cat => {
      const categoryKey = mapCategoryToKey(cat);

      if (series[categoryKey]) {
        series[categoryKey].push({
          ...laptop,
          id: laptop._id?.toString() || 'temp-id',
          price: laptop.price ? `₹${laptop.price.toLocaleString()}` : '₹Price not set',
          specs: [
            laptop.processor,
            laptop.ram,
            laptop.storage,
            laptop.display,
            laptop.graphics
          ].filter(Boolean),
          image: laptop.images?.[0] || laptop.image || 'https://via.placeholder.com/400x300',
          includedIn: categories
        });
      }
    });
  });
};

// Brand series structures
const brandSeriesStructures = {
  dell: [
    {
      name: 'inspiron',
      displayName: 'Inspiron',
      description: 'Versatile laptops for everyday use, from students to professionals.',
      logoColor: '#007DB8',
      categories: ['Entry Level', 'Mid-Range', 'Consumer', 'Commercial', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'vostro',
      displayName: 'Vostro',
      description: 'Business-ready laptops with essential security features at affordable prices.',
      logoColor: '#1E3A8A',
      categories: ['Entry Level', 'Mid-Range', 'Commercial'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'latitude',
      displayName: 'Latitude',
      description: 'Enterprise-grade laptops built for productivity, security, and business continuity.',
      logoColor: '#0F766E',
      categories: ['Entry Level', 'Mid-Range', 'Consumer', 'Commercial', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'xps',
      displayName: 'XPS',
      description: 'Premium ultrabooks with cutting-edge design, exceptional performance, and stunning displays.',
      logoColor: '#7C3AED',
      categories: ['Consumer', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'gseries',
      displayName: 'G Series',
      description: 'High-performance gaming laptops with dedicated graphics, advanced cooling, and high refresh rates.',
      logoColor: '#DC2626',
      categories: ['Gaming', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'alienware',
      displayName: 'Alienware',
      description: 'Ultimate gaming machines with desktop-level performance, advanced cooling, and AlienFX RGB lighting.',
      logoColor: '#10B981',
      categories: ['Gaming', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'dc',
      displayName: 'DC',
      description: 'Reliable laptops for daily productivity and entertainment.',
      logoColor: '#007DB8',
      categories: ['Entry Level', 'Mid-Range', 'Consumer', 'Commercial'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'db',
      displayName: 'DB',
      description: 'Durable laptops designed for business and professional use.',
      logoColor: '#1E3A8A',
      categories: ['Entry Level', 'Mid-Range', 'Commercial'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    }
  ],


  hp: [
    {
      name: '15s',
      displayName: 'HP 15s',
      description: 'Essential laptops for everyday computing, perfect for students and home users.',
      logoColor: '#0096D6',
      categories: ['Entry Level', 'Consumer'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'pavilion',
      displayName: 'Pavilion',
      description: 'Stylish laptops with balanced performance for work and entertainment.',
      logoColor: '#0096D6',
      categories: ['Mid-Range', 'Consumer', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'envy',
      displayName: 'Envy',
      description: 'Premium laptops with premium design, powerful performance, and stunning displays.',
      logoColor: '#0096D6',
      categories: ['Consumer', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'probook',
      displayName: 'Probook',
      description: 'Business laptops with enterprise-grade security, durability, and performance.',
      logoColor: '#0096D6',
      categories: ['Commercial', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'omen',
      displayName: 'OMEN',
      description: 'Gaming laptops with powerful graphics, high refresh displays, and advanced cooling.',
      logoColor: '#DC2626',
      categories: ['Gaming', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'victus',
      displayName: 'Victus',
      description: 'Affordable gaming laptops with dedicated graphics for entry-level gamers.',
      logoColor: '#DC2626',
      categories: ['Gaming'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'omnibook',
      displayName: 'OmniBook',
      description: 'Premium AI-powered laptops designed for the future of work and productivity.',
      logoColor: '#0096D6',
      categories: ['Premium', 'Commercial', 'Consumer'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'aio',
      displayName: 'All in One (AIO)',
      description: 'Space-saving desktop computers with powerful performance and sleek design.',
      logoColor: '#0096D6',
      categories: ['Entry Level', 'Mid-Range', 'Consumer', 'Commercial', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    }
  ],


  lenovo: [
    {
      name: 'ideapad',
      displayName: 'IdeaPad',
      description: 'Versatile laptops for everyday use, perfect for students and home users.',
      logoColor: '#E2231A',
      categories: ['Entry Level', 'Mid-Range', 'Consumer'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'thinkpad',
      displayName: 'ThinkPad',
      description: 'Business laptops with legendary durability, security, and professional features.',
      logoColor: '#E2231A',
      categories: ['Commercial', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'thinkbook',
      displayName: 'ThinkBook',
      description: 'Business laptops with legendary durability, security, and professional features.',
      logoColor: '#E2231A',
      categories: ['Commercial', 'Consumer', 'Mid-Range'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'legion',
      displayName: 'Legion',
      description: 'Gaming laptops with powerful performance, high refresh displays, and advanced cooling.',
      logoColor: '#DC2626',
      categories: ['Gaming', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'loq',
      displayName: 'LOQ',
      description: '2-in-1 convertible laptops with premium design and versatile form factors.',
      logoColor: '#E2231A',
      categories: ['Consumer', 'Mid-Range', 'Commercial', 'Gaming'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'vseries',
      displayName: 'V Series',
      description: 'Affordable business laptops with essential productivity features for small businesses.',
      logoColor: '#E2231A',
      categories: ['Entry Level', 'Commercial'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'aio',
      displayName: 'All in One (AIO)',
      description: 'Stylish all-in-one desktops for home and office with space-saving design.',
      logoColor: '#E2231A',
      categories: ['Entry Level', 'Mid-Range', 'Consumer', 'Commercial'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    }
  ],


  asus: [
    {
      name: 'vivobook',
      displayName: 'VivoBook',
      description: 'Affordable laptops for everyday computing, perfect for students and home users.',
      logoColor: '#000000',
      categories: ['Entry Level', 'Mid-Range', 'Consumer'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'zenbook',
      displayName: 'ZenBook',
      description: 'Premium ultrabooks with elegant design, exceptional performance, and stunning displays.',
      logoColor: '#000000',
      categories: ['Consumer', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'rog',
      displayName: 'ROG (Republic of Gamers)',
      description: 'High-performance gaming laptops with cutting-edge graphics and advanced cooling.',
      logoColor: '#DC2626',
      categories: ['Gaming', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'tuf',
      displayName: 'TUF Gaming',
      description: 'Durable gaming laptops with military-grade toughness and powerful performance.',
      logoColor: '#DC2626',
      categories: ['Gaming'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'creator nb',
      displayName: 'Creator NB',
      description: 'Professional laptops designed for content creators with color-accurate displays.',
      logoColor: '#000000',
      categories: ['Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'expertbook',
      displayName: 'ExpertBook',
      description: 'Business-focused laptops with advanced security, durability, and professional features.',
      logoColor: '#000000',
      categories: ['Commercial', 'Premium', 'Mid-Range'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'aio',
      displayName: 'All in One (AIO)',
      description: 'Powerful all-in-one desktops with stunning displays for work and play.',
      logoColor: '#000000',
      categories: ['Consumer', 'Commercial', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    }
  ],


  acer: [
    {
      name: 'aspire',
      displayName: 'Aspire',
      description: 'Versatile and affordable laptops for everyday computing, perfect for students and home users.',
      logoColor: '#83B81A',
      categories: ['Entry Level', 'Consumer'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'swift',
      displayName: 'Swift',
      description: 'Lightweight ultrabooks with premium design and long battery life.',
      logoColor: '#83B81A',
      categories: ['Consumer', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'predator',
      displayName: 'Predator',
      description: 'High-performance gaming laptops with powerful graphics and advanced cooling.',
      logoColor: '#DC2626',
      categories: ['Gaming', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'nitro',
      displayName: 'Nitro',
      description: 'Affordable gaming laptops with dedicated graphics for entry-level to mid-range gamers.',
      logoColor: '#DC2626',
      categories: ['Gaming'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'travelmate',
      displayName: 'Travelmate',
      description: '2-in-1 convertible laptops with versatile form factors and touch displays.',
      logoColor: '#83B81A',
      categories: ['Entry Level', 'Commercial'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    }
  ],


  apple: [
    {
      name: 'macbookair',
      displayName: 'MacBook Air',
      description: 'Ultra-thin and lightweight laptops with exceptional battery life and performance.',
      logoColor: '#000000',
      categories: ['Consumer', 'Mid-Range', 'Commercial', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'macbookpro',
      displayName: 'MacBook Pro',
      description: 'Professional laptops with powerful performance, stunning displays, and advanced features.',
      logoColor: '#000000',
      categories: ['Premium', 'Gaming', 'Consumer', 'Commercial'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    }
  ],


  msi: [
    {
      name: 'katana',
      displayName: 'Katana',
      description: 'Slim gaming laptops with excellent performance-to-price ratio for mainstream gamers.',
      logoColor: '#FF0000',
      categories: ['Gaming', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'gseries',
      displayName: 'G',
      description: 'Gaming laptops with powerful graphics and high refresh displays.',
      logoColor: '#FF0000',
      categories: ['Gaming', 'Premium', 'consumer', 'Mid-Range'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'victor',
      displayName: 'Victor',
      description: 'Ultra-thin gaming laptops with premium design and powerful performance.',
      logoColor: '#FF0000',
      categories: ['Gaming', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'raider',
      displayName: 'Raider',
      description: 'High-performance gaming laptops with desktop-level performance and advanced cooling.',
      logoColor: '#FF0000',
      categories: ['Gaming', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'titan',
      displayName: 'Titan',
      description: 'Professional laptops designed for content creators with color-accurate displays.',
      logoColor: '#000000',
      categories: ['Premium', 'Gaming'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    }
  ],


  samsung: [
    {
      name: 'galaxybook',
      displayName: 'Galaxy Book',
      description: 'Premium laptops with sleek design, long battery life, and seamless integration with Samsung ecosystem.',
      logoColor: '#1428A0',
      categories: ['Consumer', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'galaxybookpro',
      displayName: 'Galaxy Book Pro',
      description: 'Ultra-light premium laptops with AMOLED displays and exceptional performance.',
      logoColor: '#1428A0',
      categories: ['Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'galaxybook2in1',
      displayName: 'Galaxy Book 2-in-1',
      description: 'Versatile 2-in-1 laptops with touch displays and S Pen support.',
      logoColor: '#1428A0',
      categories: ['Consumer', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    }
  ],


  microsoft: [
    {
      name: 'surfacepro',
      displayName: 'Surface Pro',
      description: 'Versatile 2-in-1 laptops with premium design, touch displays, and detachable keyboards.',
      logoColor: '#0078D4',
      categories: ['Consumer', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'surfacelaptop',
      displayName: 'Surface Laptop',
      description: 'Premium laptops with elegant design, exceptional build quality, and stunning displays.',
      logoColor: '#0078D4',
      categories: ['Consumer', 'Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    },
    {
      name: 'surface go',
      displayName: 'Surface Go',
      description: 'Premium detachable laptops with powerful performance and versatile form factors.',
      logoColor: '#0078D4',
      categories: ['Premium'],
      entryLevel: [], midrange: [], consumer: [], commercial: [], gaming: [], premium: []
    }
  ]
};

// Brand name mapping
const brandNames = {
  dell: 'Dell',
  hp: 'HP',
  lenovo: 'Lenovo',
  asus: 'ASUS',
  acer: 'Acer',
  apple: 'Apple',
  msi: 'MSI',
  samsung: 'Samsung Galaxy',
  microsoft: 'Microsoft'
};

// Generic brand endpoint - handles all brands
router.get('/brand/:brandId', async (req, res) => {
  try {
    const brandId = req.params.brandId.toLowerCase();

    // Check if brand is supported
    if (!brandSeriesStructures[brandId]) {
      return res.status(404).json({
        success: false,
        error: `Brand '${brandId}' is not supported`
      });
    }

    // Get laptops from database with optimized query
    const laptops = await Laptop.find({ brand: brandId }).lean();

    // Get series structure for this brand
    const seriesStructure = JSON.parse(JSON.stringify(brandSeriesStructures[brandId]));

    // Process laptops into series structure
    processLaptopsIntoSeries(laptops, seriesStructure);

    // Send response
    res.json({
      success: true,
      brandId: brandId,
      brandName: brandNames[brandId] || brandId.toUpperCase(),
      series: seriesStructure
    });

  } catch (error) {
    console.error(`Brand API Error (${req.params.brandId}):`, error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;

module.exports = async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Only GET allowed' });
    }
    
    const products = [
      {
        id: 1,
        name: "iPhone 15 Pro",
        price: 99990,
        category: "Смартфоны",
        inStock: true
      },
      {
        id: 2,
        name: "MacBook Air M2", 
        price: 129990,
        category: "Ноутбуки",
        inStock: true
      },
      {
        id: 3,
        name: "AirPods Pro",
        price: 24990,
        category: "Наушники",
        inStock: false
      }
    ];
    
    res.status(200).json({
      success: true,
      products: products,
      count: products.length,
      timestamp: new Date().toISOString()
    });
  };
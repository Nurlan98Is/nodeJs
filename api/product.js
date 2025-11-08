// GET /api/products
module.exports = async (req, res) => {
    // Разрешаем CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    // Обрабатываем preflight запрос
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    // Только GET запросы
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Only GET method allowed' });
    }
  
    try {
      // Данные 3х продуктов
      const products = [
        {
          id: 1,
          name: "iPhone 15 Pro",
          price: 99990,
          category: "Смартфоны",
          inStock: true,
          rating: 4.8,
          description: "Флагманский смартфон от Apple",
          image: "https://via.placeholder.com/200x200?text=iPhone+15+Pro"
        },
        {
          id: 2,
          name: "MacBook Air M2",
          price: 129990,
          category: "Ноутбуки",
          inStock: true,
          rating: 4.9,
          description: "Мощный и легкий ноутбук",
          image: "https://via.placeholder.com/200x200?text=MacBook+Air+M2"
        },
        {
          id: 3,
          name: "AirPods Pro",
          price: 24990,
          category: "Наушники",
          inStock: false,
          rating: 4.7,
          description: "Беспроводные наушники с шумоподавлением",
          image: "https://via.placeholder.com/200x200?text=AirPods+Pro"
        }
      ];
  
      // Имитация задержки сети
      await new Promise(resolve => setTimeout(resolve, 150));
  
      res.status(200).json({
        success: true,
        products: products,
        count: products.length,
        timestamp: new Date().toISOString()
      });
  
    } catch (error) {
      console.error('Products API error:', error);
      res.status(500).json({ 
        success: false,
        error: 'Internal server error' 
      });
    }
  };
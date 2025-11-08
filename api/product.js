module.exports = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    console.log('PRODUCTS ENDPOINT CALLED - UNIQUE CODE');
    
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
      }
    ];
    
    res.status(200).json({
      success: true,
      message: "ДАННЫЕ ПРОДУКТОВ - УНИКАЛЬНЫЙ КОД",
      products: products,
      count: products.length,
      endpoint: "product.js",
      timestamp: new Date().toISOString()
    });
};
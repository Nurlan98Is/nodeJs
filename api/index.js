module.exports = async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Only GET allowed' });
    }
    
    res.status(200).json({
      message: "🚀 Добро пожаловать в API!",
      version: "1.0.0",
      endpoints: {
        user: "/api/user",
        products: "/api/product",
        hello: "/api/hello"
      },
      timestamp: new Date().toISOString()
    });
  };
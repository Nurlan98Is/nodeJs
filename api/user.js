module.exports = async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Only GET allowed' });
    }
    
    const userData = {
      id: 1,
      name: "Иван Иванов",
      email: "ivan@example.com",
      age: 28,
      city: "Москва",
      premium: true,
      balance: 1500.50
    };
    
    res.status(200).json({
      success: true,
      user: userData,
      timestamp: new Date().toISOString()
    });
  };
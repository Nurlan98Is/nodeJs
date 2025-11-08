module.exports = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    console.log('USER ENDPOINT CALLED - UNIQUE CODE');
    
    const userData = {
      id: 1,
      name: "Тестовый пользователь",
      email: "test@example.com",
      age: 25,
      city: "Москва"
    };
    
    res.status(200).json({
      success: true,
      message: "ДАННЫЕ ПОЛЬЗОВАТЕЛЯ - УНИКАЛЬНЫЙ КОД",
      user: userData,
      endpoint: "user.js",
      timestamp: new Date().toISOString()
    });
};
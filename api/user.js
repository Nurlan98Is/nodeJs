module.exports = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const userData = {
      id: 1,
      name: "Тестовый пользователь",
      email: "test@example.com"
    };
    
    res.status(200).json({
      success: true,
      message: "Публичный endpoint без авторизации",
      user: userData,
      timestamp: new Date().toISOString()
    });
  };
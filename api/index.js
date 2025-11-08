
module.exports = async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    // Получаем путь из URL
    const path = req.url;
    
    if (path === '/api/user') {
        const userData = {
            id: 1,
            name: "Тестовый пользователь",
            email: "test@example.com",
            age: 25,
            city: "Москва"
        };
        
        return res.status(200).json({
            success: true,
            message: "ДАННЫЕ ПОЛЬЗОВАТЕЛЯ - УНИКАЛЬНЫЙ КОД",
            user: userData,
            timestamp: new Date().toISOString()
        });
    }
    
    // Для корневого пути API
    if (path === '/api' || path === '/api/') {
        return res.status(200).json({
            message: "🚀 Добро пожаловать в API!",
            version: "1.0.0",
            endpoints: {
                user: "/api/user",
                products: "/api/product",
                hello: "/api/hello"
            },
            timestamp: new Date().toISOString()
        });
    }
    
    // Если маршрут не найден
    res.status(404).json({
        error: "Route not found",
        path: path,
        method: req.method
    });
};
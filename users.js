// Archivo de usuarios para la aplicación Comex BDC
const validUsers = [
    { email: 'diegolas@gmail.com', password: '123' },
    { email: 'prueba', password: '123' }
];

// Función para verificar credenciales
function verificarCredenciales(email, password) {
    return validUsers.find(u => u.email === email && u.password === password);
} 
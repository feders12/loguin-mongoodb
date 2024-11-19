document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    // Obtener los valores del usuario y la contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Comprobar si las credenciales son correctas
    if (username === 'fede' && password === '1234') {
        // Redirigir a pctes
        window.location.href = "pacientesabuelos.html"; // abuelos;
    } else {
        // Mostrar un mensaje de alerta si las credenciales son incorrectas
        alert('Usuario o contraseña incorrectos.');
    }
});
  

const express = require('express');
const connectDB = require('./db'); // Asegúrate de que el nombre del archivo sea correcto

const app = express();
const PORT = process.env.PORT || 300;

// Conectar a la base de datos
connectDB();

// Definir una ruta simple
app.get('/', (req, res) => {
 res.send('¡Conexión a MongoDB establecida!');
});

// Iniciar el servidor
app.listen(PORT, () => {
 console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

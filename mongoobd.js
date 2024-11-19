const mongoose = require('mongoose');

// Reemplaza 'your_connection_string' con tu cadena de conexión a MongoDB
const uri = 'mongodb://localhost:27017/los_jazmines.';

const connectDB = async () => {
 try {
   await mongoose.connect(uri, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });
   console.log('MongoDB conectado');
 } catch (error) {
   console.error('Error al conectar a MongoDB:', error);
   process.exit(1); // Termina el proceso con un código de error
 }
};

module.exports = connectDB;
 
const mongoose = require('mongoose')

const colors = require('colors')


//traer las variables de entorno del /config/.env

//Función para conexion a bd
const connectDB = async() =>{
    //crear el objeto de conexión

    const conn = await mongoose.connect( process.env.MONGO_URL )
    console.log(`mongo conectado en el host: ${ conn.connection.host }`.bgMagenta.green)
}


module.exports = connectDB
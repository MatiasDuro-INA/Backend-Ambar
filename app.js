import express from 'express';
import { connectDB } from './src/database/db.js';
import userRoutes from './src/routes/userRoutes.js'
import productRoutes from './src/routes/productRoutes.js'
import dotenv from 'dotenv';
dotenv.config()

const app = express()

const PORT = 3000;

// Decirle a express que parsee todo a JSON
app.use(express.json())

console.log("conectando...");


await connectDB()

console.log("conectando 2...");


app.use('/users', userRoutes)
app.use('/product', productRoutes)


app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ', PORT);
    
})

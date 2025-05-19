import express from 'express';
import { connectDB } from './src/database/db.js';
import userRoutes from './src/routes/userRoutes.js'

const app = express()
const PORT = 3000;

// Decirle a express que parsee todo a JSON
app.use(express.json())

await connectDB()

app.use('/users', userRoutes)

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ', PORT);
    
})

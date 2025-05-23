import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.error('Error al conectar a MongoDB: ', error.message);
        process.exit(1) // Salir si no conecta
    }
}
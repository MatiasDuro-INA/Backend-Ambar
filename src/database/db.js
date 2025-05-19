import mongoose from 'mongoose'

const MONGO_URI = 'mongodb+srv://matiasduro:0HXRUSSWxP73tdMD@clusterprueba.eyh1rxk.mongodb.net/AmbarDatabase';

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.error('Error al conectar a MongoDB: ', error.message);
        process.exit(1) // Salir si no conecta
    }
}
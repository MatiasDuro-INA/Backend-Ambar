import User from '../models/User.js'

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);

    } catch (error) {
        res.status(500).json({
            error:"Error al obtener los usuarios"
        })
    }
}

export const createUser = async(req, res) => {
    try {
        
        const { nombre, email, password } = req.body

        const newUser = new User({nombre, email, password})
        await newUser.save();
    

        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({error: 'Error al crear usuario', detalle: error.message})
    }
}
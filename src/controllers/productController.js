import { supabase } from "../database/supabase.js";
import Product from "../models/Product.js";
import { v4 as uuidv4} from 'uuid'

export const getAllProducts = async (req, res) => {
    try {
        const productos = await Product.find();
        res.json(productos)
    } catch (error) {
        res.status(500).json({ error: 'Erro al obtener productos'})
    }
}

export const createProduct = async (req, res) => {
    try {

        // npm install multer @supabase/supabase-js 
        const { name, price, category, stock, description} = req.body;

        const file = req.file;

        if(!file) return res.status(400).json({ error:'imagen requerida'})

        const filename = uuidv4();

        const { error: uploadError} = await supabase.storage
        .from("ambar-bucket")
        .upload(`${category}/${filename}`, file.buffer, {
            contentType: file.mimetype
        })

        if(uploadError){
            return res.status(500).json({ error: 'error al subir imagen', detail: uploadError.message})
        }

        const { data } = supabase.storage.from("ambar-bucket").getPublicUrl(`${category}/${filename}`);
        const imageUrl = data.publicUrl;

        const newProduct = new Product({
            name,
            price,
            category,
            stock,
            images:[imageUrl],
            description
        })

        await newProduct.save()
        res.status(201).json(newProduct)
        
    } catch (error) {
        res.status(400).json({ error: "Error al crear producto", detail: error.message})
    }
}
import express from 'express'
import { createProduct, getAllProducts } from '../controllers/productController.js'
import { upload } from '../middlewares/upload.js'

const router = express.Router()

router.get('/', getAllProducts)
router.post('/', upload.single('image'), createProduct)

export default router
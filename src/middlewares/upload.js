import multer from "multer";

// evitar escribirt archivos en el disco
const storage = multer.memoryStorage()

export const upload = multer({ storage })
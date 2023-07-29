import { Router } from "express";
import { uploadImg } from "../controllers/users/users";
import upload from "../middlewares/file";


const router = Router();

router.post('/:coleccion/:id', upload.single("file"), uploadImg);
 

export { router };

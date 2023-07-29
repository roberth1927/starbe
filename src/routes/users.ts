import { Router } from "express";
import { userPost, usersGet } from "../controllers/users/users";
import { check } from 'express-validator';
import { emailExist } from "../helpers/db.validators"
import fieldsValidator from "../middlewares/validateFileds";

const router = Router();

router.post('/register', [
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'The email is not valid').isEmail(),
    check('phone_number', 'The phone number is not valid').not().isEmpty(),
    check('birthdate', 'The birthdate is required').not().isEmpty(),
    check('email').custom(emailExist),
    fieldsValidator,
  ], userPost);


  router.get("/", usersGet);
  
  

export { router };

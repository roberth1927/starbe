import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { handleHttpError, handleHttpSuccess } from "../utils/httpHandle";
import { Request, Response } from "express";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const registerNewUser = async (
  { name, email, phone_number, birthdate, signature }: User,
  res: Response
) => {
  try {
    const newUser = new UserModel({
      name,
      email,
      phone_number,
      birthdate,
      signature,
    });

    const user = await newUser.save();

    return handleHttpSuccess(res, user);
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_POST_USER");
  }
};


const getUsers = async (req: Request, res: Response) => {
  const { limit = 10, from = 0, name = '' } = req.query;

  const query = (name as string) ? { name: { $regex: new RegExp(name as string, 'i') } } : {};

  const [total, data] = await Promise.all([
    UserModel.countDocuments(),
    UserModel.find(query)          
    .skip( Number( from ) )
    .limit(Number(limit)),
  ]);

  return ({
    total,
    data,
  });
};

const uploadSignature = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let model = await UserModel.findById(id);

    if (model?.signature) {
      const nameArr = model.signature.split("/");
      const name = nameArr[nameArr.length - 1];
      const [public_id] = name.split(".");
      cloudinary.v2.uploader.destroy(public_id);
    }

    const path = req.file?.path;

    if (!path) {
      return handleHttpError(res, "No se ha enviado ningún archivo.");
    }

    if (model !== null && model !== undefined) {
      const { secure_url } = await cloudinary.v2.uploader.upload(path);
      model.signature = secure_url;
      await model.save();
      handleHttpSuccess(res, "Archivo subido con éxito.");
    }
  } catch (error) {
    handleHttpError(res, "ERROR_GENERAL");
  }
};

export { registerNewUser, getUsers, uploadSignature };

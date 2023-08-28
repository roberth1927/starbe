import { Request, Response } from "express";
import { handleHttpError, handleHttpSuccess } from "../../utils/httpHandle";
import { registerNewUser, getUsers, uploadSignature  } from "../../services/user";

const userPost = async ({ body }: Request, res: Response) => {
  const { name, email, phone_number, birthdate, signature } = body;
  await registerNewUser({ name, email, phone_number, birthdate, signature }, res);
};
 
const usersGet = async (req: Request, res: Response) => {
  try {
    const responseUsers = await getUsers(req, res);
    handleHttpSuccess(res, responseUsers);
  } catch (e) {
    handleHttpError(res, "ERROR_GET_USER");
  }
};

const uploadImg = async (req: Request, res: Response) => {

  try {
    
     await uploadSignature(req, res);

  } catch (error) {
    
  }

};

export { userPost, usersGet, uploadImg };

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

/*
const userGet = async (req: Request, res: Response) => {
  try {
    const responseUsers = await getUser(req);
    res.send(responseUsers);
  } catch (e) {
    handleHttpError(res, "ERROR_GET_USER");
  }
};

const usersPut = async (
  { params, body }: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = params;
    const response = await updateUser(id, body);
    res.send(response);
  } catch (e) {}
};

const usersDelete = async (
  { params, body }: Request,
  res: Response
): Promise<void> => {
  const { id } = params;
  const response = await deleteUser(id, body);
  res.send(response);
};

export { usersGet, userPost, userGet, usersPut, usersDelete }; */
export { userPost, usersGet, uploadImg };

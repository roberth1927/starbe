import User from '../models/user';


const emailExist = async (email: string) => {
  const existeEmail = await User.findOne({ email });
  if (existeEmail) {
    throw new Error(`the email ${email}, is already registered`);
  }
};


export { emailExist };

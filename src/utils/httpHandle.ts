
import { Response } from "express";
import { messagesCodes } from "../enum/httpMessagesCodes";
import { successCodes, redictionCodes, clientErrorCodes, errorCodes } from "../interfaces/httpCodes.interface";

const handleHttpClientError = (res: Response, error: string = "", code: errorCodes = 500) => {
  res.status(500).send({ error: error || messagesCodes[code] });
};

const handleHttpSuccess = (res: Response,  data:any, msg: string = "", code: successCodes = 200) => {
  res.status(code).send({ msg: msg || messagesCodes[code], data });
}

const handleHttpRedirection = (res: Response, msg: string = "", code: redictionCodes = 300) => {
  res.status(code).send({ msg: msg || messagesCodes[code] });
}

const handleHttpError = (res: Response, msg: string = "", code: clientErrorCodes = 400) => {
  res.status(code).send({ msg: msg || messagesCodes[code] });
}

export { 
  handleHttpError, 
  handleHttpSuccess,
  handleHttpRedirection,
  handleHttpClientError
};

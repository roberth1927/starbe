
import express, { Application } from 'express';
import cors from 'cors';
import connectToMongoDB from '../database/mongodb';
import { router } from "../routes"


class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT);
    this.conectionDB();
    this.middlewares();
    this.routes();

  }

  async conectionDB() {
    await connectToMongoDB();
  }
  private routes() {
    this.app.use(router);
  }

  private middlewares() {
    this.app.use(cors({
      origin: '*', // Puedes ajustar esto a los orígenes permitidos en tu aplicación
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
      exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
    }));
    this.app.use(express.json());
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Port', this.port);
    });
  }
}

export default Server;

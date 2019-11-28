import Express from "express";
import Cors from "cors";
import BodyParser from "body-parser";
import { Route } from "./router";
import db from "./db";

const server = Express();
server.use(Cors());
server.use(BodyParser.json());

Route(server);

const PORT = 7200;
server.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
  
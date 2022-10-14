import app from "./src/app";
import {sequelize} from './src/db';

sequelize
 .sync({force: true, logging: false})
 .then(() => {
  console.log('connected DB!');
  app.listen(3001, function () {
   console.log('App is listening on port 3001!');
  });
 })
 .catch((err) => console.error(err));


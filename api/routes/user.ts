import { Response, Request, Router, NextFunction } from "express";
import { sequelize } from "../src/db";

const router = Router();
const User = sequelize.models.User;

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((error) => next(error));
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  User.create(user)
    .then((createdUser) => {
      res.send(createdUser);
    })
    .catch((error) => next(error));
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  User.findByPk(parseInt(id))
    .then((result) => {
      return User.destroy({ where: { id: parseInt(id) } }).then((u) => {
        res.send( result );
      });
    })
    .catch((error) => next(error));
});

export default router;

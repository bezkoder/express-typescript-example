import { Router } from "express";
import TutorialController from "../controllers/tutorial.controller";

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Create a new Tutorial
    this.router.post("/", this.controller.create);

    // Retrieve all Tutorials
    this.router.get("/", this.controller.findAll);

    // Retrieve a single Tutorial with id
    this.router.get("/:id", this.controller.findOne);

    // Update a Tutorial with id
    this.router.put("/:id", this.controller.update);

    // Delete a Tutorial with id
    this.router.delete("/:id", this.controller.delete);
  }
}

export default new TutorialRoutes().router;

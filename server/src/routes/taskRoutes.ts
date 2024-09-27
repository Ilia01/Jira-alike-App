import { Router } from "express";
import {
  getTasks,
  createTask,
  updateTask,
} from "../controllers/taskController";

const router = Router();

router.get(`/:projectId`, getTasks);
router.post("/", createTask);
router.patch("/:taskId/:status", updateTask);

export default router;

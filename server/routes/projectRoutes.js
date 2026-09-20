import express from "express";
import { protect } from "../middlewares/index.js";
import {
  createProject,
  deleteProject,
  getProject,
  getPublicProject,
  listProjects,
  publishedProject,
  updateProjectFiles,
} from "../controllers/projectController.js";
import { chat } from "../controllers/chatController.js";

const router = express.Router();

// public route
router.get("/public/:id", getPublicProject);

//protected route now
router.use(protect);

router.post("/", createProject);
router.get("/", listProjects);
router.get("/:id", getProject);
router.delete("/:id", deleteProject);
router.put("/:id/files", updateProjectFiles);
router.post("/:id/publish", publishedProject);

//chat
router.post("/:id/chat", chat);

export default router;

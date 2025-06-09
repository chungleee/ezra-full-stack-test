import { Hono } from "hono";
import {
	createTask,
	getAllTasks,
	updateTaskById,
} from "../controllers/tasks.controllers.js";
import { createTaskValidator } from "../utils/validator.js";

const tasks = new Hono();

tasks.post("/", createTaskValidator, createTask);

tasks.get("/", getAllTasks);

tasks.patch("/:id", updateTaskById);

export default tasks;

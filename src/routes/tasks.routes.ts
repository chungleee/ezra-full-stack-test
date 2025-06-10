import { Hono } from "hono";
import {
	createTask,
	getAllTasks,
	updateTaskById,
	deleteTaskById,
} from "../controllers/tasks.controllers.js";
import { createTaskValidator } from "../utils/validator.js";

const tasks = new Hono();

tasks.post("/", createTaskValidator, createTask);

tasks.get("/", getAllTasks);

tasks.patch("/:id", updateTaskById);

tasks.delete("/:id", deleteTaskById);

export default tasks;

import type { Context } from "hono";
import { prisma } from "../database/prisma.js";

export const createTask = async (c) => {
	const { name } = c.req.valid("json");

	const newTask = await prisma.task.create({
		data: {
			name,
		},
	});

	return c.json({
		type: "success",
		data: newTask,
	});
};

export const getAllTasks = async (c: Context) => {
	const tasks = await prisma.task.findMany();

	return c.json({
		tasks,
	});
};

export const updateTaskById = async (c: Context) => {
	const { id } = c.req.param();

	const taskId = Number(id);

	const foundTask = await prisma.task.findUnique({
		where: {
			id: taskId,
		},
	});

	if (!foundTask) {
		c.status(404);
		return c.json({ type: "error", message: "Task not found" });
	}

	const updatedTask = await prisma.task.update({
		where: {
			id: taskId,
		},
		data: {
			completed: !foundTask.completed,
		},
	});

	if (!updatedTask) {
		c.status(400);
		return c.json({ type: "error", message: "Something went wrong" });
	}

	return c.json({ type: "success", data: updatedTask });
};

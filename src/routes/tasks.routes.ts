import { Hono } from "hono";
import { validator } from "hono/validator";
import { prisma } from "../database/prisma.js";

const tasks = new Hono();

tasks.post(
	"/",
	validator("json", (value, c) => {
		const name = value["name"];
		if (!name.length) {
			c.status(400);
			return c.json({
				type: "error",
				message: "Name field is empty",
			});
		}
		return value;
	}),
	async (c) => {
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
	}
);

tasks.get("/", async (c) => {
	const tasks = await prisma.task.findMany();

	return c.json({
		tasks,
	});
});

tasks.patch("/:id", async (c) => {
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
});

export default tasks;

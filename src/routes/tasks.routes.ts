import { Hono } from "hono";
import { validator } from "hono/validator";
import { prisma } from "../database/prisma.js";

const tasks = new Hono();

tasks.post(
	"/",
	validator("json", (value, c) => {
		const name = value["name"];
		if (!name.length) {
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

export default tasks;

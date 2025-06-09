import { Hono } from "hono";

const tasks = new Hono();

tasks.get("/", (c) => {
	return c.json({
		tasks: "/",
	});
});

export default tasks;

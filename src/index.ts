import { serve } from "@hono/node-server";
import { Hono } from "hono";
import tasksRoutes from "./routes/tasks.routes.js";

const app = new Hono();

app.route("/api/tasks/", tasksRoutes);

serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	}
);

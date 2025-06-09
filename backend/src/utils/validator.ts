import { validator } from "hono/validator";

export const createTaskValidator = validator("json", (value, c) => {
	const name = value["name"];
	if (!name.length) {
		c.status(400);
		return c.json({
			type: "error",
			message: "Name field is empty",
		});
	}
	return value;
});

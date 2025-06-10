import type { Task } from "../types";

export const getAllTasksAPI = async (): Promise<{
	type: "success" | "error";
	data: Task[];
}> => {
	const result = await fetch("/api/tasks/");
	const data = await result.json();

	return data;
};

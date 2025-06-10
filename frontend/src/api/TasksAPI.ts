import type { ApiResponse, Task } from "../types";

export const getAllTasksAPI = async (): Promise<ApiResponse<Task[]>> => {
	const result = await fetch("/api/tasks/");
	const data: ApiResponse<Task[]> = await result.json();

	return data;
};

export const createTaskAPI = async (
	name: string
): Promise<ApiResponse<Task>> => {
	const result = await fetch("/api/tasks/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name }),
	});

	const data = await result.json();

	return data;
};

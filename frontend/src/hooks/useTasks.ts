import { useEffect, useState } from "react";
import type { Task } from "../types";
import { getAllTasksAPI } from "../api/TasksAPI";

export const useTasks = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		const getTasks = async () => {
			const result = await getAllTasksAPI();

			if (result.type === "success") {
				setTasks(result.data);
			}
		};

		getTasks();
	}, []);

	const handleNewTask = (newTask: Task) => {
		setTasks((prev) => {
			return [...prev, newTask];
		});
	};

	return { tasks, setTasks, handleNewTask };
};

import { useEffect, useState } from "react";
import type { Task } from "../types";
import {
	createTaskAPI,
	deleteTaskAPI,
	getAllTasksAPI,
	updateTaskAPI,
} from "../api/TasksAPI";

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

	const handleCreateTask = async (taskName: string) => {
		const res = await createTaskAPI(taskName);
		if (res.type === "success") {
			setTasks((prev) => {
				return [...prev, res.data];
			});
		}
		return res;
	};

	const handleUpdateTask = async (taskId: number) => {
		const res = await updateTaskAPI(taskId);

		if (res.type === "success") {
			setTasks((prev) => {
				return prev.map((t) => {
					if (t.id === res.data.id) {
						t = res.data;
					}
					return t;
				});
			});
		}
	};

	const handleDeleteTask = async (taskId: number) => {
		const res = await deleteTaskAPI(taskId);
		if (res.type === "success") {
			setTasks((prev) => {
				return prev.filter((t) => {
					return t.id !== res.data.id;
				});
			});
		}
	};

	return {
		tasks,
		setTasks,
		handleUpdateTask,
		handleCreateTask,
		handleDeleteTask,
	};
};

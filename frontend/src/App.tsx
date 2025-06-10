import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import type { Task } from "./types";
import { getAllTasksAPI } from "./api/TasksAPI";

function App() {
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

	return (
		<div className={styles.app}>
			<h1>Leon's Ezra Take Home Assignment</h1>
			<AddTask handleNewTask={handleNewTask} />
			<TaskList tasks={tasks} />
		</div>
	);
}

export default App;

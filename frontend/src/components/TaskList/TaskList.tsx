import React, { useEffect, useState } from "react";
import type { Task } from "../../types";
import { getAllTasksAPI } from "../../api/TasksAPI";

const TaskList = () => {
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

	return (
		<section>
			<ul>
				{tasks.map((task) => {
					return <li key={task.id}>{task.name}</li>;
				})}
			</ul>
		</section>
	);
};

export default TaskList;

import React, { useEffect, useState } from "react";
import type { Task } from "../../types";
import { getAllTasksAPI } from "../../api/TasksAPI";

const TaskList = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		const getTasks = async () => {
			const { type, data } = await getAllTasksAPI();

			if (type === "success") {
				console.log(data);
				setTasks(data);
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

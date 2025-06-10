import type { Task } from "../../types";

interface TaskListProps {
	tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
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

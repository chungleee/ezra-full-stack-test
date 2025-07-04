import styles from "./TaskList.module.scss";
import type { Task } from "../../types";
import Icon from "../common/Icon";

interface TaskListProps {
	tasks: Task[];
	handleUpdateTask: (id: number) => Promise<void>;
	handleDeleteTask: (id: number) => Promise<void>;
}

const TaskList = ({
	tasks,
	handleUpdateTask,
	handleDeleteTask,
}: TaskListProps) => {
	return (
		<section className={styles.tasklist}>
			<ul>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							<span>{task.name}</span>
							<div>
								<span onClick={() => handleUpdateTask(task.id)}>
									{task.completed ? (
										<Icon variant='check' />
									) : (
										<Icon variant='uncheck' />
									)}
								</span>
								<span onClick={() => handleDeleteTask(task.id)}>
									<Icon variant='trash' />
								</span>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default TaskList;

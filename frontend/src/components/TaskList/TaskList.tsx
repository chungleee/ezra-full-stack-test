import styles from "./TaskList.module.scss";
import type { Task } from "../../types";
import Icon from "../common/Icon";

interface TaskListProps {
	tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
	return (
		<section className={styles.tasklist}>
			<ul>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							<span>{task.name}</span>
							<div>
								<span>
									{task.completed ? (
										<Icon variant='check' />
									) : (
										<Icon variant='uncheck' />
									)}
								</span>
								<span>
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

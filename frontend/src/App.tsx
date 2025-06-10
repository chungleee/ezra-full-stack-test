import styles from "./App.module.scss";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import { useTasks } from "./hooks/useTasks";

function App() {
	const { tasks, handleNewTask } = useTasks();

	return (
		<div className={styles.app}>
			<h1>Leon's Ezra Take Home Assignment</h1>
			<AddTask handleNewTask={handleNewTask} />
			<TaskList tasks={tasks} />
		</div>
	);
}

export default App;

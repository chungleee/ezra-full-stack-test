import styles from "./App.module.scss";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import { useTasks } from "./hooks/useTasks";

function App() {
	const { tasks, handleUpdateTask, handleCreateTask } = useTasks();

	return (
		<div className={styles.app}>
			<h1>Leon's Ezra Take Home Assignment</h1>
			<AddTask handleCreateTask={handleCreateTask} />
			<TaskList tasks={tasks} handleUpdateTask={handleUpdateTask} />
		</div>
	);
}

export default App;

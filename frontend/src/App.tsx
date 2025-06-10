import styles from "./App.module.scss";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
	return (
		<div className={styles.app}>
			<h1>Leon's Ezra Take Home Assignment</h1>
			<AddTask />
			<TaskList />
		</div>
	);
}

export default App;

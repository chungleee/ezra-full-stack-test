import styles from "./App.module.scss";
import AddTask from "./components/AddTask/AddTask";

function App() {
	return (
		<div className={styles.app}>
			<h1>Leon's Ezra Take Home Assignment</h1>
			<AddTask />
		</div>
	);
}

export default App;

import React, { useState, type ChangeEvent } from "react";
import styles from "./AddTask.module.scss";
import type { ApiResponse, Task } from "../../types";

interface AddTaskProps {
	handleCreateTask: (taskName: string) => Promise<ApiResponse<Task>>;
}

const AddTask = ({ handleCreateTask }: AddTaskProps) => {
	const [input, setInput] = useState("");
	const [inputError, setInputError] = useState("");

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		// remove error if exists
		if (inputError) {
			setInputError("");
		}
		setInput(e.target.value);
	};

	const handleSubmit = async () => {
		if (!input) {
			setInputError("Field can't be empty");
			return;
		}

		const res = await handleCreateTask(input);
		if (res.type === "success") {
			setInput("");
		}
	};

	return (
		<section className={styles.add_task}>
			<div className={styles.add_task__input}>
				<input type='text' value={input} onChange={handleOnChange} />
				{inputError && <small>{inputError}</small>}
			</div>
			<button disabled={!input} onClick={handleSubmit}>
				add
			</button>
		</section>
	);
};

export default AddTask;

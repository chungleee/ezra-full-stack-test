import React, { useState, type ChangeEvent } from "react";
import styles from "./AddTask.module.scss";
import { createTaskAPI } from "../../api/TasksAPI";

const AddTask = () => {
	const [input, setInput] = useState("");
	const [inputError, setInputError] = useState("");

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
		await createTaskAPI(input);
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

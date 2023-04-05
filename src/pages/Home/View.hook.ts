import { useEffect, useState } from "react";
import type { Todos } from "./View.types";

const useView = () => {
	const [todos, setTodos] = useState<Todos>([]);

	useEffect(() => {
		const getTodos = async () => {
			try {
				const fetchData = await fetch(
					"https://todo.api.devcode.gethired.id/activity-groups?email=albertmanuels10@gmail.com"
				);
				const res = await fetchData.json();
				const data = res.data;

				setTodos(data);
			} catch (err) {
				console.log(err);
			}
		};

		getTodos();
	}, []);

	const handleAddTodos = async () => {
		try {
			const postData = await fetch(
				"https://todo.api.devcode.gethired.id/activity-groups/",
				{
					method: "POST",

					body: JSON.stringify({
						title: "New Activity",
						email: "albertmanuels10@gmail.com",
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				}
			);

			const status = await postData.status;

			const data = await postData.json();
			setTodos((todo) => [...todo, data]);

			if (status !== 201) {
				return;
			}
		} catch (err) {
			console.log(err);
		}
	};

	return { todos, setTodos, handleAddTodos };
};

export default useView;

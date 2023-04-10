import { useEffect, useState } from "react";
import type { Todos } from "./View.types";

const useView = () => {
	const [todos, setTodos] = useState<Todos>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getTodos = async () => {
			try {
				setLoading(true);
				const fetchData = await fetch(
					"https://todo.api.devcode.gethired.id/activity-groups?email=albertmanuels10@gmail.com"
				);

				const res = await fetchData.json();

				const data = res.data;
				setTodos(data);
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};

		getTodos();
	}, []);

	const handleAddTodos = async () => {
		try {
			const postData = await fetch(
				"https://todo.api.devcode.gethired.id/activity-groups",
				{
					method: "POST",
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
					body: JSON.stringify({
						title: "New Activity",
						email: "albertmanuels10@gmail.com",
					}),
				}
			);

			const status = await postData.status;
			if (status !== 201) {
				return;
			} else {
				const data = await postData.json();
				setTodos((todo) => [...todo, data]);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return { todos, setTodos, handleAddTodos, loading };
};

export default useView;

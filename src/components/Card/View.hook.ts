import { CardProps, Todo } from "./View.types";

const useView = (props: CardProps) => {
	const { todo, todos, setTodos } = props;

	const handleDeleteTodo = async (id: number) => {
		try {
			const res = await fetch(
				`https://todo.api.devcode.gethired.id/activity-groups/${todo.id}?email=albertmanuels10@gmail.com`,
				{
					method: "DELETE",
				}
			);

			const status = await res.json();

			if (status !== 201) {
				return;
			}
			const data = [...todos];
			const filteredData = data.filter((data) => data.id !== todo.id);
			setTodos(filteredData);
		} catch (err) {
			console.log(err);
		}
	};

	return {
		handleDeleteTodo,
	};
};

export default useView;

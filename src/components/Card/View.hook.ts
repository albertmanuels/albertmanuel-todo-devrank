import { useState } from "react";
import { CardProps } from "./View.types";

const useView = (props: CardProps) => {
	const { todos, setTodos, setShowAlert } = props;
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleDeleteTodo = async (id: number) => {
		try {
			await fetch(
				`https://todo.api.devcode.gethired.id/activity-groups/${id}?email=albertmanuels10@gmail.com`,
				{
					method: "DELETE",
				}
			);
			setIsOpenModal(false);
			setTodos(todos.filter((todo) => todo.id !== id));
			setShowAlert(true);
		} catch (err) {
			console.log(err);
		}
	};

	const formattedDate = (dateVal: string) => {
		const date = new Date(dateVal);

		const day = date.toLocaleDateString("default", { day: "2-digit" });
		const month = date.toLocaleDateString("default", { month: "short" });
		const year = date.toLocaleDateString("default", { year: "numeric" });

		const result = `${day} ${month} ${year}`;
		return result;
	};

	return {
		isOpenModal,
		setIsOpenModal,
		handleDeleteTodo,
		formattedDate,
	};
};

export default useView;

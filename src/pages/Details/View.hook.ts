import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TodoItems } from "./View.types";

const useView = () => {
	const { id } = useParams();
	const [isEdit, setIsEdit] = useState(false);
	const [isOpenSortList, setIsOpenSortList] = useState(false);
	const [todoItems, setTodoItems] = useState<TodoItems>([]);
	const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
	const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
	const [activityTitle, setActivityTitle] = useState("");

	useEffect(() => {
		const getData = async () => {
			try {
				const fetchData = await fetch(
					`https://todo.api.devcode.gethired.id/activity-groups/${id}%7D?email=albertmanuels10@gmail.com`
				);

				const res = await fetchData;

				const status = res.status;

				if (status !== 200) throw new Error();

				const data = await res.json();

				const todoItems = data.todo_items;
				const title = data.title;
				setActivityTitle(title);
				setTodoItems(todoItems);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [id]);

	const handleChangeActivityTitle = (event: ChangeEvent<HTMLInputElement>) => {
		const title = event.target.value;

		setActivityTitle(title);
	};

	const handleUpdateActivityTitle = async () => {
		try {
			const fetchData = await fetch(
				`https://todo.api.devcode.gethired.id/activity-groups/${id}`,
				{
					method: "PATCH",
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
					body: JSON.stringify({
						title: activityTitle,
					}),
				}
			);

			const result = await fetchData;
			const status = result.status;

			if (status !== 200) return;
			setIsEdit(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleAddTodoItems = async () => {
		try {
			const fetchData = await fetch(
				`https://todo.api.devcode.gethired.id/todo-items`,
				{
					method: "POST",
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
					body: JSON.stringify({
						activity_group_id: id,
						id: 0,
						is_active: 1,
						priority: "very-high",
						title: "aa",
					}),
				}
			);

			const result = await fetchData;
			const status = result.status;

			if (status !== 201) {
				return;
			}

			const data = await result.json();
			setTodoItems((todo) => [...todo, data]);
			setIsOpenModalAdd(false);
		} catch (err) {
			console.log(err);
		}
	};

	const handleDeleteTodoItems = async (todoId: number) => {
		setIsOpenModalDelete(true);
		try {
			const fetchData = await fetch(
				`https://todo.api.devcode.gethired.id/todo-items/${todoId}`,
				{
					method: "DELETE",
				}
			);

			const status = await fetchData.status;

			if (status !== 200) return;

			setIsOpenModalDelete(false);
			setTodoItems(todoItems.filter((todo) => todo.id !== todoId));
		} catch (err) {
			console.log(err);
		}
	};

	return {
		isEdit,
		setIsEdit,
		isOpenSortList,
		setIsOpenSortList,
		todoItems,
		handleAddTodoItems,
		handleDeleteTodoItems,
		isOpenModalDelete,
		setIsOpenModalDelete,
		handleChangeActivityTitle,
		handleUpdateActivityTitle,
		isOpenModalAdd,
		setIsOpenModalAdd,
		activityTitle,
	};
};

export default useView;

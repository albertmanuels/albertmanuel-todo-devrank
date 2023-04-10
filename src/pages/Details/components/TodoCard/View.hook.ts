import { ChangeEvent, useState } from "react";
import { EditTodo, Todo, TodoCardProps } from "./View.types";
import { useParams } from "react-router-dom";
import { PRIORITY_OPTIONS } from "../../../../constants";

const useView = (props: TodoCardProps) => {
	const { id } = useParams();
	const {
		setTodoItems,
		todoItems,
		todo: todoData,
		setShowAlert,
		refetch,
	} = props;
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
	const [isOpenEditModal, setIsOpenEditModal] = useState(false);

	const handleDeleteTodoItems = async (todoId: number) => {
		setIsOpenDeleteModal(true);
		try {
			const fetchData = await fetch(
				`https://todo.api.devcode.gethired.id/todo-items/${todoId}`,
				{
					method: "DELETE",
				}
			);

			const status = fetchData.status;

			if (status !== 200) return;
			setTodoItems(todoItems?.filter((todo) => todo.id !== todoId));
			setIsOpenDeleteModal(false);
			refetch();
			setShowAlert(true);
		} catch (err) {
			console.log(err);
		}
	};

	const handleTodoCheckbox = async (
		event: ChangeEvent<HTMLInputElement>,
		todo: Todo
	) => {
		const isCheck = event.target.checked;

		try {
			await fetch(
				`https://todo.api.devcode.gethired.id/todo-items/${todo.id}`,
				{
					method: "PATCH",
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
					body: JSON.stringify({
						is_active: isCheck ? 0 : 1,
						priority: todo.priority,
					}),
				}
			);

			refetch();
		} catch (error) {
			console.log(error);
		}
	};

	const handleOpenEditModal = () => {
		setIsOpenEditModal(true);
	};

	const priorityData = PRIORITY_OPTIONS.find(
		(priority) => priority.value === todoData.priority
	) as typeof PRIORITY_OPTIONS[number];

	const handleEditTodoItems = async (editTodoData: EditTodo, todo: Todo) => {
		try {
			const fetchData = await fetch(
				`https://todo.api.devcode.gethired.id/todo-items/${todo.id}`,
				{
					method: "PATCH",
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
					body: JSON.stringify({
						id: todo.id,
						activity_group_id: id,
						title: editTodoData.title,
						is_active: todo.is_active,
						priority: editTodoData.priorityValue,
					}),
				}
			);

			const res = fetchData;

			const status = res.status;

			if (status !== 200) return;
			setIsOpenEditModal(false);
			refetch();
		} catch (error) {
			console.log(error);
		}
	};

	return {
		isOpenDeleteModal,
		setIsOpenDeleteModal,
		handleDeleteTodoItems,
		handleTodoCheckbox,
		handleOpenEditModal,
		handleEditTodoItems,
		isOpenEditModal,
		setIsOpenEditModal,
		priorityData,
	};
};

export default useView;

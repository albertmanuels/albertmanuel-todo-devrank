import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AddTodo, TodoItems } from "./View.types";
import { useFetchActivity } from "../../hooks/useFetchActivity";
import useClickOutside from "../../hooks/useClickOutside";

const useView = () => {
	const { id } = useParams();
	const [isEdit, setIsEdit] = useState(false);
	const [isOpenSortList, setIsOpenSortList] = useState(false);
	const [todoItems, setTodoItems] = useState<TodoItems>([]);
	const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
	const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
	const [activityTitle, setActivityTitle] = useState("");
	const [loading, setLoading] = useState(false);
	const [checkedList, setCheckedList] = useState({});
	const [showAlert, setShowAlert] = useState(false);
	const [sortedTodos, setSortedTodos] = useState("oldest");
	const titleRef = useRef<HTMLInputElement>(null);

	useClickOutside(titleRef, () => handleUpdateActivityTitle());

	const sortedTodoItems = todoItems.sort((a, b) => {
		if (sortedTodos === "oldest") {
			return a.id - b.id;
		} else if (sortedTodos === "latest") {
			return b.id - a.id;
		} else if (sortedTodos === "az") {
			return a.title.localeCompare(b.title);
		} else if (sortedTodos === "za") {
			return b.title.localeCompare(a.title);
		} else if (sortedTodos === "unfinished") {
			return b.is_active - a.is_active;
		} else {
			return 0;
		}
	});

	const { data, refetch } = useFetchActivity(
		`https://todo.api.devcode.gethired.id/activity-groups/${id}?email=albertmanuels10@gmail.com`
	);

	const { todo_items, title } = data;

	useEffect(() => {
		setTodoItems(todo_items);
		setActivityTitle(title);
	}, [title, todo_items]);

	const handleAddTodoItems = async (addTodoVal: AddTodo) => {
		try {
			setLoading(true);
			const fetchData = await fetch(
				`https://todo.api.devcode.gethired.id/todo-items`,
				{
					method: "POST",
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
					body: JSON.stringify({
						activity_group_id: Number(id),
						id: 0,
						is_active: Number(1),
						priority: addTodoVal.priorityValue,
						title: addTodoVal.title,
					}),
				}
			);

			const result = fetchData;
			const status = result.status;

			if (status !== 201) {
				return;
			}

			const data = await result.json();

			setTodoItems((todo) => [...todo, data]);
			setIsOpenModalAdd(false);
			setLoading(false);
			refetch();
		} catch (err) {
			console.log(err);
		}
	};

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

	const handleSelectSortItem = (type: string) => {
		setSortedTodos(type);
	};

	useEffect(() => {
		const handleShowAlert = () => {
			if (showAlert) {
				setTimeout(() => {
					setShowAlert(false);
				}, 3000);
			}
		};

		handleShowAlert();
	}, [showAlert]);

	return {
		isEdit,
		setIsEdit,
		isOpenSortList,
		setIsOpenSortList,
		todoItems,
		sortedTodoItems,
		sortedTodos,
		setTodoItems,
		isOpenModalDelete,
		setIsOpenModalDelete,
		handleChangeActivityTitle,
		handleUpdateActivityTitle,
		handleSelectSortItem,
		handleAddTodoItems,
		isOpenModalAdd,
		setIsOpenModalAdd,
		activityTitle,
		loading,
		setLoading,
		checkedList,
		setCheckedList,
		setShowAlert,
		showAlert,
		refetch,
		titleRef,
	};
};

export default useView;

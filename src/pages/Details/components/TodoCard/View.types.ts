import { Dispatch, SetStateAction } from "react";

export type Todo = {
	id: number;
	title: string;
	activity_group_id: number;
	is_active: number;
	priority: string;
};

export interface EditTodo {
	title: string;
	priorityTitle: string;
	priorityValue: string;
}

export interface TodoCardProps {
	todo: Todo;
	todoItems: Array<Todo>;
	setTodoItems: Dispatch<SetStateAction<Array<Todo>>>;
	checkedList: {};
	setCheckedList: Dispatch<SetStateAction<{}>>;
	refetch: () => void;
	setShowAlert: Dispatch<SetStateAction<boolean>>;
}

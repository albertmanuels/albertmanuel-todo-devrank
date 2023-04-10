import { Dispatch, SetStateAction } from "react";

export interface AddTodo {
	title: string;
	priorityTitle: string;
	priorityValue: string;
}

export interface ModalAddTodoProps {
	todoData: Array<{
		id: number;
		title: string;
		activity_group_id: number;
		is_active: number;
		priority: string;
	}>;
	onSave: (addTodoItem: AddTodo) => void;
	onClose: Dispatch<SetStateAction<boolean>>;
}

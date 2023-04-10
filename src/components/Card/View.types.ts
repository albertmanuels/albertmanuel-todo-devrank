import { Dispatch, SetStateAction } from "react";

export type Todo = {
	id: number;
	title: string;
	created_at: string;
};

export interface CardProps {
	todo: Todo;
	todos: Array<Todo>;
	setTodos: Dispatch<SetStateAction<Array<Todo>>>;
	setIsOpenModal: Dispatch<SetStateAction<boolean>>;
	isOpenModal: boolean;
	setShowAlert: Dispatch<SetStateAction<boolean>>;
}

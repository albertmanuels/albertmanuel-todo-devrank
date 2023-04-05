import { Dispatch, SetStateAction } from "react";

export type Todo = {
	id: number;
	title: string;
	create_at: string;
};

export interface CardProps {
	todo: Todo;
	todos: Array<Todo>;
	setTodos: Dispatch<SetStateAction<Array<Todo>>>;
}

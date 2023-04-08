import type { Dispatch, SetStateAction } from "react";

type TodoData = {
	id: number;
	title: string;
	activity_group_id?: number;
	is_active?: number;
	priority?: string;
};

export interface ModalDeleteProps {
	todoData: TodoData;
	page?: string;
	handleDeleteTodo: (id: number) => void;
	setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

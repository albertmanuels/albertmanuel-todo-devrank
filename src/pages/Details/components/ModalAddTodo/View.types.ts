import { Dispatch, SetStateAction } from "react";

export interface ModalAddTodoProps {
	todoData: Array<{
		id: number;
		title: string;
		activity_group_id: number;
		is_active: number;
		priority: string;
	}>;
	onSave: () => void;
	onClose: Dispatch<SetStateAction<boolean>>;
}

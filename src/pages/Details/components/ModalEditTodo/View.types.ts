export interface EditTodo {
	title: string;
	priorityTitle: string;
	priorityValue: string;
}

export interface PriorityData {
	id: number;
	title: string;
	value: string;
}

interface Todo {
	id: number;
	title: string;
	activity_group_id: number;
	is_active: number;
	priority: string;
}

export interface ModalEditTodoProps {
	todoData: {
		id: number;
		title: string;
		activity_group_id: number;
		is_active: number;
		priority: string;
	};
	onClose: () => void;
	onSave: (editTodo: EditTodo, todo: Todo) => void;
	priorityData: PriorityData;
	refetch: () => void;
}

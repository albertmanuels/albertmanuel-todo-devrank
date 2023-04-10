export interface AddTodo {
	title: string;
	priorityTitle: string;
	priorityValue: string;
}

export type TodoItems = Array<{
	id: number;
	title: string;
	activity_group_id: number;
	is_active: number;
	priority: string;
}>;

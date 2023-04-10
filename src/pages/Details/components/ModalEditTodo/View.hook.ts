import { ChangeEvent, useRef, useState } from "react";
import type { EditTodo, ModalEditTodoProps } from "./View.types";
import { PRIORITY_OPTIONS } from "../../../../constants";

const useView = (props: ModalEditTodoProps) => {
	const { priorityData, todoData } = props;
	const [isOpenPriority, setIsOpenPriority] = useState(false);
	const [editTodo, setEditTodo] = useState<EditTodo>({
		title: todoData.title,
		priorityTitle: priorityData.title,
		priorityValue: priorityData.value,
	});
	const [onSelect, setOnSelect] = useState(false);
	const [currentSelected, setCurrentSelected] = useState("");
	const modalEditRef = useRef<HTMLDivElement>(null);

	const handleSelectPriority = (data: typeof PRIORITY_OPTIONS[number]) => {
		setOnSelect(true);
		setEditTodo((prev) => ({
			...prev,
			priorityTitle: data.title,
			priorityValue: data.value,
		}));
		setCurrentSelected(data.value);

		setIsOpenPriority(false);
	};

	const handleInputTodoTitle = (e: ChangeEvent<HTMLInputElement>) => {
		const dataTitle = e.target.value;
		setEditTodo((prev) => ({
			...prev,
			title: dataTitle,
		}));
	};

	return {
		isOpenPriority,
		setIsOpenPriority,
		handleSelectPriority,
		handleInputTodoTitle,
		currentSelected,
		editTodo,
		priorityData,
		onSelect,
		modalEditRef,
	};
};

export default useView;

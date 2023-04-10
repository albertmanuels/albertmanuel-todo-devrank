import { ChangeEvent, useRef, useState } from "react";
import type { AddTodo } from "./View.types";
import { PRIORITY_OPTIONS } from "../../../../constants";

const useView = () => {
	const [isOpenPriority, setIsOpenPriority] = useState(false);
	const [addTodo, setAddTodo] = useState<AddTodo>({
		title: "",
		priorityTitle: "",
		priorityValue: "",
	});
	const [currentSelected, setCurrentSelected] = useState("");
	const modalAddRef = useRef<HTMLDivElement>(null);

	const priorityOptionLists = [
		{
			id: 1,
			title: "Very High",
			value: "very-high",
		},
		{
			id: 2,
			title: "High",
			value: "high",
		},
		{
			id: 3,
			title: "Medium",
			value: "normal",
		},
		{
			id: 4,
			title: "Low",
			value: "low",
		},
		{
			id: 5,
			title: "Very Low",
			value: "very-low",
		},
	];

	const handleSelectPriority = (data: typeof PRIORITY_OPTIONS[number]) => {
		setAddTodo((prev) => ({
			...prev,
			priorityTitle: data.title,
			priorityValue: data.value,
		}));

		setCurrentSelected(data.value);
		setIsOpenPriority(false);
	};

	const handleInputTodoTitle = (e: ChangeEvent<HTMLInputElement>) => {
		const dataTitle = e.target.value;

		setAddTodo((prev) => ({
			...prev,
			title: dataTitle,
		}));
	};

	return {
		isOpenPriority,
		setIsOpenPriority,
		priorityOptionLists,
		handleSelectPriority,
		handleInputTodoTitle,
		currentSelected,
		addTodo,
		modalAddRef,
	};
};

export default useView;

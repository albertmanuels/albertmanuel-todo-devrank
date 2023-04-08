import { ModalDeleteProps } from "./View.types";

const useView = (props: ModalDeleteProps) => {
	const { todoData, handleDeleteTodo } = props;

	const onDelete = () => {
		handleDeleteTodo(todoData.id);
	};
	return {
		onDelete,
		title: todoData.title,
	};
};

export default useView;

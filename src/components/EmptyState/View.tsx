import * as css from "./View.styles";
import ActivityEmptyState from "../../assets/activity-empty-state.png";
import TodoItemEmptyState from "../../assets/todo-empty-state.png";
import { EmptyStateProps } from "./View.types";

const EmptyState = ({ page, onAddTodo }: EmptyStateProps) => {
	return (
		<div className={css.container}>
			{page === "dashboard" && (
				<img
					data-cy="activity-empty-state"
					src={ActivityEmptyState}
					alt="activity empty state"
					onClick={onAddTodo}
				/>
			)}

			{page === "detail" && (
				<img
					data-cy="todo-empty-state"
					src={TodoItemEmptyState}
					alt="todo item empty state"
					onClick={onAddTodo}
				/>
			)}
		</div>
	);
};

export default EmptyState;

import * as css from "./View.styles";
import type { CardProps } from "./View.types";
import IconDelete from "../../assets/icon-delete.svg";
import useView from "./View.hook";

const Card = (props: CardProps) => {
	const { todo } = props;
	const { handleDeleteTodo } = useView(props);
	return (
		<div className={css.card}>
			<div className={css.todoContent}>
				<h4 data-cy="activity-item-title">{todo.title}</h4>
			</div>

			<div className={css.footer}>
				<p data-cy="activity-item-date">5 Oktober 2022</p>
				<img
					src={IconDelete}
					alt="delete"
					data-cy="activity-item-delete-button"
					className={css.btnDelete}
					onClick={() => handleDeleteTodo(todo.id)}
				/>
			</div>
		</div>
	);
};

export default Card;

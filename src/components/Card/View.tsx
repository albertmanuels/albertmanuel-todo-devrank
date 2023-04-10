import * as css from "./View.styles";
import type { CardProps } from "./View.types";
import IconDelete from "../../assets/icon-delete.svg";

import useView from "./View.hook";
import ModalDelete from "../ModalDelete/View";
import { Link } from "react-router-dom";

const Card = (props: CardProps) => {
	const { todo } = props;
	const { isOpenModal, setIsOpenModal, handleDeleteTodo, formattedDate } =
		useView(props);

	return (
		<>
			<div className={css.card}>
				<Link to={`/activity-detail/${todo.id}`}>
					<div className={css.todoContent} data-cy="activity-body">
						<h4 data-cy="activity-item-title">{todo.title}</h4>
					</div>
				</Link>

				<div className={css.footer}>
					<p data-cy="activity-item-date">{formattedDate(todo.created_at)}</p>
					<img
						src={IconDelete}
						alt="delete"
						data-cy="activity-item-delete-button"
						className={css.btnDelete}
						onClick={() => setIsOpenModal(true)}
					/>
				</div>
			</div>

			{isOpenModal && (
				<ModalDelete
					title={todo.title}
					onDelete={() => handleDeleteTodo(todo.id)}
					onClose={() => setIsOpenModal(false)}
				/>
			)}
		</>
	);
};

export default Card;

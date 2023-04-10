import IconWarning from "../../../../assets/icon-warning.png";
import { ModalDeleteProps } from "../../../../components/ModalDelete/View.types";
import * as css from "./View.styles";

const ModalDeleteTodo = ({ title, onDelete, onClose }: ModalDeleteProps) => {
	return (
		<div data-cy="modal-delete" className={css.modal}>
			<div className={css.modalContent}>
				<div className={css.iconContainer}>
					<img
						data-cy="modal-delete-icon"
						src={IconWarning}
						alt="icon warning"
					/>
				</div>
				<p data-cy="modal-delete-title" className={css.title}>
					Apa anda yakin menghapus List Item
					<br />
					<b>"{title}"?</b>
				</p>
				<div>
					<button
						data-cy="modal-delete-cancel-button"
						className={css.btnCancel}
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						data-cy="modal-delete-confirm-button"
						className={css.btnDelete}
						onClick={onDelete}
					>
						Hapus
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalDeleteTodo;

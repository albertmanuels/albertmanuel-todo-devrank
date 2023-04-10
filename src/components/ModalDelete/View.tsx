import * as css from "./View.styles";
import type { ModalDeleteProps } from "./View.types";
import IconWarning from "../../assets/icon-warning.png";
import useClickOutside from "../../hooks/useClickOutside";
import { useRef } from "react";

const ModalDelete = (props: ModalDeleteProps) => {
	const { title, onClose, onDelete } = props;
	const modalRef = useRef<HTMLDivElement>(null);
	useClickOutside(modalRef, () => onClose());

	return (
		<div className={css.modal}>
			<div data-cy="modal-delete" ref={modalRef} className={css.modalContent}>
				<div className={css.iconContainer}>
					<img
						data-cy="modal-delete-icon"
						src={IconWarning}
						alt="icon warning"
					/>
				</div>
				<p data-cy="modal-delete-title" className={css.title}>
					Apa anda yakin menghapus activity
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

export default ModalDelete;

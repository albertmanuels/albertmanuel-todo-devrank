import * as css from "./View.styles";
import { ModalAddTodoProps } from "./View.types";

const ModalAddTodo = (props: ModalAddTodoProps) => {
	const { todoData, onClose, onSave } = props;
	return (
		<div className={css.modal}>
			<div className={css.modalContent}>
				<div className={css.modalHeader}>
					<h4 className={css.modalTitle}>Tambah List Item</h4>
					<button
						type="button"
						className={css.btnCloseModal}
						onClick={() => onClose(false)}
					/>
				</div>
				<div className={css.modalBody}>
					<label htmlFor="list-item">NAMA LIST ITEM</label>
					<input
						type="text"
						placeholder="Tambahkan nama list item"
						name="list-item"
						className={css.inputListItem}
					/>

					<label htmlFor="list-item">PRIORITY</label>
					<input
						type="text"
						placeholder="Tambahkan nama list item"
						name="list-item"
						className={css.inputListItem}
					/>
				</div>

				<div className={css.modalFooter}>
					<button type="submit" className={css.btnSave} onClick={onSave}>
						Simpan
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalAddTodo;

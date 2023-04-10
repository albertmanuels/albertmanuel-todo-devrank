import * as css from "./View.styles";
import { iconDot } from "../../View.styles";
import { ModalAddTodoProps } from "./View.types";
import useView from "./View.hook";
import useClickOutside from "../../../../hooks/useClickOutside";

const ModalAddTodo = (props: ModalAddTodoProps) => {
	const { onClose, onSave } = props;

	const {
		isOpenPriority,
		setIsOpenPriority,
		priorityOptionLists,
		handleSelectPriority,
		handleInputTodoTitle,
		currentSelected,
		addTodo,
		modalAddRef,
	} = useView();

	useClickOutside(modalAddRef, () => onClose(false));

	return (
		<div data-cy="modal-add" className={css.modal}>
			<div ref={modalAddRef} className={css.modalContent}>
				<div className={css.modalHeader}>
					<h4 data-cy="modal-add-title" className={css.modalTitle}>
						Tambah List Item
					</h4>
					<button
						data-cy="modla-add-close-button"
						type="button"
						className={css.btnCloseModal}
						onClick={() => onClose(false)}
					/>
				</div>
				<div className={css.modalBody}>
					<label data-cy="modal-add-name-title" htmlFor="list-item">
						NAMA LIST ITEM
					</label>
					<input
						data-cy="modal-add-name-input"
						type="text"
						value={addTodo.title}
						placeholder="Tambahkan nama list item"
						name="list-item"
						className={css.inputListItem}
						onChange={handleInputTodoTitle}
					/>

					<div className={css.priority}>
						<label data-cy="modal-add-priority-title" htmlFor="list-item">
							PRIORITY
						</label>
						<div>
							<button
								data-cy="modal-add-priority-dropdown"
								className={css.btnSelectPriority}
								onClick={() => setIsOpenPriority(!isOpenPriority)}
							>
								{addTodo.priorityTitle === "" ? (
									"Pilih priority"
								) : (
									<div className={css.btnSelectPriorityContent}>
										<i className={iconDot(addTodo.priorityValue)} />
										{addTodo.priorityTitle}
									</div>
								)}
							</button>
							{isOpenPriority && (
								<div className={css.priorityOptionList}>
									{priorityOptionLists.map((priority) => (
										<div
											data-cy={`modal-add-priority-item`}
											key={priority.id}
											className={css.priorityOption}
											onClick={() => handleSelectPriority(priority)}
										>
											<i className={iconDot(priority.value)} />
											<p>{priority.title}</p>

											{currentSelected === priority.value && (
												<i className={css.iconCheck} />
											)}
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>

				<div className={css.modalFooter}>
					<button
						data-cy="modal-add-save-button"
						className={css.btnSave}
						onClick={() => onSave(addTodo)}
						disabled={addTodo.title === "" || addTodo.priorityTitle === ""}
					>
						Simpan
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalAddTodo;

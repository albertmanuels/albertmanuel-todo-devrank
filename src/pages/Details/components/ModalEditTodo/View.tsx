import useView from "./View.hook";
import * as css from "./View.styles";
import { iconDot } from "../../View.styles";
import { ModalEditTodoProps } from "./View.types";
import { PRIORITY_OPTIONS } from "../../../../constants";
import useClickOutside from "../../../../hooks/useClickOutside";

const ModalEditTodo = (props: ModalEditTodoProps) => {
	const { onClose, onSave, todoData } = props;
	const {
		isOpenPriority,
		setIsOpenPriority,
		handleSelectPriority,
		handleInputTodoTitle,
		currentSelected,
		editTodo,
		priorityData,
		onSelect,
		modalEditRef,
	} = useView(props);

	useClickOutside(modalEditRef, () => onClose());

	return (
		<div data-cy="modal-add" className={css.modal}>
			<div ref={modalEditRef} className={css.modalContent}>
				<div className={css.modalHeader}>
					<h4 className={css.modalTitle} data-cy="modal-add-title">
						Ubah List Item
					</h4>
					<button
						data-cy="modal-add-close-button"
						type="button"
						className={css.btnCloseModal}
						onClick={onClose}
					/>
				</div>
				<div className={css.modalBody}>
					<label data-cy="modal-add-name-title" htmlFor="list-item">
						NAMA LIST ITEM
					</label>
					<input
						data-cy="modal-add-name-input"
						type="text"
						value={editTodo.title}
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
								type="button"
								className={css.btnSelectPriority}
								onClick={() => setIsOpenPriority(!isOpenPriority)}
							>
								{!onSelect ? (
									<>
										<i className={iconDot(priorityData.value)} />
										<span>{priorityData.title}</span>
									</>
								) : (
									<>
										<i className={iconDot(editTodo.priorityValue)} />
										<span>{editTodo.priorityTitle}</span>
									</>
								)}
							</button>

							{isOpenPriority && (
								<div className={css.priorityOptionList}>
									{PRIORITY_OPTIONS.map((priority) => (
										<div
											id={String(priority.id)}
											data-cy="modal-add-priority-item"
											key={priority.id}
											className={css.priorityOption}
											onClick={() => handleSelectPriority(priority)}
										>
											<i className={iconDot(priority.value)} />
											<p>{priority.title}</p>
											{(currentSelected === priority.value ||
												editTodo.priorityValue === priority.value) && (
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
						type="submit"
						onClick={() => {
							onSave(editTodo, todoData);
						}}
					>
						Simpan
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalEditTodo;

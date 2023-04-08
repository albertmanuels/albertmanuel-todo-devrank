import { useNavigate } from "react-router-dom";
import useView from "./View.hook";
import * as css from "./View.styles";
import TemplateLayout from "../../components/Template/View";
import IconBackButton from "../../assets/icon-todo-back-button.svg";
import IconPlus from "../../assets/icon-plus.svg";
import { sortOptionLists } from "../../constants";
import EmptyState from "../../components/EmptyState/View";
import ModalDelete from "../../components/ModalDelete/View";
import ModalAddTodo from "./components/ModalAddTodo/View";

const NONACTIVE = 0;
const KEY_ENTER = "Enter";
const ACTIVE = 1;

const DetailPages = () => {
	const navigate = useNavigate();
	const {
		isEdit,
		setIsEdit,
		isOpenSortList,
		setIsOpenSortList,
		todoItems,
		handleAddTodoItems,
		handleDeleteTodoItems,
		isOpenModalDelete,
		setIsOpenModalDelete,
		handleChangeActivityTitle,
		handleUpdateActivityTitle,
		isOpenModalAdd,
		setIsOpenModalAdd,
		activityTitle,
	} = useView();

	return (
		<TemplateLayout pageTitle="Detail">
			<div className={css.detail}>
				<div className={css.detailHeader}>
					<div className={css.leftSideHeader}>
						<div
							className={css.iconBackWrapper}
							data-cy="todo-back-button"
							onClick={() => navigate(-1)}
						>
							<img
								src={IconBackButton}
								width="16px"
								height="24px"
								alt="icon back button"
							/>
						</div>
						{isEdit ? (
							<input
								type="text"
								className={css.editTodoTitleInput}
								value={activityTitle}
								onChange={handleChangeActivityTitle}
								placeholder={activityTitle === "" ? "Tidak boleh kosong" : ""}
								onKeyDown={(e) =>
									e.key === KEY_ENTER &&
									activityTitle !== "" &&
									handleUpdateActivityTitle()
								}
							/>
						) : (
							<h1
								className={css.activityTitle}
								data-cy="todo-title"
								onClick={() => setIsEdit(true)}
							>
								{activityTitle}
							</h1>
						)}
						<i
							className={css.btnEditActivityTitle}
							onClick={() => setIsEdit(true)}
						/>
					</div>

					<div className={css.rightSideHeader}>
						<div className={css.sortButtonWrapper}>
							<button
								className={css.btnSortList}
								onClick={() => setIsOpenSortList(!isOpenSortList)}
							>
								<span className={css.iconSort} />
							</button>

							{isOpenSortList && (
								<ul className={css.sortOptionListsContainer}>
									{sortOptionLists.map((option) => (
										<li key={option.id} className={css.sortOptionLists}>
											<div className={css.iconOptions(option.icon)} />
											<p className={css.sortOptionTitle}>{option.name}</p>
										</li>
									))}
								</ul>
							)}
						</div>
						<button
							data-cy="todo-add-button"
							className={css.addButton}
							onClick={() => setIsOpenModalAdd(true)}
						>
							<img src={IconPlus} className={css.iconPlus} alt="icon plus" />
							Tambah
						</button>

						{isOpenModalAdd && (
							<ModalAddTodo
								todoData={todoItems}
								onSave={handleAddTodoItems}
								onClose={setIsOpenModalAdd}
							/>
						)}
					</div>
				</div>

				<div className={css.container}>
					{todoItems.length > 0 ? (
						<>
							{todoItems?.map((todo) => (
								<div key={todo.id} className={css.todoItemLists}>
									<div className={css.leftSideTodoItem}>
										<input
											className={css.checkbox}
											type="checkbox"
											data-cy="todo-item-checkbox"
										/>

										<i className={css.iconDot(todo.priority)} />
										<h4 className={css.todoTitle(todo.is_active === ACTIVE)}>
											{todo.title}
										</h4>
										<div className={css.IconPencilTodoItem} />
									</div>

									<div>
										<button
											className={css.btnDeleteTodoItem}
											onClick={() => setIsOpenModalDelete(true)}
										/>
									</div>

									{isOpenModalDelete && (
										<ModalDelete
											todoData={todo}
											handleDeleteTodo={handleDeleteTodoItems}
											setIsOpenModal={setIsOpenModalDelete}
										/>
									)}
								</div>
							))}
						</>
					) : (
						<EmptyState page="detail" onAddTodo={handleAddTodoItems} />
					)}
				</div>
			</div>
		</TemplateLayout>
	);
};

export default DetailPages;

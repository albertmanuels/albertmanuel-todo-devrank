import Card from "../../components/Card/View";
import TemplateLayout from "../../components/Template/View";
import useView from "./View.hook";
import * as css from "./View.styles";
import IconPlus from "../../assets/icon-plus.svg";
import EmptyState from "../../components/EmptyState/View";
import Alert from "../../components/Alert/View";

const Dashboard = () => {
	const {
		todos,
		setTodos,
		handleAddTodos,
		isOpenModal,
		setIsOpenModal,
		showAlert,
		setShowAlert,
	} = useView();

	return (
		<TemplateLayout pageTitle="Dashboard">
			<div className={css.dashboard}>
				<div className={css.todoHeader}>
					<h1 className={css.activityTitle} data-cy="activity-title">
						Activity
					</h1>

					<button
						data-cy="activity-add-button"
						className={css.addButton}
						onClick={handleAddTodos}
					>
						<img src={IconPlus} className={css.iconPlus} alt="icon plus" />
						Tambah
					</button>
				</div>

				<div className={css.container}>
					{todos.length > 0 ? (
						<>
							{todos.map((todo, idx) => (
								<Card
									key={todo.id}
									idx={idx}
									todo={todo}
									isOpenModal={isOpenModal}
									todos={todos}
									setTodos={setTodos}
									setIsOpenModal={setIsOpenModal}
									setShowAlert={setShowAlert}
								/>
							))}
						</>
					) : (
						<EmptyState page="dashboard" onAddTodo={handleAddTodos} />
					)}
				</div>

				{showAlert && (
					<Alert isOpen={showAlert} text="Activity berhasil dihapus" />
				)}
			</div>
		</TemplateLayout>
	);
};

export default Dashboard;

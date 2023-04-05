import Card from "../../components/Card/View";
import TemplateLayout from "../../components/Template/View";
import useView from "./View.hook";
import * as css from "./View.styles";
import IconPlus from "../../assets/icon-plus.svg";

const Home = () => {
	const { todos, setTodos, handleAddTodos } = useView();

	return (
		<TemplateLayout>
			<div className={css.home}>
				<div className={css.todoHeader}>
					<h1 data-cy="activity-title">Activity</h1>

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
					{todos.map((todo) => (
						<Card key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
					))}
				</div>
			</div>
		</TemplateLayout>
	);
};

export default Home;

import * as css from "./View.styles";

const Header = () => {
	return (
		<div className={css.header}>
			<div className={css.container} data-cy="header-background">
				<h2 data-cy="header-title">TO DO LIST APP</h2>
			</div>
		</div>
	);
};

export default Header;

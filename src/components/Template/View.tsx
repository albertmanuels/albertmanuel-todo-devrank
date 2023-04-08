import { ReactNode, useEffect } from "react";
import Header from "../Header";
import * as css from "./View.styles";

const TemplateLayout = ({
	children,
	pageTitle = "Dashboard",
}: {
	children: ReactNode;
	pageTitle: string;
}) => {
	const title = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
	useEffect(() => {
		document.title =
			title === "Dashboard" ? `${title}` : `${title} | Skyshi Todo List`;
	}, [title]);

	return (
		<>
			<Header />
			<main className={css.layout}>{children}</main>
		</>
	);
};

export default TemplateLayout;

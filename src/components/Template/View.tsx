import { ReactNode } from "react";
import Header from "../Header";
import * as css from "./View.styles";

const TemplateLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<main className={css.layout}>{children}</main>
		</>
	);
};

export default TemplateLayout;

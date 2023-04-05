import { Global } from "@emotion/react";
import Router from "./router";
import * as css from "./styles";

function App() {
	return (
		<>
			<Global styles={css.globalStyles} />
			<Router />
		</>
	);
}

export default App;

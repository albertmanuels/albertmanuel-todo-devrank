import { css } from "@emotion/css";

export const layout = css`
	width: 100%;
	min-height: calc(100vh - 105px);
	background: #f4f4f4;

	padding-bottom: 24px;

	@media (max-width: 1024px) {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

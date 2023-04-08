import { css } from "@emotion/css";

export const header = css`
	display: flex;
	height: 105px;
	background: #16abf8;
	align-items: center;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

	@media (max-width: 1024px) {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

export const container = css`
	width: 100%;
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
	color: #ffffff;

	h2 {
		font-weight: 700;
		font-size: 24px;
		line-height: 36px;
	}
`;

export const brandWrapper = css``;

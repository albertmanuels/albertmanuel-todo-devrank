import { css } from "@emotion/css";

export const card = css`
	width: 235px;
	height: 234px;
	position: relative;
	border: none;
	border-radius: 12px;
	background: #ffffff;
	padding: 22px 27px 0;
	box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
	text-decoration: none;

	h3 {
		font-weight: 700;
		line-height: 27px;
	}
`;

export const todoContent = css`
	height: 166px;

	h4 {
		font-size: 18px;
		font-weight: 700;
		color: #111111;
	}
`;

export const btnDelete = css`
	cursor: pointer;
`;

export const footer = css`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin-bottom: 25px;
	justify-content: space-between;
	color: #888888;

	p {
		font-weight: 500;
		line-height: 21px;
	}
`;

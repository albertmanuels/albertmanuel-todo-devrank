import { css } from "@emotion/css";

export const dashboard = css`
	width: 100%;
	margin: 0 auto;
	padding-top: 43px;
	@media (min-width: 1400px) {
		max-width: 1320px;
	}

	@media (min-width: 1024px) {
		max-width: 1000px;
	}
`;

export const todoHeader = css`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 55px;
`;

export const activityTitle = css`
	font-size: 36px;
	line-height: 54px;
	font-weight: 700;
`;

export const addButton = css`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 159px;
	border: none;
	font-weight: 600;
	font-size: 18px;
	background-color: #16abf8;
	border-radius: 45px;
	line-height: 27px;
	color: #ffffff;

	cursor: pointer;
`;

export const iconPlus = css`
	width: 14px;
	height: 14px;
	margin-right: 11px;
`;

export const container = css`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`;

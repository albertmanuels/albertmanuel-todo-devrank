import { css } from "@emotion/css";

export const modal = css`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 999;
	background: rgba(0, 0, 0, 0.3);
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
`;

export const modalContent = css`
	width: 490px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #ffffff;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	border-radius: 12px;
	padding: 50px 62px 43px;
	margin: auto;
	line-height: 27px;
`;

export const title = css`
	text-align: center;
	margin: 0 0 43px;
	font-weight: 500;
`;

export const iconContainer = css`
	margin-bottom: 51px;
`;

export const btnCancel = css`
	width: 150px;
	height: 54px;
	border: none;
	border-radius: 45px;
	background-color: #f4f4f4;
	color: #4a4a4a;
	cursor: pointer;
	margin-right: 20px;
	font-weight: 600;
	font-size: 18px;
`;

export const btnDelete = css`
	width: 150px;
	height: 54px;
	border: none;
	font-size: 18px;
	line-height: 27px;
	border-radius: 45px;
	background-color: #ed4c5c;
	color: #ffffff;
	cursor: pointer;
	font-weight: 600;
`;

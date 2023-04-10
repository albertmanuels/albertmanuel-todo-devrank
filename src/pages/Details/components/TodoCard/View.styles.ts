import { css } from "@emotion/css";

import IconTodoItemEdit from "../../../../assets/todo-item-edit-button.svg";
import IconTodoItemDelete from "../../../../assets/todo-item-delete-button.svg";

export const todoItemLists = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 80px;
	padding: 30px 28px;
	background: #ffffff;
	border: none;
	border-radius: 12px;
	box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
`;

export const leftSideTodoItem = css`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const IconPencilTodoItem = css`
	display: inline-block;
	width: 20px;
	height: 20px;
	background-image: url(${IconTodoItemEdit});
	background-repeat: no-repeat;
	background-size: 100%;
	vertical-align: middle;
	cursor: pointer;
`;

export const checkbox = css`
	width: 20px;
	height: 20px;
	margin-right: 22px;
	border: 1px solid #c7c7c7;
`;

export const generateColor = (type: string) => {
	switch (type) {
		case "very-high":
			return "#ED4C5C";

		case "high":
			return "#FFCE31";

		case "normal":
			return "#00A790";

		case "low":
			return "#43C4E3";

		case "very-low":
			return "#B01AFF";
		default:
			return;
	}
};

export const iconDot = (type: string) => css`
	display: block;
	width: 9px;
	height: 9px;
	margin-right: 16px;
	background-color: ${generateColor(type)};
	border-radius: 50%;
`;

export const btnDeleteTodoItem = css`
	display: inline-block;
	width: 24px;
	height: 24px;
	background: url(${IconTodoItemDelete});
	background-size: 100%;
	background-repeat: no-repeat;
	border: none;
	cursor: pointer;
`;

export const todoTitle = (isChecked: boolean) => css`
	font-size: 18px;
	font-weight: 500;
	line-height: 27px;
	margin-right: 20px;
	color: ${isChecked ? "#888888" : "#111111"};
	text-decoration: ${isChecked ? "line-through" : "none"};
`;

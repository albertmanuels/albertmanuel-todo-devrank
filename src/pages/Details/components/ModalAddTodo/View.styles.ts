import { css } from "@emotion/css";
import IconCloseModal from "../../../../assets/icon-close-modal.svg";
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
	width: 100%;
	max-width: 830px;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	border-radius: 12px;
	margin: auto;
	line-height: 27px;
`;

export const modalHeader = css`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 30px;
	border-bottom: 1px solid #e5e5e5;
`;

export const modalTitle = css`
	font-size: 18px;
	font-weight: 600px;
	color: #111111;
	line-height: 27px;
`;
export const btnCloseModal = css`
	width: 12px;
	height: 12px;
	background: url(${IconCloseModal});
	background-repeat: no-repeat;
	background-size: 100%;
	border: none;
	cursor: pointer;
`;

export const modalBody = css`
	width: 100%;
	padding: 38px 30px 23px;
	border-bottom: 1px solid #e5e5e5;

	label {
		font-size: 12px;
		line-height: 18px;
		font-weight: 600;
		color: #111111;
	}
`;

export const modalFooter = css`
	width: 100%;
	text-align: end;
	padding: 15px 30px;
`;

export const inputListItem = css`
	width: 100%;
	height: 52px;
	padding: 14px 18px;
	border: 1px solid #e5e5e5;
	margin: 9px auto 23px;
	border-radius: 6px;

	&:focus {
		outline: 1px solid #16abf8;
	}
`;

export const btnSave = css`
	font-size: 18px;
	font-weight: 600;
	line-height: 27px;
	border: none;
	border-radius: 45px;
	padding: 14px 39px;
	color: #ffffff;
	background-color: #16abf8;
	cursor: pointer;
`;

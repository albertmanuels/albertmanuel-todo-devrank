import { css } from "@emotion/css";
import IconCloseModal from "../../../../assets/icon-close-modal.svg";
import IconCheckList from "../../../../assets/icon-checklist.svg";

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

	@media (max-width: 1024px) {
		padding: 0 16px;
	}
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

	&:disabled {
		opacity: 20%;
		cursor: not-allowed;
	}
`;

export const priority = css`
	display: flex;
	flex-direction: column;
	position: relative;

	label {
		margin-bottom: 9px;
	}
`;

export const btnSelectPriority = css`
	width: 205px;
	height: 52px;
	display: flex;
	align-items: center;
	background-color: #f4f4f4;
	border: 1px solid #e5e5e5;
	border-radius: 6px;
	font-size: 16px;
	line-height: 24px;
	color: #111111;
	cursor: pointer;
	padding: 14px 0 14px 17px;
	text-align: start;
`;

export const priorityOptionList = css`
	width: 205px;
	position: absolute;
	z-index: 999;
	top: 75px;
	left: 0;
	border: 1px solid #e5e5e5;
	border-radius: 0 0 6px 6px;
`;

export const priorityOption = css`
	width: 100%;
	display: flex;
	position: relative;
	align-items: center;
	border-bottom: 1px solid #e5e5e5;
	font-size: 16px;
	line-height: 24px;
	padding: 14px 0 14px 17px;
	background: #ffffff;
	cursor: pointer;

	&:nth-last-child(1) {
		border-bottom: none;
	}
`;

export const iconCheck = css`
	display: inline-block;
	position: absolute;
	width: 11px;
	height: 8px;
	right: 25px;
	background: url(${IconCheckList});
	background-size: 100%;
	background-repeat: no-repeat;
`;

import { css } from "@emotion/css";
import IconInformation from "../../assets/icon-information.svg";

export const alertContainer = css`
	position: fixed;
	top: 30px;
	left: 50%;
	transform: translate(-50%, 30px);
	z-index: 999;
	transition: transfrom 3s ease 0s;
`;
export const alert = (isOpen: boolean) => css`
	transform: translateY(-100%);
	opacity: ${isOpen ? "1" : "0"};
	padding: 12px 18px;
	background-color: #ffffff;
	border-radius: 12px;
	margin: 10px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

	transition: all 0.3s ease-in-out 0s;

	&:first-child {
		animation: 0.3s ease-in-out 0x 1 normal none running slide-up;
	}
`;

export const alertContent = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 13px;
	width: fit-content;
`;

export const iconInformation = css`
	width: 18px;
	height: 18px;
	display: inline-block;
	background: url(${IconInformation});
	background-size: 100%;
	background-repeat: no-repeat;
	vertical-align: middle;
`;

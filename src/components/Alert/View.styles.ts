import { css } from "@emotion/css";
import IconInformation from "../../assets/icon-information.svg";

export const alert = css`
	width: 100%;
	max-width: 490px;
	display: flex;
	flex-direction: row;
	column-gap: 13px;
`;

export const iconInformation = css`
  width: 18px;
  height: 18px;
  display: block;
  background: url(${IconInformation})
  background-size: 100%;
  background-repeat: no-repeat;
  vertical-align: middle;
`;

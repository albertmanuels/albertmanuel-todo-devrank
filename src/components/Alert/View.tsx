import * as css from "./View.styles";

const Alert = ({ isOpen, text }: { isOpen: boolean; text: string }) => {
	return (
		<div className={css.alertContainer} data-cy="modal-information">
			<div className={css.alert(isOpen)}>
				<div className={css.alertContent}>
					<i className={css.iconInformation} data-cy="modal-information-icon" />
					<p data-cy="modal-information-title">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Alert;

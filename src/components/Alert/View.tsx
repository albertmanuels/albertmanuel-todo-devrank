import * as css from "./View.styles";

const Alert = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<div className={css.alertContainer} data-cy="modal-information">
			<div className={css.alert(isOpen)}>
				<div className={css.alertContent}>
					<i className={css.iconInformation} data-cy="modal-information-icon" />
					<p data-cy="modal-information-title">Activity berhasil dihapus</p>
				</div>
			</div>
		</div>
	);
};

export default Alert;

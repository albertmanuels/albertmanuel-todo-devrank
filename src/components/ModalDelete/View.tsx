import useView from "./View.hook";
import * as css from "./View.styles";
import type { ModalDeleteProps } from "./View.types";
import IconWarning from "../../assets/icon-warning.png";

const ModalDelete = (props: ModalDeleteProps) => {
	const { setIsOpenModal, page } = props;
	const { title, onDelete } = useView(props);

	return (
		<div className={css.modal}>
			<div className={css.modalContent}>
				<div className={css.iconContainer}>
					<img src={IconWarning} alt="icon warning" />
				</div>
				<p className={css.title}>
					Apa anda yakin menghapus
					{page === "dashboard" ? "activity" : "List Item"}
					<br />
					<b>"{title}"?</b>
				</p>
				<div>
					<button
						className={css.btnCancel}
						onClick={() => setIsOpenModal(false)}
					>
						Cancel
					</button>
					<button className={css.btnDelete} onClick={onDelete}>
						Hapus
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalDelete;

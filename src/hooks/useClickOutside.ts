import { RefObject, useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(
	ref: RefObject<T>,
	onClickOutside: () => void
) => {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				ref.current &&
				event.target instanceof Node &&
				!ref.current?.contains(event.target)
			) {
				onClickOutside();
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onClickOutside, ref]);
};

export default useClickOutside;

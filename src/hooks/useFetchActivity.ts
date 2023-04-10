import { useEffect, useState } from "react";
import type { Data } from "./types";

export const useFetchActivity = (url: string) => {
	const [data, setData] = useState<Data>({
		created_at: "",
		id: 0,
		todo_items: [],
		title: "",
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [url]);

	const refetch = () => {
		setLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return { data, loading, error, refetch };
};

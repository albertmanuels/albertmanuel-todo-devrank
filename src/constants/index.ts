import IconLatest from "../assets/icon-latest.svg";
import IconOldest from "../assets/icon-oldest.svg";
import IconSortAZ from "../assets/icon-sort-az.svg";
import IconSortZA from "../assets/icon-sort-za.svg";
import IconUnfinished from "..//assets/icon-unfinished.svg";

export const sortOptionLists = [
	{
		id: 1,
		icon: IconLatest,
		name: "Terbaru",
		value: "latest",
	},
	{
		id: 2,
		icon: IconOldest,
		name: "Terlama",
		value: "oldest",
	},
	{
		id: 3,
		icon: IconSortAZ,
		name: "A-Z",
		value: "az",
	},
	{
		id: 4,
		icon: IconSortZA,
		name: "Z-A",
		value: "za",
	},
	{
		id: 5,
		icon: IconUnfinished,
		name: "Belum Selesai",
		value: "unfinished",
	},
];

export const PRIORITY_OPTIONS = [
	{
		id: 1,
		title: "Very High",
		value: "very-high",
	},
	{
		id: 2,
		title: "High",
		value: "high",
	},
	{
		id: 3,
		title: "Medium",
		value: "normal",
	},
	{
		id: 4,
		title: "Low",
		value: "low",
	},
	{
		id: 5,
		title: "Very Low",
		value: "very-low",
	},
];

export const KEY_ENTER = "Enter";
export const ACTIVE = 1;

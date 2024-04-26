export const formatData = () => {
	const date = new Date();

	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const formattedMonth = `${month}`;
	const formattedDay = `${day}`;
	const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
	const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

	return `${year}년 ${formattedMonth}월 ${formattedDay}일 ${formattedHours}:${formattedMinutes}`;
};

export const dateFormatting = (dateString) => {
	if (!dateString) {
		return '';
	}
	const dateObject = new Date(dateString);

	const month = dateObject.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
	const day = dateObject.getDate();
	
	const formattedDate = `${month}월${day}일`;
	return formattedDate;
}
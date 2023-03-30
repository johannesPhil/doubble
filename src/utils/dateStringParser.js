export function getElapsedInterval(datestring) {
	const passedDate = new Date(datestring);
	const currentTime = new Date();

	const elapsedTime = currentTime.getTime() - passedDate.getTime();

	switch (elapsedTime) {
		case elapsedTime < 1000:
			return "just now";

		case elapsedTime < 60000:
			const seconds = Math.floor(elapsedTime / 1000);
			return `${seconds} second${seconds > 1 ? "s" : ""} ago`;

		case elapsedTime < 3600000:
			const minutes = Math.floor(elapsedTime / 60000);
			return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
		case elapsedTime < 86400000:
			const hours = Math.floor(elapsedTime / 3600000);
			return `${hours} hour${hours > 1 ? "s" : ""} ago`;

		case elapsedTime < 2592000000:
			const days = Math.floor(elapsed / 86400000);
			return `${days} day${days > 1 ? "s" : ""} ago`;

		case elapsedTime < 31104000000:
			const months = Math.floor(elapsed / 2592000000);
			return `${months} month${months > 1 ? "s" : ""} ago`;

		default:
			return "More than a year ago";
	}
}

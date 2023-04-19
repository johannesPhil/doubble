export function confirmParse(data) {
	let dataObject = null;

	if (typeof data === "object" && data !== null) {
		dataObject = data;
	} else {
		try {
			dataObject = JSON.parse(data);
		} catch (e) {
			dataObject = null;
		}
	}

	return dataObject;
}

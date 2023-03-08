export const initialsImage = (size, name) => {
	if (name == null) return;

	let initials = getInitials(name);
	let color = randomColor();

	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");

	canvas.width = canvas.height = size;

	context.fillStyle = "#ffffff";
	context.fillRect(0, 0, size, size);

	context.fillStyle = `${color}20`;
	context.fillRect(0, 0, size, size);

	context.fillStyle = color;
	context.textBaseline = "middle";
	context.textAlign = "center";
	context.font = `${size / 2}px sans`;
	context.fillText(initials, size / 2, size / 2);

	return canvas.toDataURL();
};

const getInitials = (name) => {
	let initials;
	const nameSplit = name.split(" ");
	const splitLength = nameSplit.length;

	if (name.length > 1) {
		initials =
			nameSplit[0].substring(0, 1) +
			nameSplit[splitLength - 1].substring(0, 1);
	} else if (name.length === 1) {
		initials = nameSplit[0].substring(0, 1);
	} else return;

	return initials.toUpperCase();
};

const randomColor = () => {
	let letters = "0123456789ABCDEF";
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
};

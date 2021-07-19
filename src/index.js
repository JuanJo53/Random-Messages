const messages = ["Ana", "Nicolas", "Gesica", "Juan", "Raul", "Mauricio", "Oscar", "Paulina", "Carola"];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

module.exports = { randomMsg };

const path = require("path");
const fs = require("fs");

let dataPath = path.join(__dirname, "../chips.json");

const myChirps = [
	{
		name: "Chris",
		message: "Yo",
	},

	{
		name: "Jack",
		message: "Ayo",
	},

	{
		name: "Sean",
		message: "What are we doing today?",
	},

	{
		name: "Fred",
		message: "Lets go to the beach.",
	},

	{
		name: "Kyle",
		message: "I'm out of town.",
	},
];

fs.writeFile(dataPath, JSON.stringify(myChirps), (err) => {
	if (err) {
		console.log(err);
	}
});

fs.readFile(dataPath, (err, data) => {
	if (err) {
		console.log(err);
	}
	JSON.parse(data).forEach((chirp) => {
		console.log(`${chirp.name} said ${chirp.message}`);
	});
});

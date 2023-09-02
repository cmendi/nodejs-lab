const path = require("path");
const fs = require("fs");
const request = require("request-promise");

const dataPath = path.join(__dirname, "./favorite-albums.json");

request("https://lukes-projects.herokuapp.com/v1/hiphop", (err, res, body) => {
	if (err) console.log(err);

	const data = JSON.parse(body);
	const favAlbums = [];

	data.result.forEach((albums) => {
		let album = albums.title;
		let artist = albums.artist;
		let id = albums.id;

		let object = { album, artist, id };

		favAlbums.push(object);
	});

	fs.appendFileSync(dataPath, JSON.stringify(favAlbums));
});

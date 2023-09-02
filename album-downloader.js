const path = require("path");
const fs = require("fs");
const request = require("request-promise");

const dataPath = path.join(__dirname, "./downloads");

request("https://lukes-projects.herokuapp.com/v1/hiphop", (err, res, body) => {
	if (err) console.log(err);

	const data = JSON.parse(body);

	data.result.forEach((album) => {
		const id = album.id;
		const imageUrl = album.thumbnail_image;
		const imageExt = path.extname(album.thumbnail_image);
		const thumbnailPath = path.join(dataPath, `${id}_thumbnail${imageExt}`);
		// console.log(thumbnailPath);
		request(imageUrl, { encoding: null }).pipe(fs.createWriteStream(thumbnailPath));
	});
});

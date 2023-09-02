# OBJECTIVES
## PART 1
1. Create a NodeJS project using `npm init`.
2. Create a folder in your project called `server`.
3. Create a JavaScript file in the server folder named `server.js`.
4. In `server.js`
    - Import (require) `path` and `fs`.
    - Create an array consisting of at least 5 chirp objects.
    - Write the array to a file in the root of the project called `chirps.json`.
5. Add code to `server.js` that reads the file and outputs the chirps to the console
## PART 2
1. Install `request-promise` from npm and save it to your package.json file.
2. Create a JavaScript file in the root of your project called `hiphop.js`.
3. Use request-promise to retrieve Luke's favorite hip hop albums from https://lukes-projects.herokuapp.com/v1/hiphop.
4. Extract from each album artist, album, and id.
    - Push each extracted album into an array.
    - Write the array to a file in the root of your project called `favorite-albums.json`.
## ADVANCED
1. Create a JavaScript file named `album-downloader.js`.
2. Create a directory in the root of your project named `downloads`.
3. Using request-promise, pull Luke's favorite hip hop albums from https://lukes-projects.herokuapp.com/v1/hiphop.
4. Use request-promise to download the thumbnail image. (hint):
  - Use `request-promise` to download the media.
  - Write each download to a file (named the `id` of the album) in the `downloads` directory.
  - Use path.extname as a hint to get the proper image extension
  - Use `{ encoding: 'base64' }` to help download and write images.
    
      - Encoding is a way of representing data in a specific format. It is commonly used when working with binary data, such as images, audio, or video files. Base64 is one of the encoding schemes that converts binary data into a textual representation, making it easier to handle and transmit across different systems.
      - The data received from request-promise represents the image in a specific format. To save this image data to a file using fs.writeFile, you need to make sure the data is compatible with the file writing operation. This is where the encoding option comes into play.

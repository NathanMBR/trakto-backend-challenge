pt-BR: Para ler a versão em português deste texto, veja o arquivo `README_pt-BR.md`.

# Trakto Backend Challenge

This is my code for the Trakto Backend Challenge. This application has an unique route that receives an image URL at the .jpg or .jpeg format and a compression factor, then saves a copy of the image at the file system, extracts its EXIF metadata, resizes if it is too big, compresses based on the compression factor and saves a copy of the manipulated image. After all that, it returns the extracted metadata plus the paths for the saved images, and also stores the metadata in a MongoDB instance.

## Requirements

- Node.js v18 or higher
- NPM v9 or higher
- A running instance of MongoDB 4 or higher

## Setup Steps

### Running a MongoDB instance with Docker and Docker Compose

If you already have a MongoDB instance active, you can skip this step.

1. Open a terminal and reach the root of this project
2. Make sure you have Docker and Docker Compose installed (you can do that with the commands `docker --version` and `docker compose version`)
3. Simply run `docker compose up` - this command will automatically download and instantiate MongoDB for you

### Configuring environment variables

There are only two environment variables at this project. They are:
- `PORT` - The port which the application will listen for requests.
- `MONGO_URL` - The URL used to establish a connection with a MongoDB instance. Note that the URL is segmented into many parts: `<user>` (the user used for connection), `<password>` (the password of the previous user), `<host>` (the host where the MongoDB instance is running), `<port>` (the port where the Mongo instance is listening - default is `27017`) and `<database>` (optional - the chosen database to authentication). Make sure to substitute those segments by their proper values.

1. Open the `.env.example` file and copy its content
2. Create a `.env` file at the root of this folder and paste the previous copied content
3. Edit each variable according to your preferences.

If you created a MongoDB instance using the previous step, you can simply use the following URL as your `MONGO_URL` environment variable:
```
mongodb://root:root@localhost:27017/
```

### Starting the application

1. Download all the required packages with `npm ci`
2. Generate a build of the project with `npm run build`
3. Start the project with `npm run start`

## Testing

To see the application unit tests, just run the following command:
```
npm run test
```
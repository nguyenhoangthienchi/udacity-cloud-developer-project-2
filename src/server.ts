import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util';
import { expressjwt } from 'express-jwt';


const handleError = (res: any) => {
  res.status(500).send('Internal Server Error');
}

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // Use jwt middleware for authentication
  app.use(expressjwt({
      secret: 'the-provided-token-was-generated-using-this-placeholder-text',
      algorithms: ['HS256'],
  }));

  app.use((err: any, req: any, res: any, next: any) => {
    if (err.name === "UnauthorizedError") {
      res.status(401).send('Token is expired or invalid');
    } else {
      next(err);
    }
  });

  app.get('/filteredimage', async (req, res) => {
    const params = req.query;

    if (typeof params.image_url === "string") {
      const imageUrl = params.image_url;
      try {
        const image = await filterImageFromURL(imageUrl);
        res.status(200).sendFile(image, (err: any) => {
          if (err) {
            handleError(res);
          }
          deleteLocalFiles([image]);
        });
      } catch (e) {
        console.log('asdflkjasdl;fkja;lsdfjk');
        handleError(res);
      }
    } else {
      res.status(400).send("image_url param is missing!");
    }

  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
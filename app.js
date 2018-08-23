// ./express-server/app.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import SourceMapSupport from 'source-map-support';
// import routes
import phonesRoutes from './routes/phones.server.route';
// define our app using express
const app = express();
// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
// set the port
const port = process.env.PORT || 3001;
app.use('/api', phonesRoutes);
app.get('/', (req,res) => {
  return res.end('Api working');
});
// add Source Map Support
SourceMapSupport.install();
// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
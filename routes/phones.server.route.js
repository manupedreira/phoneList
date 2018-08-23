// ./express-server/routes/phones.server.route.js
import express from 'express';
//import controller file
import * as phonesController from '../controllers/phones.server.controller';
// get an instance of express router
const router = express.Router();
router.route('/').get(phonesController.getPhones)
export default router;
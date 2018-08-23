// ./express-server/controllers/phones.server.controller.js
// import phones data (mock, no db)
import data from '../data/phones.data';
export const getPhones = (req,res) => {
  return res.json({'success':true,'message':'Phones fetched successfully',data});
}
import { getProductById } from "@/services/productServices"; // import getProductById function

// write a handler function which responds with...
export default function handler(req, res) {
  const { id } = req.query; // to access the id from the url, id needs to be destructured with req.query and later needs to be passed as argument to getProductById.

  res.status(200).json(getProductById(id)); // ... a 200 status code and with the return value of getProductById(), parsed with the .json() method
}

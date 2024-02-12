// THIS API ROUTE RETURNS ALL LISTINGS

import { getAllProducts } from "@/services/productServices"; // import getAllProducts

// write a handler function which responds with...
export default function handler(req, res) {
  res.status(200).json(getAllProducts()); // ... a 200 status code and with the return value of getAllProducts(), parsed with the .json() method
}

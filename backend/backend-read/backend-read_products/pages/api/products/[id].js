import Product from "@/db/models/Product";

export default async function handler(request, response) {
  const { id } = request.query;

  const product = await Product.findById(id).populate("reviews"); // .populate method integrates the reviews for each product

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);

  if (request.method === "PUT") {
    const updatedProduct = request.body;
    await Product.findByIdAndUpdate(id, updatedProduct);
    // Find the product by its ID and update the content that is part of the request body!
    response.status(200).json({ status: "Product successfully updated." });
    // If successful, you'll receive an OK status code.
  }

  if (request.method === "DELETE") {
    await Product.findByIdAndDelete(id);
    // Find the product by its ID and delete the content that is part of the request body!
    response.status(200).json({ status: "Product successfully deleted." });
    // If successful, you'll receive an OK status code.
  }
}

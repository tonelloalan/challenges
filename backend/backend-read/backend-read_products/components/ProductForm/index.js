import useSWR, { mutate } from "swr";

export default function ProductForm() {
  const { mutate } = useSWR("/api/products");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = Object.fromEntries(formData);

    console.log("productData: ", productData);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product-input">Enter a new product:</label>
      <br />
      <input
        type="text"
        name="name"
        id="product-input"
        placeholder="Product Name"
      />
      <br />
      <input
        type="text"
        name="description"
        id="product-input"
        placeholder="Description"
      />
      <br />
      <input
        type="number"
        name="price"
        id="product-input"
        placeholder="Price"
      />
      <br />
      <select name="currency" id="product-input">
        <option value="" disabled>
          Select a currency
        </option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="BRL">BRL</option>
      </select>
      <br />

      <button>Submit</button>
    </form>
  );
}

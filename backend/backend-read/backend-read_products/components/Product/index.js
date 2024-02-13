import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { useState } from "react";
import { StyledButton } from "../ProductList";
import ProductForm from "../ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE", // method to delete
    });

    if (response.ok) {
      await response.json();
      router.push("/"); // Redirect after successful deletion
    } else {
      console.error("Error:", response.status);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const { reviews } = data;

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <h3>Reviews:</h3>
      {reviews &&
        reviews.map((review) => (
          <>
            <h4>{review.title}</h4>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </>
        ))}
      <StyledButton
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        ✍️
      </StyledButton>
      <StyledButton
        type="button"
        onClick={() => {
          handleDeleteProduct(id);
        }}
      >
        ❌
      </StyledButton>
      <br />
      <br />
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          formHeading="Edit this item:"
        />
      )}

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

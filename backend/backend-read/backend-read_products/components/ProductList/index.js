import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";
import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  text-shadow: 1px 1px 5px hsl(0, 0%, 75%, 0.8);
  font-size: 25px;
`;

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map((product) => (
          <li key={product._id}>
            <StyledLink href={`/${product._id}`}>{product.name}</StyledLink>
            <StyledButton>✍️</StyledButton>
            <StyledButton>❌</StyledButton>
          </li>
        ))}
      </StyledList>
    </>
  );
}

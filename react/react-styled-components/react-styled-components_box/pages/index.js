import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </StyledContainer>
  );
}

// align the four boxes horizontally
const StyledContainer = styled.div`
  display: flex;
`;

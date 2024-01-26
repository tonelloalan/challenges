import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";
import StyledBox from "@/components/BoxWithStyledComponents.js";

// replace div with StyledContainer to apply display flex to boxes
export default function HomePage() {
  return (
    <StyledContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </StyledContainer>
  );
}

// align the four boxes horizontally
const StyledContainer = styled.div`
  display: flex;
`;

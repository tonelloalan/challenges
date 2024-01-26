// create a file BoxWithStyledComponents.js

import styled from "styled-components";

// export a function which accepts a prop $isBlack and returns a div
export default function BoxWithStyledComponents({ $isBlack }) {
  return (
    // Inside of the return statement of your function, replace the div with StyledBox
    // Pass the $isBlack prop to the StyledBox component.
    // Check whether the $isBlack prop is true and set the correct background-color accordingly.
    <StyledBox
      className={`box-with-classname${
        $isBlack ? " box-with-classname--black" : ""
      }`}
    ></StyledBox>
  );
}

// create a styled component called StyledBox which styles a div
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;
// set the styling for the hover effect

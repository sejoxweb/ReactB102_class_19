import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "blue" : "teal"};
`;

// const StyledButton = styled.button`
//   background-color: teal;
//   color: white;
//   padding: 1rem 2rem;
// `;

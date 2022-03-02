import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: var(--grey-1);
    background: linear-gradient(145deg, #1e2125, #23282c);
    box-shadow: 2px 2px 3px #1c1f23, -2px -2px 3px #262b2f;
  }
`;

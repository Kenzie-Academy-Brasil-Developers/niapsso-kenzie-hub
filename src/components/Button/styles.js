import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#FF577F")};
  font-size: 0.9rem;
  border-radius: 4px;
  padding: 10px 1em;
  border: 1px solid ${({ bgColor }) => (bgColor ? bgColor : "#FF577F")};
  transition: 0.5s;
  :hover {
    background-color: ${({ bgColor }) => (bgColor ? "#343B41" : "#FF427F")};
    border-color: ${({ bgColor }) => (bgColor ? "#343B41" : "#FF427F")};
  }
`;

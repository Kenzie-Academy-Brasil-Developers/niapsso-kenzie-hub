import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#FF577F")};
  font-size: 0.9rem;
  border: none;
  padding: 10px 0;
  border: 1px solid ${({ bgColor }) => (bgColor ? bgColor : "#FF577F")};
  transition: 0.5s;
  :hover {
    background-color: ${({ bgColor }) => (bgColor ? "#343B41" : "#FF427F")};
    border-color: ${({ bgColor }) => (bgColor ? "#343B41" : "#FF427F")};
  }
`;

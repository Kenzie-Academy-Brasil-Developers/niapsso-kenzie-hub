import styled from "styled-components";

export const Wrapper = styled.div`
  ::before,
  ::after {
    box-sizing: border-box;
  }
  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    &::-ms-expand {
      display: none;
    }
    outline: none;
    width: 100%;
    min-width: 15ch;
    max-width: 30ch;
    border-radius: 5px;
    padding: 0.25em 0.5em;
    cursor: pointer;
    background-color: var(--grey-2);
    color: var(--grey-50);
  }
  display: grid;
  grid-template-areas: "select";
  grid-area: select;
  align-items: center;
  background-color: var(--grey-2);
  border-radius: 5px;
  height: 40px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

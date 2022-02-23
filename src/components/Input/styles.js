import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 10px;
  }
  .error--container {
    margin-bottom: 10px;
    transform: translateY(-9px) translateX(7px);
    span {
      font-size: 10px;
      color: var(--negative);
      background-color: var(--grey-2);
      border-radius: 5px;
      border: 0.5px solid var(--color-primary-negative);
      padding: 2px 5px;
    }
  }
`;

export const Content = styled.div`
  background-color: var(--grey-2);
  border-radius: 5px;
  padding: 9px 9px 10px;
  width: 100%;
  transition: 0.5s;
  border: 1px solid var(--grey-2);
  :focus-within {
    border: 1px solid var(--grey-0);
  }
  ${({ isInvalid }) =>
    isInvalid &&
    css`
      border-color: var(--color-primary-negative);
      :focus-within {
        border-color: var(--negative);
      }
    `}
  input {
    background-color: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey-0);
    &::placeholder {
      color: var(--grey-50);
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  background-color: var(--grey-3);
  margin: 45% auto;
  width: 90%;
  .modal--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    background-color: var(--grey-2);
    h3 {
      font-size: var(--title-1);
    }
  }
  .modal--body {
    padding: 18px;
    text-align: left;
    > form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      > span,
      label {
        font-size: var(--title-2);
      }
      > button {
        margin-top: 10px;
      }
    }
  }
  .btn--container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  gap: 20px;
  img {
    width: 100px;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 100px;
    button {
      background-color: var(--grey-3);
      border: none;
      border-radius: 4px;
      padding: 10px 24px;
      transition: 0.5s;
    }
    button:hover {
      background-color: var(--grey-1);
    }
  }
`;

export const Container = styled.section`
  padding: 30px 18px;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: var(--grey-3);
  h3 {
    font-size: var(--title-1);
  }
  h4 {
    font-size: var(--title-2);
    color: var(--grey-1);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  div + div {
    margin-bottom: 10px;
  }
`;

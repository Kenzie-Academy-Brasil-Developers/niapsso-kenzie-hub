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
`;

export const Container = styled.div`
  padding: 30px 18px;
  margin: 0 auto;
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

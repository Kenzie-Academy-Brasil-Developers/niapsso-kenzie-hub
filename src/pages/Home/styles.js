import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  max-width: 800px;
  margin: 0 auto;
  .header--home {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid var(--grey-3);
    height: 73px;
    button {
      background-color: var(--grey-3);
      border-radius: 4px;
      height: 32px;
      width: 55px;
      border: none;
      font-weight: 600;
      transition: 0.5s;
      &:hover {
        background-color: var(--grey-2);
      }
    }
  }
  .info--box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 34.5px 12px;
    gap: 10px;
    border-bottom: 1px solid var(--grey-3);
    span {
      text-align: left;
      color: var(--grey-1);
      font-size: var(--title-2);
    }
  }
  @media (min-width: 600px) {
    .info--box {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 12px;
  > div {
    display: flex;
    align-items: center;
    gap: 150px;
    margin-bottom: 35px;
    button {
      width: 32.5px;
      height: 32px;
      background-color: var(--grey-3);
      border-radius: 4px;
      border: none;
      transition: 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        color: var(--grey-4);
        background: var(--grey-2);
        box-shadow: inset 3px 3px 6px #2c3237, inset -3px -3px 6px #3c444b;
      }
    }
  }
  @media (min-width: 600px) {
    > div {
      gap: 400px;
    }
  }
  @media (min-width: 800px) {
    > div {
      gap: 630px;
    }
  }
`;

export const TechsContainer = styled.ul`
  padding: 22px 8.5px;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 296px;
  height: 418px;
  max-height: 418px;
  gap: 16px;
  overflow-y: scroll;
  @media (min-width: 600px) {
    width: 550px;
  }
  @media (min-width: 800px) {
    width: 780px;
    overflow: hidden;
  }
`;

export const Tech = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey-4);
  border-radius: 4px;
  transition: 0.5s;
  min-height: 49px;
  width: 279px;
  padding: 0 12px;
  cursor: pointer;
  :hover {
    background-color: var(--grey-2);
  }
  h3 {
    font-size: var(--title-1);
  }
  span {
    font-size: var(--title-2);
    color: var(--grey-1);
  }
  @media (min-width: 600px) {
    width: 533px;
  }
  @media (min-width: 800px) {
    width: 763px;
  }
`;

export const NoTechs = styled.li`
  list-style: none;
  text-align: center;
  ::after {
    content: "Você ainda não tem tecnologias :(";
    font-size: 30px;
  }
`;

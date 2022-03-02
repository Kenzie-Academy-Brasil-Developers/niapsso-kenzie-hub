import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
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
      &:hover {
        background-color: var(--grey-2);
      }
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
`;

export const NoTechs = styled.li`
  list-style: none;
  text-align: center;
  ::after {
    content: "Você ainda não tem tecnologias :(";
    font-size: 30px;
  }
`;

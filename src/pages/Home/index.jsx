import { Wrapper, Content, TechsContainer } from "./styles";
import Logo from "./../../assets/Logo.png";
import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";

const Home = ({ auth, setAuth }) => {
  const [userInfo] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [techs, setTechs] = useState(userInfo?.techs);
  console.log(techs);
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    setAuth(false);
    history.push("/login");
  };
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <Wrapper>
      <div>
        <img alt="Kenzie Hub Logo" src={Logo} />
        <button onClick={logout}>Sair</button>
      </div>
      <div>
        <h2>Olá, {userInfo.name}</h2>
        <span>{userInfo.course_module}</span>
      </div>
      <Content>
        <div>
          <h3>Tecnologias</h3>
          <button>+</button>
        </div>
        <TechsContainer></TechsContainer>
      </Content>
    </Wrapper>
  );
};

export default Home;

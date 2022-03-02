import { Wrapper, Content, TechsContainer, Tech, NoTechs } from "./styles";
import Logo from "./../../assets/Logo.png";
import { Redirect, useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { BsPlusLg } from "react-icons/bs";
import Modal from "../../components/Modal";
import CloseButton from "../../components/CloseButton";
import { kenzieHubApi } from "../../services/api";
import { toast } from "react-toastify";
import AddForm from "../../components/AddForm";
import EditForm from "../../components/EditForm";

const Home = ({ auth, setAuth }) => {
  const [userInfo] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [techs, setTechs] = useState([]);
  const [techEditing, setTechEditing] = useState({});
  const getTechs = useCallback(() => {
    kenzieHubApi
      .get(`/users/${userInfo.id}`)
      .then((res) => setTechs(res.data.techs));
  }, [userInfo]);
  useEffect(() => {
    getTechs();
    return () => {
      setTechs([]);
    };
  }, [getTechs]);
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    setAuth(false);
    history.push("/login");
  };
  const addTech = (data) => {
    setShowModalAdd(false);
    kenzieHubApi
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then((res) => setTechs([...techs, res.data]))
      .catch(() => toast.error("Já existe uma tecnologia com esse nome!"));
  };
  const editTech = (data) => {
    setShowModalEdit(false);
    kenzieHubApi
      .put(`/users/techs/${techEditing.id}`, data, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then(() => {
        getTechs();
      });
  };
  const deleteTech = () => {
    setShowModalEdit(false);
    kenzieHubApi
      .delete(`/users/techs/${techEditing.id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then(() => {
        getTechs();
      });
  };
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <Wrapper>
      <Modal isOpen={showModalAdd} onClose={() => setShowModalAdd(false)}>
        <div className="modal--header">
          <h3>Cadastrar Tecnologia</h3>
          <CloseButton onClick={() => setShowModalAdd(false)} />
        </div>
        <div className="modal--body">
          <AddForm addTech={addTech} />
        </div>
      </Modal>
      <Modal isOpen={showModalEdit} onClose={() => setShowModalEdit(false)}>
        <div className="modal--header">
          <h3>Tecnologia Detalhes</h3>
          <CloseButton onClick={() => setShowModalEdit(false)} />
        </div>
        <div className="modal--body">
          <EditForm
            techEditing={techEditing}
            editTech={editTech}
            deleteTech={deleteTech}
          />
        </div>
      </Modal>
      <div className="header--home">
        <img alt="Kenzie Hub Logo" src={Logo} />
        <button onClick={logout}>Sair</button>
      </div>
      <div className="info--box">
        <h2>Olá, {userInfo.name}</h2>
        <span>{userInfo.course_module}</span>
      </div>
      <Content>
        <div>
          <h3>Tecnologias</h3>
          <button onClick={() => setShowModalAdd(true)}>
            <BsPlusLg />
          </button>
        </div>
        <TechsContainer>
          {techs.length === 0 ? (
            <NoTechs />
          ) : (
            techs.map((tech) => (
              <Tech
                key={tech.id}
                onClick={() => {
                  setShowModalEdit(true);
                  setTechEditing(tech);
                }}
              >
                <h3>{tech.title}</h3>
                <span>{tech.status}</span>
              </Tech>
            ))
          )}
        </TechsContainer>
      </Content>
    </Wrapper>
  );
};

export default Home;

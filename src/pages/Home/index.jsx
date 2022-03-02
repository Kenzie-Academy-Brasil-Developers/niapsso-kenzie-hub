import { Wrapper, Content, TechsContainer, Tech, NoTechs } from "./styles";
import Logo from "./../../assets/Logo.png";
import { Redirect, useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { BsPlusLg } from "react-icons/bs";
import Modal from "../../components/Modal";
import CloseButton from "../../components/CloseButton";
import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { kenzieHubApi } from "../../services/api";
import { toast } from "react-toastify";

const Home = ({ auth, setAuth }) => {
  const [userInfo] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [techs, setTechs] = useState([]);
  const [techEditing, setTechEditing] = useState({});
  const options = [
    {
      value: "Iniciante",
      label: "Iniciante",
    },
    {
      value: "Intermediário",
      label: "Intermediário",
    },
    {
      value: "Avançado",
      label: "Avançado",
    },
  ];
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
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
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
    console.log(data, techEditing);
    kenzieHubApi
      .put(`/users/techs/${techEditing.id}`, data, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
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
          <form onSubmit={handleSubmit(addTech)}>
            <Input
              label="Nome"
              placeholder="Nome da tecnologia"
              name="title"
              type="text"
              error={errors.text?.message}
              register={register}
            />
            <span>Selecionar status</span>
            <Controller
              control={control}
              defaultValue={options[0].value}
              name="status"
              render={({ field: { onChange, value, ref } }) => (
                <SelectInput
                  inputRef={ref}
                  options={options}
                  value={options.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                />
              )}
            />
            <Button type="submit">Cadastrar Tecnologia</Button>
          </form>
        </div>
      </Modal>
      <Modal isOpen={showModalEdit} onClose={() => setShowModalEdit(false)}>
        <div className="modal--header">
          <h3>Tecnologia Detalhes</h3>
          <CloseButton onClick={() => setShowModalEdit(false)} />
        </div>
        <div className="modal--body">
          <form onSubmit={handleSubmit(editTech)}>
            <Input
              label="Nome do projeto"
              placeholder={techEditing.title}
              name="title"
              type="text"
              error={errors.text?.message}
              register={register}
            />
            <span>Selecionar status</span>
            <Controller
              control={control}
              defaultValue={
                techEditing.status &&
                options.find(({ value }) => value === techEditing.status).value
              }
              name="status"
              render={({ field: { onChange, value, ref } }) => (
                <SelectInput
                  inputRef={ref}
                  options={options}
                  value={options.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                />
              )}
            />
            <div className="btn--container">
              <Button type="submit">Salvar alterações</Button>
              <Button bgColor="#868E96">Excluir</Button>
            </div>
          </form>
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

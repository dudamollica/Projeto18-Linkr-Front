import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserProvider from "../contexts/userContext.js";

export default function Header() {
  const [searchName, setSearchName] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { token, setToken, photo, setPhoto } = useContext(UserProvider);

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, []);

  function searchUsers() {
    const search = users.map(({ photo, id, username, index }) => (
      <UserContainer
        onClick={() =>
          navigate(`/timeline/user/${id}`, { replace: true, state: {} })
        }
        key={index}
      >
        <img src={photo} alt="" srcset="" />
        <h4>{username}</h4>
      </UserContainer>
    ));
    return search;
  }

  function searchUser(event) {
    event.preventDefault();

    const body = {
      name: searchName,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/timeline/user`, body)
      .then((resposta) => setUsers(resposta.data))

      .catch((erro) => console.log(erro.response.data));
  }

  return (
    <ContainerHeader>
      <Titulo>
        <h1>linkr</h1>
      </Titulo>
      <Input>
        <Container displayUsers={users}>
          <input
            data-test="search"
            type="search"
            placeholder="Search for people"
            value={searchName}
            onChange={(e) => {
              setSearchName(e.target.value);
              if (searchName.length >= 3) {
                searchUser(e);
              } else {
                setUsers([]);
              }
            }}
          />
          <Button>
            <AiOutlineSearch />
          </Button>
        </Container>
      </Input>
      <UsersContainer displayUsers={users}>{searchUsers()}</UsersContainer>
      <ContainerUser>
        <IoIosArrowDown />
        <img alt="logo" src={photo} />
      </ContainerUser>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #151515;
    width: 100%;
    height: 72px;
    @media (max-width: 800px) {
    position: relative;
  }
`

const Titulo = styled.div`
        font-size: 49px;
        font-weight: bold;
        font-family: "Passion One";
        color: #fff;
        margin-left: 20px;
        @media (max-width: 800px) {
            font-size: 45px;
  }
`

const Container = styled.div`
float: left;
width: 563px;
height: 45px;
position: relative;
@media (max-width: 800px) {
  max-width: 350px;
  }
`

const Input = styled.form`
width: 563px;
  input {
    box-sizing: border-box;
    padding: 15px;
    border: none;
    border-radius: 8px;
    width: 563px;
    height: 45px;
    font-family: "Lato";
    font-size: 19px;
    color: #515151;
    float: left;
  }
  input::placeholder {
    font-size: 19px;
    color: #C6C6C6;
;
  }
  @media (max-width: 800px) {
    max-width: 350px;
    margin-top: 10px;
    position: absolute;
    left: calc(50% - 175px);
    top: 70px;
    input{
      max-width: 350px;
        font-size:17px;
    }
    ::placeholder {
      font-size: 17px;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 9px;
  border:none;
  background:transparent;
  outline:none;
  cursor: pointer;
  line-height: center;
  font-size: 22px;
  color: #C6C6C6;
  :hover{
    color: #515151;
  }
`;

const ContainerUser = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
color: #fff;
font-size: 26px;
    img{
        width: 53px;
        height: 53px;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 20px;
    }
    @media (max-width: 800px) {
            img{
                width: 41px;
                height: 41px;
            }
  }
`

const UsersContainer  = styled.div`
    display: ${(props) =>
        props.displayUsers.length > 0 ? "flex" : "none !important"};
    flex-direction: column;
    width: 100%;
    height: 130px;
    position: absolute;
    bottom: -130px;
    padding: 14px;
    overflow-y: scroll;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #e7e7e7;
`;

const UserContainer  = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 140px;
    margin-bottom: 10px;
    margin-left: 20px;
    cursor: pointer;
    h4 {
        width: 100%;
    }
    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 20px;
        object-fit: cover;
    }
`;


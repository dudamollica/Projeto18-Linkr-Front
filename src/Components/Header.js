import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Photo from "../assets/foto.jpg"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Header(){
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

     return(
        <ContainerHeader>
            <Titulo>
            <h1>linkr</h1>
            </Titulo>
            <Input>
            <Container>
            <input data-test="search" type="search" placeholder="Search for people"/>
            <Button>
            <AiOutlineSearch />
          </Button>
          </Container>
          </Input>
          <ContainerUser>
            <IoIosArrowDown />
            <img alt="logo" src={Photo} />
          </ContainerUser>
        </ContainerHeader>
    )
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
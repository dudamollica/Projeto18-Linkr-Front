import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import InputSearch from "./Input"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/userContext";

export default function Header(){
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

   useEffect(() => {
    if (!user.token) {
      setTimeout(() => {
      navigate("/")}, 1000);
  }
}, []);

      return(
        <ContainerHeader>
            <Titulo>
            <h1>linkr</h1>
            </Titulo>
            <InputSearch />
          <ContainerUser>
            <IoIosArrowDown />
            <img alt="logo" src={user.photo} />
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
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Photo from "../assets/foto.jpg"

export default function Header(){
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
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows:  auto auto;
    grid-template-areas: "titulo input user";
    gap: 0;
    justify-content: space-between;
    align-items: center;
    background-color: #151515;
    width: 100%;
    height: 72px;
    @media (max-width: 800px) {
    grid-template-rows: 72px auto;
    grid-template-columns: auto auto auto;
    grid-template-areas: "titulo . user"
    ". input .";
  }
`

const Titulo = styled.div`
        grid-area: titulo;
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
    width: 350px;
  }
`

const Input = styled.form`
grid-area: input;
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
    width: 350px;
    margin-top: 10px;
    input{
        width: 350px;
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
grid-area: user;
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
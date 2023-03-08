import styled from "styled-components";
import Header from "../Components/Header";

export default function Search(){
    return(
        <>
        <Header />
        <ContainerMain>
        </ContainerMain>
        </>
    )
}

const ContainerMain = styled.div`
background-color: #333333;
width: 100%;
height: 100vh;
@media (max-width:800px) {
}
`
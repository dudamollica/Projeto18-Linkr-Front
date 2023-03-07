import styled from "styled-components";


export const ContainerHashtag = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-family: 'oswald', sans-serif;
    font-weight: 700;
    font-size: 19px;
    color: #FFFFFF;
    padding: 9px 16px;

    overflow-y: scroll;
    
    ::-webkit-scrollbar{
        width: 1px;
    }

    p {
        margin-bottom: 10px;
    }
`
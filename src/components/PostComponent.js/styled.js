import styled from "styled-components";

export const PostLayout = styled.div`
    display: flex;
    width: 100%;
    background: #171717;
    border-radius: 16px;
    margin-bottom: 16px;
    padding: 15px;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: column;
    }

    div:nth-child(1){
        align-items: center;
        height: 100%;

        img{
            width: 53px;
            height: 53px;
            border-radius: 26.5px;
        }

    }

    div:nth-child(2){
        width: 87%;
        gap: 8px;
        font-family: 'Lato';
        font-weight: 400;

        h3{
            font-size: 19px;
            line-height: 23px;
            color: #FFFFFF;
        }

        p{
            font-size: 17px;
            line-height: 20px;
            color: #B7B7B7;
            word-wrap: break-word;
        }
    }
`
export const UrlLayout = styled.span`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 16px;

    div {
        display: flex;
        width: 100%;
        flex-direction: column;
        font-family: 'Lato';
        font-weight: 400;
        color: #CECECE;
        padding: 15px 20px;
        justify-content: space-between;
        align-items: flex-start !important;

        p:nth-child(1){
            font-size: 16px;
            line-height: 19px;
        }

        p:nth-child(2){
            font-size: 11px;
            line-height: 13px;
            color: #9B9595;
        }

        p:nth-child(3){
            font-size: 11px;
            line-height: 13px;
        }
    }

    img {
        border-radius: 0 16px 16px 0;
        object-fit: cover;
        width: 35%;
        height: 100%;
    }
`;
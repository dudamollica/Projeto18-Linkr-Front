import styled from "styled-components";

export const TimelineLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #333333;
    position: relative;
`
/*-----HEADER-----*/ 
export const Header = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    height: 72px;
    width: 100%;
    background-color: #151515;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    h1{
        font-family: 'Passion One', cursive;
        color: #FFFFFF;
        font-size: 49px;
        letter-spacing: 0.05em;
    }
    
`
export const Profile = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

    ion-icon{
        font-size: 25px;
        color: #FFFFFF;
    }

    img{
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
    }
`
/*-----TIMELINE-----*/ 
export const Timeline = styled.main`
    flex-direction: column;
    display: flex;
    width:611px;

    h1{
        margin-top: 150px;
        font-family: 'Oswald', sans-serif;
        font-size: 43px;
        line-height: 64px;
        font-weight: 700;
        color: #FFFFFF;
        margin-bottom: 45px;
        letter-spacing: 0.03em;
    }
`
export const Publish = styled.div`
    display: flex;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    background-color: #FFFFFF;
    padding: 20px;
    gap: 18px;
    margin-bottom: 30px;

    img{
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
        }

    div{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 13px;

        p{
            font-size: 20px;
            line-height: 24px;
            color: #707070;
            font-weight: 300;
            font-family: 'Lato', sans-serif;
        }
    }

`
export const Form = styled.form`
	display: flex;
	flex-direction: column;
    align-items: flex-end;
    width: 100%;
    gap: 8px;
    
    input{
        width: 100%;
        background: #EFEFEF;
        border-radius: 5px;
        font-family: 'Lato';
        font-size: 15px;
        color: #151515;
        border: none;
        padding: 6px 13px;
        outline: none;

        &::placeholder{
            color: #949494;
            font-weight: 300;
        }
    }

    input:nth-child(1){
        height: 30px;
    }

    input:nth-child(2){
        height: 66px;
    }

    button{
        width: 112px;
        height: 31px;
        background: #1877F2;
        border-radius: 5px;
        text-align: center;
        border: none;

        font-family: 'Lato';
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
    }
`
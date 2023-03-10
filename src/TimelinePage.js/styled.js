import styled from "styled-components";

export const TimelineLayout = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #333333;
    position: relative;

    padding-top: 150px;
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
    width:30%;

    h1{
        font-family: 'Oswald', sans-serif;
        font-size: 43px;
        line-height: 64px;
        font-weight: 700;
        color: #FFFFFF;
        margin-bottom: 45px;
        letter-spacing: 0.03em;
    }
`
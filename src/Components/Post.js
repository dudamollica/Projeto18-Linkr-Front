import styled from "styled-components"

function Post(){
    return(
        <PostLayout>
            <img/>
            <div>
                <h3>Username</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum iaculis lorem #lorem
                </p>
            </div>
        </PostLayout>
    )
}

const PostLayout = styled.div`
    display: flex;
    width: 100%;
    background: #171717;
    border-radius: 16px;
    margin-bottom: 16px;
    padding: 20px;
    gap: 18px;

    img{
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
        }

    div{
        display: flex;
        flex-direction: column;
        width: 100%;
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
        }
    }
`

export default Post;
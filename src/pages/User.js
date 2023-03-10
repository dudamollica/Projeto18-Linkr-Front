import styled from "styled-components";
import Header from "../Components/Header";
import Post from "../Components/PostComponent.js/Post.js";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TrendingTopics from "../Components/TrendingComponents/TrendingComponents.js";
import UserContext from "../contexts/userContext.js"

export default function User() {
    const [posts, setPosts] = useState("");
    const [trending, setTrending] = useState("");
    const { id } = useParams();
    const { token } = useContext(UserContext);

    useEffect(() => {
        console.log("1")
        getTrending();
        console.log("2")

        const config = {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        };

        axios.get(
            `${process.env.REACT_APP_API_URL}/timeline/user/${id}`, config
        )
        .then((resposta) => {console.log(resposta.data); setPosts(resposta.data)}) 
        .catch((erro) => console.log(erro.response.data))
        }, []);

/*      function loadPosts() {
        if (posts) {
            const timeline = posts.map(
                ({
                    id,
                    username,
                    photo,
                    url,
                    post,
                    title,
                    image,
                    description,
                    userId,
                }) => (
                    <Post
                    key={id}
                    name={username}
                    photo={photo}
                    url={url}
                    text={post}
                    title={title}
                    image={image}
                    description={description}
                    user={userId}
                    post={id}
                    />
                )
            );
            return timeline;
        }
    } */

    async function getTrending() {
        console.log("3")
        try {
            console.log("4")
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/trending`);
            setTrending(result.data);
        } catch (e) {
            console.log(
                "An error has occurred"
            );
            console.log(e);
        }
    }
    
    return (
        <TimelineContainer>
            <Header />
            <Main>
                <Timeline>
                    <PostsContainer>
{/*                         <p>{posts[0].username + "'s posts"}</p>
                        {
                         loadPosts()
                        }  */}
                    </PostsContainer>
                    <TrendingContainer>
                        <TrendingTopics hashtags={trending} />
                    </TrendingContainer>
                </Timeline>
            </Main>
        </TimelineContainer>
    );
}

const TimelineContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #333333;
    span {
        font-weight: 700;
        font-size: 43px;
        color: white;
    }
`;

const Main = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:1060px) {
        margin-top: 42px;
    }
`;

const Timeline = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const PostsContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        display: flex;
        justify-content: left;
        width: 100%;
        font-weight: 700;
        font-size: 43px;
        color: white;
        margin-top: 50px;
        margin-bottom: 50px;
        text-align: left;
    }
    @media only screen and (max-width: 1060px) {
        width: 100%;
        h2{
            margin-top: 70px;
            padding-left: 28px;
        }
        div{
            border-radius: 0;
        }
    }
`;

const TrendingContainer = styled.div`
    margin-top: 93px;
    width: 20%;
    display: flex;
    margin-left: 25px;
    @media only screen and (max-width: 1060px) {
        h2 {
            width: 100%;
            padding-left: 22px;
            margin-right: 0;
        }
    }
    @media only screen and (max-width: 1060px) {
        display: none;
    }
`;
import styled from "styled-components";
import Header from "../Components/Header";
import Post from "../Components/PostComponent.js/Post";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TrendingTopics from "../Components/TrendingComponents/TrendingComponents";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/userContext";

export default function User() {
    const {token, load, setLoad} = useContext(UserContext);
    const [posts, setPosts] = useState("");
    const [trending, setTrending] = useState("");
    const { id } = useParams();

    useEffect(() => {
        getTrending();

        const auth = {
        headers: {
            authorization: `Bearer ${token}` 
        }}

        axios.get(
            `${process.env.REACT_APP_BASE_URL}/timeline/user/${id}`, auth
        )
        .then((resposta) =>{setLoad(false);
        setPosts(resposta.data)}) 
        
        .catch((erro) => console.log(erro.response.data))
    }, []);

    function loadPosts() {
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
                    like
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
                    likes={like}
                    post={id}
                    />
                )
            );
            return timeline;
        }
        if (posts === []) return <span>There are no posts yet</span>;
        return <span>Loading...</span>;
    }

    async function getTrending() {
        try {
            const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/trending`);
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
                        <imput
                            debounceTimeout={300}
                        />
                        <h2>{posts ? posts[0].username + "'s posts" : "loading..."}</h2>
                        {
                            load ? <ThreeDots type="ThreeDots" color="#FFF" height={13} /> : loadPosts()
                        }
                    </PostsContainer>
                    <TrendingContainer>
                        <TrendingTopics hashtags={trending} />
                    </TrendingContainer>
                </Timeline>
            </Main>
        </TimelineContainer>
    );
}

export const TimelineContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #333333;
    span {
        font-weight: 700;
        font-size: 43px;
        color: white;
    }
`;
export const Main = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:1060px) {
        margin-top: 42px;
    }
`;
export const Timeline = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
 export const PostsContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
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
export const TrendingContainer = styled.div`
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
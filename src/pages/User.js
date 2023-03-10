import styled from "styled-components";
import Header from "../Components/Header";
import Post from "../Components/Post/Post";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TrendingTopics from "../Components/TrendingComponents/TrendingComponents";
import { Circles } from "react-loader-spinner";

export default function User() {
    const [posts, setPosts] = useState("");
    const [trending, setTrending] = useState("");
    const { id } = useParams();
    const [load, setLoad] = useState("");

    useEffect(() => {
        getTrending();

        axios.get(
            `${process.env.REACT_APP_BASE_URL}/timeline/user/${id}`, 
        )
        .then((resposta) =>{setLoad(false);
        setPosts(resposta.data)}) 
        
        .catch((erro) => console.log(erro.response.data))
    }, []);

    function renderPosts() {
        if (posts) {
            const timeline = posts.map(
                ({
                    id,
                    username,
                    picture,
                    link,
                    body,
                    title,
                    image,
                    description,
                    userId,
                    like
                }) => (
                    <Post
                    key={id}
                    name={username}
                    profileImage={picture}
                    url={link}
                    text={body}
                    titleUrl={title}
                    imageUrl={image}
                    descriptionUrl={description}
                    creatorId={userId}
                    likes={like}
                    postId={id}
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
                "An error occured while trying to fetch the trending hashtags, please refresh the page"
            );
            console.log(e);
        }
    }
    
    return (
        <Container>
            <Header />
            <Content>
                <ContentBody>
                    <LeftContent>
                        <imput
                            debounceTimeout={300}
                        />
                        <h2>{posts ? posts[0].username + "'s posts" : "loading..."}</h2>
                        {
                            load ? <Circles color="crimson" /> : renderPosts()
                        }
                    </LeftContent>
                    <RightContent>
                        <TrendingTopics hashtags={trending} />
                    </RightContent>
                </ContentBody>
            </Content>
        </Container>
    );
}

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #333333;
    span {
        font-weight: 700;
        font-size: 43px;
        color: white;
    }
`;
export const Content = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:1060px) {
        margin-top: 42px;
    }
`;
export const ContentBody = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
 export const LeftContent = styled.div`
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
export const RightContent = styled.div`
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
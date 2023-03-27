import { useState, useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { Timeline, TimelineLayout } from "./styled";
import UserContext from "../../contexts/userContext"
import Post from "../../components/PostComponent.js/Post";
import Header from "../../components/Header";
import NewPost from "../../components/NewPost/NewPost";
import axios from "axios";

export default function TimelinePage(){
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const { token, setToken, setPhoto, setName } = useContext(UserContext);
    const navigate = useNavigate();
    setToken(localStorage.getItem("authToken"));

    useEffect(() => {
        if(!token){
            navigate('/');
        }
        if(posts.length === 0){
            getPosts();
        }
    }, []);

    async function getPosts(page) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        };
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/timeline?page=${page}`, config);
            const newPosts = result.data.metadataPosts;
            setPosts(prevPosts => [...prevPosts, ...newPosts]);
            setPhoto(result.data.userInfo?.picture_url);
            setName(result.data.userInfo?.username);
            setPage(page + 1);
        } catch(error) {
            console.log(error);
        }
    }

    function loadMore() {
        getPosts(page);
    }

    function showPosts() {
        if(posts.length > 0) {
            return (
                <InfiniteScroll
                    pageStart={1}
                    loadMore={loadMore}
                    hasMore={true}
                    loader={<div key={0}>Loading...</div>}
                    threshold={250}
                >
                    {posts.map(({id, username, photo, url, post, title, image, description, userId, like}) => (
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
                            likes={like}
                            creatorId={userId}
                            setPosts={setPosts}
                            getPosts={getPosts}
                        />
                    ))}
                </InfiniteScroll>
            );
        }
        return <span>There are no posts yet</span>;
    }

    return(
        <TimelineLayout>
            <Header />
            <Timeline>
                <h1>timeline</h1>
                <NewPost getPosts={getPosts}/>
                {showPosts()}       
            </Timeline>
        </TimelineLayout>
    )
}
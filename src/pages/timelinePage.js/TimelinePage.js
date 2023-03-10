import { useState, useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { Header, Profile, Publish, Timeline, TimelineLayout, Form } from "./styled.js";
import UserContext from "../../contexts/userContext"
import api from "../../services/api"
import Post from "../../Components/PostComponent.js/Post";
import UserContext from "../../contexts/userContext.js"
import api from "../../services/api.js"
import Post from "../../components/PostComponent.js/Post.js";
import { ThreeDots } from "react-loader-spinner";

export default function TimelinePage({datas}){
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({url: '', post_text:''});
    const [posts, setPosts] = useState(undefined);
    const [formClear, setFormClear] = useState(false);

    useEffect(listPosts, []);

    function listPosts(){
        api.getPosts(datas.token)
        .then(res => {
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err => {
            alert("An error occured while trying to fetch the posts, please refresh the page.")
        })
    }

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);

        api.postPublish({...formData}, datas.token)
            .then(res => {
                setLoading(false)
                setFormClear(true)
                setPosts([ ...posts, res.data])
                listPosts()
            })
            .catch((err) => {
                alert("There was an error publishing your link")
                setLoading(false)
                console.log(err.response.data)
            });
    };

    useEffect(() => {
        if (formClear) {
            setFormData({url: '', post_text:''});
            setFormClear(false);
        }
    }, [formClear]);

    if (posts === undefined) {
        return <ThreeDots type="ThreeDots" color="#FFF" height={13} />
      }

    return(
        <TimelineLayout>
            <Header />
            <Timeline>
                <h1>timeline</h1>
                <Publish data-test="publish-box">
                    <img />

                    <div>
                        <p>What are you going to share today?</p>
                        <Form onSubmit={handleSubmit}>
                            <input
                                data-test="link"
                                type="url"
                                placeholder="http:// ..."
                                name="url"
                                value={formData.url}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            />

                            <input
                                data-test="description"
                                type="text"
                                placeholder="Awesome article about #javascript"
                                name="post_text"
                                maxLength={300}
                                value={formData.post_text}
                                onChange={handleChange}
                                disabled={loading}
                            />

                            <button data-test="publish-btn">
                                {loading === true ? "Publishing..." : "Publish"}
                            </button>
                        </Form>
                    </div>

                </Publish>
                {posts.length === 0 ? <h2 data-test="message">There are no posts yet</h2> :
                    posts.map(item => (
                        <Post 
                            data-test="post"
                            image={item.picture_url} 
                            username={item.username} 
                            description={item.post_text}
                            url={item.url}
                        />
                    ))
                }        
            </Timeline>
        </TimelineLayout>
    )
}
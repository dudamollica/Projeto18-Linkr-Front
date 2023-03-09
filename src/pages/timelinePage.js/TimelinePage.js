import { useState, useContext, useEffect } from "react"; 
import { Header, Profile, Publish, Timeline, TimelineLayout, Form } from "./styled.js";
import AuthProvider from "../../AppContext/auth.js"
import api from "../../services/api.js"
import Post from "../../components/PostComponent.js/Post.js";

export default function TimelinePage(){
    const[loading, setLoading] = useState(false);
    const[formData, setFormData] = useState({url: '', post_text:''});
    const[posts, setPosts] = useState([]);
   // const {user} = useContext(AuthProvider);

    //useEffect(listPosts, []);

    /*function listPosts(){
        api.getPosts(user.token)
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(`Ocorreu um erro: ${err.response.data }`)
        })
    }*/

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        //api.postPublish({...formData}, token)
        api.postPublish({...formData})
            .then(res => {
                setLoading(false)
                //listPosts();
            })
            .catch((err) => {
                alert("There was an error publishing your link")
                setLoading(false)
            });
    };

    return(
        <TimelineLayout>
            <Header>
                <h1>linkr</h1>
                <Profile>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                    <img />
                </Profile>
            </Header>

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
                <Post/>           
            </Timeline>
        </TimelineLayout>
    )
}
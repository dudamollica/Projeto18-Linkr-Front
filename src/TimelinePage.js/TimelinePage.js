import { useState, useContext } from "react"; 
import { Header, Profile, Publish, Timeline, TimelineLayout, Form } from "./styled";
import AuthProvider from "../AppContext/auth";
import api from "../services/api"
import Post from "../Components/Post";

export default function TimelinePage(){
    const[loading, setLoading] = useState(false);
    const[formData, setFormData] = useState({url: '', post_text:''});
    //const {token} = useContext(AuthProvider);

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);

        api.postPublish({...formData})
            .then(res => {
                setLoading(false)
                
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
                <Post/>
            </Timeline>
        </TimelineLayout>
    )
}
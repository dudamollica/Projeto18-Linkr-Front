import { useState } from "react";
import axios from "axios";
import { Header, Profile, Publish, Timeline, TimelineLayout, Form } from "./styled";

export default function TimelinePage(){
    const[loading, setLoading] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)

        const promisse = axios.post("http://test")
        promisse.catch((err) => {
            alert("There was an error publishing your link")
            setLoading(false)
        })
    }

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
                <Publish>
                    <img />

                    <div>
                        <p>What are you going to share today?</p>
                        <Form onSubmit={handleSubmit}>
                            <input
                                type="url"
                                placeholder="http:// ..."
                                name="url"
                                disabled={loading}
                                required
                            />

                            <input
                                type="text"
                                placeholder="Awesome article about #javascript"
                                maxLength={300}
                                disabled={loading}
                            />

                            <button>
                                {loading === true ? "Publishing..." : "Publish"}
                            </button>
                        </Form>
                    </div>
                    

                </Publish>
            </Timeline>
        </TimelineLayout>
    )
}
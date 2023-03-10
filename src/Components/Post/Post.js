import { Publish, Form } from "./styled";
import { useState } from "react";
import axios from "axios";

export default function Post(){
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        const promisse = axios.post("http://test")
        promisse.catch((err) => {
            alert("There was an error publishing your link")
            setLoading(false)
        })
    }

    return (
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
        )
}
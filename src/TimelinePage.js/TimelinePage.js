import { Timeline, TimelineLayout } from "./styled";
import Header from "../Components/Header";
import TredingTopics from '../Components/TrendingComponents/TrendingComponents'
import Post from "../Components/Post/Post";

export default function TimelinePage() {

    return (
        <TimelineLayout>
            <Header />
            <Timeline>
                <h1>timeline</h1>
                <Post />
            </Timeline>
            <TredingTopics />
        </TimelineLayout>
    )
}
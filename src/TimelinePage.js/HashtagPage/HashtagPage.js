import { Header, Profile, TimelineLayout, Timeline, Post } from '../styled';
import TredingTopics from '../../components/TrendingComponents/TrendingComponents'
import { useContext } from 'react';
import { HashtagContext } from '../../AppContext/hashtagContext';

export default function HashtagPage() {
    const { hashtag } = useContext(HashtagContext)

    return (
        <TimelineLayout>
            <Header>
                <h1>linkr</h1>
                <Profile>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                    <img />
                </Profile>
            </Header>
            <Timeline>
                <h1># {hashtag === undefined ? '' : hashtag[0].hashtag_title}</h1>

                {hashtag === undefined ? '' :
                    hashtag.map((elm) => (
                        <Post>PostComponent
                        </Post>
                    ))
                }
            </Timeline>
            <TredingTopics />
        </TimelineLayout>
    )
}
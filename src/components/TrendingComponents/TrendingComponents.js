import React from "react";
import { TrendingContainer, Header, Line } from "./style";
import Hashtags from "../Hashtags/Hashtags";

const TrendingTopics = () => {
    const body = [{
        name: 'javascript',
    },{
        name: 'react',
    },{
        name: 'react-native',
    },{
        name: 'material',
    },{
        name: 'web-dev',
    }]

  return (
    <TrendingContainer>
      <Header>trending</Header>
      <Line/>
      <Hashtags body={body}/>
    </TrendingContainer>
  );
};

export default TrendingTopics;

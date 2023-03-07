import React from "react";
import { TrendingContainer, Header, Line } from "./style";
import Hashtags from "../Hashtags/Hashtags";

const TrendingTopics = () => {
  return (
    <TrendingContainer>
      <Header>trending</Header>
      <Line/>
      <Hashtags/>
    </TrendingContainer>
  );
};

export default TrendingTopics;

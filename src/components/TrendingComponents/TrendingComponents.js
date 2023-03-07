import React from "react";
import { TrendingContainer, Header, Line } from "./style";
import Hashtags from "../Hashtags/Hashtags";

const TrendingTopics = () => {
  // Insert here request to backend, where back with informations about that hashtag
  const body = [
    {
      name: "javascript",
    },
    {
      name: "react",
    },
    {
      name: "react-native",
    },
    {
      name: "material",
    },
    {
      name: "web-dev",
    },
    {
      name: "web-dev",
    },
    {
      name: "web-dev",
    },
    {
      name: "web-dev",
    },
    {
      name: "web-dev",
    },
    {
      name: "web-dev",
    },
    {
      name: "web-dev",
    },
    {
      name: "web-dev",
    },
    {
      name: "web-dev",
    },
    {
      name: "web-dev",
    },
    
  ];

  return (
    <TrendingContainer>
      <Header>trending</Header>
      <Line />
      <Hashtags body={body} />
    </TrendingContainer>
  );
};

export default TrendingTopics;

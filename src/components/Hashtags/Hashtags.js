import React from "react";
import { ContainerHashtag, LinkContainer } from "./style";

const Hashtags = (props) => {
  const { body } = props;

  return (
    <ContainerHashtag>
      {body.map((elm) => (
        <LinkContainer to={`/hashtag/${elm.name}`}> 
          <p key={elm.id}>
            <span>#</span> <span>{elm.name}</span>
          </p>
        </LinkContainer>
      ))}
    </ContainerHashtag>
  );
};

export default Hashtags;

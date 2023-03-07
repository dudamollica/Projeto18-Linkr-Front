import React from "react";
import { ContainerHashtag } from "./style";

const Hashtags = (props) => {
  const { body } = props;

  return (
    <ContainerHashtag>
      {body.map((elm) => (
        <p>
          <span>#</span> <span>{elm.name}</span>
        </p>
      ))}
    </ContainerHashtag>
  );
};

export default Hashtags;

import React, {FC} from "react";
import {DisplayProps} from "./types";
import {Container, selectorColor} from "./styles";

export const Display: FC<DisplayProps> = ({ text }) => {
  return (
    <Container color={selectorColor(text)}>
      <h1>{text}</h1>
    </Container>
  );
};



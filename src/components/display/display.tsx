import React, { FC } from "react";
import styled from '@emotion/styled';

interface DisplayProps {
  className?: string;
  text?: string
}

export const Display: FC<DisplayProps> = ({ text }) => {
  return (
    <Container>
      <h1>{text}</h1>
    </Container>
  );
};

const Container = styled.div`
min-width: 100%;
border-radius:5px;
background: lightgreen;
`
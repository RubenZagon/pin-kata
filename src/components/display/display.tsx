import React, { FC } from "react";
import styled from '@emotion/styled';

interface DisplayProps {
  className?: string;
}

export const Display: FC<DisplayProps> = (props) => {
  return (
    <Container>


    </Container>
  );
};

const Container = styled.div`
min-width: 100%;
border-radius:5px;
background: lightgreen;
`
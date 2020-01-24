import React, { FC } from "react";
import styled from '@emotion/styled';

interface KeynumberProps {
  number: number
  className?: string;
  onClick?: any;

}

export const KeyNumber: FC<KeynumberProps> = ({ number, onClick }) => {
  return (
    <Button onClick={onClick} role='key'>{number}</Button>
  );
};



const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
min-width:120px;
/* max-height:50px; */
background: lightgray;
border: 2px solid gray;
border-radius: 5%;
font-size:1.5rem;
cursor:pointer;

&:hover{
  opacity:0.8;
}

&:active{
  background: orange;
}

`
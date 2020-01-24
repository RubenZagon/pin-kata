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

/**
 * primary: #1a1b1f
 * highlight: #FFFFF
 * lightShadows: #242529 / #292a2f
 * darkShadows: #151518
 */

const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
min-width:100px;
background: #1a1b1f;

box-shadow: 
5px 5px 20px 0px rgba(21,21,24,1),
1px 1px 0px 0px rgba(255,255,255,0.05),
-5px -5px 20px 0px rgba(36,37,41,1);

border: 1px solid #1a1b1f; 
border-radius: 5%;
font-size:1.5rem;
color: lightgray;
cursor:pointer;

&:hover{
  color: orange;
}

&:active{
  box-shadow: 
    inset 5px 5px 20px 0px rgba(21,21,24,1),
    1px 1px 0px 0px rgba(255,255,255,0.05),
    inset -5px -5px 20px 0px rgba(36,37,41,1);
}

`
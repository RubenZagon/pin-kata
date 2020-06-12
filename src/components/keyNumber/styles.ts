import styled from "@emotion/styled";

/**
 * primary: #1a1b1f
 * highlight: #FFFFF
 * lightShadows: #242529 / #292a2f
 * darkShadows: #151518
 */

export const Button = styled.button`
@import url('https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap');
font-family: 'ZCOOL QingKe HuangYou', cursive;
font-size:5vh;
color: lightgray;
cursor:pointer;

display:flex;
justify-content:center;
align-items:center;

min-width:100px;
background: #1a1b1f;

border: 1px solid #1a1b1f; 
border-radius: 5%;

box-shadow: 
5px 5px 20px 0px rgba(21,21,24,1),
1px 1px 0px 0px rgba(255,255,255,0.05),
-5px -5px 20px 0px rgba(36,37,41,1);

&:hover{
  color: orange;
}

&:active{
  box-shadow: 
    inset 5px 5px 20px 0px rgba(21,21,24,1),
    1px 1px 0px 0px rgba(255,255,255,0.05),
    inset -5px -5px 20px 0px rgba(36,37,41,1);
}

`;
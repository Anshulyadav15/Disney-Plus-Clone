import React from "react";
import styled from "styled-components";

function Login() {
  return <Container>
    <Background>
      <img src="../images/login-background.jpg" alt="" />
    </Background>
    <Content>
        <img src="../images/cta-logo-one.svg" alt="" />
        <Button>
          GET ALL THERE
        </Button>
        <Description>
          Get Access to Raya and the Last Dragon for an additional free with a Disney+ subscription. As of 03/26/2023, the price of Disney+ and the Disney Bundle will increase by $1.
        </Description>
        <img src="../images/cta-logo-two.png" alt="" />
    </Content>
  </Container>;
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 250px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Background = styled.div`
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index: -1;
  opacity: 0.7;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover:
  }
`

const Content = styled.div`
  margin-top: 100px;
  height: 70vh;
  width: 70vh;

  img{
    width:100%;
    object-fit: contain;
  }
`
const Button = styled.button`
  width: 100%;
  padding: 17px 0;
  margin: 10px 0;
  letter-spacing: 1.5px;
  color: rgb(249,249,249);
  background-color: #0063e5;
  border: none;
  cursor: pointer;

  &:hover{
    background-color: #0483ee;
  }
`
const  Description = styled.div`
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  margin: 10px 0 15px 0;
`
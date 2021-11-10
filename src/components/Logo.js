import React from "react";
import logo from '../assets/logoflat.png'
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 40px;
  left: 90px;
  z-index: 30;
  width: 300px;
`

const Logo = () => {
    return <Container>
        <img src={logo} alt="" width={"150px"}/>
    </Container>
}

export default Logo;
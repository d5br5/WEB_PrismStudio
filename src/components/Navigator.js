import React from "react";
import styled from "styled-components";
import * as constants from "../assets/const";

const Container = styled.div`

`;

const Button = styled.button`
  height: 20px;
`

const Navigator = ({mode, setMode}) => {
    console.log(constants.MAP)
    return <Container>
        <Button onClick={() => setMode(constants.MAP)}>{constants.MAP}</Button>
        <Button onClick={() => setMode(constants.LIST)}>{constants.LIST}</Button>
    </Container>;
}

export default Navigator;
import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import * as constants from "../assets/const";

const Navigator = ({mode, setMode}) => {
    console.log(constants.MAP)
    return <ButtonGroup variant="contained" sx={{position:"absolute", top:"30px", zIndex:1}} aria-label="outlined primary button group">
        <Button onClick={() => setMode(constants.MAP)}>{constants.MAP}</Button>
        <Button onClick={() => setMode(constants.LIST)}>{constants.LIST}</Button>
    </ButtonGroup>;
}

export default Navigator;
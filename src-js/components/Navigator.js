import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styled from "styled-components";
import * as constants from "../assets/const";

const CustomButtonGroup = styled(ButtonGroup)`
  position: absolute;
  top: 50px;
  zIndex: 1000;
  @media only screen and (min-width: 1300px) {
    width: 150px;
  }

  @media only screen and (max-width: 1300px) {
    width: 80px;
  }
  @media only screen and (max-width: 699px) {
    width: 40px;
  }
`;

const Navigator = ({mode, setMode}) => {
    return <ButtonGroup variant="contained" sx={{position: "absolute", top: "50px", zIndex: 1000}}
                        aria-label="outlined primary button group">
        <Button onClick={() => setMode(constants.MAP)}>{constants.MAP}</Button>
        <Button onClick={() => setMode(constants.LIST)}>{constants.LIST}</Button>
    </ButtonGroup>;
}

export default Navigator;
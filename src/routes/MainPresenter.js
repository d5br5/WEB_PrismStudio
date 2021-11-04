import styled from "styled-components";
import ListPresenter from "./ListPresenter";
import * as constants from "../assets/const";
import Navigator from "../components/Navigator";
import MapController from "./MapController";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const MainPresenter = ({shopList, mode, setMode}) => {
    return <Container>
        <Navigator mode={mode} setMode={setMode}/>
        {mode === constants.LIST && <ListPresenter shopList={shopList}/>}
        {mode === constants.MAP && <MapController shopList={shopList}/>}
    </Container>
}

export default MainPresenter;

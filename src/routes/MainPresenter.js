import styled from "styled-components";
import ListPresenter from "./ListPresenter";
import * as constants from "../assets/const";
import Navigator from "../components/Navigator";
import MapPresenter from "./MapPresenter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 30px auto;
`;

const MainPresenter = ({shopList, mode, setMode}) => {
    return <Container>
        <Navigator mode={mode} setMode={setMode}/>
        {mode === constants.LIST && <ListPresenter shopList={shopList}/>}
        {mode === constants.MAP && <MapPresenter shopList={shopList}/>}
    </Container>
}

export default MainPresenter;

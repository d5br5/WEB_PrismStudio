import styled from "styled-components";
import ListPresenter from "./ListPresenter";
import * as constants from "../assets/const";
import Navigator from "../components/Navigator";
import Filter from "../components/Filter";
import MapController from "./MapController";
import {useState} from "react";
import Logo from "../components/Logo";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;



const MainPresenter = ({shopList, mode, setMode}) => {
    const [filterList, setFilterList] = useState([]);
    const [filterEditing, setFilterEditing] = useState(true);

    const filterFn = (shop) => {
        const minPriceStandard = parseInt(shop.basePrice) >= filterList[0];
        const maxPriceStandard = parseInt(shop.basePrice) <= filterList[1];
        const PriceStandard = (minPriceStandard && maxPriceStandard) || shop.basePrice === "x"

        const minGradeStandard = parseFloat(shop.grade) >= filterList[2];
        const maxGradeStandard = parseFloat(shop.grade) <= filterList[3];
        const GradeStandard = (minGradeStandard && maxGradeStandard);

        const LocationStandard = filterList[4].length===0 || filterList[4].includes(shop.location)

        return PriceStandard && GradeStandard && LocationStandard;
    }

    console.log(filterList);
    return <Container>
        <Logo/>
        <Navigator mode={mode} setMode={setMode}/>
        <Filter setFilterEditing={setFilterEditing} filterEditing={filterEditing} setFilterList={setFilterList}/>
        {mode === constants.LIST &&
        <ListPresenter shopList={filterList.length === 0 ? shopList : shopList.filter(filterFn)}/>}
        {mode === constants.MAP &&
        <MapController shopList={filterList.length === 0 ? shopList : shopList.filter(filterFn)}/>}
    </Container>
}

export default MainPresenter;

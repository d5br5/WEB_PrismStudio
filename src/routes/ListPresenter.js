import React from "react";
import Shop from "../components/Shop";
import styled from "styled-components";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import app from "../fbase"
import {infos} from "../assets/geoInfos"

const Container = styled.div`
  margin-top: 70px;
  width: 1200px;
`;

const upload = async ()=>{
    const db = getFirestore(app);
    for (const data of infos) {
        await addDoc(collection(db, "geotest"), data)
    }
}

const ListPresenter = ({shopList}) => {
    return <Container>
        {/*<button onClick={upload}> upload</button>*/}
        {shopList.map((shop, i) => (
            <Shop key={i} shop={shop} index={i}/>
        ))}
    </Container>;
}

export default ListPresenter;
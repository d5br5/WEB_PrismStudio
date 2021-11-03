import React, {useState, useEffect} from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import app from "../fbase";

import MainPresenter from "./MainPresenter";
import Loading from "../components/Loading";
import * as constants from "../assets/const";

const MainController = () => {
    const [mode, setMode] = useState(constants.LIST);
    const [init, setInit] = useState(false);
    const [shopList, setShopList] = useState([]);

    useEffect(() => {
        const db = getFirestore(app);

        async function getAllShops() {
            const data = await getDocs(collection(db, "shops"));
            const list = [];
            data.forEach((onedata) => {
                const frame = {id: onedata.id, ...onedata.data()};
                list.push(frame);
            });
            setShopList(list);
            setInit(true);
        }

        getAllShops();
    }, []);

    return init ? <MainPresenter shopList={shopList} mode={mode} setMode={setMode}/> : <Loading/>
}

export default MainController;

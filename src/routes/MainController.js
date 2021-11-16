import React, {useState, useEffect} from "react";
import {collection, getDocs, getFirestore, orderBy} from "firebase/firestore";
import app from "../fbase";

import MainPresenter from "./MainPresenter";
import Loading from "../components/Loading";
import * as constants from "../assets/const";

Number.prototype.format = function () {
    if (this === 0) return 0;
    let reg = /(^[+-]?\d+)(\d{3})/;
    let n = (this + '');
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
    return n;
};

String.prototype.format = function () {
    let num = parseFloat(this);
    if (isNaN(num)) return "0";
    return num.format();
};


const MainController = () => {
    const [mode, setMode] = useState(constants.MAP);
    const [init, setInit] = useState(false);
    const [shopList, setShopList] = useState([]);


    useEffect(() => {
        const db = getFirestore(app);

        async function getAllShops() {
            const data = await getDocs(collection(db, "geotest8"), orderBy("name", "asc"));
            const list = [];
            data.forEach((onedata) => {
                const frame = {id: onedata.id, ...onedata.data()};
                list.push(frame);
            });
            list.sort((a, b) => parseInt(a.id) - parseInt(b.id))
            setShopList(list);
            setInit(true);
        }

        getAllShops();
    }, []);

    return init ? <MainPresenter shopList={shopList}
                                 mode={mode}
                                 setMode={setMode}/> : <Loading/>
}

export default MainController;

import {useState, useEffect} from "react";
import AppRouter from "./components/AppRouter";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import app from "./fbase";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
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

	return (
		<AppRouter
			isLoggedIn={isLoggedIn}
			init={init}
			setInit={setInit}
			shopList={shopList}
			setShopList={setShopList}
		/>
	);
}

export default App;

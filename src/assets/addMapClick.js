import {doc, getFirestore, increment, updateDoc} from "firebase/firestore";
import app from "../fbase";

const db = getFirestore(app);

async function onCountClick(saveLocation) {
    const mapRef = doc(db, "counts", saveLocation);
    await updateDoc(mapRef, {
        count: increment(1)
    });
}

let mapreservation = document.getElementsByClassName(".mapreservation");
console.log(mapreservation);
Array.from((mapreservation)).forEach(a=>a.addEventListener("click", ()=>onCountClick("mapreservation") ));
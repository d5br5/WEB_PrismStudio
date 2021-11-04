const {naver} = window;

export const getMarker = (latlngs) => {
    let result = [];
    for(let i=0; i<latlngs.length; i++){
        let [lat, lng] = latlngs[i];
        let latlng = new naver.maps.LatLng(lat, lng);
        result.push(latlng);
    }
    return result;
}
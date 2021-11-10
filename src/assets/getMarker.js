const {kakao} = window;

export const getMarker = (latlngs) => {
    let geolocations = [];
    for(let i=0; i<latlngs.length; i++){
        let [lat, lng] = latlngs[i];
        let latlng = new kakao.maps.LatLng(lat, lng);
        geolocations.push(latlng);

    }
    return geolocations;
}
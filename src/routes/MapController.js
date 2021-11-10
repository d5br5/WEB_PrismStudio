import React, {useEffect} from "react";
import styled from "styled-components";
import {getMarker} from "../assets/getMarker";

const {kakao} = window;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;


const MapController = ({shopList}) => {
    useEffect(() => {

        const HOME_PATH = window.HOME_PATH || '.';
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.5664106, 126.9778779),
            level: 4
        };
        const map = new kakao.maps.Map(container, options);

        let arr = shopList.map((shop) => [shop.lat, shop.lng]);
        let latlngs = getMarker(arr);

        for (let i = 0, ii = latlngs.length; i < ii; i++) {

            let contentString = `
            <div style="padding:15px; display: flex; flex-direction: column">
                <div style="text-align: center; font-weight: 800; font-size: 18px; margin-bottom: 15px">${shopList[i].name}</div>
                <div style="margin-bottom: 7px">네이버 평점 : ${shopList[i].grade}/5.0</div>
                <div style="margin-bottom: 7px">네이버 리뷰 수 : ${shopList[i].reviewNum}개</div>
                <div style="margin-bottom: 7px">기준 가격 : ${shopList[i].basePrice}원</div>
                <div>기준 인원 : ${shopList[i].basePeople}명</div>
            </div>
                
            `;
            let marker = new kakao.maps.Marker({
                position: latlngs[i],
                map: map,
                clickable: true
            });

            let infowindow = new kakao.maps.InfoWindow({
                content: contentString,
            });

            kakao.maps.event.addListener(marker, "click", function (e) {
                if (infowindow.getMap()) {
                    infowindow.close();
                } else {
                    infowindow.open(map, marker);
                }
            });

            kakao.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });
        }

    }, [])

    return (
        <Container id="map" style={{width: "100%", height: "100vh"}}/>
    )
}

export default MapController;
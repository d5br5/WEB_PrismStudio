import React, {useEffect} from "react";
import styled from "styled-components";
import {getMarker} from "../assets/getMarker";

const {naver} = window;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const MapController = ({shopList}) => {
    useEffect(() => {
        const HOME_PATH = window.HOME_PATH || '.';
        const container = document.getElementById('map');
        const options = {
            center: new naver.maps.LatLng(37.5664106, 126.9778779),
            level: 4
        };
        const map = new naver.maps.Map(container, options);

        let arr = [[37.3633324, 129.1054988],
            [37.3632916, 129.1085015],
            [37.57006805, 126.9784147],
            [37.5666805, 126.9784147]
        ];

        let latlngs = getMarker(arr);
        
        for (let i = 0, ii = latlngs.length; i < ii; i++) {
            let contentString = `${i} 번째 좌표`;
            let icon = {
                    url: HOME_PATH + '/img/example/sp_pins_spot_v3.png',
                    size: new naver.maps.Size(24, 37),
                    anchor: new naver.maps.Point(12, 37),
                    origin: new naver.maps.Point(i * 29, 0)
                },
                marker = new naver.maps.Marker({
                    position: latlngs[i],
                    map: map,
                    icon: icon
                });

            let infowindow = new naver.maps.InfoWindow({
                content: contentString
            });

            naver.maps.Event.addListener(marker, "click", function (e) {
                if (infowindow.getMap()) {
                    infowindow.close();
                } else {
                    infowindow.open(map, marker);
                }
            });
        }
        
    }, [])

    return (
        <Container id="map" style={{width: "100%", height: "100vh"}}/>
    )
}

export default MapController;
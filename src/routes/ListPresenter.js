import React from "react";
import Shop from "../components/Shop";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const ListPresenter = ({shopList}) => {
    return <Container>
        {shopList.map((shop, i) => (
            <Shop key={i} shop={shop} index={i}/>
        ))}
    </Container>;
}

export default ListPresenter;
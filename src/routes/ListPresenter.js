import React from "react";
import Shop from "../components/Shop";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 70px;
  width: 1200px;
`;

const ListPresenter = ({shopList}) => {
    return <Container>
        {shopList.map((shop, i) => (
            <Shop key={i} shop={shop} index={i}/>
        ))}
    </Container>;
}

export default ListPresenter;
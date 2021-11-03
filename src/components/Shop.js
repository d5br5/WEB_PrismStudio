import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 30px;
  margin: 10px 0;

`;

const Name = styled.div`
  width: 400px;
`;

const Index = styled.div`
  width: 100px;
  text-align: center;
`;

const Shop = ({shop, index}) => {
    return (
        <Container>
            <Index>{index + 1}</Index>
            <Name> {shop.name}</Name>
        </Container>
    );
};

export default Shop;

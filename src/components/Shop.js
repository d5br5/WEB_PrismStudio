import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

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

const ToLink = styled(Link)`
  
`;

const ToLinkButton = styled.button`
    height: 30px;
`;

const Submitted = styled.div`
  width: 50px;
  text-align: center;
`;

const Shop = ({shop, index}) => {
    return (
        <Container>
            <Index>{index + 1}</Index>
            <Name> {shop.name}</Name>
            <Submitted>{shop?.submitted ? "Done" : "X"}</Submitted>
            <ToLink to={`/admin/shop/info/${index}`}><ToLinkButton>INFO</ToLinkButton></ToLink>
            <ToLinkButton disabled>PRICE</ToLinkButton>
            <ToLinkButton disabled>REVIEW</ToLinkButton>
            <ToLinkButton disabled>PHOTO</ToLinkButton>
        </Container>
    );
};

export default Shop;

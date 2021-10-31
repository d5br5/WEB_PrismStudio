import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

import SubmitNewInfo from "../components/SubmitNewInfo";
import LoadInfo from "../components/LoadInfo";

const Container = styled.div`
  width: 600px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 30px;
`;

const AdminShopInfo = ({shopList}) => {
    const {id: index} = useParams();
    const shop = shopList[index];
    const [submitted, setSubmitted] = useState(shop?.submitted);

    return <Container>
        <Title>{shop?.name}</Title>
        {submitted ? <LoadInfo shop={shop}/> : <SubmitNewInfo shop={shop} setSubmitted={setSubmitted}/> }

    </Container>;
};
export default AdminShopInfo;

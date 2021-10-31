import React from "react";
import Shop from "../components/Shop";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 900px;
	margin: 30px auto;
`;

const AdminShop = ({shopList}) => {
	return (
		<Container>
			{shopList.map((shop, i) => (
				<Shop key={i} shop={shop} index={i}/>
			))}
		</Container>
	);
};

export default AdminShop;

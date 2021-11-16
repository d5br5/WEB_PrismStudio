import React from "react";
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {getGrade} from "../assets/getGrade";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Info = styled.div`
  margin: 5px 0;
`;

const Shop = ({shop, index}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container>
            <Accordion expanded={expanded === 'panel1'}
                       sx={{width: "70%"}}
                       onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{width: '16%', flexShrink: 0, fontSize:"15px"}}>
                        {getGrade(shop.grade)}
                    </Typography>
                    <Typography sx={{width: '44%', flexShrink: 0,fontSize:"15px"}}>
                        {shop.name}
                    </Typography>
                    <Typography sx={{color: 'text.secondary', fontSize:"15px"}}>{shop.address}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <InfoContainer>
                            {/*<Info>shop ID : {shop.id}</Info>*/}
                            <Info>네이버 평점 : {shop.grade === 'x' ? `정보 없음` : `${shop.grade} / 5.0`}</Info>
                            <Info>네이버 블로그 리뷰 수 : {shop.reviewNum}개</Info>
                            <Info>기준 인원 : {shop.basePeople === 'x' ? `정보 없음` : `${shop.basePeople}명`} </Info>
                            <Info>기준 가격 : {shop.basePrice === 'x' ? `정보 없음` : `${shop.basePrice.format()}원`}</Info>
                            <Info>연락처 : {shop.contact}</Info>
                        </InfoContainer>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Link href={`${shop.reservationLink}`} rel="noreferrer" target={"_blank"}>
                <Button variant="outlined" sx={{height: "35px", marginLeft: "20px"}}>
                    예약
                </Button>
            </Link>
            <Link href={`${shop.website}`} rel="noreferrer" target={"_blank"}>
                <Button variant="outlined" color="success" sx={{height: "35px", marginLeft: "20px"}}>
                    홈페이지 방문
                </Button>
            </Link>

        </Container>
    );
};

export default Shop;

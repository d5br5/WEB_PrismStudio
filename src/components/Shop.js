import React from "react";
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

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

// const Name = styled.div`
//   width: 400px;
// `;
//
// const Index = styled.div`
//   width: 100px;
//   text-align: center;
// `;

const Shop = ({shop, index}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container>
            {/*<dex>{index + 1}</dex>*/}
            {/*<Name> {shop.name}</Name>*/}
            <Accordion expanded={expanded === 'panel1'}
                       sx={{width: "70%"}}
                       onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{width: '40%', flexShrink: 0}}>
                        {shop.name}
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}}>{shop.address}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {shop.id}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Link href={`${shop.website}`} rel="noreferrer" target={"_blank"}>
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

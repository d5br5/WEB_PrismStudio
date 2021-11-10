import React from "react";
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`

const PartContainer = styled.div`
  margin-bottom: 20px;
`

const PartTitle = styled.div`
  font-weight: 900;
`

const PricePrinter = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px 0 0;
`


const Filter = ({filterEditing, setFilterEditing, setFilterList}) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [priceRange, setPriceRange] = React.useState([0, 100000]);
    const handlePriceRangeChange = (event, newValue) => {
        setPriceRange(newValue);
        setFilterEditing(true);
    };

    const [gradeRange, setGradeRange] = React.useState([0, 5]);
    const handleGradeRangeChange = (event, newValue) => {
        setGradeRange(newValue);
        setFilterEditing(true);
    };


    const onFilterSubmit = () => {
        setFilterList([...priceRange,...gradeRange]);
        setFilterEditing(false);
        setExpanded(false);
    }

    const onFilterReset = () => {
        setFilterList([]);
        setFilterEditing(false);
        setExpanded(false);
    }

    return <Accordion expanded={expanded === 'panel1'}
                      sx={{width: "300px", position: "absolute", top: "30px", right: "100px", zIndex: 30}}
                      onChange={handleChange('panel1')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography sx={{fontSize: "14px", textAlign: "center", paddingLeft: "30px", fontWeight: 700}}>
                FILTER
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                <Form>
                    <PartContainer>
                        <PartTitle>기준 가격</PartTitle>
                        <PricePrinter>{priceRange[0].format()}원 ~ {priceRange[1].format()}원</PricePrinter>
                        <Box sx={{width: "100%"}}>
                            <Slider
                                min={0}
                                step={5000}
                                max={100000}
                                getAriaLabel={() => 'Temperature range'}
                                value={priceRange}
                                onChange={handlePriceRangeChange}
                                valueLabelDisplay="auto"
                            />
                        </Box>
                    </PartContainer>
                    <PartContainer>
                        <PartTitle>네이버 평점</PartTitle>
                        <PricePrinter>{gradeRange[0]} ~ {gradeRange[1]}</PricePrinter>
                        <Box sx={{width: "100%"}}>
                            <Slider
                                min={0}
                                color={"success"}
                                step={0.5}
                                max={5}
                                getAriaLabel={() => 'Temperature range'}
                                value={gradeRange}
                                onChange={handleGradeRangeChange}
                                valueLabelDisplay="auto"
                            />
                        </Box>
                    </PartContainer>

                    <Button disabled={!filterEditing} sx={{marginBottom: "15px"}}
                            variant="outlined"
                            onClick={onFilterSubmit}>적용</Button>
                    <Button variant="outlined" color={"error"} onClick={onFilterReset}>초기화</Button>
                </Form>
            </Typography>
        </AccordionDetails>
    </Accordion>
}

export default Filter;
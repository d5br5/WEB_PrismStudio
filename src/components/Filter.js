import React from "react";
import styled from "styled-components";
import {useState} from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import {Locations} from "../assets/const";

const Form = styled.div`
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

    const [locationList, setLocationList] = useState([]);

    const onFilterSubmit = () => {
        const query = 'input[name="local"]:checked';
        const selectedEls = document.querySelectorAll(query);

        // 선택된 목록에서 value 찾기
        let selectedLocations = [];

        selectedEls.forEach((el) => {
            selectedLocations.push(el.value);
        });

        setFilterList([...priceRange, ...gradeRange, selectedLocations]);
        setFilterEditing(false);
        setExpanded(false);
    }

    const onFilterReset = () => {
        setFilterList([]);
        setFilterEditing(false);
        setExpanded(false);
    }

    return <Accordion expanded={expanded === 'panel1'}
                      sx={{width: "400px", position: "absolute", top: "40px", right: "100px", zIndex: 30}}
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
                            color={"secondary"}
                            step={0.5}
                            max={5}
                            getAriaLabel={() => 'Temperature range'}
                            value={gradeRange}
                            onChange={handleGradeRangeChange}
                            valueLabelDisplay="auto"
                        />
                    </Box>
                </PartContainer>
                <PartContainer>
                    <PartTitle style={{marginBottom:20}}>지역</PartTitle>
                    {Locations.map((a,i)=><FormControlLabel key={i} sx={{width:"48%", height:"30px"}} control={<Checkbox onChange={()=>{setFilterEditing(true)}}/>} label={a} name={"local"} value={a}/>)}
                </PartContainer>

                <Button disabled={!filterEditing} sx={{marginBottom: "15px"}}
                        variant="outlined"
                        onClick={onFilterSubmit}>적용</Button>
                <Button variant="outlined" color={"error"} onClick={onFilterReset}>초기화</Button>
            </Form>

        </AccordionDetails>
    </Accordion>
}

export default Filter;
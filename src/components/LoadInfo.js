import React from "react";
import styled from "styled-components";

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0;
`;

const SmallTitle = styled.div`
  width: 30%;
  text-align: center;
`;

const PlainText = styled.div`
  width: 60%;
`

const LoadInfo = ({shop})=>{

    return <FormBox>
        <InputWrapper>
            <SmallTitle>id</SmallTitle>
            <PlainText>{shop?.id}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>상호명</SmallTitle>
            <PlainText>{shop?.name}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>주소</SmallTitle>
            <PlainText>{shop?.address}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>카테고리</SmallTitle>
            <PlainText>{shop?.category}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>연락처</SmallTitle>
            <PlainText>{shop?.contact}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>웹사이트</SmallTitle>
            <PlainText><a href={shop?.website} target={"_blank"} rel={"noreferrer"}>{shop?.website}</a></PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>간단 소개</SmallTitle>
            <PlainText>{shop?.introduction}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>카카오 채널</SmallTitle>
            <PlainText>{shop?.kakao}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>운영시간</SmallTitle>
            <PlainText>{shop?.openTime}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>휴무일</SmallTitle>
            <PlainText>{shop?.holiday}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>SNS</SmallTitle>
            <PlainText>{shop?.SNS}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>네이버 지도 평점</SmallTitle>
            <PlainText>{shop?.naverGrade}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>예약 가능 시간</SmallTitle>
            <PlainText>{shop?.reservationTime}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>예약금</SmallTitle>
            <PlainText>{shop?.reservationPrice}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>주차 가능 여부</SmallTitle>
            <PlainText>{shop?.parking}</PlainText>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>특이사항</SmallTitle>
            <PlainText>{shop?.special}</PlainText>

        </InputWrapper>
    </FormBox>
};

export default LoadInfo;
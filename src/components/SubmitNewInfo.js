import React from "react";
import styled from "styled-components";
import {doc, getFirestore, updateDoc} from "firebase/firestore";
import app from "../fbase";
import {useForm} from "react-hook-form";

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

const Input = styled.input`
  width: 60%;
`;

const PlainText = styled.div`
  width: 60%;
`

const SubmitButton = styled.input`
  width: 150px;
  height: 30px;
  margin: 30px auto;
`

const Select = styled.select`
  width: 60%;
`;

const SubmitNewInfo = ({shop, setSubmitted}) => {

    const {register, handleSubmit, getValues} = useForm({mode: "onChange"});

    const onSubmitValid = async () => {
        // const {
        //     introduction,
        //     kakao,
        //     openTime,
        //     holiday,
        //     SNS,
        //     naverGrade,
        //     reservationTime,
        //     reservationPrice,
        //     parking,
        //     special
        // } = getValues();

        const formData = getValues();
        console.log(formData);

        // const db = getFirestore(app);
        // const shopDoc = doc(db, "shops", shop.id);
        // await updateDoc(shopDoc, {submitted: true});
        // setSubmitted(true);
    }

    return <FormBox onSubmit={handleSubmit(onSubmitValid)}>
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
            <Input {...register("introduction")} placeholder={"없으면 아무것도 입력 X"}/>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>카카오 채널</SmallTitle>
            <Input {...register("kakao")} placeholder={"없으면 아무것도 입력 X"}/>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>운영시간</SmallTitle>
            <Input {...register("openTime")}/>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>휴무일</SmallTitle>
            <Input {...register("holiday")} placeholder={"없으면 아무것도 입력 X"}/>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>SNS</SmallTitle>
            <Input {...register("SNS")} placeholder={"없으면 아무것도 입력 X"}/>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>네이버 지도 평점</SmallTitle>
            <Input {...register("naverGrade")} placeholder={"소수점 아래 1자리까지 입력. 없으면 0.0 입력"}/>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>예약 가능 시간</SmallTitle>
            <Input {...register("reservationTime")}/>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>예약금</SmallTitle>
            <Input {...register("reservationPrice")} placeholder={"쉼표, 단위 없이 숫자만 입력. 없으면 아무것도 입력 X"}/>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>주차 가능 여부</SmallTitle>
            <Select name="parking" {...register("parking")}>
                <option value={"O"}>가능</option>
                <option value={"X"}>불가능</option>
            </Select>
        </InputWrapper>
        <InputWrapper>
            <SmallTitle>특이사항</SmallTitle>
            <Input {...register("special")}/>
        </InputWrapper>
        <SubmitButton type="submit"/>
    </FormBox>
};

export default SubmitNewInfo;
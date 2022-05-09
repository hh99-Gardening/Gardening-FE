import {Text, Grid, Image} from '../../Elements/index';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import {Container} from '../../Elements';
import { Button } from '@mui/material';
import { GeneralHeader } from '..';

const Questionnaire4 = (props) => {
  const params = useParams();  //params.no = 문제번호 (1~4)
  const history = useHistory();

    return(
      <React.Fragment>
        <GeneralHeader />
        <Grid margin="80px 0px 24px 0px">
            <Text color="#262626" size="large" bold >어떤 특징을 가진 식물을<br />좋아하시나요?</Text>
          </Grid>
            <SelectWrap>
              <ImageBox>
              <ImageWrap className='child'>
                <Image margin="0px auto" type="square" borderRadius="16px" size="100px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
              </ImageWrap>
              <TextWrap className='child'>
                <Text display="block" color="#262626" size="xsmall" margin="0px">부드러운</Text>
              </TextWrap>
              </ImageBox>
              <ImageBox>
                <ImageWrap className='child'>
                  <Image margin="0px auto" type="square" borderRadius="16px" size="100px"imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                </ImageWrap>
                <TextWrap className='child'>
                  <Text display="block" color="#262626" size="xsmall" margin="0px">아담한</Text>
                </TextWrap>
              </ImageBox>
              <ImageBox>
              <ImageWrap className='child'>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="16px" size="100px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                </ImageWrap>
                <TextWrap className='child'>
                <Text display="block" color="#262626" size="xsmall" margin="0px">쭉쭉 뻗은</Text>
                </TextWrap>
              </ImageBox>
            </SelectWrap>
            <SelectWrap2>
              <ImageBox>
              <ImageWrap className='child'>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="16px" size="100px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
                </ImageWrap>
                <TextWrap className='child'>
                <Text display="block" color="#262626" size="xsmall" margin="0px">뻗거나 감겨진</Text>
                </TextWrap>
              </ImageBox> 
              <ImageBox>
              <ImageWrap className='child'>
                <Image margin="0px auto 0px auto"  type="square" borderRadius="16px" size="100px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"></Image>
              </ImageWrap>
              <TextWrap className='child'>
                <Text display="block" color="#262626" size="xsmall" margin="0px">둥글게 펼쳐진</Text>
                </TextWrap>
              </ImageBox>
            </SelectWrap2>
            <Grid position="absolute" top="600px" right="100px"  align="center">
              <PrimaryBtn onClick={()=>props.submit()}>다음으로</PrimaryBtn>
          </Grid>
      </React.Fragment>
    )
}

const ImageBox = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin-bottom: 20px;
  &:hover .child{
    border: 2px solid #0AAF42;
    background-color: #DEFBE6;
    color: #0AAF42;
  }
`
const SelectWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
`
const SelectWrap2 = styled.div`
  // width: 100%;
  height: fit-content;
  margin: 0px 56px;
  display: flex;
  justify-content: space-between;
`
const ImageWrap = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
`
const TextWrap = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 6px 12px;
  border: 1px solid #F4F4F4;
  border-radius: 16px;
  margin: 8px auto;
`
const PrimaryBtn = styled.button`
  width: 167px;
  height: 44px;
  color: white;
  background-color: #0AAF42;
  text-align: center;
  border: none;
  border-radius: 16px;
`
export default Questionnaire4;
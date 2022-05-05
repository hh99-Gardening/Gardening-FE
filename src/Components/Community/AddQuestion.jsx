import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Text, Grid} from '../../Elements';
import { Button } from '@mui/material';

const AddQuestion = () => {
    const history = useHistory();
    const [questionTitle, setQuestionTitle] = React.useState("");
    const [questionContent, setQuestionContent] = React.useState("");


    const print = () => {
        console.log(questionTitle);
        console.log(questionContent);
    }

    return (
        <React.Fragment>
            <Header>
                <ArrowBackIosNewOutlinedIcon 
                onClick={()=> history.goBack()}></ArrowBackIosNewOutlinedIcon>
                <Text fontSize="18px" bold margin="0px">질문하기</Text>
                <Button disabled={questionTitle === "" || questionContent === ""} style={{width:"fit-content", height:"fit-content", fontSize:"18px"}} onClick={() =>print()}>완료</Button>
            </Header>
            <Grid padding="10px 4px" width="100%">
                <Input type="text" placeholder='제목을 입력해주세요' onChange={(e) => {setQuestionTitle(e.target.value)}}></Input>
            </Grid>
            <Grid padding="10px 4px" width="100%">
                <Textarea placeholder='내용을 입력해주세요' onChange={(e) => {setQuestionContent(e.target.value)}}></Textarea>
            </Grid>
        </React.Fragment>
    )
}
const Header = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
    margin: 30px 0px;
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #DDE1E6;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 600;
    }
`
const Textarea = styled.textarea`
    width: 100%;
    height: fit-content;
    border: none;
    font-size: 14px;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 600;
    }
`
export default AddQuestion;
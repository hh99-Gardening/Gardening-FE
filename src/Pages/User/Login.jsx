import { Input, Text, Grid, Container} from '../../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { KAKAO_AUTH_URL } from '../../Shared/OAuthKaKao.js';
import { GOOGLE_AUTH_URL } from '../../Shared/OAuthGoogle.js';

//2. 소셜 로그인 (구글 로그인)

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    console.log(userEmail, password);
    // dispatch(userActions.logIn(userEmail, password));
  }

  return (
    <React.Fragment>
      <Container>
      <Grid padding="144px 0px" width="100%" height="100vh">
        <InnerWrap>
          <InnerDiv>
            {/* 로고 */}
            <Text display="block" size="xxsmall" color="#0AAF42" >내 공간에 활기를 더해줄</Text>
            <Image src="img/CHOROK.svg" alt="logo"/>
          </InnerDiv>
          
          <InnerDiv style={{marginTop:"0px", position:"relative"}}>
            <img src="img/kakao 1.svg" style={{position:"absolute", top: "16px", left:"82px", zIndex:"100"}}/>
            <Button 
            href={KAKAO_AUTH_URL}
            variant='contained' 
            style={{display:"block", margin:"10px auto", width:"312px", height: "48px", alignItems:"center",  fontWeight:"700", backgroundColor:"#FEE500", padding:"14px", borderRadius:"6px", color:"#242424", boxShadow:"none"}}>카카오로 계속하기</Button>

            <img src="img/logo_google.svg" style={{position:"absolute", top: "72px", left:"88px", zIndex:"200"}}/>
            <Button 
            href={GOOGLE_AUTH_URL}
            variant='contained' 
            style={{display:"block", margin:"10px auto", width:"312px", fontWeight:"700",height: "48px", backgroundColor:"#FFFFFF ", borderRadius:"6px",  color:"#392020", boxShadow:"none"}}>구글로 계속하기</Button>

            <Button variant='text' 
              style={{display:"block", margin:"10px auto", width:"312px", height: "48px", backgroundColor:"#E0E0E0", color:"black", fontWeight:"700", borderRadius:"6px", border:"1px solid #E0E0E0", boxShadow:"none"}}
              onClick={()=>history.push('/logIn')}>이메일로 계속하기</Button>
          </InnerDiv>
          <InnerDiv style={{marginBottom:"10px"}}>
            {/* <form>
              <Input _onChange={(e)=>setUserEmail(e.target.value)} placeholder="이메일(아이디)" type="email" name="user_id" padding="0px 0px 0px 20px" height="52px"/>
              <Input _onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="비밀번호" name="user_pwd" padding="0px 0px 0px 20px" height="52px"/>
            </form>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}> 
              <Button variant='text' 
                style={{display:"block", margin:"10px auto", width:"fit-content", color:"#878D96"}} 
                onClick={()=>history.push('/findpwd')}>비밀번호 찾기</Button>
              <Button variant='text' 
                style={{display:"block", margin:"10px auto", width:"fit-content",  color:"#878D96"}} 
                onClick={()=>history.push('/signup')}>회원가입</Button>
            </div> */}
          </InnerDiv>
          <InnerDiv style={{display:"flex"}}>           
            <Button variant='text' 
                style={{display:"flex", margin:"10px 12px 10px 80px", width:"fit-content",  color:"#878D96", fontSize:"14px", fontWeight:"700"}} 
                onClick={()=>history.push('/signup')}>회원가입</Button>
            <Button variant='text' 
                style={{display:"flex", margin:"10px 80px 10px 12px", width:"fit-content",  color:"#878D96", fontSize:"14px", fontWeight:"700"}} 
                onClick={()=>history.push('/home')}>둘러보기</Button>
          </InnerDiv>
        </InnerWrap>
      </Grid>
      </Container>
    </React.Fragment>
    );
  }
  
const InnerWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0px auto;
`
const InnerDiv = styled.div`
width: 100%;
height: 100%;
margin: 20px auto;
text-align:center;
`
const Image = styled.img`
width: 179px;
height: fit-content;
margin: 10px auto 36px auto;
border-radius: 30px;
`
export default Login;
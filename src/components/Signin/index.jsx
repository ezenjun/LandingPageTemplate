import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {RiKakaoTalkFill} from "react-icons/ri";
import {PageContainer,MainContainer, WelcomeText, InputContainer, ButtonContainer, LoginWith, HorizontalRule, IconsContainer, ForgotPassword, Iconwrapper,BackIcon} from './SigninElements';
import {BiLeftArrowAlt} from 'react-icons/bi'
import Button from './Button';
import Icon from './Icon';
import Input from './Input';

const SignIn = () => {
    const FacebookBackground =
        "white";
    const InstagramBackground =
        "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground =
        "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
    const KakaoBackground =
    "#FEE500";

  return (
    <PageContainer>
        <MainContainer>
            <Iconwrapper to='/'>
                <BiLeftArrowAlt  to='/'/>
            </Iconwrapper>
            <WelcomeText>Contents NFT</WelcomeText>
            <InputContainer>
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </InputContainer>
            <ButtonContainer>
                <Button content="Sign Up" />
            </ButtonContainer>
            <LoginWith>OR LOGIN WITH</LoginWith>
            <HorizontalRule />
            <IconsContainer>
                <Icon color={FacebookBackground}>
                <FcGoogle />
                </Icon>
                {/* <Icon color={InstagramBackground}>
                <FaInstagram />
                </Icon> */}
                <Icon color={KakaoBackground}>
                <RiKakaoTalkFill color="black"/>
                </Icon>
            </IconsContainer>
            <ForgotPassword>Forgot Password ?</ForgotPassword>
        </MainContainer>
    </PageContainer>
  )
}

export default SignIn
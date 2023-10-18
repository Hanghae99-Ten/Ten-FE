import React, { useState, useRef, useMemo } from 'react';
import styled from 'styled-components';

import { Form, Formik, Field, ErrorMessage, FormikProps } from 'formik';

import * as Yup from 'yup';

import PP_SingInLogo from 'assets/PP_Logo.png';
import Mail from 'assets/icons/mail.svg?react';
import PassWord from 'assets/icons/password.svg?react';
import TextDelete from 'assets/icons/textDelete.svg?react';
import KakaoLogo from 'assets/oauth2/kakao.svg?react';
import NaverLogo from 'assets/oauth2/naver.svg?react';

import { Button } from 'element/Button';

interface SignValue {
  email: string;
  pw: string;
}

// 유효성 검사를 위한 yup
const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('이메일을 입력해주세요.')
    .matches(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, '올바른 이메일 형식이 아닙니다.'),
  password: Yup.string()
    .required('비밀번호를 입력해주세요.')
    .matches(/^[0-9a-zA-Z]{8,}$/, '비밀번호는 영문/숫자만 가능, 8자 이상입니다.'),
});

export const SignIn = () => {
  // const [isSubmitting, setSubmitting] = useState(false);

  const CurrentRef = useRef();

  const Kakao_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_SIGN_ID}&redirect_uri=${
    import.meta.env.VITE_KAKAO_RESCUEPETS
  }&response_type=code`;

  const Naver_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}&state=${
    import.meta.env.VITE_NAVER_API_SECRET
  }&redirect_uri=${import.meta.env.VITE_NAVER_RESCUEPETS}`;
  const kakaoSignUp = () => {
    window.location.href = Kakao_URL;
  };

  const NaverSignUp = () => {
    window.location.href = Naver_URL;
  };

  const LoginValues: SignValue = useMemo(
    () => ({
      email: '',
      pw: '',
    }),
    []
  );

  const onSubmit = async (values: any, actions: any) => {
    alert('회원가입 submit 완료');
  };

  return (
    <Container>
      <LoginContainer>
        <LogoArea>
          <img src={PP_SingInLogo} alt="SingInLogo" />
        </LogoArea>
        <Oauth2Area>
          <KakaoLoginBtn onClick={() => kakaoSignUp()}>
            <KakaoLogo />
            <p>카카오로 로그인</p>
          </KakaoLoginBtn>

          <NaverLoginBtn onClick={() => NaverSignUp()}>
            <NaverLogo />
            <p>네이버로 로그인</p>
          </NaverLoginBtn>
        </Oauth2Area>
        <Br>
          <div />
          <p>또는</p>
          <div />
        </Br>

        <Formik initialValues={LoginValues} onSubmit={onSubmit} validationSchema={ValidationSchema}>
          
          <FormArea>
            <div>
              <MailIcon />
              <Field type="email" name="email" placeholder="이메일 주소" />
              <TextDeleteIcon />
            </div>
            <div>
              <PassWordIcon />
              <Field type="password" name="pw" placeholder="비밀번호" />
              <TextDeleteIcon />
            </div>
            <LoginButton type="submit">로그인</LoginButton>
          </FormArea>
        </Formik>
        <LoginSubArea>
          <div>
            <p>비밀번호 재설정</p>
          </div>

          <div>
            <p>회원 가입</p>
          </div>
        </LoginSubArea>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.BoxCenter};
`;

const LoginContainer = styled.div`
  width: 26.25rem;
  height: 760px;
  ${({ theme }) => theme.FlexCol}
  ${({ theme }) => theme.FlexCenter}
`;

const LogoArea = styled.div`
  width: 100%;
  height: 150px;
  ${({ theme }) => theme.BoxCenter}
  > img {
    width: 126px;
    height: 107px;
    transform: rotate(-35deg);
  }
`;

const Oauth2Area = styled.div`
  width: 420px;
  height: 230px;
  ${({ theme }) => theme.FlexCol}
  ${({ theme }) => theme.FlexCenter}
  gap: 16px 0;
`;

const Br = styled.div`
  width: 420px;
  height: 70px;
  ${({ theme }) => theme.BoxCenter}
  gap: 0 10px;
  > div {
    width: 180px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray4};
  }
  > p {
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.Header_18_bold};
  }
`;

const FormArea = styled(Form)`
  width: 420px;
  height: 242px;
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
  gap: 15px 0;
  > div {
    position: relative;
    width: 100%;
    height: 68px;
    > svg {
      position: absolute;
    }
    > input {
      width: 420px;
      height: 100%;
      outline: none;
      padding: 0;
      border: 1px solid ${({ theme }) => theme.colors.gray3};
      border-radius: 6px;
      padding-left: 64px;
      font-size: 20px;
      &::placeholder {
        ${({ theme }) => theme.Body_500_24}
        font-weight: 300;
        color: ${({ theme }) => theme.colors.gray4};
      }
    }
    > .delete {
      z-index: 10;
      cursor: pointer;
    }
  }
`;

const MailIcon = styled(Mail)`
  bottom: 25px;
  left: 20px;
  :hover {
    background-color: red;
  }
`;

const PassWordIcon = styled(PassWord)`
  bottom: 25px;
  left: 20px;
`;

const TextDeleteIcon = styled(TextDelete)`
  bottom: 23px;
  right: 10px;
  &:hover {
    path {
      transition: all 0.2s ease-out;
      stroke: red;
      fill: black;
    }
  }
  &:active {
    path {
      transition: all 0.2s ease-out;
      stroke: red;
      fill: blue;
    }
  }
`;

const LoginSubArea = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div {
    width: 40%;
    height: 100%;
    ${(props) => props.theme.BoxCenter};
    > p {
      padding-top: 20px;
      ${(props) => props.theme.Body_700_16};
      font-weight: 500;
    }
  }
`;

const KakaoLoginBtn = styled(Button)`
  width: 420px;
  background-color: #f8e652;
  ${({ theme }) => theme.Body_500_24};
  gap: 10px;
  color: #3a1c1c;
  &:hover {
    transition: all 0.2s ease-out;
    transform: scale(1.02);
  }
`;

const NaverLoginBtn = styled(Button)`
  width: 420px;
  background-color: #65ce40;
  ${({ theme }) => theme.Body_500_24};
  gap: 10px;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    transition: all 0.2s ease-out;
    transform: scale(1.02);
  }
`;

const LoginButton = styled(Button)`
  width: 420px;
  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.Body_500_24};
  gap: 0 10px;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    transition: all 0.2s ease-out;
    transform: scale(1.02);
  }
`;

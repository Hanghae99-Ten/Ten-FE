import { useMemo } from 'react';
import { Button, Container, Stack, TextField, InputAdornment } from '@mui/material';
import styled from 'styled-components';

import { Form, Formik, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';

import PP_SingInLogo from 'assets/PP_Logo.png';
import Mail from 'assets/icons/mail.svg?react';
import PassWord from 'assets/icons/password.svg?react';
import TextDelete from 'assets/icons/textDelete.svg?react';
import KakaoLogo from 'assets/icons/kakao.svg?react';
import NaverLogo from 'assets/icons/naver.svg?react';

interface SignValue {
  email: string;
  password: string;
}

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('이메일을 입력해주세요.')
    .matches(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, '올바른 이메일 형식이 아닙니다.'),
  password: Yup.string()
    .required('비밀번호를 입력해주세요.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
      '영문, 숫자, 특수문자(@$!%*?&)를 최소 1개씩 포함해야 하며 8 ~ 12 글자내로 입력하세요'
    ),
});

export const Signin = () => {
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
      password: '',
    }),
    []
  );

  const onSubmit = async (values: any, actions: any) => {
    console.log(values);
    console.log(actions);
    alert('회원가입 submit 완료');
  };

  return (
    <Container maxWidth="sm">
      <Stack sx={{ mb: 10 }} alignItems="center">
        <Logo src={PP_SingInLogo} alt="SingInLogo" />
      </Stack>

      <Stack spacing={2} sx={{ mb: 2 }} alignItems="center">
        <Stack spacing={2}>
          <Button
            variant="contained"
            sx={{ width: '420px', height: 69, fontSize: 24, fontWeight: 'bold', backgroundColor: '#F8E652;' }}
            onClick={() => kakaoSignUp()}
          >
            <KakaoLogo style={{ marginRight: '18px' }} />
            카카오로 로그인하기
          </Button>
          <Button
            variant="contained"
            sx={{ width: '420px', height: 69, fontSize: 24, fontWeight: 'bold', backgroundColor: '#65CE40;' }}
            onClick={() => NaverSignUp()}
          >
            <NaverLogo style={{ marginRight: '18px' }} />
            네이버로 로그인하기
          </Button>
        </Stack>

        <Stack sx={{ mb: 2, width: '420px', height: 75 }}>
          <Br>
            <div />
            <p>또는</p>
            <div />
          </Br>
        </Stack>

        <Formik initialValues={LoginValues} onSubmit={onSubmit} validationSchema={ValidationSchema}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            /* and other goodies */
          }) => {
            // input 값 삭제 로직
            const onDeleteValue = (inputName: string) =>
              inputName === 'email' ? setFieldValue('email', '') : setFieldValue('password', '');

            return (
              <FormArea onSubmit={handleSubmit}>
                <Stack spacing={1} alignItems="center">
                  <TextField
                    type="email"
                    name="email"
                    placeholder="이메일 주소"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    helperText="아이디가 일치하지 않습니다."
                    sx={{ width: '420px', height: 69, fontSize: 24 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    helperText="비밀번호가 일치하지 않습니다."
                    sx={{ width: '420px', height: 69, fontSize: 24 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PassWord />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
                <Stack spacing={1} alignItems="center" sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: '420px', height: 69, fontSize: 24, fontWeight: 'bold', backgroundColor: '#4836FF' }}
                    // disabled
                  >
                    가입하기
                  </Button>
                </Stack>
              </FormArea>
            );
          }}
        </Formik>
        <Stack sx={{ width: '420px' }} direction="row" justifyContent="space-around">
          <p>비밀번호 찾기</p>
          <p>회원가입</p>
        </Stack>
      </Stack>
    </Container>
  );
};

const Logo = styled.img`
  width: 160px;
  height: 160px;
  transform: rotate(-35deg);
`;

const Br = styled.div`
  ${({ theme }) => theme.WH100};
  ${({ theme }) => theme.BoxCenter};
  gap: 0 10px;
  div {
    width: 180px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray4};
  }
  p {
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.Header_18_bold};
  }
`;

const FormArea = styled.form`
  ${({ theme }) => theme.WH100};
`;

// const Continer = styled.div`
//   width: 26.25rem;
//   height: 47.5rem;
//   ${({ theme }) => theme.FlexCol};
//   ${({ theme }) => theme.FlexCenter};
//   border: 1px solid red;
// `;

// const ImgArea = styled.div`
//   width: 100%;
//   height: 9.375rem;
//   ${({ theme }) => theme.BoxCenter};
// `;

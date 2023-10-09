import styled from 'styled-components';

import PP_SingInLogo from 'assets/PP_Logo.png';
import Mail from 'assets/icons/mail.svg?react';
import Password from 'assets/icons/password.svg?react';
import TextDelete from 'assets/icons/textDelete.svg?react';

export const SignIn = () => (
  <Container>
    <LoginContainer>
      <LogoArea>
        <img src={PP_SingInLogo} alt="SingInLogo" />
      </LogoArea>
      <Oauth2Area>
        <Mail />
        <Password />
        <TextDelete />
      </Oauth2Area>
    </LoginContainer>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.BoxCenter};
`;

const LoginContainer = styled.div`
  width: 26.25rem;
  height: 760px;
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
  border: 1px solid red;
`;

const LogoArea = styled.div`
  width: 100%;
  height: 150px;
  ${({ theme }) => theme.BoxCenter};
`;

const Oauth2Area = styled.div`
  width: 420px;
  height: 230px;
  ${({ theme }) => theme.FlexCol}
  ${({ theme }) => theme.FlexCenter}
  gap: 16.5008px 0;
`;

// const Br = styled.div`
//   width: 420px;
//   height: 70px;
//   ${props => props.theme.BoxCenter};
//   gap: 0 .625rem;
//   > div {
//     width: 180px;
//     height: 1px;
//     background-color:${props => props.theme.colorTheme.gary4};
//   }
//   > p {
//     color: ${props => props.theme.colorTheme.gary4};
//     ${props => props.theme.Header_18_bold}
//   }
// `;

// const InputArea = styled.form`
//   width: 420px;
//   height: 242px;
//   ${props => props.theme.FlexCol};
//   ${props => props.theme.FlexCenter};
//   gap: .9375rem 0;
//   > div {
//     position: relative;
//     width: 100%;
//     height: 68px;
//     > svg {
//       position: absolute;
//       bottom: 1.5625rem;
//       left: 1.25rem;
//     }
//     > input {
//       width: 356px;
//       outline: none;
//       padding: 0;
//       border: .0625rem solid #9A9A9A;
//       border-radius: 6px;
//       height: 100%;
//       padding-left: 64px;
//       font-size: 1.25rem;
//       &::placeholder{
//         ${props => props.theme.Body_500_24};
//         font-weight: 300;
//         color: ${props => props.theme.colorTheme.gray4}
//       }
//     }

//     > .delete {
//         position: absolute;
//         bottom: 1.375rem;
//         left: 23.75rem;
//         cursor: pointer;
//       }
//   }
// `;

// const LoginSubArea = styled.div`
//   width: 100%;
//   height: 30px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   > div {
//     width: 40%;
//     height: 100%;
//     ${props => props.theme.BoxCenter};
//     > p {
//       padding-top: 20px;
//       ${props => props.theme.Body_700_16};
//       font-weight: 500;
//     }
//   }

// `;

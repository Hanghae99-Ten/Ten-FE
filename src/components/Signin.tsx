import styled from "styled-components"
import  PP_SinginLogo  from "@assets/PP_LOGO.png"

const Signin = () => {
  return (
    <Continer>
      <ImgArea>
         <img src={PP_SinginLogo} alt="SinginLogo"/>
      </ImgArea>
    </Continer>
  )
}

export default Signin

const Continer = styled.div`
  width: 26.25rem;
  height: 47.5rem;
  ${({theme}) => theme.FlexCol};
  ${({theme}) => theme.FlexCenter};
  border: 1px solid red;
`;

const ImgArea = styled.div`
  width: 100%;
  height: 9.375rem;
  ${({theme}) => theme.BoxCenter};
`;

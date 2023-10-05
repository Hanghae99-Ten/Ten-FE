import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
  return (
    <MainCard>
       <Outlet/>
    </MainCard>  
  )
}

export default Layout

const MainCard = styled.main`
  width: 100%;
  min-height: 67.5rem;
  ${({theme}) => theme.FlexCol};
  ${({theme}) => theme.FlexCenter};
  background-color: ${({theme}) => theme.bgColor};
`;

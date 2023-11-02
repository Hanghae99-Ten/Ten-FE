import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

// project import
import { Header } from 'layout';

export const Layout = () => (
  <>
    <Header />
    <MainCard>
      <Outlet />
    </MainCard>
  </>
);

const MainCard = styled.main`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
  background-color: ${({ theme }) => theme.bgColor};
`;

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => (
  <MainCard>
    <Outlet />
  </MainCard>
);

const MainCard = styled.main`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
  background-color: ${({ theme }) => theme.bgColor};
`;

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

// project import
import { Header } from 'layout';
import { Stack } from '@mui/material';

export const Layout = () => (
  <>
    <Header />
    <MainCard>
      <Stack sx={{ minHeight: '80px', padding: 1, width: '100%' }} />
      <Outlet />
    </MainCard>
  </>
);

const MainCard = styled.main`
  width: 100%;
  height: 1216px;
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
  background-color: ${({ theme }) => theme.bgColor};
`;

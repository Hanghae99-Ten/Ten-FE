import { Outlet } from 'react-router-dom';
import ScrollTop from 'components/ScrollTop';

// ==============================|| LAYOUT - BLANK PAGES ||============================== //

const PagesLayout = () => (
  <ScrollTop>
    <Outlet />
  </ScrollTop>
);

export default PagesLayout;

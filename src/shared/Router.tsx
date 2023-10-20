import { BrowserRouter, Route, Routes } from 'react-router-dom';

// project import
import { Layout } from 'layout';
import { Home, TeamPlan } from 'pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='team-plan' element={<TeamPlan />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;

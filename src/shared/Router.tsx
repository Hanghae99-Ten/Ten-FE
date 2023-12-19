import { BrowserRouter, Route, Routes } from 'react-router-dom';

// project import
import { Layout } from 'layout';
import { Home, SignUp } from 'pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;

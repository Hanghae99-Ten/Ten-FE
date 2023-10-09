import { BrowserRouter, Route, Routes } from 'react-router-dom';

// project import
import { Layout } from 'layout';
import { Home, SignIn } from 'pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

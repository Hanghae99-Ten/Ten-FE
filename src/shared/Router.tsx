import { BrowserRouter, Route, Routes } from 'react-router-dom';

// project import
import { Layout } from 'layout';
import { Home, Post, SignIn, SignUp } from 'pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;

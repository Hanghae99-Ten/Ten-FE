import { BrowserRouter, Route, Routes } from 'react-router-dom';

// project import
import { Layout } from 'layout';
import { Home, Post, SignIn, SignUp, MypageSetting } from 'pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post" element={<Post />} />
        <Route path="/mypagesetting" element={<MypageSetting />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;

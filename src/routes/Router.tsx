import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@layout/Layout'
import Home from '@components/Home'
import Signin from '@components/Signin'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
          </Route>
        </Routes>
  </BrowserRouter>
  )
}

export default Router
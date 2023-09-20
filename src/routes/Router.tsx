import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@layout/Layout'
import Home from '@components/Home'
import Login from '@components/Login'

const Router = () => {
  return (
    <BrowserRouter>

        <Routes>

          <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
          </Route>

          <Route path="/login" element={<Login />} />

    
        </Routes>

  </BrowserRouter>
  )
}

export default Router
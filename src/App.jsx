import "./global.css"
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import RootContainer from "./components/RootContainer/RootContainer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import { BiSolidSearchAlt2 } from 'react-icons/bi'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path=":cityName" element={<Home />} />
    <Route path="search" element={<Search />} />
    <Route path="profile" element={<Profile />} />
  </Route>
))

function RootLayout() {
  return (
    <div style={{maxWidth: "100%", height: "100lvh" }}>
      <RootContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '30px', padding: '30px', backgroundColor: 'rgb(238, 239, 239)' }}>

          <Navbar />
          <Link to="/search"><BiSolidSearchAlt2 /></Link>
        </div>
        <Outlet />
      </RootContainer>
    </div>
  )
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
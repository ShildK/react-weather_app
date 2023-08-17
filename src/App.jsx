import "./global.css"
import { Route, RouterProvider, Outlet, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import { } from "react-router-dom";
import { } from "react-router-dom";
import { } from "react-router-dom";
import { } from "react-router-dom";
import { } from "react-router-dom";

import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import RootContainer from "./components/RootContainer/RootContainer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


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
    <div style={{ maxWidth: "100%", height: "100lvh" }}>
      <RootContainer>
        <Navbar />
        <Outlet />
      </RootContainer>
    </div>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
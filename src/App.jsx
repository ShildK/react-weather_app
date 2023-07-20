import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Search from "./components/search";
import Home from "./Home";
import RootContainer from "./components/RootContainer/RootContainer";
import "./global.css"
import { BiSolidSearchAlt2 } from 'react-icons/bi'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path=":cityName" element={<Home />} />
    <Route path="search" element={<Search />} />
    <Route path="profile" element={<ProfilePage />} />
  </Route>
))

function ProfilePage() {
  return <h1>Profile</h1>
}



function RootLayout() {
  return (
    <div style={{ height: "100lvh" }}>

      <RootContainer>
        <div style={{ display: 'flex', gap: '30px', padding: '30px', backgroundColor: 'rgb(238, 239, 239)' }}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
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
import { Outlet } from "react-router-dom"
import { Navbar } from "./navbar/Navbar"
import {Footer} from "./footer/Footer"//


const Layout = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div style={{minHeight:"80vh"}}>
            <Outlet/>
        </div>
        <div className=" footer">
        {/*<Footer/>*/}
        </div>
    </div>
  )
}

export default Layout
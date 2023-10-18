import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
//import * as XLSX from 'xlsx'
//import Excel from "exceljs";


import Login from "./webpages/Login";
import AboutMe from "./webpages/AboutMe";
import Infomation from "./webpages/Infomation";
import Blogs from "./webpages/Blogs";



function NoMatch() {
  return (
    <div>No match</div>
  )
}

export function RoutingPages() {
  UseEffect(
    ()=>{}
)
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <nav>
<Link to="/Infomation" style={{padding:10}}>Infomation</Link>
<Link to="/AboutMe">About Me</Link>

      </nav>
        Hello!
       <Routes>
       <Route path="*" element={<NoMatch/>}></Route>
           <Route path="/Login" element={<Login/>}></Route> 
          <Route path="/AboutMe" element={<AboutMe/>}></Route>       
          <Route path="/Infomation" element={<Infomation/>}></Route>       
          <Route path="/Blogs" element={<Blogs/>}></Route>
          </Routes>
        </BrowserRouter>   
      </header>
    </div>
  );
}
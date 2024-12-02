import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Sidebar from "./Pages/Sidebar.js"
import Home from "./Pages/Home.js"
import Header from "./Pages/Header.js"
import { useState } from 'react';

function App() {
  const [isSidebarCollapsed,setIsSidebarCollapsed]=useState(false)
  
  const toggleSidebar=()=>{
    setIsSidebarCollapsed(prev=>!prev)
  }
  
  return (
    <div className="App">
     <Router>
      <Header/>
      <div style={{display:"flex"}}>
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar}/>
        <div style={{marginLeft:isSidebarCollapsed?"120px":"240px",marginTop:"90px"}}//,marginTop:"80px"
        >
          <Home/>
          {/*<Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>*/}
        </div>
      </div>
     </Router>
    </div>
  );
}

export default App;

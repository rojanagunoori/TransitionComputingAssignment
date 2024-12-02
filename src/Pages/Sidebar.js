import React, { useState } from 'react'
import "./sidebar.css"
import { Link, NavLink } from 'react-router-dom'
import { TbReportSearch } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { GiStarsStack } from "react-icons/gi";
import { FiTool } from "react-icons/fi";
import { BsBox, BsPeopleFill } from "react-icons/bs";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaChartPie, FaCogs, FaComment, FaComments, FaFileAlt, FaFill, FaGreaterThan, FaLessThan, FaLink, FaPaintBrush, FaPalette, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FcFlowChart } from "react-icons/fc";
import { RiFileCheckLine } from "react-icons/ri";
import { PiNumberCircleOne, PiNumberCircleTwo } from "react-icons/pi";

const imageLogo = "https://static.wixstatic.com/media/5ce010_4a8fe93d93e34469a64848088d346a38~mv2.png/v1/fill/w_369,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo2.png"

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
    const [dropdowmState, setDropdownState] = useState({
        internalAudit: false,
        options: false,
        interact: false,
        decorating: false
    })

    const toggleDropdown = (section) => {
        setDropdownState({ ...dropdowmState, [section]: !dropdowmState[section] })
    }

    return (
        <>
         {/*<div className='sidebar-logo'><NavLink to="/"><img src={imageLogo} alt="logo" className='logo-image' /></NavLink></div>*/}
        <div className={`sidebar ${isCollapsed?"collapsed":""}`}>
            <button className='toggle-sidebar-btn' onClick={toggleSidebar}>
                {isCollapsed ? <FaAngleLeft /> : <FaAngleRight />}
            </button>
            <ul className={`sidebar-content  ${isCollapsed?"collapsed":""}`}>
               
                <li>
                    <button type='button' onClick={() => toggleDropdown("internalAudit")}>
                       <div className='button-flex'> <span className='icon'><TbReportSearch size={24} /></span> {isCollapsed ? "" : "Internal Audit"}</div>
                        {dropdowmState.internalAudit ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    {dropdowmState.internalAudit && (
                        <ul className='submenu'>
                            <li><NavLink to="/overview" activeClassName="active"><span className='icon'><FaFileAlt size={24} /></span> {isCollapsed?"":"OverView"}</NavLink></li>
                            <li><NavLink to="/reports" activeClassName="active"><span className='icon'><FaChartPie size={24}/></span> {isCollapsed?"":"Reports"}</NavLink></li>
                            <li><NavLink to="/settings" activeClassName="active"><span className='icon'><FaCogs size={24}/></span> {isCollapsed?"":"Settings"}</NavLink></li>
                        </ul>
                    )}
                </li>
                <li>
                    <NavLink to="/uat-testing" activeClassName="active">
                    <span className='icon'><RiFileCheckLine size={24} /></span> {isCollapsed ? "" : "UAT Testing"}
                    </NavLink>
                </li>
                <li>
                    <button type='button' onClick={() => toggleDropdown("interact")}>
                    <div className='button-flex'><FaLink size={24} /> {isCollapsed ? "" : "Intract"}</div> {dropdowmState.interact ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    {dropdowmState.interact && (
                        <ul className='submenu'>
                            <li><NavLink to="/chat" activeClassName="active"><span className='icon'><FaComments size={24}/></span> {isCollapsed?"":"Chat"}</NavLink></li>
                            <li><NavLink to="/calls" activeClassName="active"><span className='icon'><FaPhoneAlt size={24}/></span> {isCollapsed?"":"Calls"}</NavLink></li>
                        </ul>
                    )}
                </li>
                <li>
                    <NavLink to="/queue" activeClassName="active">
                    <span className='icon'><BsPeopleFill size={24} /></span> {isCollapsed ? "" : "Queue"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/workflow" activeClassName="active">
                    <span className='icon'><FcFlowChart size={24} /></span> {isCollapsed ? "" : "Workflow"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin" activeClassName="active">
                    <span className='icon'><FaUser size={24} /></span> {isCollapsed ? "" : "Admin"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/asset" activeClassName="active">
                    <span className='icon'><BsBox size={24} /></span> {isCollapsed ? "" : "Asset"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/parent" activeClassName="active">
                        <BsPeopleFill size={24} /> {isCollapsed ? "" : "Parent"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/option1" activeClassName="active">
                    <span className='icon'><PiNumberCircleOne size={24} /></span> {isCollapsed ? "" : "Option 1"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/option2" activeClassName="active">
                    <span className='icon'><PiNumberCircleTwo size={24} /></span> {isCollapsed ? "" : "Option 2"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/all-accessories" activeClassName="active">
                    <span className='icon'><FiTool size={24} /></span> {isCollapsed ? "" : "All Accessories"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/internal-audit" activeClassName="active">
                    <span className='icon'><TbReportSearch size={24} /></span> {isCollapsed ? "" : "Internal Audit"}
                    </NavLink>
                </li>
                <li>
                    <button type='button' onClick={()=>toggleDropdown("decorating")}>
                    <div className='button-flex'><GiStarsStack size={24} /> {isCollapsed ? "" : "Decorating"}</div> {dropdowmState.decorating?<FaAngleUp/>:<FaAngleDown/>}
                    </button>
                    {dropdowmState.decorating && (
                        <ul className='submenu'>
                            <li><NavLink to="/design" activeClassName="active"><span className='icon'><FaPalette size={24}/></span> {isCollapsed?"":"Design"}</NavLink></li>
                            <li><NavLink to="/themes" activeClassName="active"><span className='icon'><FaPaintBrush size={24}/></span> {isCollapsed?"":"Themes"}</NavLink></li>
                            <li><NavLink to="/colors" activeClassName="active"><span className='icon'><FaFill size={24}/></span> {isCollapsed?"":"Colors"}</NavLink></li>
                        </ul>
                    )}
                </li>
                <li>
                    <NavLink to="/presenting" activeClassName="active">
                    <span className='icon'><CiGift size={24} /></span> {isCollapsed ? "" : "Presenting"}
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar
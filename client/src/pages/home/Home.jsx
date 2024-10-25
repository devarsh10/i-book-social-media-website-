import "./home.css"
import Topbar from '../../components/topbar/Topbar.jsx'
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import Feed from "../../components/feed/Feed.jsx"
import Rightbar from "../../components/rightbar/Rightbar.jsx"
import React from "react";
import {useState, useEffect} from "react";
const {useLocation} = require("react-router-dom");
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
// import { LoginContext } from "../contexts/LoginContext.jsx"



export default function Home() {

  const [openMenu, setOpenMenu] = useState(true);

  const path = 'https://i-book-backend.onrender.com';
  const PATH = process.env.REACT_APP_PATH_TO_BACKEND || 'http://localhost:8000'

  const {state } = useLocation();
  // const [user, setUser] = useState({});

  const {user} = useContext(AuthContext)
  // console.log("user data =",user)

  useEffect(()=>{
    const fetchUsers = async ()=>{
      const response = await axios.get(`${PATH}/api/user?username=${user.username}`)
      // setUser(response.data)
      console.log(response)
      
    }
    fetchUsers();
    // console.log("post =",user)
  }, [])

  return (
      <>
          <Topbar menu={openMenu} setmenu={setOpenMenu} />
          <div className="home-container">
            <Sidebar open={openMenu} />
            <Feed />
            <Rightbar user={user} />
          </div>
        
      </>
  )
}

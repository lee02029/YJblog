import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";


import "./home.css"

export default function Home() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts")
            console.log(res)
        }
    },[])
    return (
        <>
            <Header/>
            <div className="home">
                <Posts />                          
                <Sidebar/>                          
            </div>
        </>
    )
}

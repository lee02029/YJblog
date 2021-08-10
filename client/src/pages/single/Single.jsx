import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlepost/Singlepost'

export default function single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar />         
        </div>
    )
}

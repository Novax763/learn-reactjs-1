import React from 'react'
import { Route, Routes, Link } from "react-router-dom";


export default function HomeRouteApps() {
    return (
      <>
        <div
          className="flex"
          style={{ backgroundColor: "teal", width: "90%", height: "50vh" }}
        >
          <h2> this is body 1 </h2>
        </div>
        <div
          className="flex"
          style={{backgroundColor: "peru"
            ,width: "200px"
            ,height: "50px",
            borderRadius: "20px"
          }}
        >
            <Link to="/">
                <h3> Go To Home Page </h3>
            </Link>
        </div>


      </> 
    );
}

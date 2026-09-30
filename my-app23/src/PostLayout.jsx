import React from 'react'
import { Outlet } from 'react-router-dom';

export default function PostLayout() {
  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "50px",
          textAlign: "center",
          backgroundColor: "green",
        }}
      >
        <h1>This is post Header</h1>
      </nav>

      <hr style={{ margin: "20px 5px" }} />
      <div>
        <Outlet />
      </div>

      <hr style={{ margin: "20px 5px" }} />

      <nav
        style={{
          width: "100%",
          height: "50px",
          textAlign: "center",
          backgroundColor: "green",
        }}
      >
        <h1>This is post Footer</h1>
      </nav>
    </>
  );
}

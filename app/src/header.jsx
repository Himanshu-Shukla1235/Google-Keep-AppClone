import React from "react";
import "./header.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@mui/icons-material/Home";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import InfoIcon from '@mui/icons-material/Info';
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>H</h1>{" "}
        </div>
        <div className="navbar">
          {" "}
          <nav>
            <ul>
              <li>
                <HomeIcon className="navicons"></HomeIcon>
                <a href="">Home</a>{" "}
              </li>
              <li>
               <InfoIcon className="navicons"></InfoIcon> <a href=""> About</a>{" "}
              </li>
              <li>
                <CallSharpIcon className="navicons"></CallSharpIcon> <a href="">Contact</a>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

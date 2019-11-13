import React from "react";
import Nav from "./nav"
import "bootstrap/dist/css/bootstrap.min.css";

function Layout({children}){

    return(
        <div>
            <div>
                <Nav/>
            </div>
            {children}
        </div>
    );
}
export default Layout;
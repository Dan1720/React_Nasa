import React from "react";
import Header from "./Header";

function MainTemplate(props){
    const {
        children,
        navItems,
        logo
    } = props;

    return (
        <>
            <Header
                logo={logo}
                navItems={navItems}
            />
            <div className="my-5">
                {children}
            </div>
        </>
    )
}

export default MainTemplate;

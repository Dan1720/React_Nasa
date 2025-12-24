import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function MainTemplate(props){
    const {
        children,
        navItems,
        logo,
        nasa_logo,
        bicocca
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
            <Footer
                nasa_logo = {nasa_logo}
                bicocca = {bicocca}
            />
        </>
    )
}

export default MainTemplate;

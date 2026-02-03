import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./MainTemplate.css"

function MainTemplate(props){
    const {
        children,
        navItems,
        logo,
        nasa_logo,
        bicocca
    } = props;

    return (
        <div className="app-container">
            <Header
                logo={logo}
                navItems={navItems}
            />
            <main className="content my-5">
                {children}
            </main>
            <Footer
                nasa_logo = {nasa_logo}
                bicocca = {bicocca}
            />
        </div>
    )
}

export default MainTemplate;

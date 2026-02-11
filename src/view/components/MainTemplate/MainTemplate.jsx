import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./MainTemplate.module.css"

function MainTemplate(props){
    const {
        children,
        navItems,
        logo,
        nasa_logo,
        bicocca
    } = props;

    return (
        <div className={style.appContainer}>
            <Header
                logo={logo}
                navItems={navItems}
            />
            <main className={`${style.content} my-5`}>
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

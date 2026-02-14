import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./MainTemplate.module.css"

/**
 * Componente MainTemplate.
 * 
 * Si occupa di:
 * - Fornire la struttura base dell'applicazione
 * - Includere Header, Footer e la sezione centrale per i contenuti
 * - Passare ai componenti figli (children) i dati necessari tramite props
 * 
 */
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
            {/* Navbar principale */}
            <Header
                logo={logo}
                navItems={navItems}
            />
             {/* Sezione principale dove vengono renderizzati i children */}
            <main className={`${style.content} my-5`}>
                {children}
            </main>
            {/* Footer */}
            <Footer
                nasa_logo = {nasa_logo}
                bicocca = {bicocca}
            />
        </div>
    )
}

export default MainTemplate;

import React, { useState } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

/**
 * Componente Header.
 * 
 * Si occupa di:
 * - Mostrare la navbar principale dell'applicazione
 * - Renderizzare dinamicamente i link di navigazione
 * - Gestire il comportamento responsive (collapsing menu)
 */
const Header = (props) => {
    // Props ricevute dal MainTemplate
    const { logo, navItems } = props;

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    /**
     * Genera dinamicamente la lista degli elementi di navigazione
     * a partire dall'array navItems passato tramite props.
     */
    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <NavLink to={item.url}
                    className="nav-link">
                        {item.text}
                </NavLink>
            </NavItem>
        )
    });

    return (
        <div className={style.navBar}>
            <Navbar expand="md" dark>
                <div className={`container ${style.navbarContainer}`}>
                    {/* Logo principale che reindirizza alla Home */}
                    <NavLink to="/">
                        <img className={style.logo} src={logo} alt=""/>
                    </NavLink>
                    {/* Bottone visibile su mobile per aprire/chiudere il menu */}
                    <NavbarToggler onClick={toggle}/>
                    {/* Sezione collapsable per la navigazione responsive */}
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {itemList}
                        </Nav>
                    </Collapse>

                </div>
            </Navbar>
        </div>
    )
}

export default Header;
import React from 'react';
import style from './Footer.module.css';

/**
 * Componente Footer.
 * 
 * Si occupa di:
 * - Mostrare il logo della NASA in fondo alla pagina
 * - Fornire un link esterno al sito ufficiale della NASA
 * 
 */
const Footer = (props) => {
    // Props ricevute: logo della NASA
    const { nasa_logo} = props
    return (
        <footer className={style.footer}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-auto">
                        <div className={`d-flex ${style.copyright}`}>
                            <div id={style.nasa}>
                                <a href="https://www.nasa.gov/" target="_blank">
                                    <img className={style.logo} src={nasa_logo} alt="unimib"/>
                                </a>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
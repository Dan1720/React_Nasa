import React from 'react';
import style from './Footer.module.css';

const Footer = (props) => {
    const { nasa_logo, bicocca } = props
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
                            <div id={style.unimib} className={style.logo}>
                                <a href="https://www.unimib.it/" target="_blank">
                                    <img className={style.logo} src={bicocca} alt="unimib"/>
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
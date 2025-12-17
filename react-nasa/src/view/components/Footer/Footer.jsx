import React from 'react';
import style from './Footer.module.css';

const Footer = (props) => {
    const { nasa_logo } = props
    return (
        <footer className={style.footer}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-auto">
                        <div className={`d-flex ${style.copyright}`}>
                            <img className={style.logo} src={nasa_logo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
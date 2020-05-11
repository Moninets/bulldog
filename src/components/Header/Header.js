import React from "react";
import Logo from "../image/logo_bulldog.png";

const Header = () => {
    return (
        <div className='header'>
            <h1>
                <img src={Logo} alt="Logo"/>
            </h1>

            <ul>
                <a href='#'>About</a>
                <a href='#'>Services</a>
                <a href='#'>Gallery</a>
                <a href='#'>Testimonials</a>
                <a href='#'>Locations</a>
                <a href='#'>Contact</a>
            </ul>
        </div>
    );
};
export default Header;

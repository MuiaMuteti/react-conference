import './NavigationBar.css'

import { NavLink } from 'react-router-dom';
import { React, useState } from 'react';

import Logo from './Logo';

import menuIcon from './images/menu.svg';
import crossIcon from './images/cross.svg';

// a responsive navigation bar
export default function NavigationBar() {
    
    // controls opening and closing of the menu
    const [showLinks, setShowLinks] = useState(false);

    // use mediaQuery to set showLinks to false for min-width: 1024px
    // if the menu bar was open on a small device, it disappears on large devices,
    // setting showLinks to false ensures it does not reappear when we resize to a small window
    const [mediaQuery, /*setMediaQuery*/] = useState(window.matchMedia("(min-width: 1024px)"));

    mediaQuery.addEventListener("change", mediaQueryListEvent => {
        if (mediaQueryListEvent.matches) {
            setShowLinks(false);
        }
    });

    // sets showlinks, hiding or showing the links
    function handleMenuClick() {
        setShowLinks(!showLinks);
    }

    // if any of the links is clicked hide the menu on small devices
    function handleLinkClick(event) {
        if (showLinks) {
            setShowLinks(false);
        }
    }

    // navigation links
    const links = (
        <div 
            id="links"
            // the 'active' class shows the hidden menu  
            className={(showLinks? "active" : "")} >
            <NavLink
                id="homeLink" 
                to="/home" 
                activeClassName="activeLink" 
                onClick={handleLinkClick} >
                    Home
            </NavLink>
            <NavLink 
                to="/schedule" 
                activeClassName="activeLink" 
                onClick={handleLinkClick} >
                    Schedule
            </NavLink>
            <NavLink 
                to="/location" 
                activeClassName="activeLink" 
                onClick={handleLinkClick} >
                    Location
            </NavLink>
            <NavLink 
                to="/food_and_accomodation" 
                activeClassName="activeLink" 
                onClick={handleLinkClick} >
                    Food and Accomodation
            </NavLink>
            <NavLink 
                to="/code_of_conduct" 
                activeClassName="activeLink" 
                onClick={handleLinkClick} >
                    Code of Conduct
            </NavLink>
        </div>
     );
    return (
        // the navigation bar fills the screen if the menu is open
        <nav className={"navBar" + (showLinks? " open" : "")} >
            <div id="icons" >
                <Logo handleLinkClick={handleLinkClick}></Logo>
                
                <button 
                    id="menu"
                    onClick={handleMenuClick} >
                        <img 
                        // if menu is open show close menu, otherwise open menu image
                        src={ showLinks? crossIcon : menuIcon } alt="menu" />
                </button>
            </div>

            { links }
            
        </nav>
    );
}
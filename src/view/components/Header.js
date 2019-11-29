import React from 'react'

const Header = (props) => {

    return (
        //Ovo sam kopirala sa materilecss.com    
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )

}

export default Header
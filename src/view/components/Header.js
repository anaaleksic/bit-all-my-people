import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../Main.js'


const Header = (props) => {

    return (
        //Ovo je sa materialize.com    
        <nav>
            <div>


                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li> <Link to='/about'> About Page </Link></li>

                </ul>


                <h4 id="bit-title"><Link to='/react-users'>Bit People </Link></h4>


            </div>
        </nav>

    )

}
export default Header
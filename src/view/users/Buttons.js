import React from 'react'

const Buttons = (props) => {
    return (

        <li><a onClick={props.loadUsers}><i class="material-icons reload">refresh</i></a></li>


    )
}

export default Buttons;
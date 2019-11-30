import React from 'react'

const UserItem = (props) => {
    return (
        <li className="collection-item avatar">
            <img src={props.user.image} alt="" class="circle" />

            <span className="title">{props.user.name}.</span>

            <p><i class="tiny material-icons"></i>{props.user.protectEmail()} <br /> </p>

            <p><i class="tiny material-icons">cake</i> {props.user.dob}<br /> </p>
        </li>
    )

}

export default UserItem;
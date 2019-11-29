import React from 'react'

const UserItem = (props) => {
    return (
        <li className="collection-item avatar">
            <img src={props.user.image} alt="" class="circle" />

            <span className="title">First Name</span>

            <p><i class="tiny material-icons">email</i>Email <br /> </p>

            <p><i class="tiny material-icons">cake</i>Birthday <br /> </p>
        </li>
    )

}

export default UserItem;
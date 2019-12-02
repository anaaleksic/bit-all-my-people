import React from 'react'
import Grid from './Grid'

const UserCard = (props) => {
    return (

        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    < div img src={props.user.image1}>
                        <span class="card-title">{props.user.name}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                        <p>{props.user.name}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserCard;
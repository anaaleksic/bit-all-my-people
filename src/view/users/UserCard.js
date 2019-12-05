import React from 'react'
import Grid from './Grid'

const UserCard = (props) => {


    return (

        <div className="col s12 m4">


            <div className="card">
                <div className="card-image">

                    <span className="card-title">{props.user.name}</span>
                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>

                    <div className="card-content" className="collection-item avatar">

                        <img src={props.user.image} />

                        <p>{props.user.name}</p>
                        <p>{props.user.protectEmail()}</p>
                        <p>{props.user.dob}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserCard;
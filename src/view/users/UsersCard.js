import React from 'react'
import Grid from './Grid'

const UsersGrid = (props) => {
    return (

        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    < div img src={props.user.image1}>
                        <span class="card-title">{props.user.name}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
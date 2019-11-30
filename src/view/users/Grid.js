import React from 'react'
import UserPage from './UsersPage'
import UsersCard from './UsersCard'

const Grid = (props) => {
    return (
        <>
            <div className='row'>
                {props.users.map(userFromArr => <UsersCard user={userFromArr} />)}
            </div>
        </>
    )
}

export default Grid;
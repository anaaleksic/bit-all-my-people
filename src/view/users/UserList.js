import React from 'react'
import UserItem from './UserItem'


/*
class UserLists extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // <UserItem /> to znaci da pozivamo
            <>
                {this.props.users.map(userFromArr => <UserItem user={userFromArr})}
            </>
        )

    }
}*/

const UserLists = (props) => {

    return (
        <ul className="collection">
            {props.users.map(userFromArr => <UserItem user={userFromArr} />)}
        </ul>
    )
}

export default UserLists;
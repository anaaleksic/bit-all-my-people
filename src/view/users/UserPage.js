import React from 'react'
import UserList from './UserList'
import { fetchUsers } from '../../services/UserServices'


class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

    }

    // componentDidMount() {
    //     fetchUsers()
    //         .then(users => this.setState({ users: users })) //ovo se cuva u state
    // }

    loadUsers() {
        fetchUsers()
            .then(users => this.setState({ users: users })) //ovo se cuva u state
    }


    render() {
        return (
            <>
                <button onClick={() => this.loadUsers()} > sdf</button>
                <UserList users={this.state.users} />
            </>
        )
    }
}

export default UsersPage;

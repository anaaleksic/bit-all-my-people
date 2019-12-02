import React from 'react'
import UserList from './UserList'
import { fetchUsers } from '../../services/UserServices'
import Grid from './Grid'

import SearchBox from './SearchBox'
import Buttons from './Buttons';


class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        fetchUsers()
            .then(users => this.setState({ users: users })) //ovo se cuva u state
    }


    render() {
        return (
            <>
                <SearchBox></SearchBox>
                <Buttons loadUsers={this.loadUsers} />



                <UserList users={this.state.users} />
                <Grid />
            </>

        )
    }
}

export default UsersPage;

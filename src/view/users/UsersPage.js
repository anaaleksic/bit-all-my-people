import React from 'react'
import UserList from './UserList'
import { fetchUsers } from '../../services/UserServices'
import Grid from './Grid'

import SearchBox from './SearchBox'
import Buttons from './Buttons'
import ActionButtons from './ActionButton';


class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGrid: false,
            users: [],
            query: "",
            isLoading: true
        };

    }
    onSearch = (val) => {
        this.setState({ query: val })
    }



    componentDidMount() {
        this.loadUsers();

    }

    loadUsers = () => {
        fetchUsers()
            .then(users => this.setState({ isLoading: false, users: users })) //ovo se cuva u state
    }


    /*
        render = () => {
            if (this.state.isLoading) {
                console.log("loading data")
                return <UserList users={this.state.users} />
            }
    
            const filteredUsers = this.state.users.filter(user => user
                .getName()
                .includes(this.state.query.toLowerCase())
                    const femaleSearch = filteredUsers.filter((element) => element.gender === "female")
            const maleSearch = filteredUsers.filter((element) => element.gender === "male")
    
        }
    
    
        console.log(femaleSearch);
    
    
    */

    onLayoutChange = () => this.setState(prevState => {
        return {
            isGrid: !prevState.isGrid
        }
    })
    //localStorage.setItem("isGrid", !this.state.isGrid);




    render() {
        const component = this.state.isGrid
            ? <Grid users={this.state.users} />
            : <UserList users={this.state.users} />

        return (
            <>
                <SearchBox></SearchBox>
                <Buttons loadUsers={this.loadUsers} onLayoutChange={this.onLayoutChange} />
                {component}
            </>

        )
    }




    /*
    
        if(this.state.isGrid) {
            return <>
                <div className="row">
                    <SearchBox onSearch={this.onSearch} />
                    <ActionButton changeLayout={this.changeLayout} refresh={this.refresh} isGrid={this.state.isGrid} />
                    <p>{`Male: ${maleSearch} Female: ${femaleSearch}`}</p>
                </div>
                <Grid users={filteredUsers} />
    
            </>
    
        }
    
        return
            <>
        <div className="row">
        <Searchbox onSearch={this.onSearch} />
        <ActionButton changeLayout={this.changeLayout} refresh={this.refresh} isGrid={this.state.isGrid} />
        <p>{`Male: ${maleSearch} Female: ${femaleSearch}`}</p>
    
    </div>
        <UserList users={filteredUsers} />
        </>
    
    */

}


export default UsersPage;

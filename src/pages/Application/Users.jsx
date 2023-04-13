import React, { useEffect, useState, useMemo, useCallback } from "react";
import api from "../../services/api";
import { NavLink } from 'react-router-dom';
import { useDebounce } from "../../hooks/useDebounce";

const User = ({user}) => {
    return (
        <div>
            <NavLink to={`/users/${user._id}`}>Login: {user.login}</NavLink>
            Email: {user.email}
            {user.isFollow ? <button>Unfollow</button> : <button>Follow</button>}
        </div>
    )
}

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleClickSearch = useDebounce((event) => {
        const { value } = event.target; 
        api.getUsers(value)
            .then(users => setUsers(users))
            .finally(() => setIsLoading(false));
    }, 1500);

    const sortedUsers = useMemo(() => {
        return [...users].sort((a,b) => a.followersCount - b.followersCount);
    }, [users]);

    useEffect(() => {
        api.getUsers()
            .then(users => setUsers(users))
            .finally(() => setIsLoading(false));
    }, [])

    return (
        <div>
                <input placeholder="Enter user login..." onChange={handleClickSearch}/>
                <br />
                <br />
                {
                    isLoading ? <h1>Loading...</h1> : (
                        <div>
                            {
                                !users.length ?
                                <h1>Users not found</h1> :
                                sortedUsers.map(user => <User key={'user_'+user._id} user={user}/>)
                            }
                        </div>
                    )
                }
        </div>
    )

    return 
}

export default Users;
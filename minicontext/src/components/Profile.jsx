import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)
    console.log(user)
    if (!user) return <div>Please Login</div>

    return <div>Welcome {user}</div>


}

export default Profile
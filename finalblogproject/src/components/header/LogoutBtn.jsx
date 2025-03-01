import React from 'react'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout()
            .then(() => {
                dispatch(logout({}))
            })
    }
    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={handleLogout}>
            Logout
        </button>
    )
}

export default LogoutBtn
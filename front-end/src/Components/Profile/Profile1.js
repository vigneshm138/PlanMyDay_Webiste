import React from 'react'
import { Authuse } from '../Auth'

const Profile1 = () => {
    const name = Authuse()
    return (
        <div>
            {name.userName}
        </div>
    )
}

export default Profile1

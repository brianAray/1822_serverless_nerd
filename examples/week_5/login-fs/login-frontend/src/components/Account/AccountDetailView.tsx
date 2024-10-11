import React, { useContext } from 'react'
import { UserContext } from '../Context/userContext'

function AccountDetailView() {
    const user = useContext(UserContext);
  return (
    <>
        {user && <p>{user.name}</p>}
    </>
  )
}

export default AccountDetailView
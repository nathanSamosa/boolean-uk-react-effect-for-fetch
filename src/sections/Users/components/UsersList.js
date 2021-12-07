import { useEffect, useState } from "react"
import UserListItem from "./UsersListItem"

function UsersList () {

    const [userList, setUserList] = useState([])
    const fields = ["picture", "name", "gender", "email"]

    useEffect(async() => {
        const result = await fetch(`https://randomuser.me/api/?inc=${fields.join(",")},&results=10`)
        const response = await result.json()
        setUserList(response.results)
    }, [])

    return (
        <ul className="users-list">
            {userList.map(user =>
                <UserListItem key={userList.indexOf(user)} user={user} />
            )}
        </ul>
    )
}

export default UsersList
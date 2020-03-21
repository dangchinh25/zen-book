import React, { useState, useEffect } from "react"
import axios from "axios"
import "./ViewUser.css"
import UserCard from "../../components/UserCard/UserCard"

function ViewUser() {
	const [loadedUsers, setLoadedUsers] = useState()

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get(
					"http://localhost:5000/users/"
				)

				setLoadedUsers(response.data.user)
			} catch (err) {
				console.log(err)
			}
		}
		fetchUsers()
	}, [])

	return (
		<div className="view-user">
			{loadedUsers &&
				loadedUsers.map(user => (
					<UserCard
						fullName={user.fullname}
						username={user.username}
						avatarUrl={user.image}
					/>
				))}
		</div>
	)
}

export default ViewUser

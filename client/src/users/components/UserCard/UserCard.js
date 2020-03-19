import React from "react"
import "./UserCard.css"

function UserCard({ fullName, username, avatarUrl }) {
	return (
		<div className="user-card">
			<div className="avatar">
				<img src={avatarUrl} />
			</div>

			<h3>{fullName}</h3>
			<h3>{username}</h3>
		</div>
	)
}

export default UserCard

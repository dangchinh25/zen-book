import React from "react"
import "./ViewUser.css"
import UserCard from "../../components/UserCard/UserCard"

const userData = [
	{
		fullName: "chinhle",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava1.png"
	},
	{
		fullName: "quandinh",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava2.png"
	},
	{
		fullName: "huypham",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava3.png"
	},
	{
		fullName: "sonnguyen",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava10.png"
	},
	{
		fullName: "camchu",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava11.png"
	},
	{
		fullName: "minhdinh",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava13.png"
	},
	{
		fullName: "nhannguyen",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava7.png"
	},
	{
		fullName: "thinhnguyen",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava9.png"
	},
	{
		fullName: "jadevu",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava14.png"
	},
	{
		fullName: "thule",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava6.png"
	},
	{
		fullName: "chinhle",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava1.png"
	},
	{
		fullName: "quandinh",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava2.png"
	},
	{
		fullName: "huypham",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava3.png"
	},
	{
		fullName: "sonnguyen",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava10.png"
	},
	{
		fullName: "camchu",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava11.png"
	},
	{
		fullName: "minhdinh",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava13.png"
	},
	{
		fullName: "nhannguyen",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava7.png"
	},
	{
		fullName: "thinhnguyen",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava9.png"
	},
	{
		fullName: "jadevu",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava14.png"
	},
	{
		fullName: "thule",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava6.png"
	},
	{
		fullName: "chinhle",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava1.png"
	},
	{
		fullName: "quandinh",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava2.png"
	},
	{
		fullName: "huypham",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava3.png"
	},
	{
		fullName: "sonnguyen",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava10.png"
	},
	{
		fullName: "camchu",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava11.png"
	},
	{
		fullName: "minhdinh",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava13.png"
	},
	{
		fullName: "nhannguyen",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava7.png"
	},
	{
		fullName: "thinhnguyen",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava9.png"
	},
	{
		fullName: "jadevu",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava14.png"
	},
	{
		fullName: "thule",
		username: "@hizenle",
		avatarUrl: "/sample-avatar/ava6.png"
	}
]

function ViewUser() {
	return (
		<div className="view-user">
			{userData.map(user => (
				<UserCard
					fullName={user.fullName}
					username={user.username}
					avatarUrl={user.avatarUrl}
				/>
			))}
		</div>
	)
}

export default ViewUser

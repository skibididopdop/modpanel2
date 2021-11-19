import React from "react"
import styled from "styled-components"
import { Link, useRouteMatch } from "react-router-dom"

import colors from "../../presets/colors"

const NavigationButtonElement = styled(Link)<{
	isSelected: boolean,
}>`
	position: relative;
	padding: 8px 16px;
	border-radius: 8px;
	box-sizing: border-box;
	color: ${props => props.isSelected ? "white" : "black"};

	${
		props => props.isSelected
			? `background: ${colors.brand[600]}`
			: `border: 1px solid ${colors.border}`
	};

	&:hover {
		background: ${props => props.isSelected ? colors.brand[700] : "rgba(0, 0, 0, 10%)"}
	}

	& + & {
		margin-left: 10px;
	}
`

const NavigationButtonTextElement = styled.span`
	font-size: 17px;
	font-weight: 300;
`

function NavigationButton({ text, path, exact }: {
	text: string,
	path: string,
	exact?: boolean,
}) {
	const match = useRouteMatch({ path, exact })

	return (
		<NavigationButtonElement isSelected={!!match} to={path}>
			<NavigationButtonTextElement>{text}</NavigationButtonTextElement>
		</NavigationButtonElement>
	)
}

const NavigationElement = styled.div`
	height: 100%;
	margin: 0 32px;
	display: flex;
	flex-direction: row;
	align-items: center;
	user-select: none;
`

function Navigation() {
	return (
		<NavigationElement>
			<NavigationButton text="Home" path="/" exact />
			<NavigationButton text="Reports" path="/reports" />
			<NavigationButton text="Users" path="/users" />
			<NavigationButton text="Logs" path="/logs" />
		</NavigationElement>
	)
}

export default Navigation

export {
	NavigationButtonElement,
	NavigationButtonTextElement,

	NavigationElement,
}
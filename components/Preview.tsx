import React, { Component } from 'react'

interface Props {
	content: string
	theme: string
	handleClick: Function
}
interface State {}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
	}

	public render() {
		return (
			<div className={this.props.theme} onClick={this.props.handleClick}>
				<h1>{this.props.content}</h1>

				<style jsx>{`
					.classic {
						background: yellow;
						color: red;
					}
					.groen {
						background: black;
						color: white;
					}
					.groen > h1 {
						font-size: 8em;
					}
					.rood {
						background: red;
						color: blue;
					}
					.rood > h1 {
						font-size: 4em;
					}

					div:hover {
						cursor: pointer;
					}
				`}</style>
			</div>
		)
	}
}

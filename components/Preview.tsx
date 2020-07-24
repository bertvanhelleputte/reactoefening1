import React, { Component } from 'react'

interface Props {
	content: String
	theme: number
}
interface State {}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
	}

	public render() {
		return (
			<>
				<h1>{this.props.content}</h1>
			</>
		)
	}
}

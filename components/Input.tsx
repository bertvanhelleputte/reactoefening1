import React, { Component } from 'react'

interface Props {}
interface State {}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
	}
	public render() {
		return (
			<>
				<h1>Message</h1>
				<input type="text" onChange={this.props.handleChange} />
			</>
		)
	}
}

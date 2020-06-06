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
				<div>Container</div>
				<div className="container"></div>
			</>
		)
	}
}

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

				<div className="container-fluid d-flex flex-column align-items-center margin">{this.props.children}</div>
				<style jsx>{`
					.margin{
						margin-top: 5em;
					}
					`}
				</style>
			</>
		)
	}
}

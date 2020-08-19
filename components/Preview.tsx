import React, { Component } from 'react'

interface Props {
	content: string
	theme: string
}
interface State {}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
	}

	public render() {
		console.log(this.props.theme)

		return (
			<>
				<div className={this.props.theme}>
					<h1>{this.props.content}</h1>
				</div>
				<style jsx>{`
					.classic {
						background: grey;
					}

					.red {
						background: red;
					}

					.green {
						background: green;
					}
				`}</style>
			</>
		)
	}
}

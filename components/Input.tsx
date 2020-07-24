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
				<div>
					<label>
					<input
					type="radio"
					value="0"
					onChange={this.props.handleTheme}
				/>
				Optie1
					</label>
				<label>
				<input
					type="radio"
					value="1"
					onChange={this.props.handleTheme}
				/>
				Optie2
				</label>
				<label>
				<input
					type="radio"
					value="2"
					onChange={this.props.handleTheme}
				/>
				Optie3
				</label>
				
				</div>
				
			</>
		)
	}
}

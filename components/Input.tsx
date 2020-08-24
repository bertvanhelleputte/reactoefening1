import React, { Component } from 'react'

interface Props {}
interface State {}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
	}
	public render() {
		return (
			<div className="col-8 d-flex flex-column justify-items-center">
				<h1>Message</h1>
				<input type="text" onChange={this.props.handleChange} />
				<div>
					<label>
						<input
							type="radio"
							value="classic"
							onChange={this.props.handleTheme}
						/>
						Optie1
					</label>
					<label>
						<input
							type="radio"
							value="groen"
							onChange={this.props.handleTheme}
						/>
						Optie2
					</label>
					<label>
						<input
							type="radio"
							value="rood"
							onChange={this.props.handleTheme}
						/>
						Optie3
					</label>
				</div>
			</div>
		)
	}
}

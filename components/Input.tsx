import React, { Component } from 'react'

interface Props {
	handleChange: Function
	handleTheme: Function
	content?: string
}

interface State {
	checked: number
}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)

		this.state = {
			checked: 0,
		}

		this.handleChecked = this.handleChecked.bind(this)
	}

	handleChecked(event, index) {
		this.setState({ checked: index })
		this.props.handleTheme(event)
	}

	public render() {
		return (
			<>
				<h1>Message</h1>
				<input
					value={this.props.content}
					type="text"
					onChange={this.props.handleChange}
				/>
				<p>Kies een thema:</p>
				<div>
					<label>
						<input
							type="radio"
							value="classic"
							checked={this.state.checked === 0}
							onChange={(event) => this.handleChecked(event, 0)}
						/>
						Classic
					</label>
					<label>
						<input
							type="radio"
							value="green"
							checked={this.state.checked === 1}
							onChange={(event) => this.handleChecked(event, 1)}
						/>
						Green
					</label>
					<label>
						<input
							type="radio"
							value="red"
							checked={this.state.checked === 2}
							onChange={(event) => this.handleChecked(event, 2)}
						/>
						Red
					</label>
				</div>
			</>
		)
	}
}

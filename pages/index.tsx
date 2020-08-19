import React, { Component } from 'react'
import Container from 'components/Container'
import Input from 'components/Input'
import Preview from 'components/Preview'

interface Props {}
interface State {
	value: String
	currentComponent: number
	theme: String
}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
		this.state = {
			value: 'test',
			currentComponent: 0,
			theme: 'classic',
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleTheme = this.handleTheme.bind(this)
	}

	handleChange(event) {
		this.setState({ value: event.target.value })
		console.log(this.state.value)
	}

	handleClick() {
		if (this.state.currentComponent === 0) {
			this.setState({ currentComponent: 1 })
		} else {
			this.setState({ currentComponent: 0 })
		}
	}

	handleTheme(event) {
		this.setState({ theme: event.target.value })
	}

	public render() {
		return (
			<>
				<Container>
					{this.state.currentComponent === 0 ? (
						<Input
							handleChange={this.handleChange}
							handleTheme={this.handleTheme}
							content={this.state.value}
						/>
					) : (
						<Preview
							content={this.state.value}
							theme={this.state.theme}
						/>
					)}

					<button onClick={this.handleClick}>Swap</button>
				</Container>
			</>
		)
	}
}

import React, { Component } from 'react'
import Container from 'components/Container'
import Input from 'components/Input'
import Preview from 'components/Preview'

interface Props {}
interface State {
	value: String
	currentComponent: number
	theme: number
}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			currentComponent: 0,
			theme: 0,
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
	handleTheme(event){
		this.setState({ theme: event.target.value})
		console.log(this.state.value)
	}
	

	public render() {
		return (
			<>
				<Container>
					{this.state.currentComponent === 0 ? (
						<Input handleChange={this.handleChange} handleTheme={this.handleTheme} />
					) : (
						<Preview content={this.state.value} />
					)}

					<button onClick={this.handleClick}>Swap</button>
				</Container>
			</>
		)
	}
}

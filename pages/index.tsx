import React, { Component } from 'react'
import Container from 'components/Container'
import Input from 'components/Input'
import Preview from 'components/Preview'

interface Props {}
interface State {
	value: string
	currentComponent: number
	theme: string
}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			currentComponent: 0,
			theme: '',
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

		console.log(this.state.theme)
	}
	

	public render() {
		return (
			<>
				<Container>
					{this.state.currentComponent === 0 ? (
						<>
							<Input handleChange={this.handleChange} handleTheme={this.handleTheme} />
							<button onClick={this.handleClick}>Swap</button>
						</>
					) : (
						
						<Preview content={this.state.value} theme={this.state.theme} handleClick={this.handleClick}/>
					)}

				
				</Container>
			</>
		)
	}
}

import React, { Component } from 'react'
import Container from 'components/Container'
import Input from 'components/input'

interface Props {}
interface State {
	value: String
}

export default class extends Component<Props, State> {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({ value: event.target.value })
		console.log(this.state.value)
	}

	public render() {
		return (
			<>
				<Container>
					<Input handleChange={this.handleChange}/>
				</Container>
			</>
		)
	}
}

import { Component } from 'react'
import { Head } from 'next/document'

interface Props {}

export default class extends Component<Props> {
	render() {
		return (
			<>
				<Head>
					<title>Untitled</title>
					<link rel="shortcut icon" href="" />

					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>

					<link
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
						rel="stylesheet"
					/>

					<link
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						rel="stylesheet"
					/>
				</Head>
			</>
		)
	}
}

import { Component, Fragment } from 'preact'
import { Card, Form, QRCode } from './components'

import './index.css'

export default class App extends Component {
	state = {
		hidden: true,
		wifiInformation: ''
	}

	generate = e => {
		this.setState({
			hidden: false,
			wifiInformation: e
		})
	}

	render() {
		return (
			<Card title={'WIFI to QR code'}>
				<Fragment>
					<Form onSubmit={this.generate} />
					<QRCode
						wifiInformation={this.state.wifiInformation}
						hidden={this.state.hidden}
					/>
				</Fragment>
			</Card>
		)
	}
}
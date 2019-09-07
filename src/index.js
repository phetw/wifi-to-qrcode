import { Component, Fragment } from 'preact'
import { Card, Form, QRCode } from './components'

import './index.css'

export default class App extends Component {
	generate = () => {}

	render() {
		return (
			<Card title={'WIFI to QR code'}>
				<Fragment>
					<Form></Form>
					<QRCode
						text={
							'https://www.netflix.com/watch/81028714?trackId=13752289&tctx=0%2C0%2C669ee45eb065692263962cd6e4c393bc8042652a%3A29d86d68809975ff70397c7a66838cae638c250c%2C%2C'
						}
					/>
				</Fragment>
			</Card>
		)
	}
}

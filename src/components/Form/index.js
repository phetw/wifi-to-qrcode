import { Component, Fragment } from 'preact'
import './index.css'

export default class Form extends Component {
	state = {
		ssid: '',
		encryption: '',
		password: ''
	}

	onSSIDChange = e => {
		this.setState({
			ssid: e.target.value
		})
	}

	onEncriptionChange = e => {
		this.setState({
			encryption: e.target.value
		})
	}

	onPasswordChange = e => {
		this.setState({
			password: e.target.value
		})
	}

	password = () => {}

	formatWifiInformation = () => {
		const encription =
			this.state.encryption === '' || this.state.encryption === 'none'
				? '&gt'
				: this.state.encryption

		return (
			'WIFI:S:' +
			this.state.ssid +
			';&gt;;T:&lt;' +
			encription +
			';;P:&lt;' +
			this.state.password +
			'&gt;;;'
		)
	}

	onSubmit = () => {
		const hasNoPassword =
			this.state.encryption === '' || this.state.encryption === 'none'

		if (
			!this.state.ssid ||
			!this.state.encryption ||
			(hasNoPassword ? false : !this.state.password)
		) {
			return
		}

		this.props.onSubmit(this.formatWifiInformation())
	}

	render() {
		const hasNoPassword =
			this.state.encryption === '' || this.state.encryption === 'none'
		const disabledInput =
			!this.state.ssid ||
			!this.state.encryption ||
			(hasNoPassword ? false : !this.state.password)

		return (
			<form>
				<fieldset>
					<legend>Details</legend>
					<label for="ssid">SSID</label>
					<input
						id="ssid"
						type="text"
						placeholder="SSID"
						autocomplete="off"
						value={this.state.ssid}
						onChange={this.onSSIDChange}
					/>
					<label for="username">Encription</label>
					<select
						id="enscription"
						name="enscription"
						value={this.state.encryption}
						onChange={this.onEncriptionChange}
					>
						<option value="" selected>
							Encription type
						</option>
						<option value="WPA">WPA/WPA2</option>
						<option value="WEP">WEP</option>
						<option value="none">None</option>
					</select>
					{hasNoPassword ? null : (
						<Fragment>
							<label for="username">Password</label>
							<input
								id="password"
								type="password"
								placeholder="Password"
								autocomplete="off"
								value={this.state.password}
								onChange={this.onPasswordChange}
							/>
						</Fragment>
					)}
				</fieldset>
				<button type="button" disabled={disabledInput} onClick={this.onSubmit}>
					Generate
				</button>
			</form>
		)
	}
}

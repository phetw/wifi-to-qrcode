import { Component } from 'preact'
import './index.css'

export default class Form extends Component {
	render() {
		return (
			<form>
				<fieldset>
					<legend>Details</legend>
					<label for="ssid">SSID</label>
					<input
						type="text"
						value=""
						id="ssid"
						placeholder="SSID"
						autocomplete="off"
					/>
					<label for="username">Encription</label>
					<select name="enscription" id="enscription">
						<option value="WPA">WPA/WPA2</option>
						<option value="WEP">WEP</option>
						<option value="nopass">None</option>
					</select>
					<label for="username">Password</label>
					<input
						type="password"
						value=""
						id="password"
						placeholder="Password"
						autocomplete="off"
					/>
				</fieldset>
				<button onClick={console.log('generate')}>Generate</button>
			</form>
		)
	}
}

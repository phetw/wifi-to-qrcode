import { Component } from 'preact';

import './index.css';
import { Card } from './components/Card';

export default class App extends Component {
	render() {
		return (
			<Card title={'Hello world'}>
				<p>lorem100</p>
			</Card>
		);
	}
}

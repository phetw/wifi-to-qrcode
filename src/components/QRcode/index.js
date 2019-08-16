import * as QRCodeGenerator from 'qrcode';
import { Component, Fragment } from 'preact';

import './index.css';
import { CANVAS_GENERATOR_OPTIONS, IMAGE_GENERATOR_OPTIONS } from './config';

export default class QRCode extends Component {
	componentDidMount() {
		if (this.props.text) {
			this.generateQRCodeCanvas();
		}
	}

	generateQRCodeCanvas = () => {
		QRCodeGenerator.toCanvas(
			this.props.text,
			CANVAS_GENERATOR_OPTIONS,
			(err, canvas) => {
				if (err) throw err;

				const qrCodeCanvas = document.getElementById('qrcode-container');
				qrCodeCanvas.appendChild(canvas);
			}
		);
	};

	generateQRCodeImage = () => {
		QRCodeGenerator.toDataURL(
			this.props.text,
			IMAGE_GENERATOR_OPTIONS,
			(err, imageUrl) => {
				if (err) throw err;

				console.log(imageUrl);
			}
		);
	};

	render() {
		return (
			<Fragment>
				<div id="qrcode-container"></div>
				<button onClick={this.generateQRCodeImage}>Save as image</button>
			</Fragment>
		);
	}
}

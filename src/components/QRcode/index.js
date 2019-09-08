import * as QRCodeGenerator from 'qrcode'
import { Component, Fragment } from 'preact'

import './index.css'
import { CANVAS_GENERATOR_OPTIONS, IMAGE_GENERATOR_OPTIONS } from './config'

export default class QRCode extends Component {
	generateQRCodeCanvas = () => {
		QRCodeGenerator.toCanvas(
			this.props.wifiInformation,
			CANVAS_GENERATOR_OPTIONS,
			(err, canvas) => {
				if (err) throw err

				const qrCodeCanvas = document.getElementById('qrcode-container')

				if (qrCodeCanvas.hasChildNodes()) {
					const elementChild = qrCodeCanvas.firstElementChild
					qrCodeCanvas.removeChild(elementChild)
				}

				qrCodeCanvas.appendChild(canvas)
			}
		)
	}

	generateQRCodeImage = () => {
		QRCodeGenerator.toDataURL(
			this.props.wifiInformation,
			IMAGE_GENERATOR_OPTIONS,
			(err, imageUrl) => {
				if (err) throw err

				console.log(imageUrl)
			}
		)
	}

	componentDidUpdate() {
		if (this.props.wifiInformation) {
			this.generateQRCodeCanvas()
		}
	}

	render() {
		return this.props.hidden ? null : (
			<Fragment>
				<div id="qrcode-container" />
				<button onClick={this.generateQRCodeImage}>Save as image</button>
			</Fragment>
		)
	}
}

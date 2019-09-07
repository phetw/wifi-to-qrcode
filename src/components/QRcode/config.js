const ERROR_CORRECTION_LEVEL = 'H'

export const CANVAS_GENERATOR_OPTIONS = {
	errorCorrectionLevel: ERROR_CORRECTION_LEVEL
}

export const IMAGE_GENERATOR_OPTIONS = {
	errorCorrectionLevel: ERROR_CORRECTION_LEVEL,
	type: 'image/jpeg',
	rendererOpts: {
		quality: 0.5
	}
}

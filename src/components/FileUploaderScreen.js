import React from 'react'
import idleSrc from './images/jade_input_bg.jpg'
import "./componentsstyles.css" 

const FileUploaderScreen = ({status}) => {
	let src 
	switch (status) {
		case 'IDLE':
			src=idleSrc 
			break 
		default:
			src = idleSrc
			break 
	}
	return (
		<div className="uploader-input">
		<div 
		style={{backgroundImage: `url("${src}")` }}
		className="uploader-overlay"
		/>
		</div>
	)
}

export default FileUploaderScreen

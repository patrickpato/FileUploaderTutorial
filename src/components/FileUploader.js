import React from 'react' 
import "./componentsstyles.css"
const FileUploader = ({ children, triggerInput, inputRef, onChange }) => {
	let hiddenInputStyle = {} 
	//if user passes in children, display children and hide input 
	if (children) {
		hiddenInputStyle = {
			position: "absolute", 
			top: "-9999px", 
		}
	}


	return (
		<div className="cursor-pointer" onClick={triggerInput}> 
		<input 
		style={hiddenInputStyle}
		ref={inputRef}
		type="file"
		accept="image/*"
		multiple
		onChange={onChange}
		/>

		<div className="uploader">{children}</div>
		</div>
}
}

export default FileUploader

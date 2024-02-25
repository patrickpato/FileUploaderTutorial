import React from 'react'
import useApp from './useApp' 
import FileUploader from 'components/FileUploader'
import FileUploaderScreen from './FileUploaderScreen'
import './styles.css' 


const Input = (props) => (
	<input 
	type="file"
	accept="image/*"
	name="file-loader-input"
	multiple
	{...props}
	/>
)



const App = ({ children }) => {
	const inputRef = React.createRef()
	const {
		files,
		pending, 
		next, 
		uploading, 
		uploaded, 
		status, 
		onSubmit, 
		onChange, 
		triggerInput
	} = useApp ({inputRef})

	return (
		<form className="form" onSubmit={onSubmit}>
		<FileUploader
		triggerInput={triggerInput}
		inputRef={inputRef}
		onChange={onChange}
		>

		<FileUploaderScreen/>
		</FileUploder>


		<div>
		{files.map(({file, src, id}, index) => (
			<div key={`file-row${index}`}>
			<img src={src} alt="" />
			<div>{file.name}</div>
			</div>
		))}
		</div>
		</form>
	)}


export default App



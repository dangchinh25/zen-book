import React, { useRef } from "react"
import "./ImageUpload.css"

function ImageUpload({ id }) {
	const imagePickerRef = useRef()

	const pickImageHandler = () => {
		imagePickerRef.current.click()
	}

	const pickHandler = event => {
		console.log(event.target)
	}

	return (
		<div>
			<input
				type="file"
				ref={imagePickerRef}
				id={id}
				style={{ display: "none" }}
				accept=".jpg, .jpeg, .png"
				onChange={pickHandler}
			/>
			<div className={`image-upload`}>
				<div className="image-upload-preview">
					<img src="" alt="Preview" />
				</div>
				<button type="button" onClick={pickImageHandler}>
					Pick Image
				</button>
			</div>
		</div>
	)
}

export default ImageUpload

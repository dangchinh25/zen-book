import React, { useState, useRef, useEffect } from "react"
import "./ImageUpload.css"

function ImageUpload({ id, onInput, errorText }) {
	const [image, setImage] = useState()
	const [previewUrl, setPreviewUrl] = useState()
	const [isValid, setIsValid] = useState(false)

	const imagePickerRef = useRef()

	const pickImageHandler = () => {
		imagePickerRef.current.click()
	}

	useEffect(() => {
		if (!image) {
			return
		}

		const imageReader = new FileReader()
		imageReader.onload = () => {
			setPreviewUrl(imageReader.result)
		}
		imageReader.readAsDataURL(image)
	}, [image])

	const pickHandler = event => {
		let pickedImage
		let imageIsValid
		if (event.target.files && event.target.files.length === 1) {
			pickedImage = event.target.files[0]
			setImage(pickedImage)
			setIsValid(true)
			imageIsValid = true
		} else {
			setIsValid(false)
			imageIsValid = false
		}
		onInput(pickedImage, imageIsValid)
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
					{previewUrl && <img src={previewUrl} alt="Preview" />}
					{!previewUrl && <p>Please pick an image</p>}
				</div>
				<button type="button" onClick={pickImageHandler}>
					Pick Image
				</button>
			</div>
			{!isValid && <p>{errorText}</p>}
		</div>
	)
}

export default ImageUpload

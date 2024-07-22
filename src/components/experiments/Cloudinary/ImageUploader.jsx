import eventBus from "@/libs/mitt.js"
import PropTypes from "prop-types"
import { useRef } from "react"
import axios from "axios"

function ImageUploader({ startImageUploadLoading }) {
  const CLOUDINARY_RESOURCE_TYPE = "auto"
  const CLOUDINARY_API = "upload"

  const inputImageFile = useRef(null)

  async function handleImageFileChange(event) {
    if (event.target.files[0]) {
      startImageUploadLoading()

      const data = new FormData()

      data.append("file", event.target.files[0])
      data.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY)
      data.append("folder", import.meta.env.VITE_CLOUDINARY_PORTFOLIO_FOLDER)
      data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)

      const url = `${import.meta.env.VITE_CLOUDINARY_UPLOAD_BASE_URL}/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/${CLOUDINARY_RESOURCE_TYPE}/${CLOUDINARY_API}`

      const cloudinaryResponse = await axios.post(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress(event) {
          console.log(event.loaded / event.total)
        }
      })

      eventBus.emit("cloudinary.image-uploaded", {
        imageName: cloudinaryResponse.data.public_id,
        imageWidth: cloudinaryResponse.data.width,
        imageHeight: cloudinaryResponse.data.height
      })
    }
  }

  // Maximum image size is 25 Megapixels.

  return (
    <div className="flex justify-start">
      <input className="hidden" ref={inputImageFile} type="file" onChange={handleImageFileChange} />
      <button type="button" className="btn-sm xl:btn-md btn-high w-full md:w-auto" onClick={() => inputImageFile.current.click()}>
        <span className="sm:block hidden">Cargar imagen</span>
        <i className="block sm:hidden bi bi-upload"></i>
      </button>
    </div>
  )
}

ImageUploader.propTypes = { startImageUploadLoading: PropTypes.func.isRequired }

export { ImageUploader }

import styles from "@/components/experiments/Cloudinary/ImageDeliverer/ImageUploader/ImageUploader.module.css"
import eventBus from "@/libs/mitt.js"
import PropTypes from "prop-types"
import { useRef } from "react"
import axios from "axios"

function ImageUploader({ startImageUploadLoading }) {
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY
  const CLOUDINARY_BASE_URL = "https://api.cloudinary.com/v1_1"
  const CLOUDINARY_FOLDER = "torrevia/portfolio"
  const CLOUDINARY_UPLOAD_PRESET = "public"
  const CLOUDINARY_RESOURCE_TYPE = "auto"
  const CLOUDINARY_API = "upload"

  const inputImageFile = useRef(null)

  async function handleImageFileChange(event) {
    startImageUploadLoading()

    let imageFile = event.target.files[0]

    const data = new FormData()

    data.append("file", imageFile)
    data.append("api_key", CLOUDINARY_API_KEY)
    data.append("folder", CLOUDINARY_FOLDER)
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)

    const url = `${CLOUDINARY_BASE_URL}/${CLOUDINARY_CLOUD_NAME}/${CLOUDINARY_RESOURCE_TYPE}/${CLOUDINARY_API}`

    const cloudinaryResponse = await axios.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress(event) {
        console.log(event.loaded / event.total)
      }
    })

    eventBus.emit("cloudinary.image-uploaded", { imageName: cloudinaryResponse.data.public_id })
  }

  // Maximum image size is 25 Megapixels.

  return (
    <div id={styles.imageUploader}>
      <input ref={inputImageFile} type="file" onChange={handleImageFileChange} />
      <button type="button" className="btn-high btn-md" onClick={() => inputImageFile.current.click()}>
        Cargar imagen
      </button>
    </div>
  )
}

ImageUploader.propTypes = { startImageUploadLoading: PropTypes.func.isRequired }

export { ImageUploader }

import { ImageUploader } from "@/components/experiments/Cloudinary/ImageDeliverer/ImageUploader/ImageUploader.jsx"
import styles from "@/components/experiments/Cloudinary/ImageDeliverer/ImageDeliverer.module.css"
import { ImageCropper } from "@/components/experiments/Cloudinary/ImageCropper/ImageCropper.jsx"
import { getCloudinaryImageElementWidth } from "@/utils/globalFunctions.js"
import { useEffect, useState } from "react"
import eventBus from "@/libs/mitt.js"

function ImageDeliverer() {
  const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/torrevia/image/upload"
  const CLOUDINARY_IMAGE_ELEMENT_ID = import.meta.env.VITE_CLOUDINARY_IMAGE_ELEMENT_ID
  const CLOUDINARY_AUTO_TRANSFORMATION = "t_portfolio_auto"
  const CLOUDINARY_CROP_TRANSFORMATION = "t_portfolio_crop"

  const [cloudinaryOriginalImageUrl, setCloudinaryOriginalImageUrl] = useState("")
  const [cloudinaryTransformedImageUrl, setCloudinaryTransformedImageUrl] = useState("")
  const [cloudinaryTransformation, setCloudinaryTransformation] = useState(CLOUDINARY_AUTO_TRANSFORMATION)
  const [cloudinaryTransformationArgs, setCloudinaryTransformationArgs] = useState("")

  const [status, setStatus] = useState("")
  const [imageName, setImageName] = useState("")
  const [cropTrigger, setCropTrigger] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  function contentByStatus() {
    if (imageName) {
      switch (status) {
        case "cropper":
          return <ImageCropper imageUrl={cloudinaryOriginalImageUrl} cropTrigger={cropTrigger} makeCrop={makeCrop} />
        case "transformation":
        case "original-image":
          return (
            <img
              src={status === "transformation" ? cloudinaryTransformedImageUrl : cloudinaryOriginalImageUrl}
              alt="Cloudinary image"
              onLoad={() => setIsLoading(false)}
            />
          )
      }
    }

    return (
      <>
        <i className="bi bi-file-earmark-image" />
        <p>Sube tu imagen a cloudinary...</p>
      </>
    )
  }

  function startImageUploadLoading() {
    setIsLoading(true)
  }

  function makeCrop(cropper) {
    let cropperDataObj = cropper.getData(true)
    updateTransformation(
      CLOUDINARY_CROP_TRANSFORMATION,
      `$ch_${cropperDataObj.height},$cw_${cropperDataObj.width},$x_${cropperDataObj.x},$y_${cropperDataObj.y}`
    )
  }

  function selectOriginalImage() {
    if (imageName) {
      eventBus.emit("cloudinary.original-image-selected")
      setCloudinaryOriginalImageUrl(`${CLOUDINARY_BASE_URL}/$w_${getCloudinaryImageElementWidth()}/${CLOUDINARY_AUTO_TRANSFORMATION}/${imageName}`)
      setCloudinaryTransformation(CLOUDINARY_AUTO_TRANSFORMATION)
      setCloudinaryTransformationArgs("")
      setStatus("original-image")
    }
  }

  function updateTransformation(transformation, transformationArgs) {
    setIsLoading(true)
    setCloudinaryTransformationArgs(transformationArgs)
    setCloudinaryTransformation(transformation)
    setStatus("transformation")
  }

  function setDelivererStatus({ effect }) {
    if (effect.name === "crop") setCropTrigger(0)
    setStatus(effect.name === "crop" ? "cropper" : "transformation")
  }

  useEffect(() => selectOriginalImage(), [imageName])

  useEffect(() => {
    let widthArgument = `$w_${getCloudinaryImageElementWidth()}`
    let completeArguments = cloudinaryTransformationArgs ? `${cloudinaryTransformationArgs},${widthArgument}` : widthArgument
    setCloudinaryTransformedImageUrl(`${CLOUDINARY_BASE_URL}/${completeArguments}/${cloudinaryTransformation}/${imageName}`)
  }, [cloudinaryTransformation, cloudinaryTransformationArgs])

  useEffect(() => {
    eventBus.on("cloudinary.change-effect", setDelivererStatus)
    eventBus.on("cloudinary.image-uploaded", ({ imageName }) => setImageName(imageName))
    eventBus.on("cloudinary.apply-transformation", ({ transformation, transformationArguments }) => {
      if (transformation === CLOUDINARY_CROP_TRANSFORMATION) setCropTrigger(cropTrigger + 1)
      else updateTransformation(transformation, transformationArguments)
    })

    return () => {
      eventBus.off("cloudinary.change-effect")
      eventBus.off("cloudinary.image-uploaded")
      eventBus.off("cloudinary.apply-transformation")
    }
  }, [])

  return (
    <div id={styles.imageDeliverer}>
      <div id={CLOUDINARY_IMAGE_ELEMENT_ID} className={`${!imageName && styles.uploadImageLabel}`}>
        <div className={`${isLoading ? "flex" : "hidden"} ${styles.loadingContainer}`}>
          <div className={styles.spinnerLoader} />
        </div>
        {contentByStatus()}
      </div>
      <div>
        <ImageUploader startImageUploadLoading={startImageUploadLoading} />
        <button type="button" className="btn-transparent-high btn-md" onClick={selectOriginalImage} disabled={status === "original-image" || !imageName}>
          Mostrar imagen original
        </button>
      </div>
    </div>
  )
}

export { ImageDeliverer }

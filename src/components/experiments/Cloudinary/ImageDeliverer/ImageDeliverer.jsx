import { getAutoTransformationUrl, getCloudinaryImageElementWidth, getCropTransformationArgsStr } from "@/utils/cloudinaryFunctions.js"
import styles from "@/components/experiments/Cloudinary/ImageDeliverer/ImageDeliverer.module.css"
import { ModalEffectControls } from "@/components/experiments/Cloudinary/ModalEffectControls.jsx"
import { ImageUploader } from "@/components/experiments/Cloudinary/ImageUploader.jsx"
import { ImageCropper } from "@/components/experiments/Cloudinary/ImageCropper.jsx"
import cloudinaryTransformations from "@/statics/cloudinaryTransformations.json"
import { useEffect, useState } from "react"
import eventBus from "@/libs/mitt.js"

function ImageDeliverer() {
  const [cloudinaryOriginalImageUrl, setCloudinaryOriginalImageUrl] = useState("")
  const [cloudinaryTransformedImageUrl, setCloudinaryTransformedImageUrl] = useState("")
  const [cloudinaryTransformation, setCloudinaryTransformation] = useState(cloudinaryTransformations.auto.name)
  const [cloudinaryTransformationArgs, setCloudinaryTransformationArgs] = useState("")

  const [uploadedImageName, setUploadedImageName] = useState("")
  const [uploadedImageWidth, setUploadedImageWidth] = useState(0)
  const [uploadedImageHeight, setUploadedImageHeight] = useState(0)
  const [cropTrigger, setCropTrigger] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState("")

  function contentByStatus() {
    if (uploadedImageName) {
      return status === "cropper" ? (
        <ImageCropper imageUrl={cloudinaryOriginalImageUrl} cropTrigger={cropTrigger} makeCrop={makeCrop} />
      ) : (
        <img
          src={status === "transformation" ? cloudinaryTransformedImageUrl : cloudinaryOriginalImageUrl}
          onLoad={() => setIsLoading(false)}
          alt="Cloudinary image"
        />
      )
    }
    return (
      <>
        <i className="bi bi-file-earmark-image" />
        <p className="">Sube tu imagen a Cloudinary.</p>
      </>
    )
  }

  function startImageUploadLoading() {
    setIsLoading(true)
  }

  function makeCrop(cropper) {
    updateTransformation(cloudinaryTransformations.crop.name, getCropTransformationArgsStr(uploadedImageWidth, uploadedImageHeight, cropper.getData(true)))
  }

  function selectOriginalImage() {
    eventBus.emit("cloudinary.original-image-selected")
    let originalImageUrl = getAutoTransformationUrl(uploadedImageName)
    setCloudinaryOriginalImageUrl(originalImageUrl)

    /**
     * No se...
     */
    if (cloudinaryTransformation === cloudinaryTransformations.auto.name && !cloudinaryTransformationArgs) {
      setCloudinaryTransformedImageUrl(originalImageUrl)
    } else {
      setCloudinaryTransformation(cloudinaryTransformations.auto.name)
      setCloudinaryTransformationArgs("")
    }

    setStatus("original-image")
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

  useEffect(() => selectOriginalImage(), [uploadedImageName])

  useEffect(() => {
    let scaleArgument = `$scale_${getCloudinaryImageElementWidth()}`
    let completeArguments = cloudinaryTransformationArgs ? `${cloudinaryTransformationArgs},${scaleArgument}` : scaleArgument
    setCloudinaryTransformedImageUrl(
      `${import.meta.env.VITE_CLOUDINARY_DELIVERY_BASE_URL}/${completeArguments}/${cloudinaryTransformation}/${uploadedImageName}`
    )
  }, [cloudinaryTransformation, cloudinaryTransformationArgs])

  useEffect(() => {
    eventBus.on("cloudinary.change-effect", setDelivererStatus)

    eventBus.on("cloudinary.image-uploaded", ({ imageName, imageWidth, imageHeight }) => {
      setUploadedImageName(imageName)
      setUploadedImageWidth(imageWidth)
      setUploadedImageHeight(imageHeight)
    })

    eventBus.on("cloudinary.apply-transformation", ({ transformation, transformationArguments }) => {
      if (transformation === cloudinaryTransformations.crop.name) setCropTrigger(cropTrigger + 1)
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
      <div id={import.meta.env.VITE_CLOUDINARY_IMAGE_ELEMENT_ID} className={`${!uploadedImageName && styles.uploadImageLabel}`}>
        <div className={`${isLoading ? "flex" : "hidden"} ${styles.loadingContainer}`}>
          <div className={styles.spinnerLoader} />
        </div>
        {contentByStatus()}
      </div>

      {/* Buttons container (less than 768px width) */}
      <div className={styles.buttonsContainer}>
        <ImageUploader startImageUploadLoading={startImageUploadLoading} />
        <button type="button" className="btn-sm btn-high" onClick={selectOriginalImage} disabled={status === "original-image" || !uploadedImageName}>
          <span className="hidden sm:block">Quitar efecto</span>
          <i className="block sm:hidden bi bi-arrow-repeat" />
        </button>
        <ModalEffectControls />
      </div>

      {/* Buttons container (greater than 768px width) */}
      <div className={styles.buttonsContainerMd}>
        <button
          type="button"
          className="btn-sm xl:btn-md btn-transparent-high"
          onClick={selectOriginalImage}
          disabled={status === "original-image" || !uploadedImageName}
        >
          Quitar efecto
        </button>
        <ImageUploader startImageUploadLoading={startImageUploadLoading} />
      </div>
    </div>
  )
}

export { ImageDeliverer }

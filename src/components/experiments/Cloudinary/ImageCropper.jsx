import { useEffect, useRef } from "react"
import Cropper from "react-cropper"
import "cropperjs/dist/cropper.css"
import PropTypes from "prop-types"

function ImageCropper({ imageUrl = "", cropTrigger = 0, makeCrop = null }) {
  const cropper = useRef(null)

  useEffect(() => {
    if (imageUrl) cropper.current.cropper.replace(imageUrl)
  }, [imageUrl])

  useEffect(() => {
    if (cropTrigger > 0 && makeCrop) makeCrop(cropper.current.cropper)
  }, [cropTrigger])

  return (
    <Cropper
      ref={cropper}
      zoomable={false}
      zoomOnTouch={false}
      zoomOnWheel={false}
      toggleDragModeOnDblclick={false}
      rotatable={false}
      movable={false}
      guides={false}
      background={false}
      highlight={false}
      center={false}
      viewMode={1}
      autoCropArea={0.75}
      className="w-full h-full object-contain bg-transparent"
    />
  )
}

ImageCropper.propTypes = {
  imageUrl: PropTypes.string,
  cropTrigger: PropTypes.number,
  makeCrop: PropTypes.func.isRequired
}

export { ImageCropper }

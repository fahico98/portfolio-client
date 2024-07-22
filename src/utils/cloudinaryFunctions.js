import cloudinaryTransformations from "@/statics/cloudinaryTransformations.json"

export function getCloudinaryImageElementWidth() {
  let imgElement = document.querySelector(`#${import.meta.env.VITE_CLOUDINARY_IMAGE_ELEMENT_ID}`)
  if (imgElement) {
    return Math.round(imgElement.getBoundingClientRect().width)
  }
}

export function getAutoTransformationUrl(imageName) {
  return (
    import.meta.env.VITE_CLOUDINARY_DELIVERY_BASE_URL +
    "/" +
    "$scale_" +
    getCloudinaryImageElementWidth() +
    "/" +
    cloudinaryTransformations.auto.name +
    "/" +
    imageName
  )
}

export function getCropTransformationArgsStr(imageOriginalWidth, imageOriginalHeight, cropperData) {
  let imageScaledWidth = getCloudinaryImageElementWidth()
  let imageScaledHeight = Math.round((imageScaledWidth * imageOriginalHeight) / imageOriginalWidth)

  let cropOriginalWidth = Math.round((imageOriginalWidth * cropperData.width) / imageScaledWidth)
  let cropOriginalHeight = Math.round((imageOriginalHeight * cropperData.height) / imageScaledHeight)

  let cropOriginalX = Math.round((imageOriginalWidth * cropperData.x) / imageScaledWidth)
  let cropOriginalY = Math.round((imageOriginalHeight * cropperData.y) / imageScaledHeight)

  return "$ch_" + cropOriginalHeight + ",$cw_" + cropOriginalWidth + ",$x_" + cropOriginalX + ",$y_" + cropOriginalY
}

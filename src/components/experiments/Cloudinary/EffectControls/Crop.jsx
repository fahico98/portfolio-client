// import { getAutoTransformationUrl, getCropTransformationArgsStr } from "@/utils/cloudinaryFunctions.js"
// import { ImageCropper } from "@/components/experiments/Cloudinary/ImageCropper.jsx"
// import cloudinaryTransformations from "@/statics/cloudinaryTransformations.json"
import effectControlsStyles from "@/styles/modules/EffectControls.module.css"
import eventBus from "@/libs/mitt.js"
import PropTypes from "prop-types"
import { useState } from "react"

function Crop() {
  // function Crop({ embeddedImageCropper = false }) {
  // const [uploadedImageHeight, setUploadedImageHeight] = useState(0)
  // const [uploadedImageWidth, setUploadedImageWidth] = useState(0)
  // const [uploadedImageUrl, setUploadedImageUrl] = useState("")
  // const [cropTrigger, setCropTrigger] = useState(0)
  const [aiFaceDetection, setAiFaceDetection] = useState(false)

  function submit(event) {
    event.preventDefault()
    eventBus.emit("cloudinary.apply-transformation", {
      transformation: aiFaceDetection ? "t_portfolio_crop_faces" : "t_portfolio_crop",
      transformationArguments: ""
    })
  }

  return (
    <form className="w-full" onSubmit={submit}>
      <div className="w-full flex flex-col">
        <div className={`w-full flex items-center ${effectControlsStyles.inputContainerMargin}`}>
          <input
            type="checkbox"
            id="face-ai-checkbox"
            className="checkbox-sm lg:checkbox-md checkbox-high"
            onChange={event => setAiFaceDetection(event.target.checked)}
          />
          <label htmlFor="face-ai-checkbox" className="label-sm lg:label-md label-headline ml-3">
            Identificar rostros con inteligencia artificial.
          </label>
        </div>

        {/* Image Cropper... */}
        {/*{embeddedImageCropper ? (*/}
        {/*  <div className="w-full aspect-square flex justify-center items-center rounded-xl bg-headline-200 border-2 border-headline-200 overflow-hidden relative">*/}
        {/*    <ImageCropper makeCrop={makeCrop} cropTrigger={cropTrigger} imageUrl={uploadedImageUrl} />*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  ""*/}
        {/*)}*/}

        <button type="submit" className={`btn-sm xl:btn-md btn-high w-fit ${effectControlsStyles.applyEffectButtonMargin}`}>
          Aplicar efecto
        </button>
      </div>
    </form>
  )
}

Crop.propTypes = { embeddedImageCropper: PropTypes.bool }

export { Crop }

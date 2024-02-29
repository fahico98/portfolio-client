export function range(start, end, step = 1) {
  let output = []
  for (let i = start; i <= end; i += step) {
    output.push(i)
  }
  return output
}

export function phraseTitleCase(str) {
  str = str.toLowerCase().split(" ")
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(" ")
}

export function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getCloudinaryImageElementWidth() {
  let imgElement = document.querySelector(`#${import.meta.env.VITE_CLOUDINARY_IMAGE_ELEMENT_ID}`)
  if (imgElement) {
    return Math.round(imgElement.getBoundingClientRect().width)
  }
}

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const ALPHA_REGEX = /^[ \-\,\.ñÑa-zA-Záéíóú]*$/

export function validateContactForm({ name, email, message }) {
  return {
    name: validateName(name),
    email: validateEmail(email),
    message: validateMessage(message)
  }
}

function validateName(name) {
  let validation = false

  validation = required(name)
  if (validation) return validation

  validation = alpha(name)
  if (validation) return validation

  validation = minLenght(name, 3)
  if (validation) return validation

  return validation
}

function validateEmail(userEmail) {
  let validation = false

  validation = required(userEmail)
  if (validation) return validation

  validation = email(userEmail)
  if (validation) return validation

  validation = minLenght(userEmail, 5)
  if (validation) return validation

  return validation
}

function validateMessage(message) {
  let validation = false

  validation = required(message)
  if (validation) return validation

  validation = minLenght(message, 5)
  if (validation) return validation

  validation = maxLenght(message, 900)
  if (validation) return validation

  return validation
}

function required(value) {
  return value === "" ? "Este campo es obligatorio." : false
}

function alpha(value) {
  return ALPHA_REGEX.test(String(value).trim()) ? false : "Este campo solo admite caracteres alfabéticos."
}

function email(value) {
  return EMAIL_REGEX.test(String(value).trim()) ? false : "El texto ingresado no corresponde con un correo electrónico."
}

function maxLenght(value, length) {
  return value.length > length ? `El texto ingresado no debe tener más de ${length} caracteres.` : false
}

function minLenght(value, length) {
  return value.length < length ? `El texto ingresado no debe tener menos de ${length} caracteres.` : false
}

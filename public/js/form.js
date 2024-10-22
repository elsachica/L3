import { FirstAndLastNameValidator, EmailValidator, PhoneNumberValidator, StreetValidator, PostalCodeValidator, CityValidator, DateFormatValidator, AgeValidator } from "../../src/validators/validator.js"

const emailValidator = new EmailValidator()
const phoneValidator = new PhoneNumberValidator()
const streetValidator = new StreetValidator()
const postalCodeValidator = new PostalCodeValidator()
const cityValidator = new CityValidator()
const dateFormatValidator = new DateFormatValidator()
const ageValidator = new AgeValidator()
const nameValidator = new FirstAndLastNameValidator() 


document.getElementById("verificationForm").addEventListener("submit", function (e) {
  e.preventDefault() // Hindra vanlig formulärinlämning

  let valid = true

  // Rensa tidigare felmeddelanden
  document.getElementById("nameError").textContent = ""
  document.getElementById("emailError").textContent = ""
  document.getElementById("phoneError").textContent = ""
  document.getElementById("addressError").textContent = ""
  document.getElementById("postalCodeError").textContent = ""
  document.getElementById("cityError").textContent = ""
  document.getElementById("dobError").textContent = ""

  // Hämta värden från formuläret
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const address = document.getElementById("address").value
  const postalCode = document.getElementById("postalCode").value
  const city = document.getElementById("city").value
  const dob = document.getElementById("dob").value


  const [firstName, lastName] = name.split(" ")  // Split on space

  // Validera namn
  const nameResult = nameValidator.validate(firstName, lastName)
  const nameErrorElement = document.getElementById("nameError")
  if (!nameResult.isValid) {
    nameErrorElement.textContent = nameResult.error
    nameErrorElement.classList.add("show")
    valid = false
  } else {
    nameErrorElement.classList.remove("show")
  }
  
    // Validera e-post
    const emailResult = emailValidator.validate(email)
    const emailErrorElement = document.getElementById("emailError")
    if (!emailResult.isValid) {
      emailErrorElement.textContent = emailResult.error
      emailErrorElement.classList.add("show")
      valid = false
    } else {
      emailErrorElement.classList.remove("show")
    }
  
    // Validera telefonnummer
    const phoneResult = phoneValidator.validate(phone)
    const phoneErrorElement = document.getElementById("phoneError")
    if (!phoneResult.isValid) {
      phoneErrorElement.textContent = phoneResult.error
      phoneErrorElement.classList.add("show")
      valid = false
    } else {
      phoneErrorElement.classList.remove("show")
    }
  
    // Validera adress
    const streetResult = streetValidator.validate(address)
    const addressErrorElement = document.getElementById("addressError")
    if (!streetResult.isValid) {
      addressErrorElement.textContent = streetResult.error
      addressErrorElement.classList.add("show")
      valid = false
    } else {
      addressErrorElement.classList.remove("show")
    }
  
    // Validera postnummer
    const postalResult = postalCodeValidator.validate(postalCode)
    const postalCodeErrorElement = document.getElementById("postalCodeError")
    if (!postalResult.isValid) {
      postalCodeErrorElement.textContent = postalResult.error
      postalCodeErrorElement.classList.add("show")
      valid = false
    } else {
      postalCodeErrorElement.classList.remove("show")
    }
  
    // Validera stad
    const cityResult = cityValidator.validate(city)
    const cityErrorElement = document.getElementById("cityError")
    if (!cityResult.isValid) {
      cityErrorElement.textContent = cityResult.error
      cityErrorElement.classList.add("show")
      valid = false
    } else {
      cityErrorElement.classList.remove("show")
    }
  
    // Validera födelsedatum
    const dateFormatResult = dateFormatValidator.validate(dob)
    const dobErrorElement = document.getElementById("dobError")
    if (!dateFormatResult.isValid) {
      dobErrorElement.textContent = dateFormatResult.error
      dobErrorElement.classList.add("show")
      valid = false
    } else {
      dobErrorElement.classList.remove("show")
    }
  
    // Validera ålder om datumformatet är giltigt
    if (dateFormatResult.isValid) {
      const ageResult = ageValidator.validate(dob)
      if (!ageResult.isValid) {
        dobErrorElement.textContent = ageResult.error
        dobErrorElement.classList.add("show")
        valid = false
      } else {
        dobErrorElement.classList.remove("show")
      }
    }
  
  // Validera e-post
  // const emailResult = emailValidator.validate(email)
  // if (!emailResult.isValid) {
  //   document.getElementById("emailError").textContent = emailResult.error
  //   valid = false
  // }

  // // Validera telefonnummer
  // const phoneResult = phoneValidator.validate(phone)
  // if (!phoneResult.isValid) {
  //   document.getElementById("phoneError").textContent = phoneResult.error
  //   valid = false
  // }

  // // Validera adress
  // const streetResult = streetValidator.validate(address)
  // if (!streetResult.isValid) {
  //   document.getElementById("addressError").textContent = streetResult.error
  //   valid = false
  // }

  // // Validera postnummer
  // const postalResult = postalCodeValidator.validate(postalCode)
  // if (!postalResult.isValid) {
  //   document.getElementById("postalCodeError").textContent = postalResult.error
  //   valid = false
  // }

  // // Validera stad
  // const cityResult = cityValidator.validate(city)
  // if (!cityResult.isValid) {
  //   document.getElementById("cityError").textContent = cityResult.error
  //   valid = false
  // }

  // // Validera födelsedatum
  // const dateFormatResult = dateFormatValidator.validate(dob)
  // if (!dateFormatResult.isValid) {
  //   document.getElementById("dobError").textContent = dateFormatResult.error
  //   valid = false
  // }

  // // Validera ålder
  // const ageResult = ageValidator.validate(dob)
  // if (!ageResult.isValid) {
  //   document.getElementById("dobError").textContent = ageResult.error
  //   valid = false
  // }

  // Om allt är giltigt, omdirigera till success.html med query-parametrar
  if (valid) {
    console.log("All validation passed. Redirecting to success.html")
    const url = `/success.html?email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&address=${encodeURIComponent(address)}&postalCode=${encodeURIComponent(postalCode)}&city=${encodeURIComponent(city)}&dob=${encodeURIComponent(dob)}`
    window.location.href = url
  } else {
    console.log("Validation failed. Not redirecting.")
  }
})
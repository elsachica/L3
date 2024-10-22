import { FirstAndLastNameValidator, EmailValidator, PhoneNumberValidator, StreetValidator, PostalCodeValidator, CityValidator, DateFormatValidator, AgeValidator } from "../../src/validators/validator.js"

/**
 * @fileoverview Handles form validation for the verification form.
 * @module form
 * @requires ../../src/validators/validator.js
 * @version 1.0.0
 * @description Validates user input for the verification form and redirects to the success page if all inputs are valid.
 * @author Elsa Gas Wikström
 */

const emailValidator = new EmailValidator()
const phoneValidator = new PhoneNumberValidator()
const streetValidator = new StreetValidator()
const postalCodeValidator = new PostalCodeValidator()
const cityValidator = new CityValidator()
const dateFormatValidator = new DateFormatValidator()
const ageValidator = new AgeValidator()
const nameValidator = new FirstAndLastNameValidator()

/**
 * Event listener for form submission.
 * @function
 * @memberof module:form
 * @param {Event} e - The event object.
 */
document.getElementById("verificationForm").addEventListener("submit", function (e) {
  e.preventDefault()

  let valid = true

  // Clear previous error messages
  document.getElementById("nameError").textContent = ""
  document.getElementById("emailError").textContent = ""
  document.getElementById("phoneError").textContent = ""
  document.getElementById("addressError").textContent = ""
  document.getElementById("postalCodeError").textContent = ""
  document.getElementById("cityError").textContent = ""
  document.getElementById("dobError").textContent = ""

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const address = document.getElementById("address").value
  const postalCode = document.getElementById("postalCode").value
  const city = document.getElementById("city").value
  const dob = document.getElementById("dob").value

  // Split name into first and last name
  const [firstName, lastName] = name.split(" ")

  // Validate name
  const nameResult = nameValidator.validate(firstName, lastName)
  const nameErrorElement = document.getElementById("nameError")
  if (!nameResult.isValid) {
    nameErrorElement.textContent = nameResult.error
    nameErrorElement.classList.add("show")
    valid = false
  } else {
    nameErrorElement.classList.remove("show")
  }

  // Validate email
  const emailResult = emailValidator.validate(email)
  const emailErrorElement = document.getElementById("emailError")
  if (!emailResult.isValid) {
    emailErrorElement.textContent = emailResult.error
    emailErrorElement.classList.add("show")
    valid = false
  } else {
    emailErrorElement.classList.remove("show")
  }

  // Validate phone number
  const phoneResult = phoneValidator.validate(phone)
  const phoneErrorElement = document.getElementById("phoneError")
  if (!phoneResult.isValid) {
    phoneErrorElement.textContent = phoneResult.error
    phoneErrorElement.classList.add("show")
    valid = false
  } else {
    phoneErrorElement.classList.remove("show")
  }

  // Validate address
  const streetResult = streetValidator.validate(address)
  const addressErrorElement = document.getElementById("addressError")
  if (!streetResult.isValid) {
    addressErrorElement.textContent = streetResult.error
    addressErrorElement.classList.add("show")
    valid = false
  } else {
    addressErrorElement.classList.remove("show")
  }

  // Validate postal code
  const postalResult = postalCodeValidator.validate(postalCode)
  const postalCodeErrorElement = document.getElementById("postalCodeError")
  if (!postalResult.isValid) {
    postalCodeErrorElement.textContent = postalResult.error
    postalCodeErrorElement.classList.add("show")
    valid = false
  } else {
    postalCodeErrorElement.classList.remove("show")
  }

  // Validate city
  const cityResult = cityValidator.validate(city)
  const cityErrorElement = document.getElementById("cityError")
  if (!cityResult.isValid) {
    cityErrorElement.textContent = cityResult.error
    cityErrorElement.classList.add("show")
    valid = false
  } else {
    cityErrorElement.classList.remove("show")
  }

  // Validate date of birth format
  const dateFormatResult = dateFormatValidator.validate(dob)
  const dobErrorElement = document.getElementById("dobError")
  if (!dateFormatResult.isValid) {
    dobErrorElement.textContent = dateFormatResult.error
    dobErrorElement.classList.add("show")
    valid = false
  } else {
    dobErrorElement.classList.remove("show")
  }

  // Validate age if date format is valid
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

  // Redirect to success page if all inputs are valid
  if (valid) {
    const url = `/success.html?email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&address=${encodeURIComponent(address)}&postalCode=${encodeURIComponent(postalCode)}&city=${encodeURIComponent(city)}&dob=${encodeURIComponent(dob)}`
    window.location.href = url
  } else {
  }
})
import {
  FirstAndLastNameValidator,
  EmailValidator,
  PhoneNumberValidator,
  StreetValidator,
  PostalCodeValidator,
  CityValidator,
  DateFormatValidator,
  AgeValidator
} from "../../src/validators/validator.js"

import { ValidationError, NetworkError, LogicalError } from "../errors/index.js"

/**
 * @fileoverview Handles form validation for the verification form.
 * @module form
 * @requires ../../src/validators/validator.js
 * @version 1.0.0
 * @description Validates user input for the verification form and redirects to the success page if all inputs are valid.
 * @author 
 * Elsa Gas Wikström
 */
class FormValidator {
  constructor(formId) {
    this.emailValidator = new EmailValidator()
    this.phoneValidator = new PhoneNumberValidator()
    this.streetValidator = new StreetValidator()
    this.postalCodeValidator = new PostalCodeValidator()
    this.cityValidator = new CityValidator()
    this.dateFormatValidator = new DateFormatValidator()
    this.ageValidator = new AgeValidator()
    this.nameValidator = new FirstAndLastNameValidator()

    this.form = document.getElementById(formId)
    this.form.addEventListener("submit", (e) => this.handleSubmit(e))
  }

  /**
   * Handles the form submission event.
   * @param {Event} e - The event object.
   * @private
   */
  async handleSubmit(e) {
    e.preventDefault()
    try {
      const valid = await this.validateForm()
      if (valid) {
        this.redirectToSuccessPage()
      }
    } catch (error) {
      this.handleError(error)
    }
  }

  /**
   * Validates the entire form.
   * @returns {boolean} - Returns true if valid, false otherwise.
   * @private
   */
  async validateForm() {
    let valid = true

    try {
      // Clear previous error messages
      this.clearErrorMessages()

      // Get form values
      const formValues = this.getFormValues()
      const [firstName, lastName] = formValues.name.split(" ")

      // Validate each field
      valid &= this.validateField(this.nameValidator.validate(firstName, lastName), "nameError")
      valid &= this.validateField(this.emailValidator.validate(formValues.email), "emailError")
      valid &= this.validateField(this.phoneValidator.validate(formValues.phone), "phoneError")
      valid &= this.validateField(this.streetValidator.validate(formValues.address), "addressError")
      valid &= this.validateField(this.postalCodeValidator.validate(formValues.postalCode), "postalCodeError")
      valid &= this.validateField(this.cityValidator.validate(formValues.city), "cityError")

      const dateFormatResult = this.dateFormatValidator.validate(formValues.dob)
      valid &= this.validateField(dateFormatResult, "dobError")

      // Validate age if date format is valid
      if (dateFormatResult.isValid) {
        valid &= this.validateField(this.ageValidator.validate(formValues.dob), "dobError")
      }
    } catch (error) {
      // Kasta ett specifikt fel
      throw new ValidationError("Error during form validation: " + error.message)
    }

    return valid
  }

  /**
   * Validates an individual field and updates the error message if necessary.
   * @param {Object} result - Validation result object.
   * @param {string} errorElementId - ID of the error element to update.
   * @returns {boolean} - Returns true if valid, false otherwise.
   * @private
   */
  validateField(result, errorElementId) {
    try {
      const errorElement = document.getElementById(errorElementId)
      if (!result.isValid) {
        errorElement.textContent = result.error
        errorElement.classList.add("show")
        return false
      } else {
        errorElement.classList.remove("show")
        return true
      }
    } catch (error) {
      // Kasta ett specifikt fel
      throw new LogicalError(`Error validating field ${errorElementId}: ${error.message}`)
    }
  }

  /**
   * Clears previous error messages.
   * @private
   */
  clearErrorMessages() {
    try {
      const errorElements = [
        "nameError", "emailError", "phoneError", 
        "addressError", "postalCodeError", "cityError", 
        "dobError"
      ]

      errorElements.forEach(id => {
        document.getElementById(id).textContent = ""
        document.getElementById(id).classList.remove("show")
      })
    } catch (error) {
      throw new LogicalError("Error clearing error messages: " + error.message)
    }
  }

  /**
   * Gets values from the form inputs.
   * @returns {Object} - An object containing the form values.
   * @private
   */
  getFormValues() {
    try {
      return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        postalCode: document.getElementById("postalCode").value,
        city: document.getElementById("city").value,
        dob: document.getElementById("dob").value
      }
    } catch (error) {
      throw new LogicalError("Error getting form values: " + error.message)
    }
  }

  /**
   * Redirects to the success page with the form data.
   * @private
   */
  redirectToSuccessPage() {
    try {
      const url = `/success.html?email=${encodeURIComponent(this.getFormValues().email)}&phone=${encodeURIComponent(this.getFormValues().phone)}&address=${encodeURIComponent(this.getFormValues().address)}&postalCode=${encodeURIComponent(this.getFormValues().postalCode)}&city=${encodeURIComponent(this.getFormValues().city)}&dob=${encodeURIComponent(this.getFormValues().dob)}`
      window.location.href = url
    } catch (error) {
      throw new NetworkError("Error redirecting to success page: " + error.message)
    }
  }

  /**
   * Handles errors by logging them to the console.
   * @param {Error} error - The error object.
   * @private
   */
  handleError(error) {
    console.error(`${error.name}: ${error.message}`)
  }
}

// Initialize the FormValidator with the ID of the form
new FormValidator("verificationForm")

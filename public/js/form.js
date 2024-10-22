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

/**
 * @fileoverview Handles form validation for the verification form.
 * @module form
 * @requires ../../src/validators/validator.js
 * @version 1.0.0
 * @description Validates user input for the verification form and redirects to the success page if all inputs are valid.
 * @author Elsa Gas Wikström
 */

class FormValidator {
  #emailValidator = new EmailValidator()
  #phoneValidator = new PhoneNumberValidator()
  #streetValidator = new StreetValidator()
  #postalCodeValidator = new PostalCodeValidator()
  #cityValidator = new CityValidator()
  #dateFormatValidator = new DateFormatValidator()
  #ageValidator = new AgeValidator()
  #nameValidator = new FirstAndLastNameValidator()

  constructor(formId) {
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
    const valid = await this.validateForm()

    if (valid) {
      this.redirectToSuccessPage()
    }
  }

  /**
   * Validates the entire form.
   * @returns {boolean} - Returns true if valid, false otherwise.
   * @private
   */
  async validateForm() {
    let valid = true

    // Clear previous error messages
    this.clearErrorMessages()

    // Get form values
    const formValues = this.getFormValues();
    const [firstName, lastName] = formValues.name.split(" ")

    // Validate each field
    valid &= this.validateField(this.#nameValidator.validate(firstName, lastName), "nameError")
    valid &= this.validateField(this.#emailValidator.validate(formValues.email), "emailError")
    valid &= this.validateField(this.#phoneValidator.validate(formValues.phone), "phoneError")
    valid &= this.validateField(this.#streetValidator.validate(formValues.address), "addressError")
    valid &= this.validateField(this.#postalCodeValidator.validate(formValues.postalCode), "postalCodeError")
    valid &= this.validateField(this.#cityValidator.validate(formValues.city), "cityError")
    
    const dateFormatResult = this.#dateFormatValidator.validate(formValues.dob)
    valid &= this.validateField(dateFormatResult, "dobError")
    
    // Validate age if date format is valid
    if (dateFormatResult.isValid) {
      valid &= this.validateField(this.#ageValidator.validate(formValues.dob), "dobError")
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
    const errorElement = document.getElementById(errorElementId)
    if (!result.isValid) {
      errorElement.textContent = result.error
      errorElement.classList.add("show")
      return false
    } else {
      errorElement.classList.remove("show")
      return true
    }
  }

  /**
   * Clears previous error messages.
   * @private
   */
  clearErrorMessages() {
    const errorElements = [
      "nameError", "emailError", "phoneError", 
      "addressError", "postalCodeError", "cityError", 
      "dobError"
    ]

    errorElements.forEach(id => {
      document.getElementById(id).textContent = ""
      document.getElementById(id).classList.remove("show")
    })
  }

  /**
   * Gets values from the form inputs.
   * @returns {Object} - An object containing the form values.
   * @private
   */
  getFormValues() {
    return {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      postalCode: document.getElementById("postalCode").value,
      city: document.getElementById("city").value,
      dob: document.getElementById("dob").value
    }
  }

  /**
   * Redirects to the success page with the form data.
   * @private
   */
  redirectToSuccessPage() {
    const url = `/success.html?email=${encodeURIComponent(this.getFormValues().email)}&phone=${encodeURIComponent(this.getFormValues().phone)}&address=${encodeURIComponent(this.getFormValues().address)}&postalCode=${encodeURIComponent(this.getFormValues().postalCode)}&city=${encodeURIComponent(this.getFormValues().city)}&dob=${encodeURIComponent(this.getFormValues().dob)}`
    window.location.href = url
  }
}

// Initialize the FormValidator with the ID of the form
new FormValidator("verificationForm")

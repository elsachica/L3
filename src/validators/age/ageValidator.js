import { DateFormatValidator } from "./dateFormatValidator.js"

/**
 * Class representing an age validator.
 * @extends DateFormatValidator
 */
export class AgeValidator extends DateFormatValidator {
  /**
   * Validates the age based on a date format.
   * @param {string} dateFormat - The date format to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the date format is valid and age is appropriate.
   * @returns {string} [return.error] - The error message if validation fails.
   */
  validate(dateFormat) {
    const dateValidation = super.validate(dateFormat)
    
    if (!dateValidation.isValid) {
      return dateValidation
    }

    const parsedDate = new Date(dateFormat)
    const today = new Date()

    let age = today.getFullYear() - parsedDate.getFullYear()
    const monthDiff = today.getMonth() - parsedDate.getMonth()
    const dayDiff = today.getDate() - parsedDate.getDate()

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--
    }
    if (age < 3) {
      return { isValid: false, error: "You must be at least 3 years old to create an account." }
    }
    if (age > 120) {
      return { isValid: false, error: "You cannot be older than 120 years to create an account." }
    }
    return { isValid: true, error: "Age is valid." }
  }
}

// 26
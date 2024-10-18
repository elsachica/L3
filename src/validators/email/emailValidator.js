/**
 * Class representing an email validator.
 */
export class EmailValidator {
  /**
   * Validates an email address.
   * @param {string} email - The email address to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the email address is valid.
   * @returns {string} [return.error] - The error message if the email address is invalid.
   */
  validate(email) {
    if (!email) {
      return { isValid: false, error: "Email is required." }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Matches a basic email format
    const forbiddenCharsRegex = /[^\w@.-]/ // Forbidden special characters !#$%^&*()=+[]\';,/{}|":<>?~
    const domainRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/ // Domain format meaning it has at least 2 characters
    const maxLength = 254 // Maximum length of an email address
    const maxLocalLength = 64 // Maximum length of the local part of the email address

    if (forbiddenCharsRegex.test(email)) {
      return { isValid: false, error: "Email contains forbidden characters." }
    }
    if (!emailRegex.test(email)) {
      return { isValid: false, error: "Email is not valid." }
    }
    if (!domainRegex.test(email)) {
      return { isValid: false, error: "Email domain is not valid." }
    }
    if (email.length > maxLength) {
      return { isValid: false, error: "Email is too long." }
    }
    const [localPart, domainPart] = email.split("@")
    if (localPart.length > maxLocalLength) {
      return { isValid: false, error: "Local part of the email is too long." }
    }
    return { isValid: true, error: null }
  }
}

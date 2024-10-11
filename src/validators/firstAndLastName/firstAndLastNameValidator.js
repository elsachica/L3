export class FirstAndLastNameValidator {
  /**
   * Validates the first and last name.
   * @param {string} firstName - The first name to validate.
   * @param {string} lastName - The last name to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the names are valid.
   * @returns {string} [return.error] - The error message if validation fails.
   */
  validateFirstAndLastName(firstName, lastName) {

    const nameRegex = /^[A-Za-zåäöÅÄÖ]+$/ // Only letters allowed
    const maxLength = 80 // Maximum length of the name

    if (!firstName) {
      return { isValid: false, error: "First name is required." }
    }
    if (firstName.length > maxLength) {
      return { isValid: false, error: "First name must not be longer than 80 characters." }
    }
    if (!nameRegex.test(firstName)) {
      return { isValid: false, error: "First name can only contain letters." }
    }
    if (!lastName) {
      return { isValid: false, error: "Last name is required." }
    }
    if (lastName.length > maxLength) {
      return { isValid: false, error: "Last name must not be longer than 80 characters." }
    }
    if (!nameRegex.test(lastName)) {
      return { isValid: false, error: "Last name can only contain letters." }
    }

    return { isValid: true }
  }
}

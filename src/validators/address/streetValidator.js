/**
 * Class representing a street name validator.
 */
export class StreetValidator {
  /**
   * Validates a street name.
   * @param {string} street - The street name to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the street name is valid.
   * @returns {string} [return.error] - The error message if the street name is invalid.
   */
  validate(street) {
    if (!street) {
      return { isValid: false, error: "Street name is required." }
    }

    const streetRegex = /^[A-Za-zåäöÅÄÖ\s\d]+[A-Za-zåäöÅÄÖ\s\d]*$/ // Letters, spaces, and numbers allowed

    if (!streetRegex.test(street)) {
      return { isValid: false, error: "Street name can only contain letters, numbers, and spaces." }
    }

    return { isValid: true }
  }
}

// 12
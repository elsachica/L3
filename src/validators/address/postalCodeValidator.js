/**
 * Class representing a postal code validator for USA, Sweden, Canada and UK.
 */
export class PostalCodeValidator {
  /**
   * Validates a postal code.
   * @param {string} postalCode - The postal code to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the postal code is valid.
   * @returns {string} [return.error] - The error message if the postal code is invalid.
   * @returns {string} [return.country] - The country of the valid postal code.
   */
  validate(postalCode) {
    if (!postalCode) {
      return { isValid: false, error: "Postal code is required." }
    }

    const usPostalCodeRegex = /^\d{5}(-\d{4})?$/ // US postal code format: 12345 or 12345-6789
    const swePostalCodeRegex = /^\d{3} \d{2}$/ // Sweden postal code format: 123 45
    const canPostalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/ // Canada postal code format: A1A 1A1 or A1A1A1
    const ukPostalCodeRegex = /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s?\d[A-Za-z]{2}$/ // UK postal code format: A1 1AA or A11AA

    if (usPostalCodeRegex.test(postalCode)) {
      return { isValid: true, country: "USA" }
    } else if (swePostalCodeRegex.test(postalCode)) {
      return { isValid: true, country: "Sweden" }
    } else if (canPostalCodeRegex.test(postalCode)) {
      return { isValid: true, country: "Canada" }
    } else if (ukPostalCodeRegex.test(postalCode)) {
      return { isValid: true, country: "UK" }
    } else {
      return { isValid: false, error: "Not a valid postal code." }
    }
  }
}

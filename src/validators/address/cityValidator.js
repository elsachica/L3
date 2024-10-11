/**
 * Class representing a city name validator.
 */
export class CityValidator {
  /**
   * Validates a city name.
   * @param {string} city - The city name to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the city name is valid.
   * @returns {string} [return.error] - The error message if the city name is invalid.
   */
  validateCity(city) {
    if (!city) {
      return { isValid: false, error: "City name is required." }
    }

    const cityRegex = /^[A-Za-zåäöÅÄÖ\s]+$/ // Only letters and spaces allowed

    if (!cityRegex.test(city)) {
      return { isValid: false, error: "City name can only contain letters and spaces." }
    }

    return { isValid: true }
  }
}

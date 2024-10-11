import { PostalCodeValidator } from "./postalCodeValidator.js"
import { StreetValidator } from "./streetValidator.js"
import { CityValidator } from "./cityValidator.js"

/**
 * Class representing an address validator.
 */
export class AddressValidator {
  constructor() {
    this.postalCodeValidator = new PostalCodeValidator()
    this.streetValidator = new StreetValidator()
    this.cityValidator = new CityValidator()
  }

  /**
   * Validates an address.
   * @param {Object} address - The address to validate.
   * @param {string} address.street - The street name to validate.
   * @param {string} address.postalCode - The postal code to validate.
   * @param {string} address.city - The city name to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the address is valid.
   * @returns {string} [return.error] - The error message if the address is invalid.
   */
  validateAddress({ street, postalCode, city }) {
    const streetValidation = this.streetValidator.validateStreet(street)
    if (!streetValidation.isValid) {
      return streetValidation
    }

    const postalCodeValidation = this.postalCodeValidator.validatePostalCode(postalCode)
    if (!postalCodeValidation.isValid) {
      return postalCodeValidation
    }

    const cityValidation = this.cityValidator.validateCity(city)
    if (!cityValidation.isValid) {
      return cityValidation
    }

    return { isValid: true }
  }
}

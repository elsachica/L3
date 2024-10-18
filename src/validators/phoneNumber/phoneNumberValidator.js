/**
 * Class representing a phone number validator.
 */
export class PhoneNumberValidator {
  /**
   * Validates a phone number.
   * @param {string} phoneNumber - The phone number to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the phone number is valid.
   * @returns {string} [return.error] - The error message if the phone number is invalid.
   * @returns {string} [return.format] - The format of the valid phone number.
   */
  validate(phoneNumber) {
    if (!phoneNumber) {
      return { isValid: false, error: "Phone number is required." }
    }

    const swePhoneRegex = /^(?:\+46|0)\d{9}$/ // Sweden phone number format: 0701234567 or +46701234567
    const usPhoneRegex = /^(?:\+1\s?)?\d{10}$/ // US phone number format: 1234567890 or +11234567890
    const ukPhoneRegex = /^(?:\+44|0)\d{10}$/ // UK phone number format: 07123456789 or +447123456789
    const espPhoneRegex = /^(?:\+34\s?|0)?[67]\d{8}$/ // Spain phone number format: 612345678 or +34612345678

    if (swePhoneRegex.test(phoneNumber)) {
      return { isValid: true, format: "Swedish" }
    } else if (ukPhoneRegex.test(phoneNumber)) {
      return { isValid: true, format: "UK" }
    } else if (usPhoneRegex.test(phoneNumber)) {
      return { isValid: true, format: "US" }
    } else if (espPhoneRegex.test(phoneNumber)) {
      return { isValid: true, format: "Spain" }
    } else {
      return { isValid: false, error: "Not a valid phone number." }
    }
  }
}

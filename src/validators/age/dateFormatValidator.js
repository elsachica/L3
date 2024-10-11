/**
 * Class representing a date format validator.
 */
export class DateFormatValidator {
  /**
   * Validates a date format.
   * @param {string} dateFormat - The date format to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the date format is valid.
   * @returns {string} [return.error] - The error message if the date format is invalid.
   * @returns {string} [return.format] - The format of the valid date.
   * @returns {string} [return.message] - The message explaining why the date format is invalid.
   */
  validateDateFormat(dateFormat) {
    if (!dateFormat) {
      return { isValid: false, error: "Date is required." }
    }

    const yyyyMmDdRegex = /^\d{4}-\d{2}-\d{2}$/ // Matches a date format in the form of YYYY-MM-DD
    const ddMmYyyyRegex = /^\d{2}\/\d{2}\/\d{4}$/ // Matches a date format in the form of DD/MM/YYYY

    if (yyyyMmDdRegex.test(dateFormat)) {
      return { isValid: true, format: "YYYY-MM-DD" }
    } else if (ddMmYyyyRegex.test(dateFormat)) {
      return { isValid: true, format: "DD/MM/YYYY" }
    } else {
      return { isValid: false, message: "Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY." }
    }
  }
}

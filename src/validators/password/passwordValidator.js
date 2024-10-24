/**
 * Class representing a password validator.
 */
export class PasswordValidator {
  /**
   * Validates a password.
   * @param {string} password - The password to validate.
   * @returns {Object} The validation result.
   * @returns {boolean} return.isValid - Indicates if the password is valid.
   * @returns {string} [return.error] - The error message if the password is invalid.
   * @returns {string} [return.message] - The message explaining why the password is invalid.
   */
  validate(password) {
    if (!password) {
      return { isValid: false, error: "Password is required." }
    }

    const lengthRegex = /^.{6,16}$/ // Forbidden to be shorter than 6 characters and longer than 16 characters
    const digitRegex = /[0-9]/ // Must include at least one digit
    const specialCharRegex = /[!@#$%^&*]/ // Must include at least one special character !@#$%^&*
    const upperCaseRegex = /[A-Z]/ // Must include at least one uppercase letter
    const lowerCaseRegex = /[a-z]/ // Must include at least one lowercase letter
    const noSpaceRegex = /^\S*$/ // Forbidden to contain spaces

    if (!lengthRegex.test(password)) {
      return { isValid: false, error: "Password must be between 6 and 16 characters long." }
    }
    if (!digitRegex.test(password)) {
      return { isValid: false, error: "Password must include at least one digit." }
    }
    if (!specialCharRegex.test(password)) {
      return { isValid: false, error: "Password must include at least one special character." }
    }
    if (!upperCaseRegex.test(password)) {
      return { isValid: false, error: "Password must include at least one uppercase letter." }
    }
    if (!lowerCaseRegex.test(password)) {
      return { isValid: false, error: "Password must include at least one lowercase letter." }
    }
    if (!noSpaceRegex.test(password)) {
      return { isValid: false, error: "Password must not contain spaces." }
    }
    
    return { isValid: true }
  }
}

// 33
import { PasswordValidator } from "../src/validators/password/index.js"

/**
 * Tests for the PasswordValidator class.
 */
describe("PasswordValidator Tests", () => {
  let passwordValidator

  /**
   * Initializes the PasswordValidator instance before all tests.
   */
  beforeAll(() => {
    passwordValidator = new PasswordValidator()
  })

  /**
   * Tests if a correct password is validated successfully.
   */
  test("validates a correct password", async () => {
    const result = await passwordValidator.validatePassword("Abc123!")
    expect(result).toEqual({ isValid: true })
  })

  /**
   * Tests if a password that is too short is marked as invalid.
   */
  test("returns invalid for a password that is too short", async () => {
    const result = await passwordValidator.validatePassword("Ab1!")
    expect(result).toEqual({ isValid: false, message: "Password must be between 6 and 16 characters long." })
  })

  /**
   * Tests if a password missing a digit is marked as invalid.
   */
  test("returns invalid for a password missing a digit", async () => {
    const result = await passwordValidator.validatePassword("Abcdef!")
    expect(result).toEqual({ isValid: false, message: "Password must include at least one digit." })
  })

  /**
   * Tests if a password missing a special character is marked as invalid.
   */
  test("returns invalid for a password missing a special character", async () => {
    const result = await passwordValidator.validatePassword("Abc12345")
    expect(result).toEqual({ isValid: false, message: "Password must include at least one special character." })
  })

  /**
   * Tests if a password missing an uppercase letter is marked as invalid.
   */
  test("returns invalid for a password missing an uppercase letter", async () => {
    const result = await passwordValidator.validatePassword("abc12345!")
    expect(result).toEqual({ isValid: false, message: "Password must include at least one uppercase letter." })
  })

  /**
   * Tests if a password missing a lowercase letter is marked as invalid.
   */
  test("returns invalid for a password missing a lowercase letter", async () => {
    const result = await passwordValidator.validatePassword("ABC12345!")
    expect(result).toEqual({ isValid: false, message: "Password must include at least one lowercase letter." })
  })

  /**
   * Tests if a password containing spaces is marked as invalid.
   */
  test("returns invalid for a password containing spaces", async () => {
    const result = await passwordValidator.validatePassword("Abc 123!")
    expect(result).toEqual({ isValid: false, message: "Password must not contain spaces." })
  })

  /**
   * Tests if a password that is too long is marked as invalid.
   */
  test("returns invalid for a password that is too long", async () => {
    const result = await passwordValidator.validatePassword("Abc12345!@#TooLongPassword")
    expect(result).toEqual({ isValid: false, message: "Password must be between 6 and 16 characters long." })
  })
})

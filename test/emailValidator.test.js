import { EmailValidator } from "../src/validators/email/index.js"

/**
 * Tests for the EmailValidator class.
 */
describe("EmailValidator Tests", () => {
  let emailValidator

  /**
   * Initializes the EmailValidator instance before all tests.
   */
  beforeAll(() => {
    emailValidator = new EmailValidator()
  })

  /**
   * Tests if a correct email address is validated successfully.
   */
  test("returns valid for a correct email address", async () => {
    const result = await emailValidator.validateEmail("example@gmail.com")
    expect(result).toEqual({ isValid: true, error: null })
  })

  /**
   * Tests if an empty email address returns an error.
   */
  test("returns an error for an empty email", async () => {
    const result = await emailValidator.validateEmail("")
    expect(result).toEqual({ isValid: false, error: "Email is required." })
  })

  /**
   * Tests if an email address without "@" symbol returns an error.
   */
  test("returns an error for an email without \"@\" symbol", async () => {
    const result = await emailValidator.validateEmail("examplegmail.com")
    expect(result).toEqual({ isValid: false, error: "Email is not valid." })
  })

  /**
   * Tests if an email address with forbidden characters returns an error.
   */
  test("returns an error for an email with forbidden characters", async () => {
    const result = await emailValidator.validateEmail("example!@gmail.com")
    expect(result).toEqual({ isValid: false, error: "Email contains forbidden characters." })
  })

  /**
   * Tests if an email address with an invalid domain returns an error.
   */
  test("returns an error for an email with an invalid domain", async () => {
    const result = await emailValidator.validateEmail("example@gmail.c")
    expect(result).toEqual({ isValid: false, error: "Email domain is not valid." })
  })
})

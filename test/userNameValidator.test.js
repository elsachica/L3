import { UserNameValidator } from "../src/validators/userName/index.js"

/**
 * Tests for the UserNameValidator class.
 */
describe("UserNameValidator Tests", () => {
  let userNameValidator

  /**
   * Initializes the UserNameValidator instance before all tests.
   */
  beforeAll(() => {
    userNameValidator = new UserNameValidator()
  })

  /**
   * Tests if a valid username is correctly validated.
   */
  test("returns valid for a correct username", async () => {
    const result = await userNameValidator.validateUserName("ValidUsername1")
    expect(result).toEqual({ isValid: true })
  })

  /**
   * Tests if a username that is too short returns an error.
   */
  test("returns an error for a username that is too short", async () => {
    const result = await userNameValidator.validateUserName("ab")
    expect(result).toEqual({ isValid: false, message: "Username must be between 3 and 16 characters long." })
  })

  /**
   * Tests if a username that is too long returns an error.
   */
  test("returns an error for a username that is too long", async () => {
    const result = await userNameValidator.validateUserName("thisusernameiswaytoolong")
    expect(result).toEqual({ isValid: false, message: "Username must be between 3 and 16 characters long." })
  })

  /**
   * Tests if an empty username returns an error.
   */
  test("returns an error for an empty username", async () => {
    const result = await userNameValidator.validateUserName("")
    expect(result).toEqual({ isValid: false, error: "Username is required." })
  })

  /**
   * Tests if a username with forbidden characters returns an error.
   */
  test("returns an error for a username with forbidden characters", async () => {
    const result = await userNameValidator.validateUserName("invalid@username")
    expect(result).toEqual({ isValid: false, message: "Username must not contain forbidden special characters." })
  })

  /**
   * Tests if a username with forbidden words returns an error.
   */
  test("returns an error for a username with forbidden words", async () => {
    const result = await userNameValidator.validateUserName("adminUser")
    expect(result).toEqual({ isValid: false, message: "Username contains forbidden words." })
  })
})
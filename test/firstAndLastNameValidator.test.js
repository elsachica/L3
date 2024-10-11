import { FirstAndLastNameValidator } from "../src/validators/firstAndLastName/index.js"

/**
 * Tests for the FirstAndLastNameValidator class.
 */
describe("FirstAndLastNameValidator Tests", () => {
  let nameValidator

  /**
   * Initializes the FirstAndLastNameValidator instance before all tests.
   */
  beforeAll(() => {
    nameValidator = new FirstAndLastNameValidator()
  })

  /**
   * Tests if valid first and last names are correctly validated.
   */
  test("returns valid for correct names", async () => {
    const result = await nameValidator.validateFirstAndLastName("Anna", "Svensson")
    expect(result).toEqual({ isValid: true })
  })

  /**
   * Tests if an empty first name returns an error.
   */
  test("returns error for missing first name", async () => {
    const result = await nameValidator.validateFirstAndLastName("", "Svensson")
    expect(result).toEqual({ isValid: false, error: "First name is required." })
  })

  /**
   * Tests if an empty last name returns an error.
   */
  test("returns error for missing last name", async () => {
    const result = await nameValidator.validateFirstAndLastName("Anna", "")
    expect(result).toEqual({ isValid: false, error: "Last name is required." })
  })

  /**
   * Tests if a first name that is too long returns an error.
   */
  test("returns error for first name too long", async () => {
    const result = await nameValidator.validateFirstAndLastName("A".repeat(81), "Svensson")
    expect(result).toEqual({ isValid: false, error: "First name must not be longer than 80 characters." })
  })

  /**
   * Tests if a last name that is too long returns an error.
   */
  test("returns error for last name too long", async () => {
    const result = await nameValidator.validateFirstAndLastName("Anna", "Svensson".repeat(81))
    expect(result).toEqual({ isValid: false, error: "Last name must not be longer than 80 characters." })
  })

  /**
   * Tests if a last name containing numbers returns an error.
   */
  test("returns error for last name containing numbers", async () => {
    const result = await nameValidator.validateFirstAndLastName("Anna", "Svensson123")
    expect(result).toEqual({ isValid: false, error: "Last name can only contain letters." })
  })
})
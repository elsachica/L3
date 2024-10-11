import { AgeValidator } from "../src/validators/age/index.js"

/**
 * Tests for the AgeValidator class.
 */
describe("AgeValidator Tests", () => {
  let ageValidator

  /**
   * Initializes the AgeValidator instance before all tests.
   */
  beforeAll(() => {
    ageValidator = new AgeValidator()
  })

  /**
   * Tests if a valid age (between 3 and 120 years) is correctly validated.
   */
  test("returns valid for an appropriate age", () => {
    const result = ageValidator.validateAge("2000-10-01")
    expect(result).toEqual({ isValid: true, message: "Age is valid." })
  })

  /**
   * Tests if an age less than 3 years returns an error.
   */
  test("returns an error for age less than 3 years", () => {
    const result = ageValidator.validateAge("2022-10-01")
    expect(result).toEqual({ isValid: false, message: "You must be at least 3 years old to create an account." })
  })

  /**
   * Tests if an age greater than 120 years returns an error.
   */
  test("returns an error for age greater than 120 years", () => {
    const result = ageValidator.validateAge("1900-09-01")
    expect(result).toEqual({ isValid: false, message: "You cannot be older than 120 years to create an account." })
  })

  /**
   * Tests if an invalid date format returns an error.
   */
  test("returns an error for an invalid date format", () => {
    const result = ageValidator.validateAge("01-10-2000")
    expect(result).toEqual({ isValid: false, message: "Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY." })
  })
})

import { PostalCodeValidator } from "../src/validators/address/index.js"

/**
 * Tests for the PostalCodeValidator class.
 */
describe("PostalCodeValidator Tests", () => {
  let postalCodeValidator

  /**
   * Initializes the PostalCodeValidator instance before all tests.
   */
  beforeAll(() => {
    postalCodeValidator = new PostalCodeValidator()
  })

  /**
   * Tests if a valid US postal code is correctly validated.
   */
  test("returns valid for a correct US postal code", async () => {
    const result = await postalCodeValidator.validatePostalCode("12345")
    expect(result).toEqual({ isValid: true, country: "USA" })
  })

  /**
   * Tests if a valid US postal code with a hyphen is correctly validated.
   */
  test("returns valid for a correct US postal code with hyphen", async () => {
    const result = await postalCodeValidator.validatePostalCode("12345-6789")
    expect(result).toEqual({ isValid: true, country: "USA" })
  })

  /**
   * Tests if a valid Swedish postal code with a space is correctly validated.
   */
  test("returns valid for a correct Swedish postal code with space", async () => {
    const result = await postalCodeValidator.validatePostalCode("123 45")
    expect(result).toEqual({ isValid: true, country: "Sweden" })
  })

  /**
   * Tests if a valid Canadian postal code is correctly validated.
   */
  test("returns valid for a correct Canadian postal code", async () => {
    const result = await postalCodeValidator.validatePostalCode("K1A 0B1")
    expect(result).toEqual({ isValid: true, country: "Canada" })
  })

  /**
   * Tests if a valid UK postal code is correctly validated.
   */
  test("returns valid for a correct UK postal code", async () => {
    const result = await postalCodeValidator.validatePostalCode("W1A 1AA")
    expect(result).toEqual({ isValid: true, country: "UK" })
  })

  /**
   * Tests if an invalid postal code returns an error.
   */
  test("returns an error for an invalid postal code", async () => {
    const result = await postalCodeValidator.validatePostalCode("1234")
    expect(result).toEqual({ isValid: false, error: "Not a valid postal code." })
  })

  /**
   * Tests if an empty postal code returns an error.
   */
  test("returns an error for an empty postal code", async () => {
    const result = await postalCodeValidator.validatePostalCode("")
    expect(result).toEqual({ isValid: false, error: "Postal code is required." })
  })
})

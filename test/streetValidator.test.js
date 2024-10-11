import { StreetValidator } from "../src/validators/address/index.js"

/**
 * Tests for the StreetValidator class.
 */
describe("StreetValidator Tests", () => {
  let streetValidator

  /**
   * Initializes the StreetValidator instance before all tests.
   */
  beforeAll(() => {
    streetValidator = new StreetValidator()
  })

  /**
   * Tests if a valid street name is correctly validated.
   */
  test("returns valid for a correct street name", async () => {
    const result = await streetValidator.validateStreet("Main Street")
    expect(result).toEqual({ isValid: true })
  })

  /**
   * Tests if an empty street name returns an error.
   */
  test("returns error for an empty street name", async () => {
    const result = await streetValidator.validateStreet("")
    expect(result).toEqual({ isValid: false, error: "Street name is required." })
  })

  /**
   * Tests if a street name with numbers is correctly validated.
   */
  test("returns valid for a street name with numbers", async () => {
    const result = await streetValidator.validateStreet("Rackarberget 19A")
    expect(result).toEqual({ isValid: true })
  })

  /**
   * Tests if a street name with special characters returns an error.
   */
  test("returns error for a street name with special characters", async () => {
    const result = await streetValidator.validateStreet("Main Street!")
    expect(result).toEqual({ isValid: false, error: "Street name can only contain letters, numbers, and spaces." })
  })

  /**
   * Tests if a street name with spaces is correctly validated.
   */
  test("returns valid for a street name with spaces", async () => {
    const result = await streetValidator.validateStreet("Main Street")
    expect(result).toEqual({ isValid: true })
  })
})
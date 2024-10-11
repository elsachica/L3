import { CityValidator } from "../src/validators/address/index.js"

/**
 * Tests for the CityValidator class.
 */
describe("CityValidator Tests", () => {
  let cityValidator

  /**
   * Initializes the CityValidator instance before all tests.
   */
  beforeAll(() => {
    cityValidator = new CityValidator()
  })

  /**
   * Tests if a valid city name is correctly validated.
   */
  test("returns valid for a correct city name", async () => {
    const result = await cityValidator.validateCity("Stockholm")
    expect(result).toEqual({ isValid: true })
  })

  /**
   * Tests if an empty city name returns an error.
   */
  test("returns error for an empty city name", async () => {
    const result = await cityValidator.validateCity("")
    expect(result).toEqual({ isValid: false, error: "City name is required." })
  })

  /**
   * Tests if a city name with numbers returns an error.
   */
  test("returns error for a city name with numbers", async () => {
    const result = await cityValidator.validateCity("Stockholm123")
    expect(result).toEqual({ isValid: false, error: "City name can only contain letters and spaces." })
  })

  /**
   * Tests if a city name with special characters returns an error.
   */
  test("returns error for a city name with special characters", async () => {
    const result = await cityValidator.validateCity("Stockholm!")
    expect(result).toEqual({ isValid: false, error: "City name can only contain letters and spaces." })
  })

  /**
   * Tests if a city name with spaces is correctly validated.
   */
  test("returns valid for a city name with spaces", async () => {
    const result = await cityValidator.validateCity("New York")
    expect(result).toEqual({ isValid: true })
  })
})

import { DateFormatValidator } from "../src/validators/age/index.js"

/**
 * Tests for the DateFormatValidator class.
 */
describe("DateFormatValidator Tests", () => {
  let dateFormatValidator

  /**
   * Initializes the DateFormatValidator instance before all tests.
   */
  beforeAll(() => {
    dateFormatValidator = new DateFormatValidator()
  })

  /**
   * Tests if a valid date format YYYY-MM-DD is correctly validated.
   */
  test("returns valid for a correct date format YYYY-MM-DD", async () => {
    const result = await dateFormatValidator.validateDateFormat("2023-10-01")
    expect(result).toEqual({ isValid: true, format: "YYYY-MM-DD" })
  })

  /**
   * Tests if a valid date format DD/MM/YYYY is correctly validated.
   */
  test("returns valid for a correct date format DD/MM/YYYY", async () => {
    const result = await dateFormatValidator.validateDateFormat("01/10/2023")
    expect(result).toEqual({ isValid: true, format: "DD/MM/YYYY" })
  })

  /**
   * Tests if an invalid date format returns an error.
   */
  test("returns an error for an invalid date format", async () => {
    const result = await dateFormatValidator.validateDateFormat("2023/10/01")
    expect(result).toEqual({ isValid: false, message: "Not a valid date format. Expected formats: YYYY-MM-DD or DD/MM/YYYY." })
  })

  /**
   * Tests if an empty date string returns an error.
   */
  test("returns an error for an empty date string", async () => {
    const result = await dateFormatValidator.validateDateFormat("")
    expect(result).toEqual({ isValid: false, error: "Date is required." })
  })
})
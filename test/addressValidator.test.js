import { AddressValidator } from "../src/validators/address/index.js"

/**
 * Tests for the AddressValidator class.
 */
describe("AddressValidator Tests", () => {
  let addressValidator

  /**
   * Initializes the AddressValidator instance before all tests.
   */
  beforeAll(() => {
    addressValidator = new AddressValidator()
  })

  /**
   * Tests if a valid address is correctly validated.
   */
  test("returns valid for a correct address", async () => {
    const address = {
      street: "Main Street 123A",
      postalCode: "12345",
      city: "Stockholm"
    }
    const result = await addressValidator.validateAddress(address)
    expect(result).toEqual({ isValid: true })
  })

  /**
   * Tests if an address with an invalid street name returns an error.
   */
  test("returns error for an invalid street name", async () => {
    const address = {
      street: "Main Street!",
      postalCode: "12345",
      city: "Stockholm"
    }
    const result = await addressValidator.validateAddress(address)
    expect(result).toEqual({ isValid: false, error: "Street name can only contain letters, numbers, and spaces." })
  })

  /**
   * Tests if an address with an invalid postal code returns an error.
   */
  test("returns error for an invalid postal code", async () => {
    const address = {
      street: "Main Street 123A",
      postalCode: "1234",
      city: "Stockholm"
    }
    const result = await addressValidator.validateAddress(address)
    expect(result).toEqual({ isValid: false, error: "Not a valid postal code." })
  })

  /**
   * Tests if an address with an invalid city name returns an error.
   */
  test("returns error for an invalid city name", async () => {
    const address = {
      street: "Main Street 123A",
      postalCode: "12345",
      city: "Stockholm123"
    }
    const result = await addressValidator.validateAddress(address)
    expect(result).toEqual({ isValid: false, error: "City name can only contain letters and spaces." })
  })
})
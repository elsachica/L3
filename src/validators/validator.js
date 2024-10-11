/**
 * @file validator.js
 * @description This file exports various validator classes from their respective modules.
 * These validators include:
 * - EmailValidator: Validates email addresses.
 * - PhoneNumberValidator: Validates phone numbers.
 * - PasswordValidator: Validates passwords.
 * - UserNameValidator: Validates usernames.
 * - FirstAndLastNameValidator: Validates first and last names.
 * - DateFormatValidator: Validates date formats.
 * - AgeValidator: Validates age based on date formats.
 * - PostalCodeValidator: Validates postal codes.
 * - StreetValidator: Validates street names.
 * - CityValidator: Validates city names.
 * - AddressValidator: Validates complete addresses.
 */

export { EmailValidator } from "./email/index.js"
export { PhoneNumberValidator } from "./phoneNumber/index.js"
export { PasswordValidator } from "./password/index.js"
export { UserNameValidator } from "./userName/index.js"
export { FirstAndLastNameValidator } from "./firstAndLastName/index.js"

// date
export { DateFormatValidator, AgeValidator } from "./age/index.js"

// address
export { PostalCodeValidator, StreetValidator, CityValidator, AddressValidator } from "./address/index.js"

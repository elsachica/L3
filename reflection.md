# Reflektion - Clean Code kapitel 2-11

## Kapitel 2: Meaningful names
I kapitel 2 betonas vikten av tydliga och avsiktsförklarande namn. Jag har omarbetat variabel- och metodnamn för att bättre beskriva deras syfte och undvikit förkortningar som kan skapa förvirring. Namnen följer nu principerna "**Use Intention-Revealing Names**", "**Use Searchable Names"**, och "**Use Pronounceable Names**". 

Dessutom har jag uppdaterat mina metoder i valideringsklasserna. Exempelvis har metoder som tidigare hette `validateStreet()` nu förenklats till `validate()`, vilket gäller för alla klasser i validators mappen. Detta följer principen **Don’t Add Gratuitous Context**. Denna förändring gör koden inte bara lättare att läsa utan även enklare att underhålla.

Från `streetValidator.js`:
```javascript
export class StreetValidator {
  validate(street) {
    if (!street) {
      return { isValid: false, error: "Street name is required." }
    }

    const streetRegex = /^[A-Za-zåäöÅÄÖ\s\d]+[A-Za-zåäöÅÄÖ\s\d]*$/ 

    if (!streetRegex.test(street)) {
      return { isValid: false, error: "Street name can only contain letters, numbers, and spaces." }
    }

    return { isValid: true }
  }
}
```

<br>

## Kapitel 3: Meaningful names
I kapitel 3 diskuteras vikten av små funktioner som endast gör en sak. Jag har anpassat min kod genom att bryta ner större funktioner till mindre, mer hanterbara delar, som följer principen att varje funktion ska ha ett enda ansvar. Exempelvis har jag separerat valideringslogiken i `FormValidator.js` genom att skapa metoder som `validateField()`, `clearErrorMessages()`, och `getFormValues()`. Varje metod har ett tydligt syfte, vilket förbättrar läsbarheten och gör koden enklare att underhålla. Begrepp som **Do One Thing** och **Stepdown Rule** har varit centrala i denna refaktorering.

`FormValidator.js`:
```javascript
  validateField(result, errorElementId) {
    try {
      const errorElement = document.getElementById(errorElementId)
      if (!result.isValid) {
        errorElement.textContent = result.error
        errorElement.classList.add("show")
        return false
      } else {
        errorElement.classList.remove("show")
        return true
      }
    } catch (error) {
      throw new LogicalError(`Error validating field ${errorElementId}: ${error.message}`)
    }
  }
```

```javascript
  clearErrorMessages() {
    try {
      const errorElements = [
        "nameError", "emailError", "phoneError", 
        "addressError", "postalCodeError", "cityError", 
        "dobError"
      ]

      errorElements.forEach(id => {
        document.getElementById(id).textContent = ""
        document.getElementById(id).classList.remove("show")
      })
    } catch (error) {
      throw new LogicalError("Error clearing error messages: " + error.message)
    }
  }
```

```javascript
  getFormValues() {
    try {
      return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        postalCode: document.getElementById("postalCode").value,
        city: document.getElementById("city").value,
        dob: document.getElementById("dob").value
      }
    } catch (error) {
      throw new LogicalError("Error getting form values: " + error.message)
    }
  }
```
<br>

## Kapitel 4: Comments
I kapitel 4 diskuteras vikten av att undvika kommentarer för att kompensera för dålig kod. Begreppet **"Comments Do Not Make Up for Bad Code"** är centralt. Jag håller dock inte med. Jag menar att stödkommentarer kan ge en snabb överblick över vad koden gör.

I min kod använder jag metoder med tydliga namn, som `validateField()`, vilket följer principen **"Explain Yourself in Code"**. Men jag använder också stödkommentarer för att förklara viktiga delar, som i `validateForm()`:

```javascript
  async validateForm() {
    let valid = true

    try {
      // Clear previous error messages
      this.clearErrorMessages()

      // Get form values
      const formValues = this.getFormValues()
      const [firstName, lastName] = formValues.name.split(" ")

      // Validate each field
      valid &= this.validateField(this.nameValidator.validate(firstName, lastName), "nameError")
      valid &= this.validateField(this.emailValidator.validate(formValues.email), "emailError")
      valid &= this.validateField(this.phoneValidator.validate(formValues.phone), "phoneError")
      valid &= this.validateField(this.streetValidator.validate(formValues.address), "addressError")
      valid &= this.validateField(this.postalCodeValidator.validate(formValues.postalCode), "postalCodeError")
      valid &= this.validateField(this.cityValidator.validate(formValues.city), "cityError")

      const dateFormatResult = this.dateFormatValidator.validate(formValues.dob)
      valid &= this.validateField(dateFormatResult, "dobError")

      // Validate age if date format is valid
      if (dateFormatResult.isValid) {
        valid &= this.validateField(this.ageValidator.validate(formValues.dob), "dobError")
      }
    } catch (error) {
      throw new ValidationError("Error during form validation: " + error.message)
    }

    return valid
  }
```
Dessa kommentarer ger läsaren en snabb förståelse för koden. Jag anser att **"Good Comments"** har en viktig plats och hjälper andra programmerare att förstå syftet med koden. Att ta bort alla kommentarer kan göra koden svårare att förstå, även om koden är välskriven.

<br>

## Kapitel 5: Formatting
I kapitel 5 betonas vikten av **code formatting** som ett verktyg för kommunikation. Tydlig formatering är avgörande för att göra kod mer **readable** och **maintainable**. Genom att tillämpa **vertical openness** separerar jag olika koncept med blanksteg, vilket gör koden mer lättläst. I alla mina klasser har jag använt blanklinjer mellan metoderna, vilket ger **vertical distance** och gör att varje metod framträder tydligare.

Genom att hålla mina filer under 200 rader följer jag rekommendationerna för **file size**, vilket underlättar översikten av koden. Jag har också beaktat **horizontal alignment** och **indentation** för att säkerställa en konsekvent och lättförståelig struktur.

Jag anser dock att dessa insikter är självklarheter inom programmering, och att informationen kan upplevas som överflödig.

<br>

## Kapitel 6: Objects and Data Structures
I min kod tillämpar jag **Data Abstraction** genom att använda separata validatorer för olika datatyper, såsom e-post och telefonnummer. Varje validator har ett tydligt fokus på sin egen logik, vilket bidrar till en mer lättförståelig och modulär kodbas. Detta gör det enklare att underhålla och ändra koden i framtiden.


`EmailValidator.js`:

```javascript
export class EmailValidator {
  validate(email) {
    if (!email) {
      return { isValid: false, error: "Email is required." }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const forbiddenCharsRegex = /[^\w@.-]/
    const domainRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
    const maxLength = 254
    const maxLocalLength = 64

    if (forbiddenCharsRegex.test(email)) {
      return { isValid: false, error: "Email contains forbidden characters." }
    }
    if (!emailRegex.test(email)) {
      return { isValid: false, error: "Email is not valid." }
    }
    if (!domainRegex.test(email)) {
      return { isValid: false, error: "Email domain is not valid." }
    }
    if (email.length > maxLength) {
      return { isValid: false, error: "Email is too long." }
    }
    const [localPart, domainPart] = email.split("@")
    if (localPart.length > maxLocalLength) {
      return { isValid: false, error: "Local part of the email is too long." }
    }
    return { isValid: true, error: null }
  }
}
```
Jag följer också **The Law of Demeter** genom att hålla mina anrop enkla och tydliga. Detta gör att mina klasser kommunicerar med varandra på ett mer strukturerat sätt, vilket minimerar beroenden och underlättar förvaltningen av koden.

`FormValidator.js`:
```javascript
  validateField(result, errorElementId) {
    try {
      const errorElement = document.getElementById(errorElementId)
      if (!result.isValid) {
        errorElement.textContent = result.error
        errorElement.classList.add("show")
        return false
      } else {
        errorElement.classList.remove("show")
        return true
      }
    } catch (error) {
      throw new LogicalError(`Error validating field ${errorElementId}: ${error.message}`)
    }
  }
```

<br>

## Kapitel 7: Error Handling
I min kod har jag implementerat konceptet **Use Exceptions Rather Than Return Codes** genom att använda egna undantagsklasser som `ValidationError`, `LogicalError` och `NetworkError`. Istället för att använda return-koder för att indikera fel, kastar jag undantag som ger mer kontext och information om vad som gick fel. Detta förbättrar läsbarheten och gör det enklare att hantera fel på ett strukturerat sätt.

Jag har också tillämpat **Provide Context with Exceptions** genom att inkludera detaljerade felmeddelanden som beskriver problemet när ett undantag kastas. Till exempel, i metoden `validateField`, när valideringen misslyckas, kastar jag ett `LogicalError` med ett meddelande som specificerar vilket fält som orsakade problemet. Detta ger en tydlig förståelse för användaren och gör det enklare att felsöka.

`LogicalError.js`
```javascript
export class LogicalError extends Error {
  constructor(message) {
    super(message)
    this.name = "LogicalError"
  }
}
```

`FormValidator.js`:
```javascript
  validateField(result, errorElementId) {
    try {
      const errorElement = document.getElementById(errorElementId)
      if (!result.isValid) {
        errorElement.textContent = result.error
        errorElement.classList.add("show")
        return false
      } else {
        errorElement.classList.remove("show")
        return true
      }
    } catch (error) {
      throw new LogicalError(`Error validating field ${errorElementId}: ${error.message}`)
    }
  }
```

<br>

## Kapitel 8: Boundaries
I min kod har jag implementerat **Using Third-Party Code** genom att importera och använda en egen modul för validering. Detta separerar funktionaliteten och gör koden mer organiserad och lättförståelig. Genom att använda specifika validatorer kan jag fokusera på varje valideringsaspekt utan att blanda ihop logiken.

Jag har även reflekterat över **Clean Boundaries** genom att säkerställa att varje validator ansvarar för en viss typ av validering. Detta tillvägagångssätt gör det enkelt att ändra eller lägga till nya validatorer utan att påverka hela systemet. Denna struktur ökar flexibiliteten och underlättar framtida modifieringar, vilket gör min kod mer hållbar.

`cityValidator.js`
```javascript
  validate(city) {
    if (!city) {
      return { isValid: false, error: "City name is required." }
    }

    const cityRegex = /^[A-Za-zåäöÅÄÖ\s]+$/

    if (!cityRegex.test(city)) {
      return { isValid: false, error: "City name can only contain letters and spaces." }
    }

    return { isValid: true }
  }
```
<br>

## Kapitel 9: Unit Tests
I kapitel 9 har jag reflekterat över vikten av **Unit Tests** i min kodbas. Jag använder **Test Driven Development (TDD)** för att säkerställa att varje validator fungerar korrekt. Till exempel har jag skapat en testsuite för `EmailValidator` som omfattar olika scenarier:

`emailValidator.test.js`
```javascript
describe("EmailValidator Tests", () => {
  let emailValidator

  beforeAll(() => {
    emailValidator = new EmailValidator()
  })

  test("returns valid for a correct email address", async () => {
    const result = await emailValidator.validateEmail("example@gmail.com")
    expect(result).toEqual({ isValid: true, error: null })
  })

  test("returns an error for an empty email", async () => {
    const result = await emailValidator.validateEmail("")
    expect(result).toEqual({ isValid: false, error: "Email is required." })
  })
})
```
Genom att använda **One Assert per Test** ser jag till att varje test fokuserar på en specifik aspekt av valideringen, vilket gör det enklare att identifiera fel. Till exempel kontrollerar det första testet att en korrekt e-postadress valideras framgångsrikt, medan det andra testet kontrollerar att en tom e-postadress ger rätt felmeddelande.

Denna struktur främjar **Clean Tests**, vilket gör att testerna är lätta att förstå och underhålla. Genom att skapa tydliga och specifika tester kan jag snabbt upptäcka eventuella problem och säkerställa att min kod fortsätter att fungera som avsett vid framtida ändringar. 

<br>

## Kapitel 10: Classes
I kapitel 10 reflekterar jag över **Encapsulation** och **Single Responsibility Principle** i min kod. Även om mina validatorer som `EmailValidator` är synliga, tillämpar jag encapsulation genom att gruppera relaterade valideringsmetoder inom respektive klass. Detta gör det lättare att förstå och hantera kodens struktur.

Jag följer också Single Responsibility Principle genom att se till att varje validator har ett tydligt och avgränsat ansvar. Till exempel är `EmailValidator` helt fokuserad på att validera e-postadresser, vilket underlättar både testning och framtida förändringar.

Från `emailValidator.js`:
```javascript
export class EmailValidator {
  validate(email) {
    if (!email) {
      return { isValid: false, error: "Email is required." }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const forbiddenCharsRegex = /[^\w@.-]/
    const domainRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
    const maxLength = 254
    const maxLocalLength = 64

    if (forbiddenCharsRegex.test(email)) {
      return { isValid: false, error: "Email contains forbidden characters." }
    }
    if (!emailRegex.test(email)) {
      return { isValid: false, error: "Email is not valid." }
    }
    if (!domainRegex.test(email)) {
      return { isValid: false, error: "Email domain is not valid." }
    }
    if (email.length > maxLength) {
      return { isValid: false, error: "Email is too long." }
    }
    const [localPart, domainPart] = email.split("@")
    if (localPart.length > maxLocalLength) {
      return { isValid: false, error: "Local part of the email is too long." }
    }
    return { isValid: true, error: null }
  }
}
```

<br>

## Kapitel 11: Systems
Kapitel 11 handlar om hur man konstruerar system och vikten av att separera olika aspekter av en applikation. I min kod använder jag **Dependency Injection (DI)** för att hantera mina validatorer, vilket är en teknik som möjliggör modulära och skalbara system. Genom att skapa instanser av varje validator i `FormValidator`-konstruktorn, säkerställer jag att varje validator är oberoende och lätt att byta ut vid behov. Detta ökar flexibiliteten och gör systemet mer modulärt.

Med DI blir det också enklare att utöka systemet. Om jag senare behöver lägga till fler validerare eller ändra valideringslogik, behöver jag bara injicera dessa nya komponenter utan att förändra själva `FormValidator`-klassen. Detta är ett tydligt exempel på hur DI kan användas för att skala upp systemet över tid utan att bryta befintlig kod. Genom att använda DI kan jag säkerställa att min kod är både hållbar och lätt att underhålla, vilket är avgörande för långsiktig framgång.

Hur jag injicerar validatorer i `FormValidator`:
```javascript
class FormValidator {
  constructor(formId) {
    this.emailValidator = new EmailValidator()
    this.phoneValidator = new PhoneNumberValidator()
    this.streetValidator = new StreetValidator()
    this.postalCodeValidator = new PostalCodeValidator()
    this.cityValidator = new CityValidator()
    this.dateFormatValidator = new DateFormatValidator()
    this.ageValidator = new AgeValidator()
    this.nameValidator = new FirstAndLastNameValidator()

    this.form = document.getElementById(formId)
    this.form.addEventListener("submit", (e) => this.handleSubmit(e))
  }
}
```

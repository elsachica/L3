# Testrapport

## Kravspecifikation

1. **Användare**: Användaren ska kunna ange sina uppgifter för att kontrollera att de är korrekta.
   - **Krav**:
     - För- och efternamn krävs.
     - E-postadress ska vara i giltigt format.
     - Telefonnummer ska vara giltigt.
     - Adress, postnummer och stad ska anges.
     - Användaren måste vara minst 3 år gammal och inte äldre än 120 år.

2. **Validering**: Appen ska ge realtidsfeedback på fälten i formuläret och visa felmeddelanden vid ogiltiga inmatningar.

3. **Navigering**: Användaren ska dirigeras till en framgångssida om alla inmatningar är giltiga.

## Testmetod
Tester genomfördes manuellt genom att följa de definierade testfallen. Varje testfall utfördes och resultaten registrerades.

## Testfall

| Testfall ID | Beskrivning                                      | Resultat | Anteckningar                                                  |
|-------------|--------------------------------------------------|----------|--------------------------------------------------------------|
| 1.1         | Skriv för- och efternamn                        | OK       | Medlem skapades framgångsrikt.                               |
| 1.2         | Skriv enbart förnamn                            | Fel      | Felmeddelande: "Last name is required." visades korrekt.    |
| 1.3         | Skriv en siffra istället för namn               | Fel      | Felmeddelande: "First name can only contain letters." visades korrekt. |
| 1.4         | Skriv ogiltig e-postadress                      | Fel      | Felmeddelande: "Email is not valid." visades korrekt.       |
| 1.5         | Skriv giltig e-postadress                       | OK       | E-postadress validerades framgångsrikt.                     |
| 1.6         | Skriv ogiltigt telefonnummer                     | Fel      | Felmeddelande: "Phone number is required." visades korrekt.  |
| 1.7         | Skriv giltigt telefonnummer                      | OK       | Telefonnummer validerades framgångsrikt.                    |
| 1.8         | Skriv ogiltig adress                            | Fel      | Felmeddelande: "Street name is required." visades korrekt.  |
| 1.9         | Skriv giltig adress                             | OK       | Adress validerades framgångsrikt.                            |
| 1.10        | Skriv ogiltigt postnummer                       | Fel      | Felmeddelande: "Postal code is required." visades korrekt.  |
| 1.11        | Skriv giltigt postnummer                        | OK       | Postnummer validerades framgångsrikt.                        |
| 1.12        | Skriv ogiltig stad                              | Fel      | Felmeddelande: "City name can only contain letters and spaces." visades korrekt. |
| 1.13        | Skriv giltig stad                               | OK       | Stad validerades framgångsrikt.                              |
| 1.14        | Skriv födelsedatum som gör användaren under 3 år | Fel      | Felmeddelande: "You must be at least 3 years old to create an account." visades korrekt. |
| 1.15        | Skriv födelsedatum som gör användaren över 120 år | Fel      | Felmeddelande: "You cannot be older than 120 years to create an account." visades korrekt. |


## Förklaring av testfall


1. **Skriv för- och efternamn:** Kontrollera att användaren kan skriva både för- och efternamn och att valideringen godkänner detta.
2. **Skriv enbart förnamn:** Kontrollera att ett felmeddelande visas om användaren bara skriver förnamn.
3. **Skriv en siffra istället för namn:** Kontrollera att ett felmeddelande visas om användaren skriver en siffra istället för ett namn.
4. **Skriv ogiltig e-postadress:** Kontrollera att ett felmeddelande visas om användaren skriver en ogiltig e-postadress.
5. **Skriv giltig e-postadress:** Kontrollera att en giltig e-postadress valideras korrekt.
6. **Skriv ogiltigt telefonnummer:** Kontrollera att ett felmeddelande visas om användaren skriver ett ogiltigt telefonnummer.
7. **Skriv giltigt telefonnummer:** Kontrollera att ett giltigt telefonnummer valideras korrekt.
8. **Skriv ogiltig adress:** Kontrollera att ett felmeddelande visas om användaren skriver en ogiltig adress.
9. **Skriv giltig adress:** Kontrollera att en giltig adress valideras korrekt.
10. **Skriv ogiltigt postnummer:** Kontrollera att ett felmeddelande visas om användaren skriver ett ogiltigt postnummer.
11. **Skriv giltigt postnummer:** Kontrollera att ett giltigt postnummer valideras korrekt.
12. **Skriv ogiltig stad:** Kontrollera att ett felmeddelande visas om användaren skriver en ogiltig stad.
13. **Skriv giltig stad:** Kontrollera att en giltig stad valideras korrekt.
14. **Skriv födelsedatum som gör användaren under 3 år:** Kontrollera att ett felmeddelande visas om användaren är under 3 år.
15. **Skriv födelsedatum som gör användaren över 120 år:** Kontrollera att ett felmeddelande visas om användaren är över 120 år.
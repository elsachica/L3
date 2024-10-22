# Reflektion - Clean Code kapitel 2-11

## Kapitel 2: Meaningful names
I kapitel 2 betonas vikten av tydliga och avsiktsförklarande namn. I min kod har jag omarbetat variabelnamn och funktionsnamn för att bättre beskriva deras syfte och sammanhang. Jag har också undvikit förkortningar som kan leda till förvirring och sett till att namnen ger svar på de viktigaste frågorna: vad variabeln representerar och hur den används. Dessutom har jag uppdaterat mina metoder i valideringsklasserna. Exempelvis har metoder som tidigare hette `validateStreet()` nu förenklats till `validate()`, vilket gäller för alla klasser i validators mappen. Denna förändring gör koden inte bara lättare att läsa utan även enklare att underhålla.

## Kapitel 3: Meaningful names
I kapitel 3 diskuteras vikten av små funktioner som endast gör en sak. Jag har anpassat min kod genom att bryta ner större funktioner till mindre, mer hanterbara delar, som följer principen att varje funktion ska ha ett enda ansvar. Exempelvis har jag separerat valideringslogiken i `form.js` genom att skapa metoder som `validateField()`, `clearErrorMessages()`, och `getFormValues()`. Varje metod har ett tydligt syfte, vilket förbättrar läsbarheten och gör koden enklare att underhålla. Begrepp som **Do One Thing** och **Stepdown Rule** har varit centrala i denna refaktorering.

## Kapitel 4: Comments
I kapitel 4 diskuteras vikten av att undvika kommentarer för att kompensera för dålig kod. Begreppet **"Comments Do Not Make Up for Bad Code"** är centralt. Jag håller dock inte med. Jag menar att stödkommentarer kan ge en snabb överblick över vad koden gör.

I min kod använder jag metoder med tydliga namn, som `validateField()`, vilket följer principen **"Explain Yourself in Code"**. Men jag använder också stödkommentarer för att förklara viktiga delar, som i `validateForm()`:

```javascript
// Clear previous error messages
this.clearErrorMessages()
```
Dessa kommentarer ger läsaren en snabb förståelse för koden. Jag anser att **"Good Comments"** har en viktig plats och hjälper andra programmerare att förstå syftet med koden. Att ta bort alla kommentarer kan göra koden svårare att förstå, även om den är välskriven.

## Kapitel 5: Formatting
I kapitel 5 betonas vikten av **code formatting** som ett verktyg för kommunikation. Jag har insett att tydlig formatering är avgörande för att göra kod mer **readable** och **maintainable**. Genom att använda **vertical openness** och **vertical density** kan man separera olika koncept med blanksteg, vilket gör det lättare för andra att följa logiken i koden.

Till exempel har jag i min `FormValidator`-klass använt blanklinjer för att separera metoderna, vilket gör att varje metod framträder tydligare. Genom att hålla filerna under 200 rader har jag följt rekommendationerna för **file size**, vilket gör det enklare att överblicka koden. Dessa principer förbättras kodens **structure** och underlättar samarbetet med andra programmerare. 

Jag anser dock att dessa insikter är självklarheter inom programmering, och att informationen kan upplevas som överflödig.
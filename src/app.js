import express from "express"  // ES6 import
import path from "path"
import { fileURLToPath } from "url"  // Behövs för att hantera __dirname med ES6-moduler

const app = express()

// Hantera __dirname i ES-moduler
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Serva statiska filer från 'public' mappen
app.use(express.static(path.join(__dirname, "../public"))) // Korrigerad sökväg

// Serva statiska filer från 'src' mappen
app.use("/src", express.static(path.join(__dirname, "../src"))) // Lägg till denna rad

// Routing för startsidan
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html")) // Korrigerad sökväg
})

// Routing för valideringsformuläret
app.get("/form", (req, res) => {
  const formPath = path.join(__dirname, "../public", "form.html") // Korrigerad sökväg
  console.log("Serving form from:", formPath)
  res.sendFile(formPath)
})

// Starta servern på port 3000
app.listen(3000, () => {
  console.log("Servern kör på http://localhost:3000")
})

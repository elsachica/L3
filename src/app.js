import express from "express" 
import path from "path"
import { fileURLToPath } from "url" 

/**
 * @fileoverview Main file for the Express application handling the validation module.
 * @module app
 * @requires express
 * @requires path
 * @requires url
 * @author Elsa Gas Wikström
 */

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Middleware to serve static files from the 'public' directory.
 */
app.use(express.static(path.join(__dirname, "../public"))) 

/**
 * Middleware to serve static files from the 'src' directory.
 */
app.use("/src", express.static(path.join(__dirname, "../src")))

/**
 * Route for the home page.
 * @name get/
 * @function
 * @memberof module:app
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"))
})

/**
 * Route for the validation form.
 * @name get/form
 * @function
 * @memberof module:app
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get("/form", (req, res) => {
  const formPath = path.join(__dirname, "../public", "form.html")
  res.sendFile(formPath)
})

/**
 * Starts the server on port 3000.
 * @function
 * @memberof module:app
 */
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000")
})

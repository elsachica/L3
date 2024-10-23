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
  try {
    res.sendFile(path.join(__dirname, "../public", "index.html"))
  } catch (error) {
    console.error("Error serving the home page:", error)
    res.status(500).send("Internal Server Error")
  }
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
  try {
    const formPath = path.join(__dirname, "../public", "form.html")
    res.sendFile(formPath)
  } catch (error) {
    console.error("Error serving the form page:", error)
    res.status(500).send("Internal Server Error")
  }
})

/**
 * Middleware to handle 404 errors.
 * @function
 * @memberof module:app
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
app.use((req, res, next) => {
  res.status(404).send("Page Not Found")
})

/**
 * Middleware to handle other errors.
 * @function
 * @memberof module:app
 * @param {Object} err - Error object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err)
  res.status(500).send("Internal Server Error")
})

/**
 * Starts the server on port 3000.
 * @function
 * @memberof module:app
 */
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000")
})

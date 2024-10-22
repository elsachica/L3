# Validation Form

## Description

This project is a web application for validating user input through a form. The form checks if the user has entered data in the correct format for:

- Phone numbers
- Email addresses
- Names
- Street addresses
- Postal codes
- City
- Date of birth and age

The application provides real-time feedback to the user and ensures the data is correctly formatted before redirecting to a success page if all inputs are valid.

## Installation

To install and run this project:

1. Clone the repository:

   ```bash
   git clone https://github.com/elsachica/L3.git
   ```

2. Navigate to the project folder and install the dependencies:

   ```bash
    npm install
    ```

## Main Entry Point
The main entry point for this project is `src/app.js`, which starts the Express server and handles routing. The form validation logic for phone numbers and emails is handled in `public/js/form.js`.

## Usage

Once the project is set up, you can run it locally:

1. Start the application by running the following command:

   ```bash
   npm start
   ```

2. Or, for development with automatic restarts on changes, run:
   ```bash
   npm run dev
   ```

## How to use
Here are some GIFs demonstrating how to use the application:

*Submitting the form with valid data.*  
<video width="600" controls>
  <source src="img/success_gif.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*Submitting the form with invalid data and the corresponding error messages.*  
[Submitting the form with invalid data](img/invalid_gif.mp4)


## File structure
   ```bash
├── src/
│   ├── app.js
│   └── validators/
│       └── validator.js
├── public/
│   ├── js/
│   │   └── form.js          # Handles form validation logic.
│   ├── form.html            # HTML file for the validation form.
│   ├── index.html           # Home page of the application.
│   └── success.html         # Page displayed after successful form submission.
   ```

### Explanation of Public Folder

- **`js/`**
  - **`form.js`**: This file contains the logic for validating user inputs in the form, managing real-time feedback for errors, and handling form submission. It integrates multiple validators for different types of user data and prevents submission until all fields are valid.

- **`index.html`**: The main landing page for the application. It typically serves as an entry point for users, providing links to the form or other relevant information about the project.

- **`form.html`**: This HTML file presents the validation form to the user, allowing them to input their data. It includes various input fields for name, email, phone number, address, postal code, city, and date of birth, along with corresponding error messages.

- **`success.html`**: This HTML page is displayed when the user successfully submits the form with valid inputs. It usually contains a confirmation message and may also display the validated information back to the user.


## Dependencies
The project uses the following dependencies:

- **Express** for handling server requests.
- **Jest** for unit testing.
- **ESLint** for code linting.
- **Prettier** for code formatting.
- **Nodemon** for automatic server restarts during development.

Install dependencies using:
   ```bash
   npm install
   ```

## Scripts
- `npm start`: Starts the project and runs `src/app.js`.
- `npm run dev`: Starts the project in development mode with **nodemon**.
- `npm test`: Runs the test suite with **Jest**.
- `npm run lint`: Lints the code using **ESLint**.
- `npm run lint:fix`: Fixes linting issues automatically using **ESLint**.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for more details.

## Author
- **Elsa Gas Wikström - eg223ps**
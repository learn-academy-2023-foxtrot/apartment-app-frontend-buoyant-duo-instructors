# Apartment App FrontEnd

## React App Initial Configuration Workflow
1. Update trello to reflect the work needed for the assignment located in `🏠 Challenge: Apartment App React Configurations` on [Apartment App React Configurations](https://github.com/learn-academy-2023-foxtrot/syllabus/blob/main/apartment-app/frontend/intro.md)

2. Create empty github repo

3. Create react app locally

4. Add Reactstrap dependencies

5. Create directories: assets, components, pages, `__tests__`

6. Modify App.js to be a basic functional component
```js
  import React from "react";

  const App = () => {

    return(
      <>
        <h1>Apartment App</h1>
      </>
    )
  }
```

7. Create the Header and Footer components with basic code

8. Create the following pages with basic code: Home, SignUp, SignIn, AptIndex, AptProtectedIndex, AptShow, AptNew, AptEdit, and NotFound

9. Add React Router dependencies and configurations

10. Define routes to all the pages in my application

11. Create mock data for users and apartments and set the data to state in the App.js component

12. Connect empty github repo and local react app

13. Rename branch and perform initial commit: $ `git branch -M main`

14. Ask for branch protections

# Protected Pages
- Perform conditional rendering with the user state variable as the condition to allow links and routes to be available when a user is present
- Perform conditional rendering with the user state variable as the condition to allow links and routes to be available when a user is not present
- ProtectedIndex: To allow a user to have access to their properties, set a condition that will only lists the apartments with a foreign key that matches the primary key of the user

# Notes about routes
- When the navigation is internally, we should use `Navlink` from react-router-dom. It allows us to maintain the current status/changes in state. The attribute that will provide the path is `to`.
- When the navigation is externally, we should use `Navlink` from reactstrap. The attribute that will provide the path is `href`.

# Testing userEvents
Test file for App.js verifies that the navigation links are correctly changing the URL path when clicked, thereby confirming that the routing behavior in the `App` component is working as expected.

- `async () => {}`: indicates that this function may contain asynchronous operations, such as awaiting a promise from HTTP requests or waiting for DOM updates.

- `location.pathname`: checks the current URL path

- `await`: ensures that the test won't continue until the specified asynchronous changes are complete, allowing you to make assertions based on the updated state of the application.

- `userEvent.click()`: simulates a user click on the specified DOM element. A click event will be triggered on the element, which will navigate the user to another route.  

# Connecting React and Rails API
1. Have the servers running for rails and react apps

2. Set the initial values of the state variables: null user and an empty apartments array

3. Create the forms for applicable pages
  - `useRef() hook`: helps create reference to the DOM elements within the form
  - Pages involved: SignUp.js, SignIn.js

  - `<form ref={formRef} onSubmit={handleSubmit}>`: a `<form>` element is defined. The `ref` attribute is set to the `formRef` variable, which allows you to reference the form element.

  - `Email: <input type="email" name="email" placeholder="email" />`: Input fields for email, password, and password confirmation are present in the form.

  - The form has an `onSubmit` event handler, will call `handleSubmit` function when the form is submitted

4. Package the form data into a format that JWT recognizes
  - JSON Web Token (JWT): used for authentication and authorization to securely share data about a user
    - 3 parts: header, payload, and signature
    - [JWT Website](https://jwt.io/)

  - `const handleSubmit = (e) => { }`: takes an event object (`e`) as its parameter. This function is called when the form is submitted.

  - `e.preventDefault()`: stops the form from being submitted in the traditional way, which would result in a page reload or navigation. Instead, the code intends to handle the form submission asynchronously with the creation of the JWT.

  - `const formData = new FormData(formRef.current)`: creates a new `FormData` object called `formData` by passing a reference to a form element into the `FormData` constructor. The reference to the form is obtained from the `formRef` variable.

  - `const data = Object.fromEntries(formData)`: `Object.fromEntries` method is used to convert the `formData` object into a plain JavaScript object called `data`. This object now contains the form field values as key-value pairs.

  - `const userInfo = { "user": { email: data.email, password: data.password } }`: creates an object named `userInfo` by placing the user's information in a format that can be used with JSON Web Tokens (JWT) for authentication. The values for these properties are obtained from the `data` object.

5. Fetch requests for the applicable session

6. Pass that request as a prop to the applicable component

7. Create a function that allows a persistent user while still logged in

## Icebox
- {} for imports: when and why
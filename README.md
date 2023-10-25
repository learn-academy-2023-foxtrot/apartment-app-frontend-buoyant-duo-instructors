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

## Protected Pages
- Perform conditional rendering with the user state variable as the condition to allow links and routes to be available when a user is present
- Perform conditional rendering with the user state variable as the condition to allow links and routes to be available when a user is not present
- ProtectedIndex: To allow a user to have access to their properties, set a condition that will only lists the apartments with a foreign key that matches the primary key of the user
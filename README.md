<h1>React Web Application with Vite and Bootstrap</h1> <i>
This project is a React-based web application built using Vite and Bootstrap. It features user authentication pages (Login, Registration, and Forgot Password) and a product dashboard that displays products fetched from an external API using Redux for state management and Redux Persist for local storage. </i>

<ul> <h4>
Table of Contents

</h4> <li> Getting Started </li> <li> Project Features </li> <li> Pages Overview </li> <li> API Integration </li> <li> Redux Store </li> <li> Dependencies </li> </ul> Getting Started To run the project locally, follow these steps: <h2>Clone the repository:</h2>
Copy code git clone https://github.com/Sayan2911/exam.git <br> cd exam <br> Install the dependencies:

Copy code <br> npm install <br> Run the application: <br>

Copy code <br> npm run dev <br> Open http://localhost:5173 in your browser to view the app.

Project Features Login Page:

Email and password fields. Google login button (clickable, but no functionality). Verifies credentials before allowing login. Credentials are saved in local storage using Redux Persist. Registration Page:

Fields for name, email, password, confirm password, and date of birth. Date of Birth field displays a calendar for date selection. Validates user input and saves valid credentials to local storage. Forgot Password Page:

Email field for password reset. Verifies email before proceeding with the reset flow. Dashboard:

Displays products fetched from an external API. Products are shown in a grid format, with 4 product cards per row. Clicking on a product opens a modal displaying detailed product information. Pages Overview Login Page:

Allows users to log in with their email and password. Google login button for visual appeal (no functionality). Registration Page:

Allows users to register with their name, email, password, confirm password, and date of birth. Passwords must match for successful registration. Forgot Password Page:

Provides a form to reset the password via email verification. Dashboard:

Displays a grid of product cards fetched from the Fake Store API. Each card can be clicked to show product details in a modal. API Integration The application fetches product data from the Fake Store API. The data is stored in the Redux store and persisted using Redux Persist.

Redux Store Product Data:

The product data is fetched from the API and saved in the Redux store. The data is then displayed on the dashboard as product cards. User Authentication:

User credentials are managed through Redux and stored in local storage using Redux Persist. Dependencies "@reduxjs/toolkit": "^2.2.7", "@testing-library/jest-dom": "^5.17.0", "@testing-library/react": "^13.4.0", "@testing-library/user-event": "^13.5.0", "react": "^18.3.1", "react-dom": "^18.3.1", "react-icons": "^5.3.0", "react-redux": "^9.1.2", "react-router-dom": "^6.26.2", "react-scripts": "5.0.1", "react-toastify": "^10.0.5", "redux-persist": "^6.0.0", "web-vitals": "^2.1.4", "vite": "^4.3.0", <!-- added Vite as a dependency -->
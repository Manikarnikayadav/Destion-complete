# React Authentication App
This project demonstrates a full-stack authentication system with login and signup pages built using React on the frontend and Node.js, Express, MongoDB, and other technologies on the backend. It includes secure user authentication, form validation, and navigation using React Router.

# Features
# Frontend (React)
Login Page:
Users can log in with their credentials (username and password).
Upon successful login, users are redirected to the dashboard.
Incorrect credentials trigger an error message.

Signup Page:
New users can register with a username, valid email, and password (with validation).
The password must meet specific criteria (minimum 8 characters, contain uppercase letters).
Validation errors are displayed for incorrect inputs.
Upon successful registration, users are redirected to the dashboard.

Dashboard:
   Sidebar Navigation:
   Toggle visibility of the sidebar with a menu icon (hamburger/close button).
   Sections: Market, Categories, Orders, Favorites, Cart, Messages, Feedback, Settings.
   The active section is highlighted.
   Search Bar: Allows users to search for products or categories.
   Header Icons:
   Notification Bell: Displays notifications about the user's activity.
   Shopping Cart Icon: Redirects to the user's cart.
   Profile Picture: Access quick profile settings.
   Income Overview: Displays income metrics (daily, weekly, monthly).
   Special Discounts: Highlighted section for discount offers.
   Categories and Stock: Displays product categories and available stock.
   Popular Products: Showcases the most popular items.
   Top Items: Displays top-performing products.
   Notifications: Lists important updates such as low stock or new orders.
   Latest Orders: Displays recent orders with options to accept or view status.
   Footer: Contains copyright information.

# Backend (Node.js, Express, MongoDB)
Node.js & Express: Handles routing and server-side logic.
MongoDB: Stores user data such as login credentials.
Bcrypt: Used to securely hash passwords.
JSON Web Tokens (JWT): For user session management, providing secure access to the dashboard after login.
CORS: Ensures the frontend and backend can communicate across different origins.
Dotenv: Manages environment variables such as database connection strings and JWT secrets.

# Authentication Workflow
Login: Users enter their username and password. The backend validates credentials, generates a JWT token, and returns it to the frontend for session management.
Signup: Users register with their details. The password is securely hashed using Bcrypt before being stored in the database. On successful registration, a JWT token is generated.
Logout: Users can log out, which clears their session token.

# Technologies Used
# Frontend:
   React: For building the user interface.
   Formik: For handling form state and submission.
   Yup: For form validation.
   Tailwind CSS: For styling.
   React Router: For page navigation.
# Backend:
   Node.js & Express: For server-side logic and API routes.
   MongoDB: For database operations.
   Bcrypt: For secure password hashing.
   JSON Web Tokens (JWT): For managing user sessions.
   Dotenv: For environment variable management.
   CORS: To handle cross-origin resource sharing.

# Setup Instructions
1. Clone the repository:
git clone https://github.com/Manikarnikayadav/Destion-complete/auth-app.git
cd auth-app


2. Install frontend dependencies:
cd client
npm install

3. Install backend dependencies:
cd server
npm install

4.Set up environment variables: Create a .env file in the server directory with the following contents:
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret

5.Start the backend server:
cd server
npm start

6. Start the frontend server:
cd client
npm start
The application will be accessible at http://localhost:3000.

# Project Structure
auth-app/
 ├── groceryStore/        # React frontend
 │   ├── src/
 │   │   ├── components/
 │   │   ├── pages/
 │   │   └── App.js
 │   └── ...
 ├── backend/        # Node.js backend
 │   ├── config/
 │   ├── models/
 │   ├── routes/
 │   ├── .env/
 │   └── server.js
└── README.md

# How to Use

# Login:
Use the login form to sign in.
The backend will authenticate and return a JWT token.
On successful login, the user will be redirected to the /dashboard.
# Signup:
Enter the required details (username, email, and password).
The password must meet validation criteria.
On successful signup, users will be redirected to the /dashboard.
# Logout:
Users can log out.

# Future Improvements
Integrate with a production-ready API for real authentication logic.
Add error handling for API calls.
Implement email verification and password recovery.
Add role-based access control for different sections of the dashboard.

# License
This project is open-source and available under the MIT License.

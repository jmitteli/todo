## Todo Application Development Stages

### Part 1 – Creating basic app structure
Created a React project with Vite. Implemented a simple Todo UI using the `useState` hook: a form for adding new tasks and a list for displaying and deleting tasks.

### Part 2 – Creating backend
Created a Node.js/Express backend under the `server` folder. Installed `express`, `cors` and `pg`. Set up a PostgreSQL database (`task` table) and implemented `GET /tasks`, `POST /tasks` and `DELETE /tasks/:id` endpoints using direct `pool.query()` calls.

### Part 3 – Automated testing
Introduced Mocha and Chai. Wrote integration tests for the backend endpoints (`index.test.js`). Separated development and test databases using environment variables (`NODE_ENV`).

### Part 4 – Call REST API from React
Replaced `fetch` with the `axios` library. Connected the React frontend to the backend: fetching, creating and deleting tasks now go through real HTTP calls to the backend instead of purely local state.

### Part 5 – Environment variables, routing, middleware for backend
Introduced `dotenv` and a `.env` file for secrets (database credentials, port). Extracted routes into a dedicated `todoRouter.js` using Express's `Router` class. Added centralized error-handling middleware in `index.js`.

### Part 6 – Authentication and authorization on backend
Added an `account` table and user management. Passwords are hashed with `bcrypt`. Signing in issues a JWT (`jsonwebtoken`). Implemented `POST /users/signup` and `POST /users/signin`. Protected task creation and deletion with an `auth` middleware requiring a valid `Authorization: Bearer <token>` header.

### Part 7 – Authentication and authorization on frontend
Introduced `react-router-dom` for navigation between pages. Implemented a sign-up/sign-in screen (`Authentication.jsx`) and a `ProtectedRoute` component that prevents opening the Todo screen without being signed in. User state is shared across the app via Context (`UserContext`, `UserProvider`, `useUser` hook) and persisted in `sessionStorage`.

### Part 8 – Model-View-Controller architecture
Refactored the backend into an MVC structure: `models/Task.js` handles plain SQL queries, `controllers/TaskController.js` handles request validation and HTTP responses, and `routes/todoRouter.js` wires routes to controller functions. Added a custom `ApiError` class (extending `Error`) to unify error creation into a single line instead of two.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

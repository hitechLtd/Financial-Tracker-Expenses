# Financial Tracker Expenses

 track incomes and expenses, view balances

## Features(to be added later)
- Add, edit, and delete transactions.
- View total income, expenses, and balance.
- Filter or sort by date/category (adjust to your real features).

## Tech Stack
- Node.js, Express
- MongoDB / Mongoose
- View engine (EJS)
- Other tools: dotenv, nodemon, body-parser,express-session,mongoose,passport and passport-local

## Project Structure
- `config/` – database and environment configuration.
- `models/` – Mongoose models for transactions/users.
- `routes/` – Express route definitions.
- `views/` – templates rendered on the server.
- `public/` – static assets (CSS, JS, images).
- `app.js` – main Express app entry point.

## Getting Started

### Prerequisites
- Node.js (version 16 above)
- MongoDB (local or Atlas URL)

### Installation
1. Clone the repo: https://github.com/hitechLtd/Financial-Tracker-Expenses.git
cd Financial-Tracker-Expenses
2. Install dependencies
3. create a `.env` file
4. install nodemon for live changes using the command npm install nodemon --save-dev
5. then start the app using nodemon app.js
## Usage
For now it lets you login and prints your name on the dashboard as below
<img width="1908" height="1009" alt="image" src="https://github.com/user-attachments/assets/8c9ced8a-0281-4f46-81cb-0234f204c01f" />
##future improvements
-Export reports as CSV/PDF
-add charts for spending categories
-obtain live API's for current prices of goods in a particular region to help one spend their money wisely
-add graphs based on their spending data on their dashboard
-feel free to contribute to this repo

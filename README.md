# AJ's Stock Profile

AJ's Stock Profile is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to manage and view their stock market portfolio. The application features real-time stock data, portfolio management, and interactive stock details.

## Features

- **Add and Manage Stocks:** Add stocks to your portfolio and view details.
- **Real-Time Stock Data:** Fetch and display real-time stock information.
- **Interactive UI:** Responsive and user-friendly interface with React and Bootstrap.
- **Backend API:** RESTful API to handle stock data and portfolio management.

## Technologies Used

### Frontend:
- React.js
- React Router
- React Bootstrap
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v14 or higher)
- MongoDB (for local development)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/username/stock-portfolio-app.git
   cd stock-portfolio-app
   ```

2. **Set up the backend:**
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory with the following content:
     ```
     MONGO_URI=mongodb://localhost:27017/stockportfolio
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Set up the frontend:**
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

## Usage

- Open your web browser and go to `http://localhost:3000` to view the application.
- Use the interface to add stocks, view your portfolio, and see detailed stock information.

## Contributing

Contributions are welcome! If you have suggestions or find issues, please open an issue or submit a pull request.

## Contact

For questions or feedback, please reach out to ajaycsujjini@gmail.com.

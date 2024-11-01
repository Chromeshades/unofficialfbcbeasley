# Backend Documentation

## Overview
This is the backend for the FBC Beasley website, built using Node.js and Express. It serves as the API for the frontend application.

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd fbcbeasley-website/backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root of the backend directory and add your environment variables. Example:
   ```
   PORT=5000
   DATABASE_URL=<your-database-url>
   ```

4. **Run the application**
   ```
   npm start
   ```

## API Usage

### Endpoints

### Endpoints

- **GET /api/events**
   - Description: Retrieves a list of events.
   
- **POST /api/events**
   - Description: Creates a new event.

## Folder Structure

- **src/**: Contains the source code for the backend application.
  - **app.js**: Entry point for the application.
  - **controllers/**: Contains controller functions for handling requests.
  - **models/**: Contains data models for database interactions.
  - **routes/**: Contains route definitions for the API.
  - **services/**: Contains business logic and service functions.

## License
This project is licensed under the MIT License.
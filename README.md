
# Event Promoter Website

This project is an event promoter website built using a **MERN stack**. It contains a **React** frontend and a **Node.js** backend with email functionality for sending event-related information via email.

## Project Structure

The directory structure consists of two main folders:
- `frontend/` - Contains the React app.
- `backend/` - Contains the Node.js server.

Additionally, the project includes an `Emailer-template` file for email templates.

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Cloning the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### Frontend Setup

1. Navigate to the `frontend/` directory:

    ```bash
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. The frontend uses:
    - **Axios** for making HTTP requests.
    - **Tailwind CSS** for styling.

4. To start the React development server, run:

    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the `backend/` directory:

    ```bash
    cd backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. The backend uses the following dependencies:
    - **nodemailer** for sending emails.
    - **cors** for handling cross-origin requests.
    - **nodemon** for automatically restarting the server on code changes.
    - **dotenv** for managing environment variables.

4. Create a `.env` file in the `backend/` directory and include the following information:

    ```
    EMAIL=<your-email>
    PASSWORD=<your-email-password>
    PORT=<your-port>
    ```

    Replace `<your-email>` and `<your-email-password>` with the sender email credentials to allow the application to send emails using **Nodemailer**.

5. To start the backend server, run:

    ```bash
    nodemon start
    ```

### Running the Application

After setting up both the frontend and backend, you can run the React frontend using:

```bash
npm start
```

In a separate terminal window, run the Node.js backend server using:

```bash
nodemon start
```

### Additional Information

- **Emailer-template**: The project also contains an email template that is used for sending event-related emails.
  
- Ensure both the frontend and backend are running simultaneously for proper functionality.

---

### Common Commands

- **Install dependencies** for a folder:
    ```bash
    npm install
    ```

- **Run the React frontend**:
    ```bash
    npm start
    ```

- **Run the Node.js backend with nodemon**:
    ```bash
    nodemon start
    ```

---

### Future Improvements

- More email templates can be added.
- UI and performance can be improved.
  

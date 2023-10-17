# NASA Control Mission

## Overview
The NASA Control Mission project is an ambitious web-based mission control system that leverages NASA's Kepler: KOI Table data to identify habitable exoplanets based on essential variables like planetary radius and effective stellar flux. This ReactJS and NodeJS-powered system provides a user-friendly interface to schedule and manage interstellar missions to these identified planets. Here are the key highlights:


**Key Highlights:**
- **Data-Driven Analysis**: Utilizes NASA's Kepler: KOI Table to identify exoplanets suitable for human habitation.

- **User-Friendly Interface**: Offers an intuitive and responsive UI for mission scheduling and management.

- **Personalized Missions**: Users can launch their missions and interact with them on the upcoming missions page.

- **Detailed Mission Information**: Provides essential mission details, including mission number, launch date, destination, and more.

- **History**: Allows users to archive and access previous missions.

|               Launch UI         |          Upcoming UI              |            History UI                |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| ![Screenshot 2023-10-17 174911](https://github.com/khaledelhannat/nasa-control-mission/assets/76536316/88948a41-6e85-470b-b8b9-ec28cc0ea218) | ![Screenshot 2023-10-17 174929](https://github.com/khaledelhannat/nasa-control-mission/assets/76536316/e7170f30-0254-4b17-8918-8ef8767714ba) | ![Screenshot 2023-10-17 175137](https://github.com/khaledelhannat/nasa-control-mission/assets/76536316/d20a279d-d856-47c2-8cef-60de4cd26e56) |
<div align="center">
  <img src="https://github.com/khaledelhannat/nasa-control-mission/assets/76536316/0fa781ae-f611-4662-ad7d-8dfac84b2466" width="780" height="336">
</div>

## Technologies

### Backend (Node.js and Express.js)
- **Node.js:** The project's backend is powered by Node.js, a JavaScript runtime.
- **Express.js:** Express.js is used to create the RESTful API and manage server routes.
- **Cors:** The `cors` npm package is used to enable cross-origin resource sharing, allowing the frontend to communicate with the backend securely.
- **csv-parse:** The `csv-parse` package is utilized for CSV file parsing.
- **Morgan:** Morgan is employed for HTTP request logging.
- **Nodemon:** Nodemon helps in automatic server restarts during development.
- **Concurrently:** This package simplifies running multiple npm scripts concurrently.
<div align="center">
  <img src="https://github.com/khaledelhannat/nasa-control-mission/assets/76536316/d535529b-c39d-419c-a972-b2b4240cca1b" width="700" height="369">
</div>

### Frontend (React)
- **React:** The project's frontend is developed using React, a popular JavaScript library for building user interfaces.

### Version Control
- **Git:** Version control for tracking changes in your project.

## Installation and Usage 
Before you begin, make sure you have Node.js and npm installed on your machine.

1. Clone the repository.
```bash
   git clone https://github.com/khaledelhannat/nasa-control-mission.git
```
2. Navigate to the project directory.
```bash
   cd nasa-control-mission
```
3. Install the required dependencies.
```bash
   npm run install-all
```
4. Start the application.<br>
On Windows, use:
```bash
     npm run deploy
```
On Unix systems (e.g., macOS or Linux), use:
```bash
    npm run deploy-unix
```
5. Access the application in your web browser at http://localhost:8080.




# NASA Control Mission

The NASA Control Mission project is an ambitious web-based mission control system that leverages NASA's Kepler: KOI Table data to identify habitable exoplanets based on essential variables like planetary radius and effective stellar flux. This ReactJS and NodeJS-powered system provides a user-friendly interface to schedule and manage interstellar missions to these identified planets. Here are the key highlights:

**Key Highlights:**
- **Data-Driven Analysis**: Utilizes NASA's Kepler: KOI Table to identify exoplanets suitable for human habitation.

- **User-Friendly Interface**: Offers an intuitive and responsive UI for mission scheduling and management.

- **Personalized Missions**: Users can launch their missions and interact with them on the upcoming missions page.

- **Detailed Mission Information**: Provides essential mission details, including mission number, launch date, destination, and more.

- **History**: Allows users to archive and access previous missions.



|               Launch UI         |          Upcoming UI              |            History UI                |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
|![Screenshot 2023-10-17 200614](https://github.com/khaledelhannat/nasa-control-mission/assets/76536316/25be7af9-c4ff-4bca-b9bb-d18759ec82f6) | ![Screenshot 2023-10-17 174929](https://github.com/khaledelhannat/nasa-control-mission/assets/76536316/ac971f4d-e997-4f38-80fe-ec6268408b20) | ![Screenshot 2023-10-17 175137](https://github.com/khaledelhannat/nasa-control-mission/assets/76536316/05905584-636c-4348-9559-02baee7b89d9) |
<div align="center">
  <img src="https://github.com/khaledelhannat/nasa-control-mission/assets/76536316/92e1477f-18a2-40a7-8f24-dfc5aa8b4322" width="780" height="336">
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
  <img src="https://github.com/khaledelhannat/nasa-control-mission/assets/76536316/76913566-4c8e-4abf-a097-a4ce75fb0cfa" width="700" height="400">
</div>

### Frontend (React)
- **React:** The project's frontend is developed using React, a popular JavaScript library for building user interfaces.
- **Arwes:** The `arwes` package is used for creating futuristic and sci-fi-style user interfaces.
- **React DOM:** This package is essential for rendering React components in the DOM.
- **React Router DOM:** `react-router-dom` is used for declarative routing and navigation within the React application.
- **React Scripts:** These scripts simplify building, testing, and running your React app.

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

## Contributing
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request.

## License
This project is licensed under the MIT License - see the [MIT](https://github.com/khaledelhannat/nasa-control-mission/blob/main/LICENSE) file for details.

## Contact

- **Khaled Elhannat**
- **Email:** *khaledelhannat@gmail.com*
- **Website:** *https://khaledelhannat.com* (Underdevelopment)
- **GitHub:** *https://github.com/khaledelhannat*
- **LinkedIn:** *https://www.linkedin.com/in/khaledelhannat*

Feel free to reach out if you have any questions or feedback!

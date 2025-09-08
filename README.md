# fullstack-docker-app-mini-project-1

# Fullstack Docker App - Mini Project 1

## Project Overview
This project is the *initial setup of a full-stack application* with a React frontend, Express backend, and a PostgreSQL database folder prepared for future use.  

Mini Project 1 focuses on:
- Creating the folder structure
- Adding the initial frontend and backend code
- Setting up Git with meaningful commits
- Preparing configuration files for future Dockerization

---

## Folder Structure and Content
fullstack-docker-app/
├── backend/
│ ├── app.js # Express backend server code
│ └── package.json # Backend dependencies
├── frontend/
│ ├── package.json # Frontend dependencies
│ └── src/
│ └── App.js # React frontend main component
├── db-data/ # Empty folder reserved for database persistence
├── docker-compose.yml # Empty for future use
├── .env # Empty for future use
└── README.md # Documentation of project and rubric


### Explanation of Each Folder
- *backend/* → Contains the Node.js + Express server code and dependency file.  
- *frontend/* → Contains React application code. src has main components like App.js.  
- *db-data/* → Placeholder folder for database volume persistence.  
- *docker-compose.yml* → Will be used in future projects for Docker container orchestration.  
- *.env* → Placeholder for environment variables.  
- *README.md* → Documentation to explain the project and rubric coverage.

---

## Code and Configuration Files
- *Backend*
  - app.js → Simple Express server that connects to PostgreSQL (prepared for future use).  
  - package.json → Lists dependencies (express, pg) and start script.
- *Frontend*
  - App.js → Main React component to display messages.  
  - package.json → Lists dependencies (react, react-dom) and start script.
- *Root configuration*
  - .env → Empty for now, will store DB credentials in future.  
  - docker-compose.yml → Empty placeholder for future Docker setup.

---

## Git Commit Messages
To meet rubric expectations, meaningful commits were made:
1. Initial project setup for fullstack-docker-app → Created main folders and initialized Git repository.  
2. Added backend app.js and frontend App.js with package.json → Added starter code for backend and frontend.  

---

## Running the Project
Even though this project is only initial setup:

### Backend
```bash
cd backend
npm install
npm start
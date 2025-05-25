# 🕓 FourQuad To-Do App – Frontend

This is the **frontend** of the **Four Quadrants of Time Management** to-do list web application, built using **React.js** and styled with **TailwindCSS**. The interface is designed to help users categorize their tasks based on urgency and importance using the **Eisenhower Matrix** (Four Quadrants).

---

## Project Structure

frontend/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── TaskForm.jsx
│ │ ├── TaskList.jsx
│ │ └── Quadrant.jsx
│ ├── App.jsx
│ ├── index.js
│ └── api.js
├── tailwind.config.js
├── package.json
└── README.md


---

## Technologies Used

- **React.js** – JavaScript library for building user interfaces
- **TailwindCSS** – Utility-first CSS framework
- **Axios** – HTTP client for API communication
- **Node.js / Express.js** (backend – separate repo)
- **MongoDB** (backend database)

---

## Concept: Four Quadrants of Time Management

The UI displays 4 sections:
1. **Important & Urgent**
2. **Important but Not Urgent**
3. **Not Important but Urgent**
4. **Not Important & Not Urgent**

Each quadrant is managed independently and allows:
- 🟢 Adding a task
- 🔴 Deleting a task
- Marking a task as completed (optional, if implemented)

---

## Setup Instructions

1. Clone the frontend repo:
   ```bash
   git clone https://github.com/yourusername/four-quadrants-frontend.git
   cd four-quadrants-frontend
Install dependencies:
npm install
Start the development server:
npm run dev
The app runs at http://localhost:5173
Ensure your backend server is running at http://localhost:5001 or update the base URL in api.js.

Components Breakdown

- Quadrant.jsx
Renders a single quadrant with a title and associated task list.
Props: title, tasks, onAdd, onDelete
   TaskList.jsx
Displays all tasks for a quadrant.
Includes delete button for each task.
- TaskForm.jsx
Input field to add a task in a quadrant.

API Integration (api.js)

Handles CRUD operations using Axios:

getTasks(quadrantId)
addTask(quadrantId, task)
deleteTask(taskId)

Features

- Categorized task management (Four Quadrants)
- Real-time task addition and deletion
- Clean, responsive UI with TailwindCSS
- Integrated with a Node.js + MongoDB backend

Future Enhancements

Authentication support (JWT)
Task editing functionality
Completion status toggling
Drag & drop between quadrants
Priority color-coding

🙌 Acknowledgments

Inspired by the Eisenhower Matrix and built using the MERN stack.

# TaskTracker

### Task Manager Application

This is a simple Task Manager application built with React. It allows users to add, delete, edit, and mark tasks as complete or incomplete.

#### Files

1. **App.js**:
   - This is the main component that holds the state of the application.
   - It includes the functions for adding, deleting, toggling task status, and editing tasks.
   - Renders the AddTasks, DisplayTasks, and Footer components.

2. **AddTasks.js**:
   - Component for adding new tasks.
   - Includes a form with an input field for adding a new task and a button to submit it.

3. **DisplayTasks.js**:
   - Component for displaying tasks.
   - Maps through the tasks array and renders individual Card components for each task.

4. **Card.js**:
   - Component representing a single task.
   - Allows users to edit task text, toggle task status, and delete the task.

5. **Footer.js**:
   - Component displaying additional information about tasks, such as total tasks and completed tasks.

#### Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Add, delete, edit, and mark tasks as complete or incomplete.

#### Note

This is a basic demonstration application and may not be suitable for production use. The task IDs are generated randomly, which may not be ideal for real-world applications. Additionally, no data persistence is implemented in this version, meaning tasks will reset upon refreshing the page.

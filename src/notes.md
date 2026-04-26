# The User Story

1. The Entry: "As a user, I can type a task into an input field and click 'Add' to put it into the To Do column."
2. The Visualization: "As a user, I can see three distinct columns (To Do, In Progress, Done) that clearly organize my tasks."
3. The Progression: "As a user, I can click a button (e.g., '→') on a task to move it to the next logical column."
4. The Regression: "As a user, I can click a button (e.g., '←') to move a task back if I made a mistake."
5. The Cleanup: "As a user, I can click a 'Delete' icon to remove a task entirely."
6. The Memory (The Big One): "As a user, I can refresh my browser and still see all my tasks in their correct columns."

<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->

# The Logic Flow

1. Data Structure: use an array of objects (for example: {id: 123, text: "Buy milk", status: "todo"})
2. The Rendering: don't use useState three times. Instead, use useState once with three filters (for example: tasks.filter(t => t.status === 'todo'))
3. Moving tasks: find object in array and update its status property (for example: if (id === task.id) { task.status = 'doing' }.)
4. Persistence: use useEffect to save and load. To save, every time when tasks state changes, run localStorage.setItem("myTasks", JSON.stringify(tasks)). To load, when the app first starts, set initial state to JSON.parse(localStorage.getItem('myTasks')) || [].

let tasks = [];

    // Load tasks from localStorage
    window.onload = function() {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
      }
    };

    // Save tasks to localStorage
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Add a new task
    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const task = { text: taskText, done: false };
      tasks.push(task);
      saveTasks();
      renderTasks();
      taskInput.value = "";
    }

    // Toggle task done
    function toggleTask(index) {
      tasks[index].done = !tasks[index].done;
      saveTasks();
      renderTasks();
    }

    // Delete task
    function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }

    // Render tasks to DOM
    function renderTasks() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";

      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.done ? "done" : "";

        li.innerHTML = `
          <span>${task.text}</span>
          <div>
            <button class="btn done-btn" onclick="toggleTask(${index})">${task.done ? "Undo" : "Done"}</button>
            <button class="btn delete" onclick="deleteTask(${index})">Delete</button>
          </div>
        `;

        taskList.appendChild(li);
      });
    }

 
{
    const tasks = []

    const taskRemove = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }

    const bindEvents = (index) => {
        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButton, tasksIndex) => {
            removeButton.addEventListener("click", () => {
                taskRemove(index);
            });
        });

        const doneToggleButtons = document.querySelectorAll(".js-doneToggleButton");

        doneToggleButtons.forEach((doneToggleButton, index) => {
            doneToggleButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item${task.done ? " list__item--done" : ""}"
            >
            <button class="js-doneToggleButton">✔</button>
            ${task.content}
            <button class="js-removeButton">🗑</button>
            </li>
            `
        };

        document.querySelector(".js-tasks").innerHTML = htmlString

        bindEvents();
    };

    const addNewtask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewtask(newTaskContent);
    };


    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}
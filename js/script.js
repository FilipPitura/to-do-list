{
    const tasks = [
        {
            content: "zjeść śniadanie",
            done: true,
        },
        {
            content: "umyć się",
            done: false,
        },
    ]

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item${task.done ? " list__item--done" : ""}"
            >
            ${task.content}
            </li>
            `
        };

        document.querySelector(".js-tasks").innerHTML = htmlString
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

        form.addEventListener("sumbit", onFormSubmit);
    };

    init();
}
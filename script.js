document.addEventListener("DOMContentLoaded", function() {

    const addElementButton = document.getElementById("addElementButton");
    const removeElementButton = document.getElementById("remove");
    const flashcardsContainer = document.getElementById("flashcardsContainer");

    addElementButton.addEventListener("click", function() {

        const newContainer = document.createElement("div");
        newContainer.classList.add("container");

        const closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", function() {
            newContainer.remove();
        });
        newContainer.appendChild(closeButton);

        const innerElement = document.createElement("div");
        innerElement.classList.add("inner-element");

        const nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("placeholder", "Nome do FlashCard");
        nameInput.classList.add("container-name");
        innerElement.appendChild(nameInput);

        const createButton = document.createElement("button");
        createButton.textContent = "Criar FlashCard";
        createButton.addEventListener("click", function() {
            const containerName = nameInput.value;
            if (containerName) {
                newContainer.remove();

                const customContainer = document.createElement("div");
                customContainer.classList.add("new-container");
                customContainer.textContent = containerName;

                flashcardsContainer.appendChild(customContainer);
            }
        });
        innerElement.appendChild(createButton);

        newContainer.appendChild(innerElement);

        document.body.appendChild(newContainer);
    });

    removeElementButton.addEventListener("click", function() {
        const containers = document.querySelectorAll(".new-container");
        if (containers.length > 0) {
            containers[containers.length - 1].remove();
        }
    });
});

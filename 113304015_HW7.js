document.addEventListener("DOMContentLoaded", () => {

    const nameContainer = document.querySelector(".text-content h1");
    const nameButton = document.createElement("button");
    nameButton.textContent = "Edit";
    nameButton.className = "edit-name-button";

    const nameWrapper = document.createElement("div");
    nameWrapper.style.position = "relative";
    nameWrapper.style.display = "inline-block"; // 讓 h1 與按鈕共同居中
    nameWrapper.style.marginTop = "20px";
    nameContainer.parentNode.insertBefore(nameWrapper, nameContainer);
    nameWrapper.appendChild(nameContainer);
    nameWrapper.appendChild(nameButton);

    let isEditing = false;
    nameButton.addEventListener("click", () => {
        if (isEditing) {
            const inputField = document.querySelector(".name-input");
            nameContainer.textContent = inputField.value;
            nameContainer.style.display = "block";
            inputField.remove();
            nameButton.textContent = "Edit";
        } else {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = nameContainer.textContent;
            inputField.className = "name-input";
            nameContainer.style.display = "none";
            nameContainer.insertAdjacentElement("afterend", inputField);
            nameButton.textContent = "Save";
        }
        isEditing = !isEditing;
    });

    const addMusicButton = document.createElement("button");
    addMusicButton.textContent = "Add Music";
    addMusicButton.className = "add-music-button";
    document.querySelector(".right-panel").appendChild(addMusicButton);

    addMusicButton.addEventListener("click", () => {
        const form = document.createElement("form");
        form.className = "add-music-form";
        form.innerHTML = `
            <label for="musicName">Music Name:</label>
            <input type="text" id="musicName" placeholder="Enter music name" required>
            <br>
            <label for="musicLink">Music Link:</label>
            <input type="url" id="musicLink" placeholder="Enter music URL" required>
            <br>
            <button type="submit">Submit</button>
        `;
        document.querySelector(".right-panel").appendChild(form);

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#musicName").value.trim();
            const link = document.querySelector("#musicLink").value.trim();

            if (name && link) {
                const table = document.querySelector(".table");
                const newRow = document.createElement("tr");

                const contentCell = document.createElement("td");
                contentCell.style.display = "flex";
                contentCell.style.alignItems = "center";

                const linkElement = document.createElement("a");
                linkElement.href = link;
                linkElement.target = "_blank";
                const img = document.createElement("img");
                img.src = "Youtube.png";
                img.height = 40;
                img.style.marginRight = "10px";
                linkElement.appendChild(img);

                const nameSpan = document.createElement("span");
                nameSpan.textContent = name;

                contentCell.appendChild(linkElement);
                contentCell.appendChild(nameSpan);

                newRow.appendChild(contentCell);
                table.appendChild(newRow);

                form.remove();
            } else {
                alert("Please fill in all fields!");
            }
        });
    });
});
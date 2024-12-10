const inputTask = document.getElementById('inputTask');

inputTask.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const area = document.getElementById('area');
        const task = document.createElement('div');
        task.classList = 'task';

        const p = document.createElement('p');
        p.innerHTML = inputTask.value.trim();

        const icon = document.createElement('i');
        icon.classList = 'iconoir-xmark';

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function () {
            task.remove();
        }

        deleteButton.appendChild(icon);
        task.appendChild(p);
        task.appendChild(deleteButton);
        area.appendChild(task);

        inputTask.value = '';
    }
});
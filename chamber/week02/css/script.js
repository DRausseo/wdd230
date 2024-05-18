const addChapterButton = document.getElementById('addChapter');
const input = document.getElementById('favchap');
const list = document.getElementById('list');

addChapterButton.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        li.dataset.chapterNumber = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove Chapter'); // Añadir atributo aria-label

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
        input.focus();
    } else {
        alert('Please enter a chapter!');
    }
});

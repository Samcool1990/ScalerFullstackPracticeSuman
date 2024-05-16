const taskSectionRef = document.querySelector('.task-section');
const addActionRef = document.querySelector('.actions .add');
const modalRef = document.querySelector('.add-task-modal');
const newTaskTextAreaRef = document.querySelector('.add-task-modal .left-section textarea')
const prioritySelections = document.querySelectorAll('.add-task-modal .right-section .box');
const disabledEditButtonRef = document.querySelector('.actions .remove.box');
const taskWrapperRef = document.querySelector('.task-section');
const filterBoxesRef = document.querySelectorAll('.filter .box')
const inputRef = document.querySelectorAll('')


function createTask(title, priority, newTaskId) { 
    const newTaskContent = `
        <div class="task-priority" data-priority="${priority}">${priority}</div>
        <div class="task-id">${newTaskId}</div>
        <div class="task-title">
            <span>${title}</span>
            <div class="task-remove"><i class="fa-solid fa-trash"></i></div>
        </div>
    `;

    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = newTaskContent;

    taskSectionRef.append(newTask);
    newTask.querySelector('.task-priority').addEventListener('click', function(e) {
        const newPriority = getNextPriority(e.target.dataset.priority);
        e.target.dataset.priority = newPriority;
    });

    newTask.querySelector('.task-title span').addEventListener('click', function(e) {
        if (!taskWrapperRef.classList.contains('non-editable')) {
            e.target.setAttribute('contenteditable', true); 
        }
    });

    newTask.querySelector('.task-remove').addEventListener('click', function(e) {
        e.target.closest('.task').remove();
    });
}

createTask('Task 1', 'p1', 323131);
createTask('Task 2', 'p1', 43534534);
createTask('Task 3', 'p3', 12313);
createTask('Task 4', 'p2', 234324);


addActionRef.addEventListener('click', function() {
    const isHidden = modalRef.classList.contains('hide');
    toggleModal(isHidden);
});

function toggleModal(isHidden) {
    if (isHidden) {
        modalRef.classList.remove('hide');
    } else {
        modalRef.classList.add('hide');
    }
}

newTaskTextAreaRef.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        const title = e.target.value;
        const selectedPriortyRef = document.querySelector('.add-task-modal .right-section .box.selected');
        const priority = selectedPriortyRef.dataset.priority;
        const newTaskId = Math.random();
        createTask(title, priority, newTaskId);
        toggleModal(false);
        e.target.value = '';
        
    }
})

prioritySelections.forEach((priorityBoxRef) => {
    priorityBoxRef.addEventListener('click', function(e) {
        removeSelectedState();
        e.target.classList.add('selected');
    })
})

function removeSelectedState(boxesRef) {
    prioritySelections.forEach((priorityBoxRef) => {
        priorityBoxRef.classList.remove('selected');
    });
}

function getNextPriority(currentPriority) {
    const priorities = ['p1', 'p2', 'p3', 'p4'];
    let newPriority = (priorities.findIndex(item => item === currentPriority) + 1) % priorities.length;
    return `p${newPriority + 1}`;
}
    
disabledEditButtonRef.addEventListener('click', function(e){
    if (e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
        taskWrapperRef.classList.add('non-editable');
        removeContentEditable();
    } else {
        e.target.classList.add('selected');
        taskWrapperRef.classList.remove('non-editable');
    }
})

function removeContentEditable() {
    document.querySelectorAll('.task .task-title span').forEach((ref) => {
        ref.removeAttribute('contenteditable');
    })
}

function showFilterTask( ) {

};

filterBoxesRef.forEach(boxRef => {
    boxRef.addEventListener('click', function(e){
        removeSelectedState(filterBoxesRef)
        e.target.classList.add('selected')
        showFilterTask()
    })
});


function showSearchedTask (searchText) {
    const taskRef = document.querySelectorAll('.task ');
    
    taskRef.forEach(ref => {
        const taskId = ref.closest('.task-id')
        const taskName = ref.closest('.task-title span')
        if (ref.innerText.includes(searchText)) {
            task.style.display = 'flex'
        }else {
            task.style.display = 'none'
        }
    })
}

inputRef.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    const searchText = e.target.value;
    showSearchedTask(searchText);
})

















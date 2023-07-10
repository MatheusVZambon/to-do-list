// Tarefa Concluída
const arr_DoneButtons = Array.from(document.getElementsByClassName('iac-done'));

for (let x = 0; x < arr_DoneButtons.length; x++){
    arr_DoneButtons[x].addEventListener('click',finishTask);
}

function finishTask(){
    let prv_One = this.parentElement;
    let prv_Two = prv_One.previousElementSibling;

    if (this.firstElementChild.classList.contains('fa-square')){
        this.firstElementChild.classList.replace('fa-square','fa-square-check');
        prv_Two.firstElementChild.style.textDecoration = 'line-through';
        prv_Two.firstElementChild.style.color = '#D8D8D8';
        
    } else {
        this.firstElementChild.classList.replace('fa-square-check','fa-square');
        this.firstElementChild.classList.add('fa-regular');
        prv_Two.firstElementChild.style.textDecoration = 'none';
        prv_Two.firstElementChild.style.color = '#1C3144';
    }    
}

// Tarefa Editada
const arr_EditButtons = Array.from(document.getElementsByClassName('iac-edit'));

for (let y = 0; y < arr_EditButtons.length; y++){
    arr_EditButtons[y].addEventListener('click',editTask);
}

function editTask(){
    let elm_EditBox = document.getElementById('edit-box-container');
    let txt_Edit = document.getElementById('ebu-text');
    let btn_Conf = document.getElementById('eb-btn-confirm');
    let btn_Cncl = document.getElementById('eb-btn-cancel');

    elm_EditBox.classList.replace('ebc-hide','edit-box-container');

    btn_Cncl.addEventListener('click', () => {
        elm_EditBox.classList.replace('edit-box-container','ebc-hide');
    })

    btn_Conf.addEventListener('click', () => {
        let prv_One = this.parentElement; // Acessa 'pai' do botão editar
        let prv_Two = prv_One.previousElementSibling; // Acessa 'irmão' do pai do botão do editar
        prv_Two.firstElementChild.innerHTML = txt_Edit.value;
        elm_EditBox.classList.replace('edit-box-container','ebc-hide');
    })
}

// Tarefa Excluída
const arr_DelButtons = Array.from(document.getElementsByClassName('iac-delete'));

for (let z = 0; z < arr_DelButtons.length; z++){
    arr_DelButtons[z].addEventListener('click', deleteTask);
}

function deleteTask(){
    let elm_DelBox = document.getElementById('delete-box-container');
    let btn_Conf = document.getElementById('db-btn-confirm');
    let btn_Cncl = document.getElementById('db-btn-cancel');

    elm_DelBox.classList.replace('dbc-hide','delete-box-container');

    btn_Cncl.addEventListener('click', () => {
        elm_DelBox.classList.replace('delete-box-container','dbc-hide');
    })

    btn_Conf.addEventListener('click', () => {
        let prv_One = this.parentElement; // Acessa 'pai' do botão deletar
        let prv_Two = prv_One.parentElement; // Acessa 'avô' do botão deletar
        prv_Two.remove();
        elm_DelBox.classList.replace('delete-box-container','dbc-hide');
    })
}

// Nova Tarefa
let btn_NewTask = document.getElementById('cli-button');

btn_NewTask.addEventListener('click', addTask);

function addTask(){
    let txt_NewTask = document.getElementById('cli-text').value;
    let elm_TaskList = document.getElementById('cli-list');

    const ni_Div = document.createElement('div');
    ni_Div.classList.add('content-list-items-item');

    const ni_Desc = document.createElement('div');
    ni_Desc.classList.add('content-list-items-item-desc');

    const ni_DescText = document.createElement('p');
    ni_DescText.classList.add('content-list-items-item-desc-text');
    ni_DescText.innerText = txt_NewTask;

    document.getElementById('cli-text').value = '';

    const ni_Action = document.createElement('div');
    ni_Action.classList.add('content-list-items-item-action');

    const ni_ACDone = document.createElement('div');
    ni_ACDone.classList.add('item-action-container');
    ni_ACDone.classList.add('iac-done');

    const ni_ACEdit = document.createElement('div');
    ni_ACEdit.classList.add('item-action-container');
    ni_ACEdit.classList.add('iac-edit');

    const ni_ACDel = document.createElement('div');
    ni_ACDel.classList.add('item-action-container');
    ni_ACDel.classList.add('iac-delete');

    const ni_IDone = document.createElement('i');
    ni_IDone.classList.add('fa-regular');
    ni_IDone.classList.add('fa-square');

    const ni_IEdit = document.createElement('i');
    ni_IEdit.classList.add('fa-solid');
    ni_IEdit.classList.add('fa-pen');

    const ni_IDel = document.createElement('i');
    ni_IDel.classList.add('fa-solid');
    ni_IDel.classList.add('fa-trash');

    elm_TaskList.appendChild(ni_Div);

    ni_Div.appendChild(ni_Desc);
    ni_Div.appendChild(ni_Action);

    ni_Desc.appendChild(ni_DescText);

    ni_Action.appendChild(ni_ACDone);
    ni_Action.appendChild(ni_ACEdit);
    ni_Action.appendChild(ni_ACDel);

    ni_ACDel.appendChild(ni_IDel);
    ni_ACDone.appendChild(ni_IDone);
    ni_ACEdit.appendChild(ni_IEdit);


    const arr_DoneButtons = Array.from(document.getElementsByClassName('iac-done'));

    for (let x = 0; x < arr_DoneButtons.length; x++){
    arr_DoneButtons[x].addEventListener('click',finishTask);
    }

    const arr_EditButtons = Array.from(document.getElementsByClassName('iac-edit'));

    for (let y = 0; y < arr_EditButtons.length; y++){
    arr_EditButtons[y].addEventListener('click',editTask);
    }

    const arr_DelButtons = Array.from(document.getElementsByClassName('iac-delete'));

    for (let z = 0; z < arr_DelButtons.length; z++){
        arr_DelButtons[z].addEventListener('click', deleteTask);
    }
}




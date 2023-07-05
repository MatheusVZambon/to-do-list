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
// Tarefa Concluída
let btn_Done = document.getElementById('iac-done');
let txt_Task = document.getElementById('cli-task-text');
btn_Done.addEventListener('click',finishTask);

function finishTask(){
    if (btn_Done.firstElementChild.classList.contains('fa-square')){
        btn_Done.firstElementChild.classList.replace('fa-square','fa-square-check');
        txt_Task.style.textDecoration = 'line-through';
        txt_Task.style.color = '#D8D8D8';
    } else {
        btn_Done.firstElementChild.classList.replace('fa-square-check','fa-square');
        btn_Done.firstElementChild.classList.add('fa-regular');
        txt_Task.style.textDecoration = 'none';
        txt_Task.style.color = '#1C3144';
    }
};


// Tarefa Editada
let btn_Edit = document.getElementById('iac-edit');
let elm_EditBox = document.getElementById('edit-box-container');
let txt_Edit = document.getElementById('ebu-text');
let btn_Conf = document.getElementById('eb-btn-confirm');
let btn_Cncl = document.getElementById('eb-btn-cancel');

btn_Edit.addEventListener('click',editTask);

function editTask(){
    elm_EditBox.classList.replace('ebc-hide','edit-box-container');

    btn_Cncl.addEventListener('click', () => {
        elm_EditBox.classList.replace('edit-box-container','ebc-hide');
    })

    btn_Conf.addEventListener('click', () => {
        let prv_One = btn_Edit.parentElement; // Acessa 'pai' do botão editar
        let prv_Two = prv_One.previousElementSibling; // Acessa 'irmão' do pai do botão do editar
        prv_Two.firstElementChild.innerHTML = txt_Edit.value;
        elm_EditBox.classList.replace('edit-box-container','ebc-hide');
    })
}


// Tarefa Excluída
let elm_Item = document.getElementById('cli-item');
let btn_Del = document.getElementById('iac-delete');
let elm_DelBox = document.getElementById('delete-box-container');
let btn_ConfDel = document.getElementById('db-btn-confirm');
let btn_CnclDel = document.getElementById('db-btn-cancel');

btn_Del.addEventListener('click', deleteTask);

function deleteTask(){
    elm_DelBox.classList.replace('dbc-hide','delete-box-container');

    btn_CnclDel.addEventListener('click', () => {
        elm_DelBox.classList.replace('delete-box-container','dbc-hide');
    })

    btn_ConfDel.addEventListener('click', () => {
        let prv_One = btn_Del.parentElement; // Acessa 'pai' do botão deletar
        let prv_Two = prv_One.parentElement; // Acessa 'avô' do botão deletar
        prv_Two.remove();
        elm_DelBox.classList.replace('delete-box-container','dbc-hide');
    })
}
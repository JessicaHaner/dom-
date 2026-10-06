// ================
// Elementos Dom 
// ================

const form = document.querySelector("#form-tarefa");
const inputTarefa = document.querySelector("#tarefa");
const contador = document.querySelector("#contador"); 
const listaTarefas = document.querySelector("#lista-tarefas");

// Resgate das tarefas no localStorage 
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Ouvir o evento clique
form.addEventListener("submit" , adicionarTarefa);

// Funções 
function adicionarTarefa() {
    event.preventDefault();
    let texto = inputTarefa.value.trim();
   
    if (texto === "") {
        alert("Digite uma tarefa!");
        return;

    }

    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluido: false
    };
    console.log(novaTarefa);

    tarefas.push(novaTarefa);
    salvarTarefa();

    console.log(tarefas);

    inputTarefa.value = "";
    inputTarefa.focus();

}

function salvarTarefa() {
    localStorage.setItem(
        "tarefas",
         JSON.stringify(tarefas)
);

}
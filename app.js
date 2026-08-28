/* =======================
CONFIGURAÇÃO
======================= */

const ADMIN_PASSWORD = "cqmdu2026";

let editMode = false;

/* =======================
CONTEÚDO
======================= */

const convencional = [

{
id:"conv1",
titulo:"Procedimento Exemplo",
conteudo:"Substitua este conteúdo pelo procedimento real."
},

{
id:"conv2",
titulo:"Divergência de Splitter",
conteudo:"Conteúdo futuro."
}

];

const troncal = [

{
id:"tro1",
titulo:"Fluxo Troncal",
conteudo:"Conteúdo futuro."
}

];

const socorro = [

{
id:"soc1",
titulo:"AV no Visium",
conteudo:"Procedimento de análise."
},

{
id:"soc2",
titulo:"TOTALDIV não bate",
conteudo:"Procedimento de análise."
}

];

const arvore = [

{
id:"tree1",
titulo:"ListaTerminais",
conteudo:"Fluxo de decisão para ListaTerminais."
},

{
id:"tree2",
titulo:"Revisões",
conteudo:"Fluxo de decisão para Revisões."
}

];

/* =======================
MENUS
======================= */

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

document
.getElementById("openMenu")
.addEventListener("click",()=>{

sidebar.classList.add("open");
overlay.classList.add("show");

});

document
.getElementById("closeMenu")
.addEventListener("click",closeMenu);

overlay.addEventListener("click",closeMenu);

function closeMenu(){

sidebar.classList.remove("open");
overlay.classList.remove("show");

}

/* =======================
SPA
======================= */

function showPage(id){

document
.querySelectorAll(".page")
.forEach(page=>page.classList.remove("active"));

document
.getElementById(id)
.classList.add("active");

closeMenu();

window.scrollTo({
top:0,
behavior:"smooth"
});

}

/* =======================
ADMIN
======================= */

document
.getElementById("adminButton")
.addEventListener("click",()=>{

const password =
prompt("Digite a senha:");

if(password===ADMIN_PASSWORD){

editMode = true;

document.body.classList.add("edit-enabled");

alert("Modo edição ativado.");

}
else{

alert("Senha incorreta.");

}

});

/* =======================
RENDER
======================= */

function createAccordion(item){

return `

<div class="accordion">

<div class="accordion-header">

<span>${item.titulo}</span>

<span class="arrow">▼</span>

</div>

<div class="accordion-body">

<div class="view-mode">

${item.conteudo}

</div>

<div class="edit-mode">

<input
class="edit-input"
value="${item.titulo}"
>

<textarea class="edit-textarea">${item.conteudo}</textarea>

<button class="save-btn">
Salvar
</button>

</div>

</div>

</div>

`;

}

function render(){

document
.getElementById("convContainer")
.innerHTML =
convencional.map(createAccordion).join("");

document
.getElementById("tronContainer")
.innerHTML =
troncal.map(createAccordion).join("");

document
.getElementById("socContainer")
.innerHTML =
socorro.map(createAccordion).join("");

document
.getElementById("treeContainer")
.innerHTML =
arvore.map(createAccordion).join("");

bindAccordions();

}

function bindAccordions(){

document
.querySelectorAll(".accordion-header")
.forEach(header=>{

header.addEventListener("click",()=>{

header
.parentElement
.classList
.toggle("open");

});

});

}

render();

/* =====================================================
DADOS DEMONSTRATIVOS
SUBSTITUIR PELOS CONTEÚDOS REAIS DEPOIS
===================================================== */

const convencional = [

{
categoria:"Procedimento",
titulo:"Exemplo de Procedimento",
conteudo:
"Substitua este conteúdo pelos procedimentos reais do FAQ Convencional."
},

{
categoria:"FAQ",
titulo:"Quando rodar ListaTerminais?",
conteudo:
"Área preparada para a FAQ real."
}

];

const troncal = [

{
categoria:"Procedimento",
titulo:"Fluxo Troncal",
conteudo:
"Área preparada para os processos Troncal."
}

];

const arvore = [

{
categoria:"Fluxo",
titulo:"ListaTerminais",
conteudo:
"Usuário seleciona o tipo de erro e a árvore direciona para o procedimento correto."
},

{
categoria:"Fluxo",
titulo:"Revisões",
conteudo:
"Área preparada para árvore de decisão de revisão."
}

];

const socorro = [

{
categoria:"Erro",
titulo:"AV no Visium",
conteudo:
"Área preparada para o conteúdo real."
},

{
categoria:"Erro",
titulo:"TOTALDIV não bate",
conteudo:
"Área preparada para o conteúdo real."
}

];

/* =====================================================
RENDER
===================================================== */

function createAccordion(item){

return `

<div class="accordion">

<div class="accordion-header">

<div>

<div class="badge">
${item.categoria}
</div>

<div>
${item.titulo}
</div>

</div>

<div class="arrow">
▼
</div>

</div>

<div class="accordion-body">

${item.conteudo}

</div>

</div>

`;

}

function render(){

document
.getElementById("conv-container")
.innerHTML =
convencional.map(createAccordion).join("");

document
.getElementById("tron-container")
.innerHTML =
troncal.map(createAccordion).join("");

document
.getElementById("arvore-container")
.innerHTML =
arvore.map(createAccordion).join("");

document
.getElementById("socorro-container")
.innerHTML =
socorro.map(createAccordion).join("");

bindAccordions();

}

/* =====================================================
ACCORDIONS
===================================================== */

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

/* =====================================================
ABAS COM HASH
===================================================== */

const tabs =
document.querySelectorAll(".main-tab");

const pages =
document.querySelectorAll(".page");

function activateTab(page){

pages.forEach(el=>
el.classList.remove("active")
);

tabs.forEach(el=>
el.classList.remove("active")
);

document
.getElementById(page)
?.classList
.add("active");

document
.querySelector(
`[data-page="${page}"]`
)
?.classList
.add("active");

}

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

const page =
tab.dataset.page;

activateTab(page);

location.hash =
page;

});

});

window.addEventListener("load",()=>{

const page =
location.hash
.replace("#","")
||
"convencional";

activateTab(page);

});

window.addEventListener("hashchange",()=>{

const page =
location.hash
.replace("#","")
||
"convencional";

activateTab(page);

});

/* =====================================================
INICIALIZAÇÃO
===================================================== */

render();

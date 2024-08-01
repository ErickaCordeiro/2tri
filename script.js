const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A Inteligencia Artificial pode substituir empregos?",
        alternativas: [
            {
                texto: 
                afirmacao: "Sim, primcipalmente em areas repetidas . "
            },
            {
                texto: 
                afirmacao: 
            }
        ]
    },
    {
        enunciado: " A Inteligencia Artifical pode afetar a privacidade?",
        alternativas: [
            {
                texto: 
                afirmacao: "sim, se nao for feito com responsabilidade pode comprometer a privacidade."
            },
            {
                texto: 
                afirmacao: 
            }
        ]
    },
    {
        enunciado: "A Inteligencia Artificial gera desinformaçao?",
        alternativas: [
            {
                texto: 
                afirmacao: "Sim, muitas ferramentas podem criar conteudos falsos."
            },
            {
                texto: 
                afirmacao:
            }
        ]
    },
    {
        enunciado: "A IA pode influenciar decisoes politicas?",
        alternativas: [
            {
                texto:
                afirmacao: "Sim, algoritmos de IA podem ser usados em campanhas politicas e na analise de dados eleitorais."
            },
            {
                texto:
                afirmacao:
            }
        ]
    },
    {
        enunciado: "A IA pode gerar mais empregos? ",
        alternativas: [
            {
                texto:
                afirmacao: "Ela gera mais empregos, porem tambem substitui as pessoas dos empregos que ja possui."
            },
            {
                texto:
                afirmacao:
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

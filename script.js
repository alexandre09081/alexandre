+const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
        
{
        enunciado: "Qual a importância da leitura para o desenvolvimento do conhecimento dos jovens?",
        alternativas: [
            {
                texto: "A leitura é importante, pois ajuda os jovens a conhecerem novos assuntos, desenvolverem o pensamento crítico e melhorarem a interpretação de textos.",
                afirmacao: "A leitura possui um papel fundamental na formação dos jovens, contribuindo para o desenvolvimento do conhecimento, da interpretação e do pensamento crítico."
            },
            {
                texto: "A leitura não é tão importante atualmente, pois os jovens conseguem encontrar praticamente todas as informações que precisam na internet.",
                afirmacao: "Mesmo com a facilidade de encontrar informações na internet, a leitura continua sendo essencial para desenvolver o conhecimento e a capacidade de interpretar diferentes informações."
            }
        ]
    },
    {
        enunciado: "O que pode ser feito para incentivar os jovens a desenvolverem o hábito da leitura?",
        alternativas: [
            {
                texto: "Incentivar a leitura de livros que sejam interessantes para os jovens e apresentar diferentes gêneros literários.",
                afirmacao: "Apresentar livros de diferentes gêneros e permitir que os jovens escolham assuntos de seu interesse pode tornar a leitura mais agradável e ajudar na criação desse hábito."
            },
            {
                texto: "Obrigar os jovens a lerem apenas livros considerados importantes, mesmo que eles não tenham interesse pelo assunto.",
                afirmacao: "Obrigar a leitura de livros que não despertam o interesse dos jovens pode fazer com que eles associem a leitura apenas a uma obrigação, dificultando a criação de um hábito."
            }
        ]
    },
    {
        enunciado: "As redes sociais podem influenciar o interesse dos jovens pela leitura?",
        alternativas: [
            {
                texto: "Sim, pois o excesso de conteúdos rápidos pode diminuir o interesse por atividades que exigem mais concentração, como a leitura.",
                afirmacao: "O consumo constante de conteúdos rápidos nas redes sociais pode influenciar os hábitos dos jovens, tornando importante equilibrar o tempo nas redes com atividades que estimulem a concentração e a leitura."
            },
            {
                texto: "Não, pois as redes sociais não possuem nenhuma influência nos hábitos de leitura dos jovens.",
                afirmacao: "As redes sociais fazem parte da rotina de muitos jovens e podem influenciar seus hábitos, porém também podem ser utilizadas para divulgar livros e incentivar a leitura."
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
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

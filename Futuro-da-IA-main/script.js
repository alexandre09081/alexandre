const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "De que forma o hábito da leitura pode contribuir para o desenvolvimento dos jovens?",
    alternativas: [
        {
            texto: "A leitura pode ajudar no desenvolvimento do pensamento crítico, da criatividade e da capacidade de interpretação.",
            afirmacao: "O hábito da leitura contribui para que os jovens desenvolvam diferentes habilidades, como interpretação, criatividade e pensamento crítico, tornando-os mais preparados para lidar com diferentes situações."
        },
        {
            texto: "A leitura contribui pouco para o desenvolvimento dos jovens, pois existem outras formas de adquirir conhecimento atualmente.",
            afirmacao: "Embora existam diversas formas de adquirir conhecimento atualmente, a leitura continua sendo uma ferramenta importante para o desenvolvimento intelectual e pessoal dos jovens."
        }
    ]
},
{
    enunciado: "Muitos jovens afirmam que não possuem tempo para ler. O que poderia ser feito para incluir a leitura na rotina?",
    alternativas: [
        {
            texto: "Reservar alguns minutos por dia para ler, escolhendo livros que sejam interessantes para o próprio leitor.",
            afirmacao: "Criar uma rotina de leitura, mesmo que por poucos minutos diariamente, pode facilitar a criação do hábito e tornar a leitura uma atividade prazerosa."
        },
        {
            texto: "Ler somente quando houver uma obrigação escolar ou quando for necessário para alguma atividade.",
            afirmacao: "Ler apenas por obrigação pode dificultar a criação do hábito, pois a leitura também pode ser uma atividade de lazer e uma forma de descobrir novos assuntos e histórias."
        }
    ]
},
{
    enunciado: "Com o crescimento das redes sociais e dos vídeos curtos, muitos jovens passaram a consumir conteúdos mais rápidos. Isso pode afetar o interesse pela leitura?",
    alternativas: [
        {
            texto: "Sim, pois o contato constante com conteúdos rápidos pode fazer com que alguns jovens tenham mais dificuldade em manter a atenção durante uma leitura.",
            afirmacao: "O consumo frequente de conteúdos rápidos pode influenciar os hábitos de atenção, tornando importante incentivar momentos de leitura mais prolongados e concentrados."
        },
        {
            texto: "Não, pois as redes sociais não possuem nenhuma relação com os hábitos de leitura dos jovens.",
            afirmacao: "As redes sociais fazem parte da rotina de muitos jovens e podem influenciar a maneira como eles consomem informação, por isso é importante equilibrar o uso dessas plataformas com outras atividades, como a leitura."
        }
    ]
},
{
    enunciado: "A escola pode contribuir para despertar o interesse dos jovens pela leitura?",
    alternativas: [
        {
            texto: "Sim, por meio de projetos, debates e atividades que permitam aos alunos escolher livros de diferentes gêneros.",
            afirmacao: "A escola pode ter um papel importante na formação de novos leitores ao apresentar diferentes tipos de livros e transformar a leitura em uma experiência mais interessante e participativa."
        },
        {
            texto: "Não, pois o interesse pela leitura depende exclusivamente da vontade de cada aluno.",
            afirmacao: "Apesar de a vontade individual ser importante, a escola, a família e outros ambientes sociais também podem incentivar os jovens a conhecer novos livros e desenvolver o hábito da leitura."
        }
    ]
}


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

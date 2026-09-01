+const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a leitura pode ajudar no desempenho escolar dos jovens?",
        alternativas: [
            {
                texto: "A leitura pode melhorar a interpretação de textos, ampliar o vocabulário e facilitar a compreensão de diferentes conteúdos escolares.",
                afirmacao: "A leitura contribui para o desempenho escolar ao desenvolver habilidades de interpretação, compreensão e ampliação do vocabulário."
            },
            {
                texto: "A leitura não interfere no desempenho escolar, pois cada matéria depende apenas dos conteúdos ensinados pelo professor.",
                afirmacao: "A leitura pode contribuir para diversas áreas do conhecimento, pois ajuda os estudantes a compreenderem melhor textos, questões e informações."
            }
        ]
    },
    {
        enunciado: "Por que é importante escolher livros de acordo com os interesses dos jovens?",
        alternativas: [
            {
                texto: "Porque livros relacionados aos interesses dos jovens podem despertar maior curiosidade e tornar a leitura mais prazerosa.",
                afirmacao: "Escolher livros que despertem o interesse dos jovens pode aumentar a motivação e contribuir para a formação do hábito de leitura."
            },
            {
                texto: "Porque os jovens devem ler somente livros sobre assuntos que já conhecem e nunca explorar novos temas.",
                afirmacao: "Embora os interesses pessoais possam incentivar a leitura, também é importante conhecer novos assuntos e diferentes gêneros literários."
            }
        ]
    },
    {
        enunciado: "Qual é uma das principais vantagens de ler diferentes gêneros literários?",
        alternativas: [
            {
                texto: "Conhecer diferentes formas de escrita, histórias, ideias e maneiras de compreender o mundo.",
                afirmacao: "A leitura de diferentes gêneros literários amplia o contato dos jovens com diferentes estilos, ideias e perspectivas."
            },
            {
                texto: "Ler diferentes gêneros não traz benefícios, pois todos os livros apresentam basicamente as mesmas informações.",
                afirmacao: "Os diferentes gêneros literários apresentam características, linguagens e perspectivas variadas, contribuindo para ampliar o conhecimento do leitor."
            }
        ]
    },
    {
        enunciado: "De que maneira a tecnologia pode ser utilizada para incentivar a leitura?",
        alternativas: [
            {
                texto: "Por meio de aplicativos, livros digitais, clubes de leitura online e conteúdos que apresentem novas obras aos jovens.",
                afirmacao: "A tecnologia pode ser uma ferramenta para aproximar os jovens dos livros e facilitar o acesso a diferentes conteúdos de leitura."
            },
            {
                texto: "A tecnologia deve ser evitada, pois celulares e computadores não podem contribuir para o desenvolvimento do hábito da leitura.",
                afirmacao: "Apesar de poder causar distrações, a tecnologia também oferece recursos que podem facilitar o acesso aos livros e incentivar a leitura."
            }
        ]
    },
    {
        enunciado: "Por que é importante reservar um momento do dia para a leitura?",
        alternativas: [
            {
                texto: "Porque criar uma rotina de leitura pode ajudar a transformar a leitura em um hábito e melhorar a concentração.",
                afirmacao: "Reservar um período para ler diariamente pode contribuir para a criação de uma rotina e para o desenvolvimento da concentração."
            },
            {
                texto: "Porque ler todos os dias significa que o jovem precisa abandonar outras atividades importantes de sua rotina.",
                afirmacao: "A leitura deve fazer parte de uma rotina equilibrada, dividindo espaço com estudos, lazer, descanso e outras atividades."
            }
        ]
    },
    {
        enunciado: "Como a família pode contribuir para incentivar os jovens a lerem?",
        alternativas: [
            {
                texto: "Criando momentos de leitura em casa, conversando sobre livros e demonstrando interesse pelas leituras dos jovens.",
                afirmacao: "A participação da família pode estimular o interesse pela leitura ao criar um ambiente favorável e valorizar o contato com os livros."
            },
            {
                texto: "A família não precisa incentivar a leitura, pois esse é um hábito que deve ser desenvolvido somente pela escola.",
                afirmacao: "A escola possui um papel importante, mas a família também pode contribuir para criar um ambiente que estimule e valorize a leitura."
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

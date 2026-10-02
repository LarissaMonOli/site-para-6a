/* ============================================================
   VIAGEM NO TEMPO — QUIZ DE HISTÓRIA (6º ANO)
   ============================================================ */

/* ------------------------------------------------------------
   BANCO DE PERGUNTAS
   ------------------------------------------------------------ */
const PERGUNTAS = [
  {
    enunciado: "Como os seres humanos viviam no período Paleolítico?",
    alternativas: [
      "Praticavam agricultura e criavam animais.",
      "Eram nômades, caçavam, pescavam e coletavam frutos.",
      "Moravam em cidades com grandes construções.",
      "Escreviam livros e estudavam ciências."
    ],
    correta: 1,
    explicacao: "No Paleolítico, os humanos eram nômades: mudavam de lugar seguindo os animais e as frutas da estação. A agricultura só surgiu depois, no Neolítico."
  },
  {
    enunciado: "Qual foi uma grande consequência da Revolução Neolítica?",
    alternativas: [
      "O domínio do fogo.",
      "O surgimento da escrita.",
      "A sedentarização do ser humano com a agricultura.",
      "A invenção da roda de automóvel."
    ],
    correta: 2,
    explicacao: "Com a agricultura e a domesticação de animais, o ser humano passou a se fixar em um só lugar (sedentarização), formando as primeiras aldeias."
  },
  {
    enunciado: "Por que a Mesopotâmia é conhecida como o 'berço da civilização'?",
    alternativas: [
      "Porque lá foram encontrados os primeiros dinossauros.",
      "Porque surgiram as primeiras cidades, a escrita e as leis.",
      "Porque foi o primeiro lugar onde se usou a internet.",
      "Porque os mesopotâmicos inventaram o futebol."
    ],
    correta: 1,
    explicacao: "Na Mesopotâmia (entre os rios Tigre e Eufrates) surgiram as primeiras cidades, a escrita cuneiforme e o Código de Hamurabi, um dos primeiros conjuntos de leis."
  },
  {
    enunciado: "Qual escrita foi criada pelos mesopotâmicos?",
    alternativas: [
      "Hieróglifos",
      "Alfabeto latino",
      "Escrita cuneiforme",
      "Escrita braille"
    ],
    correta: 2,
    explicacao: "Os sumérios criaram a escrita cuneiforme, feita com pequenas marcas em forma de cunha feitas em placas de argila."
  },
  {
    enunciado: "Qual rio foi essencial para a civilização do Egito Antigo?",
    alternativas: [
      "Rio Amazonas",
      "Rio Nilo",
      "Rio Tigre",
      "Rio Danúbio"
    ],
    correta: 1,
    explicacao: "O Rio Nilo era tudo para os egípcios: dava água, permitia a agricultura após as cheias e servia de caminho para o transporte. Por isso, o Egito é chamado de 'presente do Nilo'."
  },
  {
    enunciado: "Quem era o faraó no Egito Antigo?",
    alternativas: [
      "Um soldado comum.",
      "Um comerciante escolhido pelo povo.",
      "Considerado um deus vivo e chefe supremo do Egito.",
      "Um navegador que descobriu a América."
    ],
    correta: 2,
    explicacao: "O faraó era visto como um deus vivo, com poder absoluto sobre a política, a religião e o exército. Ele era responsável por manter a ordem no Egito."
  },
  {
    enunciado: "O que era a democracia na Grécia Antiga (Atenas)?",
    alternativas: [
      "Um sistema em que apenas mulheres votavam.",
      "Um governo onde todos os cidadãos participavam das decisões.",
      "Um governo comandado por um rei poderoso.",
      "Um sistema em que só os ricos podiam morar na cidade."
    ],
    correta: 1,
    explicacao: "Em Atenas surgiu a democracia: os cidadãos (homens livres, maiores de idade e nascidos na cidade) participavam diretamente das decisões na Assembleia."
  },
  {
    enunciado: "Como eram chamados os jogos esportivos criados pelos gregos em homenagem a Zeus?",
    alternativas: [
      "Jogos Olímpicos",
      "Jogos Pan-Americanos",
      "Copa do Mundo",
      "Jogos Romanos"
    ],
    correta: 0,
    explicacao: "Os Jogos Olímpicos surgiram em Olímpia, na Grécia, em homenagem a Zeus. Eram realizados a cada quatro anos e incluíam corridas, lutas e arremessos."
  },
  {
    enunciado: "Qual foi uma grande contribuição dos romanos para o mundo atual?",
    alternativas: [
      "A invenção da televisão.",
      "O Direito (leis) e o latim, que originou o português.",
      "A criação do papel higiênico.",
      "A descoberta da energia elétrica."
    ],
    correta: 1,
    explicacao: "Os romanos criaram um sistema jurídico muito influente (o Direito Romano) e o latim, língua que deu origem ao português, espanhol, francês, italiano e romeno."
  },
  {
    enunciado: "O que foi a Pax Romana?",
    alternativas: [
      "Um tratado de paz assinado com a China.",
      "Um período de cerca de 200 anos de paz e estabilidade no Império Romano.",
      "Uma festa religiosa dos romanos.",
      "Uma guerra contra os gregos."
    ],
    correta: 1,
    explicacao: "A Pax Romana foi um longo período (do século I ao II d.C.) em que Roma viveu relativa paz, prosperidade e desenvolvimento das artes, do comércio e das estradas."
  }
];

/* ------------------------------------------------------------
   CONFIGURAÇÕES
   ------------------------------------------------------------ */
const PONTOS_POR_ACERTO = 10;

/* ------------------------------------------------------------
   ESTADO DO JOGO
   ------------------------------------------------------------ */
let indiceAtual = 0;
let pontuacao = 0;
let acertos = 0;
let erros = 0;
let respondeu = false;
let perguntasEmbaralhadas = [];

/* ------------------------------------------------------------
   REFERÊNCIAS DO DOM
   ------------------------------------------------------------ */
const telaInicio = document.getElementById('tela-inicio');
const telaQuiz = document.getElementById('tela-quiz');
const telaFinal = document.getElementById('tela-final');

const btnComecar = document.getElementById('btn-comecar');
const btnProxima = document.getElementById('btn-proxima');
const btnReiniciar = document.getElementById('btn-reiniciar');

const numeroPerguntaEl = document.getElementById('numero-pergunta');
const totalPerguntasEl = document.getElementById('total-perguntas');
const pontuacaoEl = document.getElementById('pontuacao');
const progressoEl = document.getElementById('progresso');
const barraEl = document.getElementById('barra');

const textoPerguntaEl = document.getElementById('texto-pergunta');
const alternativasEl = document.getElementById('alternativas');
const feedbackEl = document.getElementById('feedback');

const medalhaEl = document.getElementById('medalha');
const mensagemFinalEl = document.getElementById('mensagem-final');
const acertosFinaisEl = document.getElementById('acertos-finais');
const errosFinaisEl = document.getElementById('erros-finais');
const pontosFinaisEl = document.getElementById('pontos-finais');

/* ------------------------------------------------------------
   UTILITÁRIOS
   ------------------------------------------------------------ */
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function mostrarTela(tela) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  tela.classList.add('ativa');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------------------------------------------------------
   LÓGICA PRINCIPAL
   ------------------------------------------------------------ */
function iniciarJogo() {
  indiceAtual = 0;
  pontuacao = 0;
  acertos = 0;
  erros = 0;

  perguntasEmbaralhadas = embaralhar(PERGUNTAS);

  totalPerguntasEl.textContent = perguntasEmbaralhadas.length;
  pontuacaoEl.textContent = '0';
  progressoEl.style.width = '0%';
  barraEl.setAttribute('aria-valuenow', 0);

  mostrarTela(telaQuiz);
  carregarPergunta();
}

function carregarPergunta() {
  respondeu = false;

  const pergunta = perguntasEmbaralhadas[indiceAtual];

  // Atualiza cabeçalho
  numeroPerguntaEl.textContent = indiceAtual + 1;
  textoPerguntaEl.textContent = pergunta.enunciado;

  // Atualiza barra de progresso
  const progressoPercent = ((indiceAtual) / perguntasEmbaralhadas.length) * 100;
  progressoEl.style.width = progressoPercent + '%';
  barraEl.setAttribute('aria-valuenow', Math.round(progressoPercent));

  // Esconde feedback e botão próxima
  feedbackEl.className = 'feedback';
  feedbackEl.innerHTML = '';
  btnProxima.classList.add('escondido');

  // Limpa alternativas
  alternativasEl.innerHTML = '';

  // Embaralha alternativas mantendo o índice da correta
  const alternativasComIndice = pergunta.alternativas.map((texto, idx) => ({
    texto,
    correta: idx === pergunta.correta
  }));
  const alternativasEmbaralhadas = embaralhar(alternativasComIndice);

  const letras = ['A', 'B', 'C', 'D'];

  alternativasEmbaralhadas.forEach((alt, i) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'alternativa';
    botao.dataset.correta = alt.correta ? 'true' : 'false';

    botao.innerHTML = `
      <span class="letra">${letras[i]}</span>
      <span class="texto-alt">${alt.texto}</span>
    `;

    botao.addEventListener('click', () => responderAlternativa(botao));
    alternativasEl.appendChild(botao);
  });
}

function responderAlternativa(botaoClicado) {
  if (respondeu) return;
  respondeu = true;

  const pergunta = perguntasEmbaralhadas[indiceAtual];
  const acertou = botaoClicado.dataset.correta === 'true';

  // Desabilita todas as alternativas
  const todosBotoes = alternativasEl.querySelectorAll('.alternativa');
  todosBotoes.forEach(b => {
    b.disabled = true;
    if (b.dataset.correta === 'true') {
      b.classList.add('correta');
    }
  });

  // Marca a escolhida
  if (acertou) {
    botaoClicado.classList.add('correta');
    pontuacao += PONTOS_POR_ACERTO;
    acertos++;
  } else {
    botaoClicado.classList.add('errada');
    erros++;
  }

  // Atualiza pontuação
  pontuacaoEl.textContent = pontuacao;

  // Mostra feedback
  feedbackEl.innerHTML = `
    <strong>${acertou ? '🎉 Acertou! +' + PONTOS_POR_ACERTO + ' pontos' : '❌ Ops! Resposta errada'}</strong>
    <span>${pergunta.explicacao}</span>
  `;
  feedbackEl.classList.add('mostrar', acertou ? 'correto' : 'errado');

  // Atualiza barra de progresso
  const progressoPercent = ((indiceAtual + 1) / perguntasEmbaralhadas.length) * 100;
  progressoEl.style.width = progressoPercent + '%';
  barraEl.setAttribute('aria-valuenow', Math.round(progressoPercent));

  // Mostra botão próxima (texto diferente na última pergunta)
  const ehUltima = indiceAtual === perguntasEmbaralhadas.length - 1;
  btnProxima.textContent = ehUltima ? '🏁 Ver Resultado' : 'Próxima ➜';
  btnProxima.classList.remove('escondido');
}

function proximaPergunta() {
  indiceAtual++;

  if (indiceAtual < perguntasEmbaralhadas.length) {
    carregarPergunta();
  } else {
    finalizarJogo();
  }
}

function finalizarJogo() {
  mostrarTela(telaFinal);

  const total = perguntasEmbaralhadas.length;
  const percentual = (acertos / total) * 100;

  // Atualiza placar
  acertosFinaisEl.textContent = acertos;
  errosFinaisEl.textContent = erros;
  pontosFinaisEl.textContent = pontuacao;

  // Define medalha e mensagem conforme desempenho
  let medalha = '📜';
  let mensagem = '';

  if (percentual === 100) {
    medalha = '🏆';
    mensagem = 'Perfeito! Você é um verdadeiro mestre da História! 🌟';
  } else if (percentual >= 80) {
    medalha = '🥇';
    mensagem = 'Excelente! Você conhece muito bem as civilizações antigas!';
  } else if (percentual >= 60) {
    medalha = '🥈';
    mensagem = 'Muito bom! Continue estudando para ficar ainda melhor!';
  } else if (percentual >= 40) {
    medalha = '🥉';
    mensagem = 'Bom esforço! Que tal revisar o conteúdo e tentar de novo?';
  } else {
    medalha = '📜';
    mensagem = 'Não desanime! Cada erro é uma chance de aprender. Tente novamente!';
  }

  medalhaEl.textContent = medalha;
  mensagemFinalEl.textContent = mensagem;
}

function reiniciarJogo() {
  iniciarJogo();
}

/* ------------------------------------------------------------
   EVENTOS
   ------------------------------------------------------------ */
btnComecar.addEventListener('click', iniciarJogo);
btnProxima.addEventListener('click', proximaPergunta);
btnReiniciar.addEventListener('click', reiniciarJogo);

// Acessibilidade: tecla Enter no botão próxima já funciona nativamente.
// Suporte a teclado numérico 1-4 para escolher alternativas (extra)
document.addEventListener('keydown', (e) => {
  if (!telaQuiz.classList.contains('ativa')) return;
  if (respondeu) {
    if (e.key === 'Enter') {
      btnProxima.click();
    }
    return;
  }
  const num = parseInt(e.key, 10);
  if (num >= 1 && num <= 4) {
    const botoes = alternativasEl.querySelectorAll('.alternativa');
    if (botoes[num - 1]) {
      botoes[num - 1].click();
    }
  }
});
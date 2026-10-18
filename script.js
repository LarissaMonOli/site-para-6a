/* ============================================================
   EXPEDIÇÃO ARQUEOLÓGICA — EM BUSCA DOS ARTEFATOS PERDIDOS
   História • 6º ano do Ensino Fundamental
   ============================================================ */

/* ------------------------------------------------------------
   1. BANCO DE DADOS DAS FASES
   ------------------------------------------------------------ */
const FASES = [
  {
    era: 'Pré-História',
    local: 'Caverna de Altamira · Espanha',
    artefato: '🪓',
    nomeArtefato: 'Machado de Pedra',
    instrucao: '🖌️ Escove a terra da caverna até encontrar o machado',
    perguntas: [
      {
        enunciado: 'Como os seres humanos viviam no período Paleolítico?',
        alternativas: [
          'Praticavam agricultura e criavam animais em fazendas.',
          'Eram nômades: caçavam, pescavam e coletavam frutos.',
          'Moravam em cidades com grandes construções de pedra.',
          'Escreviam livros e estudavam ciências na escola.'
        ],
        correta: 1,
        explicacao: 'No Paleolítico os humanos eram nômades: mudavam de lugar seguindo os animais e as frutas da estação. A agricultura só surgiu depois, no Neolítico.'
      },
      {
        enunciado: 'Qual foi a grande mudança da Revolução Neolítica?',
        alternativas: [
          'O domínio do fogo para cozinhar alimentos.',
          'A invenção da escrita cuneiforme na argila.',
          'A sedentarização: o ser humano passou a se fixar com a agricultura.',
          'A invenção da roda para construir carros.'
        ],
        correta: 2,
        explicacao: 'Com a agricultura e a domesticação de animais, o ser humano passou a se fixar em um só lugar (sedentarização), formando as primeiras aldeias.'
      }
    ]
  },
  {
    era: 'Mesopotâmia',
    local: 'Ruínas de Ur · Iraque',
    artefato: '📜',
    nomeArtefato: 'Tábula de Argila',
    instrucao: '📜 Limpe a areia até revelar a tábula com escrita cuneiforme',
    perguntas: [
      {
        enunciado: 'Quais rios foram essenciais para a Mesopotâmia?',
        alternativas: [
          'Rio Nilo e Rio Congo.',
          'Rios Tigre e Eufrates.',
          'Rio Amazonas e Rio Paraná.',
          'Rio Danúbio e Rio Reno.'
        ],
        correta: 1,
        explicacao: 'A Mesopotâmia ficava entre os rios Tigre e Eufrates, na região atual do Iraque. Por isso o nome significa "terra entre rios".'
      },
      {
        enunciado: 'Qual escrita foi criada pelos mesopotâmicos?',
        alternativas: [
          'Hieróglifos egípcios.',
          'Alfabeto latino.',
          'Escrita cuneiforme em placas de argila.',
          'Escrita braille.'
        ],
        correta: 2,
        explicacao: 'Os sumérios criaram a escrita cuneiforme, feita com marcas em forma de cunha em placas de argila mole. Era usada para registrar colheitas e leis.'
      }
    ]
  },
  {
    era: 'Egito Antigo',
    local: 'Vale dos Reis · Egito',
    artefato: '🪬',
    nomeArtefato: 'Amuleto do Faraó',
    instrucao: '🪬 Sopre a areia do deserto até encontrar o amuleto do faraó',
    perguntas: [
      {
        enunciado: 'Qual rio foi essencial para a civilização do Egito Antigo?',
        alternativas: [
          'Rio Amazonas.',
          'Rio Nilo.',
          'Rio Tigre.',
          'Rio Danúbio.'
        ],
        correta: 1,
        explicacao: 'O Rio Nilo era tudo para os egípcios: dava água, permitia a agricultura após as cheias e servia de caminho para o transporte. Por isso o Egito é chamado de "presente do Nilo".'
      },
      {
        enunciado: 'Quem era o faraó no Egito Antigo?',
        alternativas: [
          'Um soldado comum escolhido pelo povo.',
          'Um comerciante que vendia tecidos.',
          'Considerado um deus vivo e chefe supremo do Egito.',
          'Um navegador que descobriu novas terras.'
        ],
        correta: 2,
        explicacao: 'O faraó era visto como um deus vivo, com poder absoluto sobre a política, a religião e o exército. Ele era responsável por manter a ordem no Egito.'
      }
    ]
  },
  {
    era: 'Grécia Antiga',
    local: 'Acrópole de Atenas · Grécia',
    artefato: '🏛️',
    nomeArtefato: 'Elmo de Pólis',
    instrucao: '🏛️ Escove o mármore até desenterrar o elmo grego',
    perguntas: [
      {
        enunciado: 'O que era a democracia na Grécia Antiga (Atenas)?',
        alternativas: [
          'Um sistema em que apenas as mulheres votavam.',
          'Um governo onde os cidadãos participavam das decisões.',
          'Um governo comandado por um rei poderoso.',
          'Um sistema em que só os ricos podiam morar na cidade.'
        ],
        correta: 1,
        explicacao: 'Em Atenas surgiu a democracia: os cidadãos (homens livres, maiores de idade e nascidos na cidade) participavam diretamente das decisões na Assembleia.'
      },
      {
        enunciado: 'Como eram chamados os jogos esportivos criados pelos gregos em homenagem a Zeus?',
        alternativas: [
          'Jogos Olímpicos.',
          'Jogos Pan-Americanos.',
          'Copa do Mundo.',
          'Jogos Romanos.'
        ],
        correta: 0,
        explicacao: 'Os Jogos Olímpicos surgiram em Olímpia, na Grécia, em homenagem a Zeus. Eram realizados a cada quatro anos e incluíam corridas, lutas e arremessos.'
      }
    ]
  },
  {
    era: 'Roma Antiga',
    local: 'Fórum Romano · Itália',
    artefato: '🪙',
    nomeArtefato: 'Moeda do Imperador',
    instrucao: '🪙 Peneire a terra do fórum até encontrar a moeda romana',
    perguntas: [
      {
        enunciado: 'Qual foi uma grande contribuição dos romanos para o mundo atual?',
        alternativas: [
          'A invenção da televisão.',
          'O Direito (leis) e o latim, que originou o português.',
          'A criação da energia elétrica.',
          'A descoberta da América.'
        ],
        correta: 1,
        explicacao: 'Os romanos criaram um sistema jurídico muito influente (o Direito Romano) e o latim, língua que deu origem ao português, espanhol, francês, italiano e romeno.'
      },
      {
        enunciado: 'O que foi a Pax Romana?',
        alternativas: [
          'Um tratado de paz assinado com a China.',
          'Um período de cerca de 200 anos de paz e estabilidade no Império Romano.',
          'Uma festa religiosa dos romanos.',
          'Uma guerra contra os gregos.'
        ],
        correta: 1,
        explicacao: 'A Pax Romana foi um longo período (do século I ao II d.C.) em que Roma viveu relativa paz, prosperidade e desenvolvimento das artes, do comércio e das estradas.'
      }
    ]
  }
];

/* ------------------------------------------------------------
   2. CONFIGURAÇÕES GERAIS
   ------------------------------------------------------------ */
const PONTOS_POR_ACERTO = 10;
const PONTOS_COM_CADERNO = 5;

const CARGAS_INICIAIS = {
  pincel: 3,
  lupa: 3,
  caderno: 2
};

// Configurações do artefato escondido
const ARTEFATO = {
  // O artefato visual tem 70px de largura (raio ~35px).
  // O raio de detecção é um pouco maior (42px) para dar
  // uma leve margem de perdão, sem exigir escavação exagerada.
  raioDeteccao: 42,
  raioEscavacao: 28,       // pincel médio — cobre bem a área do artefato
  progressoNecessario: 55, // % do grid do artefato que precisa ser escavado
  raioDica: 110            // raio em px em que o solo começa a "clarear" (dica)
};

/* ------------------------------------------------------------
   3. ESTADO DO JOGO
   ------------------------------------------------------------ */
const estado = {
  faseAtual: 0,
  perguntaAtual: 0,
  pontuacao: 0,
  acertos: 0,
  erros: 0,
  respondeu: false,
  escavacaoConcluida: false,
  usandoCaderno: false,
  cargas: { ...CARGAS_INICIAIS },
  acervo: [],

  artefatoX: 0,
  artefatoY: 0,
  grid: null,
  gridCols: 0,
  gridRows: 0,
  celulasEscavadas: 0,
  celulasTotais: 0
};

/* ------------------------------------------------------------
   4. REFERÊNCIAS DO DOM
   ------------------------------------------------------------ */
const telaInicio = document.getElementById('tela-inicio');
const telaExpedicao = document.getElementById('tela-expedicao');
const telaGaleria = document.getElementById('tela-galeria');

const btnComecar = document.getElementById('btn-comecar');
const btnProxima = document.getElementById('btn-proxima');
const btnReiniciar = document.getElementById('btn-reiniciar');

const statusFase = document.getElementById('status-fase');
const statusPontos = document.getElementById('status-pontos');
const statusAcervo = document.getElementById('status-acervo');

const sitioEra = document.getElementById('sitio-era');
const sitioLocal = document.getElementById('sitio-local');
const artefatoVisual = document.getElementById('artefato-visual');
const instrucaoEscavacao = document.getElementById('instrucao-escavacao');
const medidor = document.getElementById('medidor');
const medidorBarra = document.getElementById('medidor-barra');
const particulasEl = document.getElementById('particulas');
const descobertaEl = document.getElementById('descoberta');
const lona = document.getElementById('lona');
const sitio = document.getElementById('sitio');

const contadorPergunta = document.getElementById('contador-pergunta');
const bloqueio = document.getElementById('bloqueio');
const perguntaArea = document.getElementById('pergunta-area');
const textoPergunta = document.getElementById('texto-pergunta');
const alternativasEl = document.getElementById('alternativas');
const feedbackEl = document.getElementById('feedback');

const ferramentaPincel = document.getElementById('ferramenta-pincel');
const ferramentaLupa = document.getElementById('ferramenta-lupa');
const ferramentaCaderno = document.getElementById('ferramenta-caderno');
const cargasPincel = document.getElementById('cargas-pincel');
const cargasLupa = document.getElementById('cargas-lupa');
const cargasCaderno = document.getElementById('cargas-caderno');

const diarioLista = document.getElementById('diario-lista');

const galeriaMensagem = document.getElementById('galeria-mensagem');
const vitrine = document.getElementById('vitrine');
const finalAcertos = document.getElementById('final-acertos');
const finalErros = document.getElementById('final-erros');
const finalPontos = document.getElementById('final-pontos');
const finalReliquias = document.getElementById('final-reliquias');

/* ------------------------------------------------------------
   5. ÁUDIO (WEB AUDIO API)
   ------------------------------------------------------------ */
let audioCtx = null;

function garantirAudio() {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      audioCtx = null;
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function tocarTom(freq, duracao, tipo = 'sine', volume = 0.15) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = tipo;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duracao);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duracao);
}

function somEscavacao() {
  if (!audioCtx) return;
  const bufferSize = audioCtx.sampleRate * 0.07;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize) * 0.12;
  }
  const fonte = audioCtx.createBufferSource();
  fonte.buffer = buffer;
  const gain = audioCtx.createGain();
  gain.gain.value = 0.06;
  const filtro = audioCtx.createBiquadFilter();
  filtro.type = 'lowpass';
  filtro.frequency.value = 900;
  fonte.connect(filtro);
  filtro.connect(gain);
  gain.connect(audioCtx.destination);
  fonte.start();
}

function somDescoberta() {
  tocarTom(523.25, 0.15, 'triangle', 0.18);
  setTimeout(() => tocarTom(659.25, 0.15, 'triangle', 0.18), 100);
  setTimeout(() => tocarTom(783.99, 0.3, 'triangle', 0.2), 200);
}

function somAcerto() {
  tocarTom(659.25, 0.12, 'sine', 0.2);
  setTimeout(() => tocarTom(987.77, 0.25, 'sine', 0.2), 110);
}

function somErro() {
  tocarTom(196, 0.25, 'sawtooth', 0.12);
  setTimeout(() => tocarTom(155.56, 0.3, 'sawtooth', 0.12), 120);
}

function somFerramenta() {
  tocarTom(880, 0.1, 'square', 0.1);
  setTimeout(() => tocarTom(1174.66, 0.12, 'square', 0.1), 80);
}

function somFinal() {
  [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
    setTimeout(() => tocarTom(f, 0.35, 'triangle', 0.2), i * 160);
  });
}

/* ------------------------------------------------------------
   6. UTILITÁRIOS
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

function adicionarDiario(texto, tipo = 'sistema') {
  const li = document.createElement('li');
  li.className = `diario__item diario__item--${tipo}`;
  li.textContent = texto;
  diarioLista.appendChild(li);
  diarioLista.scrollTop = diarioLista.scrollHeight;
  while (diarioLista.children.length > 6) {
    diarioLista.removeChild(diarioLista.firstChild);
  }
}

function atualizarStatus() {
  const fase = FASES[estado.faseAtual];
  if (fase) {
    statusFase.textContent = `${estado.faseAtual + 1}/${FASES.length}`;
  }
  statusPontos.textContent = estado.pontuacao;
  statusAcervo.textContent = `${estado.acervo.length}/${FASES.length}`;
}

function atualizarCargasUI() {
  cargasPincel.textContent = estado.cargas.pincel;
  cargasLupa.textContent = estado.cargas.lupa;
  cargasCaderno.textContent = estado.cargas.caderno;

  ferramentaPincel.disabled = estado.cargas.pincel <= 0 || estado.respondeu || !estado.escavacaoConcluida;
  ferramentaLupa.disabled = estado.cargas.lupa <= 0 || estado.respondeu || !estado.escavacaoConcluida;
  ferramentaCaderno.disabled = estado.cargas.caderno <= 0 || estado.respondeu || !estado.escavacaoConcluida;
}

/* ------------------------------------------------------------
   7. CANVAS DE ESCAVAÇÃO
   ------------------------------------------------------------ */
const ctx = lona.getContext('2d');
let escavando = false;
let ultimoPonto = null;
let larguraCanvas = 0;
let alturaCanvas = 0;

function ajustarCanvas() {
  const rect = lona.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  lona.width = rect.width * dpr;
  lona.height = rect.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  larguraCanvas = rect.width;
  alturaCanvas = rect.height;
  desenharPoeira();
}

/**
 * Sorteia a posição do artefato, move o artefato visual para
 * o mesmo lugar e prepara o grid de detecção — que agora tem
 * o MESMO tamanho aproximado do objeto visual.
 */
function sortearArtefato() {
  const margem = 70;
  const minX = margem;
  const maxX = Math.max(margem + 1, larguraCanvas - margem);
  const minY = margem;
  const maxY = Math.max(margem + 1, alturaCanvas - margem);

  estado.artefatoX = minX + Math.random() * (maxX - minX);
  estado.artefatoY = minY + Math.random() * (maxY - minY);

  // Move o artefato visual para o mesmo local do sorteio
  artefatoVisual.style.left = estado.artefatoX + 'px';
  artefatoVisual.style.top = estado.artefatoY + 'px';

  // Grid de detecção com células menores (6px) para maior precisão
  const tamanhoCelula = 6;
  estado.gridCols = Math.ceil(larguraCanvas / tamanhoCelula);
  estado.gridRows = Math.ceil(alturaCanvas / tamanhoCelula);
  estado.grid = new Array(estado.gridCols * estado.gridRows).fill(false);
  estado.celulasEscavadas = 0;

  estado.celulasTotais = 0;
  const raio = ARTEFATO.raioDeteccao;
  for (let y = 0; y < estado.gridRows; y++) {
    for (let x = 0; x < estado.gridCols; x++) {
      const cx = x * tamanhoCelula + tamanhoCelula / 2;
      const cy = y * tamanhoCelula + tamanhoCelula / 2;
      const dist = Math.hypot(cx - estado.artefatoX, cy - estado.artefatoY);
      if (dist <= raio) {
        estado.celulasTotais++;
      }
    }
  }
}

function desenharPoeira() {
  ctx.clearRect(0, 0, larguraCanvas, alturaCanvas);

  const grad = ctx.createLinearGradient(0, 0, larguraCanvas, alturaCanvas);
  grad.addColorStop(0, '#8b5a2b');
  grad.addColorStop(0.5, '#6b4423');
  grad.addColorStop(1, '#4a2f1c');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, larguraCanvas, alturaCanvas);

  for (let i = 0; i < 2400; i++) {
    const x = Math.random() * larguraCanvas;
    const y = Math.random() * alturaCanvas;
    const r = Math.random() * 2.5 + 0.5;
    const tons = ['#a67c52', '#8b5a2b', '#3b2416', '#c9a227', '#5a3a20'];
    ctx.fillStyle = tons[Math.floor(Math.random() * tons.length)];
    ctx.globalAlpha = Math.random() * 0.6 + 0.2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 0.25;
  ctx.strokeStyle = '#2b1a10';
  ctx.lineWidth = 1.2;
  for (let i = 0; i < 18; i++) {
    ctx.beginPath();
    let x = Math.random() * larguraCanvas;
    let y = Math.random() * alturaCanvas;
    ctx.moveTo(x, y);
    for (let j = 0; j < 5; j++) {
      x += (Math.random() - 0.5) * 50;
      y += (Math.random() - 0.5) * 50;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  ctx.globalAlpha = 1;
}

/**
 * Registra a escavação sobre o artefato.
 * AGORA marca TODAS as células que estão dentro do raio do pincel
 * ao mesmo tempo (antes só marcava a célula do centro do pincel).
 * Isso faz o progresso subir na mesma proporção que a terra some.
 */
function registrarEscavacaoSobreArtefato(x, y) {
  // Se o pincel estiver longe do artefato, nem tenta registrar
  const distCentro = Math.hypot(x - estado.artefatoX, y - estado.artefatoY);
  const alcance = ARTEFATO.raioDeteccao + ARTEFATO.raioEscavacao;
  if (distCentro > alcance) return false;

  const tamanhoCelula = 6;
  const colCentro = Math.floor(x / tamanhoCelula);
  const rowCentro = Math.floor(y / tamanhoCelula);
  const raioCelulas = Math.ceil(ARTEFATO.raioEscavacao / tamanhoCelula);

  let marcouAlgo = false;

  // Varre todas as células dentro do raio do pincel
  for (let dy = -raioCelulas; dy <= raioCelulas; dy++) {
    for (let dx = -raioCelulas; dx <= raioCelulas; dx++) {
      const col = colCentro + dx;
      const row = rowCentro + dy;

      if (col < 0 || col >= estado.gridCols) continue;
      if (row < 0 || row >= estado.gridRows) continue;

      // Centro da célula
      const cx = col * tamanhoCelula + tamanhoCelula / 2;
      const cy = row * tamanhoCelula + tamanhoCelula / 2;

      // A célula precisa estar dentro do raio de detecção do artefato
      if (Math.hypot(cx - estado.artefatoX, cy - estado.artefatoY) > ARTEFATO.raioDeteccao) continue;

      // E precisa estar dentro do raio do pincel a partir do ponto escavado
      if (Math.hypot(cx - x, cy - y) > ARTEFATO.raioEscavacao) continue;

      const idx = row * estado.gridCols + col;
      if (!estado.grid[idx]) {
        estado.grid[idx] = true;
        estado.celulasEscavadas++;
        marcouAlgo = true;
      }
    }
  }

  if (marcouAlgo) {
    const progresso = (estado.celulasEscavadas / estado.celulasTotais) * 100;
    medidorBarra.style.width = Math.min(100, progresso) + '%';
    medidor.setAttribute('aria-valuenow', Math.round(Math.min(100, progresso)));

    if (progresso >= ARTEFATO.progressoNecessario && !estado.escavacaoConcluida) {
      concluirEscavacao();
    }
  }

  return marcouAlgo;
}

function escavarPonto(x, y) {
  // 1) Remove a terra (pincel mais fino)
  ctx.save();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(x, y, ARTEFATO.raioEscavacao, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 2) DICA VISUAL: clareia o solo ao redor do artefato
  //    (aparece sutilmente quando o jogador se aproxima)
  const distArtefato = Math.hypot(x - estado.artefatoX, y - estado.artefatoY);
  if (distArtefato < ARTEFATO.raioDica && distArtefato > ARTEFATO.raioDeteccao) {
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    const alpha = 0.10 * (1 - distArtefato / ARTEFATO.raioDica);
    ctx.fillStyle = `rgba(230, 199, 87, ${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, ARTEFATO.raioEscavacao * 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // 3) Registra progresso real se estiver sobre o artefato
  registrarEscavacaoSobreArtefato(x, y);

  // 4) Partículas
  for (let i = 0; i < 3; i++) {
    criarParticula(x, y);
  }
}

function criarParticula(x, y) {
  const p = document.createElement('div');
  p.className = 'particula';
  const dx = (Math.random() - 0.5) * 80;
  const dy = Math.random() * 60 + 20;
  p.style.left = x + 'px';
  p.style.top = y + 'px';
  p.style.setProperty('--dx', dx + 'px');
  p.style.setProperty('--dy', dy + 'px');
  const tons = ['#a67c52', '#c9a227', '#6b4423', '#d9c5a0'];
  p.style.background = `radial-gradient(circle, ${tons[Math.floor(Math.random() * tons.length)]}, transparent)`;
  particulasEl.appendChild(p);
  setTimeout(() => p.remove(), 1000);
}

function concluirEscavacao() {
  if (estado.escavacaoConcluida) return;
  estado.escavacaoConcluida = true;
  somDescoberta();

  artefatoVisual.classList.add('revelado');
  lona.classList.add('removida');

  const fase = FASES[estado.faseAtual];
  descobertaEl.textContent = '✨ ' + fase.nomeArtefato + ' ✨';
  descobertaEl.classList.add('mostrar');
  setTimeout(() => descobertaEl.classList.remove('mostrar'), 1600);

  instrucaoEscavacao.textContent = '✅ Artefato revelado! Responda as perguntas na caderneta.';
  bloqueio.classList.add('escondido');
  perguntaArea.classList.remove('escondido');

  adicionarDiario(`Descobrimos: ${fase.nomeArtefato} (${fase.era})`, 'acerto');

  estado.perguntaAtual = 0;
  carregarPergunta();
}

/* --- Eventos do canvas --- */
function obterPosicao(e) {
  const rect = lona.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}

lona.addEventListener('mousedown', (e) => {
  if (estado.escavacaoConcluida) return;
  garantirAudio();
  escavando = true;
  const pos = obterPosicao(e);
  ultimoPonto = pos;
  escavarPonto(pos.x, pos.y);
  somEscavacao();
});

lona.addEventListener('mousemove', (e) => {
  if (!escavando || estado.escavacaoConcluida) return;
  const pos = obterPosicao(e);
  if (ultimoPonto) {
    const passos = 5;
    for (let i = 0; i < passos; i++) {
      const t = i / passos;
      escavarPonto(
        ultimoPonto.x + (pos.x - ultimoPonto.x) * t,
        ultimoPonto.y + (pos.y - ultimoPonto.y) * t
      );
    }
  }
  ultimoPonto = pos;
  if (Math.random() < 0.35) somEscavacao();
});

window.addEventListener('mouseup', () => {
  escavando = false;
  ultimoPonto = null;
});

lona.addEventListener('touchstart', (e) => {
  e.preventDefault();
  if (estado.escavacaoConcluida) return;
  garantirAudio();
  escavando = true;
  const pos = obterPosicao(e);
  ultimoPonto = pos;
  escavarPonto(pos.x, pos.y);
  somEscavacao();
}, { passive: false });

lona.addEventListener('touchmove', (e) => {
  e.preventDefault();
  if (!escavando || estado.escavacaoConcluida) return;
  const pos = obterPosicao(e);
  if (ultimoPonto) {
    const passos = 5;
    for (let i = 0; i < passos; i++) {
      const t = i / passos;
      escavarPonto(
        ultimoPonto.x + (pos.x - ultimoPonto.x) * t,
        ultimoPonto.y + (pos.y - ultimoPonto.y) * t
      );
    }
  }
  ultimoPonto = pos;
}, { passive: false });

lona.addEventListener('touchend', () => {
  escavando = false;
  ultimoPonto = null;
});

/* ------------------------------------------------------------
   8. LÓGICA DAS PERGUNTAS
   ------------------------------------------------------------ */
function carregarPergunta() {
  estado.respondeu = false;
  estado.usandoCaderno = false;

  const fase = FASES[estado.faseAtual];
  const pergunta = fase.perguntas[estado.perguntaAtual];

  contadorPergunta.textContent = `Pergunta ${estado.perguntaAtual + 1}/${fase.perguntas.length}`;
  textoPergunta.textContent = pergunta.enunciado;

  feedbackEl.className = 'feedback';
  feedbackEl.innerHTML = '';
  btnProxima.classList.add('escondido');
  alternativasEl.innerHTML = '';

  const letras = ['A', 'B', 'C', 'D'];
  const alternativasComIndice = pergunta.alternativas.map((texto, idx) => ({
    texto,
    correta: idx === pergunta.correta
  }));
  const embaralhadas = embaralhar(alternativasComIndice);

  embaralhadas.forEach((alt, i) => {
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

  atualizarCargasUI();
}

function responderAlternativa(botaoClicado) {
  if (estado.respondeu) return;
  estado.respondeu = true;

  const fase = FASES[estado.faseAtual];
  const pergunta = fase.perguntas[estado.perguntaAtual];
  const acertou = botaoClicado.dataset.correta === 'true';

  const todosBotoes = alternativasEl.querySelectorAll('.alternativa');
  todosBotoes.forEach(b => {
    b.disabled = true;
    if (b.dataset.correta === 'true') {
      b.classList.add('correta');
    }
  });

  if (acertou) {
    botaoClicado.classList.add('correta');
    const pontos = estado.usandoCaderno ? PONTOS_COM_CADERNO : PONTOS_POR_ACERTO;
    estado.pontuacao += pontos;
    estado.acertos++;
    somAcerto();
    feedbackEl.innerHTML = `
      <strong>🎉 Acertou! +${pontos} pontos</strong>
      <span>${pergunta.explicacao}</span>
    `;
    feedbackEl.classList.add('mostrar', 'correto');
    adicionarDiario(`Acerto: ${pergunta.enunciado.substring(0, 50)}...`, 'acerto');
  } else {
    botaoClicado.classList.add('errada');
    estado.erros++;
    somErro();
    feedbackEl.innerHTML = `
      <strong>❌ Ops! Resposta errada</strong>
      <span>${pergunta.explicacao}</span>
    `;
    feedbackEl.classList.add('mostrar', 'errado');
    adicionarDiario(`Erro: ${pergunta.enunciado.substring(0, 50)}...`, 'erro');
  }

  atualizarStatus();
  atualizarCargasUI();

  const ehUltimaPergunta = estado.perguntaAtual === fase.perguntas.length - 1;
  const ehUltimaFase = estado.faseAtual === FASES.length - 1;

  if (ehUltimaPergunta) {
    btnProxima.textContent = ehUltimaFase ? '🏛️ Visitar o Museu' : '⛏️ Próximo Sítio';
  } else {
    btnProxima.textContent = 'Próxima ➜';
  }
  btnProxima.classList.remove('escondido');
}

function proximaPergunta() {
  const fase = FASES[estado.faseAtual];

  if (estado.perguntaAtual < fase.perguntas.length - 1) {
    estado.perguntaAtual++;
    carregarPergunta();
  } else {
    estado.acervo.push({
      artefato: fase.artefato,
      nomeArtefato: fase.nomeArtefato,
      era: fase.era
    });
    atualizarStatus();

    if (estado.faseAtual < FASES.length - 1) {
      estado.faseAtual++;
      carregarFase();
    } else {
      finalizarJogo();
    }
  }
}

/* ------------------------------------------------------------
   9. CARREGAR FASE
   ------------------------------------------------------------ */
function carregarFase() {
  const fase = FASES[estado.faseAtual];

  estado.escavacaoConcluida = false;
  estado.perguntaAtual = 0;
  estado.respondeu = false;

  sitioEra.textContent = fase.era;
  sitioLocal.textContent = fase.local;
  artefatoVisual.textContent = fase.artefato;
  artefatoVisual.classList.remove('revelado');
  artefatoVisual.style.transform = 'translate(-50%, -50%) scale(1)';

  instrucaoEscavacao.textContent = fase.instrucao;

  bloqueio.classList.remove('escondido');
  perguntaArea.classList.add('escondido');

  lona.classList.remove('removida');

  requestAnimationFrame(() => {
    ajustarCanvas();
    sortearArtefato();
  });

  medidorBarra.style.width = '0%';
  medidor.setAttribute('aria-valuenow', 0);

  feedbackEl.className = 'feedback';
  feedbackEl.innerHTML = '';
  btnProxima.classList.add('escondido');

  atualizarStatus();
  atualizarCargasUI();

  adicionarDiario(`Chegamos ao sítio: ${fase.local}`, 'sistema');
  adicionarDiario(`Escave até encontrar o artefato!`, 'sistema');
}

/* ------------------------------------------------------------
   10. INICIAR / REINICIAR JOGO
   ------------------------------------------------------------ */
function iniciarJogo() {
  garantirAudio();

  estado.faseAtual = 0;
  estado.perguntaAtual = 0;
  estado.pontuacao = 0;
  estado.acertos = 0;
  estado.erros = 0;
  estado.respondeu = false;
  estado.escavacaoConcluida = false;
  estado.usandoCaderno = false;
  estado.cargas = { ...CARGAS_INICIAIS };
  estado.acervo = [];

  diarioLista.innerHTML = '';
  adicionarDiario('Bem-vindo, arqueólogo! Suas descobertas aparecerão aqui.', 'sistema');

  mostrarTela(telaExpedicao);
  carregarFase();
}

/* ------------------------------------------------------------
   11. FINALIZAR JOGO
   ------------------------------------------------------------ */
function finalizarJogo() {
  somFinal();
  mostrarTela(telaGaleria);

  const total = FASES.length * 2;
  const percentual = (estado.acertos / total) * 100;

  let mensagem = '';
  if (percentual === 100) {
    mensagem = 'Perfeito! Você é um verdadeiro mestre da Arqueologia! 🌟';
  } else if (percentual >= 80) {
    mensagem = 'Excelente! Sua exposição está quase completa e bem documentada.';
  } else if (percentual >= 60) {
    mensagem = 'Muito bom! Continue estudando para completar o acervo com maestria.';
  } else if (percentual >= 40) {
    mensagem = 'Bom esforço! Que tal revisar o conteúdo e tentar uma nova escavação?';
  } else {
    mensagem = 'Não desanime! Cada erro é uma chance de aprender. Tente novamente!';
  }

  galeriaMensagem.textContent = mensagem;

  vitrine.innerHTML = '';
  FASES.forEach((fase, i) => {
    const descoberto = estado.acervo.some(a => a.era === fase.era);
    const item = document.createElement('div');
    item.className = 'vitrine__item' + (descoberto ? '' : ' vitrine__item--vazio');
    item.style.animationDelay = (i * 0.1) + 's';
    item.innerHTML = `
      <span class="vitrine__icone">${descoberto ? fase.artefato : '❓'}</span>
      <span class="vitrine__nome">${descoberto ? fase.nomeArtefato : 'Não descoberto'}</span>
      <span class="vitrine__era">${fase.era}</span>
    `;
    vitrine.appendChild(item);
  });

  finalAcertos.textContent = estado.acertos;
  finalErros.textContent = estado.erros;
  finalPontos.textContent = estado.pontuacao;
  finalReliquias.textContent = `${estado.acervo.length}/${FASES.length}`;

  atualizarStatus();
}

/* ------------------------------------------------------------
   12. FERRAMENTAS DO ARQUEÓLOGO
   ------------------------------------------------------------ */
function usarPincel() {
  if (estado.cargas.pincel <= 0 || estado.respondeu || !estado.escavacaoConcluida) return;
  estado.cargas.pincel--;
  somFerramenta();

  const botoes = Array.from(alternativasEl.querySelectorAll('.alternativa'))
    .filter(b => b.dataset.correta !== 'true' && !b.classList.contains('eliminada'));

  const paraEliminar = embaralhar(botoes).slice(0, 2);
  paraEliminar.forEach(b => b.classList.add('eliminada'));

  adicionarDiario('Pincel de Precisão: 2 alternativas eliminadas.', 'dica');
  atualizarCargasUI();
}

function usarLupa() {
  if (estado.cargas.lupa <= 0 || estado.respondeu || !estado.escavacaoConcluida) return;
  estado.cargas.lupa--;
  somFerramenta();

  const fase = FASES[estado.faseAtual];
  const pergunta = fase.perguntas[estado.perguntaAtual];
  const pista = `💡 ${pergunta.explicacao.split('.')[0]}.`;
  adicionarDiario(pista, 'dica');
  atualizarCargasUI();
}

function usarCaderno() {
  if (estado.cargas.caderno <= 0 || estado.respondeu || !estado.escavacaoConcluida) return;
  estado.cargas.caderno--;
  somFerramenta();
  estado.usandoCaderno = true;
  estado.respondeu = false;

  const botoes = alternativasEl.querySelectorAll('.alternativa');
  botoes.forEach(b => {
    if (!b.classList.contains('eliminada')) {
      b.disabled = false;
      b.classList.remove('correta', 'errada');
    }
  });

  feedbackEl.className = 'feedback';
  feedbackEl.innerHTML = '';
  btnProxima.classList.add('escondido');

  adicionarDiario('Caderno de Anotações: nova tentativa liberada!', 'dica');
  atualizarCargasUI();
}

/* ------------------------------------------------------------
   13. EVENTOS
   ------------------------------------------------------------ */
btnComecar.addEventListener('click', () => {
  garantirAudio();
  iniciarJogo();
});

btnProxima.addEventListener('click', proximaPergunta);
btnReiniciar.addEventListener('click', () => {
  garantirAudio();
  iniciarJogo();
});

ferramentaPincel.addEventListener('click', usarPincel);
ferramentaLupa.addEventListener('click', usarLupa);
ferramentaCaderno.addEventListener('click', usarCaderno);

document.addEventListener('keydown', (e) => {
  if (!telaExpedicao.classList.contains('ativa')) return;
  if (!estado.escavacaoConcluida) return;

  if (e.key === 'Enter' && !btnProxima.classList.contains('escondido')) {
    btnProxima.click();
    return;
  }

  if (estado.respondeu) return;
  const num = parseInt(e.key, 10);
  if (num >= 1 && num <= 4) {
    const botoes = alternativasEl.querySelectorAll('.alternativa');
    if (botoes[num - 1] && !botoes[num - 1].disabled) {
      botoes[num - 1].click();
    }
  }
});

let resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (telaExpedicao.classList.contains('ativa') && !estado.escavacaoConcluida) {
      ajustarCanvas();
      sortearArtefato();
    }
  }, 200);
});

window.addEventListener('load', () => {
  if (telaExpedicao.classList.contains('ativa')) {
    ajustarCanvas();
    sortearArtefato();
  }
});
import { useState } from 'react';
import './App.css';
import logo from './logo.svg';
const perguntas = [
  {
    pergunta: 'No universo Marvel, qual foi o primeiro vilão em vingadores?',
    alternativas: ['Thanos', 'Loki', 'Ultron', 'Caveira Vermelha'],
    respostaCorreta: 'Loki',
  },
  {
    pergunta: 'Na saga "Star Wars", qual personagem diz a famosa frase "Que a Força esteja com você"?',
    alternativas: ['Darth Vader', 'Luke Skywalker', 'Yoda', 'Obi-Wan Kenobi'],
    respostaCorreta: 'Obi-Wan Kenobi',
  },
  {
    pergunta: 'Qual das seguintes NÃO é uma das quatro casas da Escola de Magia de Hogwarts em "Harry Potter"?',
    alternativas: ['Grifinória', 'Sonserina', 'Corvinal', 'Centauri'],
    respostaCorreta: 'Centauri',
  },
  {
    pergunta: 'Em "Friends", qual é o nome da cafeteria onde o grupo de amigos se reúne?',
    alternativas: ['The Coffee Bean', 'Starbucks', 'Central Perk', 'Monk\'s Café'],
    respostaCorreta: 'Central Perk',
  },
  {
    pergunta: 'Quem foi o lendário vocalista da banda de rock Queen?',
    alternativas: ['John Lennon', 'Elvis Presley', 'David Bowie', 'Freddie Mercury'],
    respostaCorreta: 'Freddie Mercury',
  },
  {
    pergunta: 'No universo de Pokémon, qual é o personagem mais famoso, conhecido por ser do tipo elétrico?',
    alternativas: ['Charmander', 'Bulbasaur', 'Squirtle', 'Pikachu'],
    respostaCorreta: 'Pikachu',
  },
  {
    pergunta: 'Em "Stranger Things", qual é o nome da dimensão paralela e sombria?',
    alternativas: ['O Submundo', 'O Vazio', 'O Mundo Invertido', 'A Zona Fantasma'],
    respostaCorreta: 'O Mundo Invertido',
  },
  {
    pergunta: 'Qual é a profissão do famoso personagem dos games, Mario, da Nintendo?',
    alternativas: ['Carpinteiro', 'Jardineiro', 'Cozinheiro', 'Encanador'],
    respostaCorreta: 'Encanador',
  },
  {
    pergunta: 'Qual filme da Pixar conta a história dos brinquedos Woody e Buzz Lightyear?',
    alternativas: ['Monstros S.A.', 'Procurando Nemo', 'Toy Story', 'Carros'],
    respostaCorreta: 'Toy Story',
  },
  {
    pergunta: 'Na série "Game of Thrones", qual é o lema da Casa Stark?',
    alternativas: ['Ouça-me Rugir', 'Fogo e Sangue', 'O Inverno está Chegando', 'O que está morto não pode morrer'],
    respostaCorreta: 'O Inverno está Chegando',
  },
  {
    pergunta: 'Qual artista é conhecido mundialmente como o "Rei do Pop"?',
    alternativas: ['Prince', 'Michael Jackson', 'James Brown', 'Stevie Wonder'],
    respostaCorreta: 'Michael Jackson',
  },
  {
    pergunta: 'Em "O Senhor dos Anéis", qual hobbit tem a missão de destruir o Um Anel?',
    alternativas: ['Sam', 'Pippin', 'Merry', 'Frodo'],
    respostaCorreta: 'Frodo',
  },
  {
    pergunta: 'Qual é o nome do protagonista principal do anime "Dragon Ball Z"?',
    alternativas: ['Vegeta', 'Gohan', 'Piccolo', 'Goku'],
    respostaCorreta: 'Goku',
  },
  {
    pergunta: 'Qual é o nome do monstro verde, quadrado e explosivo do jogo "Minecraft"?',
    alternativas: ['Zumbi', 'Esqueleto', 'Creeper', 'Enderman'],
    respostaCorreta: 'Creeper',
  },
  {
    pergunta: 'Qual é o principal objetivo de Monkey D. Luffy, o protagonista de One Piece?',
    alternativas: ['Se tornar um Almirante da Marinha', 'Ser o homem mais rico do mundo', 'Encontrar o tesouro One Piece e se tornar o Rei dos Piratas', 'Criar o mapa de todo o mundo'],
    respostaCorreta: 'Encontrar o tesouro One Piece e se tornar o Rei dos Piratas',
  },
  {
    pergunta: 'O grupo musical BTS é de qual país?',
    alternativas: ['Japão', 'Coreia do Sul', 'China', 'Tailândia'],
    respostaCorreta: 'Coreia do Sul',
  },
  {
    pergunta: 'No anime Naruto, que animal atacou a vila da Folha na noite em que o Naruto nasceu?',
    alternativas: ['Raposa', 'Cobra', 'Sapo', 'Lesma'],
    respostaCorreta: 'Raposa',
  },
  {
    pergunta: 'Na série Arcane, como a personagem Jinx se chamava quando criança?',
    alternativas: ['Isha', 'Powder', 'Mel', 'Vi'],
    respostaCorreta: 'Powder',
  },
  {
    pergunta: 'De qual cidade inglesa a banda The Beatles é originária?',
    alternativas: ['Manchester', 'Londres', 'Liverpool', 'Birmingham'],
    respostaCorreta: 'Liverpool',
  },
  {
    pergunta: 'Qual artista brasileiro canta a música "Garota de Ipanema"?',
    alternativas: ['Tom Jobim', 'Cazuza', 'Luiz Gonzaga', 'Chico Buarque'],
    respostaCorreta: 'Tom Jobim',
  },
  {
    pergunta: 'Qual o nome da celebração cultural e religiosa popular brasileira, tradicionalmente realizada em junho?',
    alternativas: ['Círio de Nazaré', 'Semana Farroupilha', 'Festa Junina', 'Carnaval'],
    respostaCorreta: 'Festa Junina',
  },
  {
    pergunta: 'Qual costume indígena nós temos até hoje?',
    alternativas: ['Andar descalço', 'Tomar banho todo dia', 'Lavar as mãos pra comer', 'Comer peixe com limão'],
    respostaCorreta: 'Tomar banho todo dia',
  },
  {
    pergunta: 'Qual desses desenhos animados é feito por um brasileiro?',
    alternativas: ['Phineas e Ferb', 'Steven Universo', 'Irmão do Jorel', 'Simpsons'],
    respostaCorreta: 'Irmão do Jorel',
  },
  {
    pergunta: 'Quem é o autor do personagem Menino Maluquinho?',
    alternativas: ['Ziraldo', 'Maurício de Souza', 'Gabriel Picolo', 'Walmir Amaral'],
    respostaCorreta: 'Ziraldo',
  },
  {
    pergunta: 'Qual o nome da entidade folclórica brasileira que é guardiã da natureza e da vida selvagem?',
    alternativas: ['Iara', 'Caipora', 'Curupira', 'Boitatá'],
    respostaCorreta: 'Curupira',
  },
  {
    pergunta: 'Qual o nome do movimento cultural que surgiu no final da década de 60 e buscava refletir as contradições do Brasil em um contexto de ditadura militar?',
    alternativas: ['Antropofagia', 'Modernismo', 'Barroco', 'Tropicalismo'],
    respostaCorreta: 'Tropicalismo',
  },
  {
    pergunta: 'Qual o nome do flautista do grupo instrumental brasileiro Os Oito Batutas?',
    alternativas: ['Gilberto Gil', 'Cartola', 'Pixinguinha', 'Donga'],
    respostaCorreta: 'Pixinguinha',
  },
  {
    pergunta: 'Qual o nome da banda de rock brasileira formada por Renato Russo, Marcelo Bonfá, Dado Villa-Lobos e Renato Rocha?',
    alternativas: ['Secos e Molhados', 'Legião Urbana', 'Los Hermanos', 'Os Mutantes'],
    respostaCorreta: 'Legião Urbana',
  },
  {
    pergunta: 'Quem é o criador do Sítio do Picapau Amarelo?',
    alternativas: ['Mário de Andrade', 'Maurício de Souza', 'Lima Barreto', 'Monteiro Lobato'],
    respostaCorreta: 'Monteiro Lobato',
  },
  {
    pergunta: 'A obra "Navio Negreiro" de Castro Alves pertence a qual movimento artístico?',
    alternativas: ['Romantismo', 'Modernismo', 'Cubismo', 'Barroco'],
    respostaCorreta: 'Romantismo',
  },
  {
    pergunta: 'O livro "Dom Casmurro" é de qual escritor brasileiro?',
    alternativas: ['Carlos Drummond de Andrade', 'Machado de Assis', 'Jorge Amado', 'Guimarães Rosa'],
    respostaCorreta: 'Machado de Assis',
  },
  {
    pergunta: 'A atriz Fernanda Torres foi indicada ao Oscar de melhor atriz por qual filme?',
    alternativas: ['Tapas e Beijos', 'Eu Sei Que Vou Te Amar', 'Ainda Estou Aqui', 'Casa de Areia'],
    respostaCorreta: 'Eu Sei Que Vou Te Amar',
  },
  {
    pergunta: 'A figura do folclore brasileiro conhecida como Iara era uma:',
    alternativas: ['Jacaré', 'Mula', 'Boto', 'Sereia'],
    respostaCorreta: 'Sereia',
  },
  {
    pergunta: 'Em que ano o Brasil sediou os Jogos Olímpicos?',
    alternativas: ['2014', '2016', '2012', '2006'],
    respostaCorreta: '2016',
  },
  {
    pergunta: 'Qual medalha a skatista Raissa Leal conquistou nas olimpíadas de 2024 em París?',
    alternativas: ['Ouro', 'Prata', 'Bronze', 'Não conquistou nenhuma medalha'],
    respostaCorreta: 'Bronze',
  },
];

function App() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [jaRespondeu, setJaRespondeu] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const perguntaAtual = perguntas[indicePergunta];

  const handleRespostaClick = (alternativa) => {
    if (jaRespondeu) return;

    setJaRespondeu(true);
    setRespostaSelecionada(alternativa);

    if (alternativa === perguntaAtual.respostaCorreta) {
      setFeedback('Parabéns, você acertou! ✅');
    } else {
      setFeedback(`Que pena, você errou. A resposta correta era: "${perguntaAtual.respostaCorreta}" ❌`);
    }
  };

  // Esta função agora serve tanto para "Próxima" quanto para "Pular"
  const avancarParaProximaPergunta = () => {
    setFeedback('');
    setJaRespondeu(false);
    setRespostaSelecionada(null);
    
    const proximoIndice = indicePergunta + 1;
    // Se chegar ao fim, volta para o início. Senão, vai para a próxima.
    setIndicePergunta(proximoIndice < perguntas.length ? proximoIndice : 0);
  };

  const getClassForButton = (alternativa) => {
    if (!jaRespondeu) return '';
    const ehCorreta = alternativa === perguntaAtual.respostaCorreta;
    const ehSelecionada = alternativa === respostaSelecionada;
    if (ehCorreta) return 'correta';
    if (ehSelecionada && !ehCorreta) return 'errada';
    return 'neutra';
  };

  return (
    <div className="App">
      <img src={logo} alt="Logo do Game of Science" className="quiz-logo" />
      <h1>Game of Science</h1>
      <div className="quiz-container">
        <h2>{perguntaAtual.pergunta}</h2>
        
        <div className="alternativas-grid">
          {perguntaAtual.alternativas.map((alt, index) => (
            <button
              key={index}
              className={`alternativa-btn ${getClassForButton(alt)}`}
              onClick={() => handleRespostaClick(alt)}
              disabled={jaRespondeu}
            >
              {String.fromCharCode(97 + index)}) {alt}
            </button>
          ))}
        </div>

        {/* ÁREA DE BOTÕES DE AÇÃO (PULAR E PRÓXIMA) */}
        
        {/* Mostra a mensagem de feedback APÓS uma resposta */}
        {feedback && (
          <div className="feedback-container">
            <p className={feedback.includes('acertou') ? 'feedback-correto' : 'feedback-errado'}>
              {feedback}
            </p>
            <button onClick={avancarParaProximaPergunta} className="proxima-btn">
              Próxima Pergunta
            </button>
          </div>
        )}

        {/* Mostra o botão de pular APENAS ANTES de uma resposta */}
        {!jaRespondeu && (
          <div className="pular-container">
            <button onClick={avancarParaProximaPergunta} className="pular-btn">
              Pular Pergunta
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
import { useState} from 'react';
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
    pergunta: 'Qual das seguintes fontes de energia NÃO é considerada renovável?',
    alternativas: ['Solar', 'Eólica', 'Gás Natural', 'Hidrelétrica'],
    respostaCorreta: 'Gás Natural',
  },
  {
    pergunta: 'Como a energia eólica é gerada?',
    alternativas: ['Pela queima de biomassa.', 'Pelo movimento das marés.', 'Pela força dos ventos.', 'Pela captação de calor.'],
    respostaCorreta: 'Pela força dos ventos.',
  },
  {
    pergunta: 'Qual o nome do dispositivo que converte luz solar diretamente em eletricidade?',
    alternativas: ['Turbina hidrelétrica', 'Painel fotovoltaico', 'Aerogerador', 'Coletor solar térmico'],
    respostaCorreta: 'Painel fotovoltaico',
  },
  {
    pergunta: 'A energia geotérmica utiliza qual fonte de calor para gerar eletricidade?',
    alternativas: ['O calor do núcleo da Terra.', 'O calor da queima de lixo.', 'A radiação solar no solo.', 'O atrito das placas tectônicas.'],
    respostaCorreta: 'O calor do núcleo da Terra.',
  },
  {
    pergunta: 'O que é biomassa, utilizada como fonte de energia renovável?',
    alternativas: ['Energia das massas de água.', 'Matéria orgânica.', 'Mineral radioativo.', 'Massa de ar quente.'],
    respostaCorreta: 'Matéria orgânica.',
  },
  {
    pergunta: 'Qual a principal fonte de energia renovável na matriz elétrica do Brasil?',
    alternativas: ['Eólica', 'Solar', 'Biomassa', 'Hidrelétrica'],
    respostaCorreta: 'Hidrelétrica',
  },
  {
    pergunta: 'Qual é uma das principais desvantagens da energia solar e eólica?',
    alternativas: ['Emitem gases estufa.', 'Matéria-prima escassa.', 'Geração intermitente.', 'Causam alagamentos.'],
    respostaCorreta: 'Geração intermitente.',
  },
  {
    pergunta: 'A energia maremotriz é gerada a partir de qual fenômeno natural?',
    alternativas: ['Da força das ondas.', 'Do movimento das marés.', 'Das correntes de vento.', 'Da diferença de temperatura.'],
    respostaCorreta: 'Do movimento das marés.',
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
    pergunta: 'Qual dos seguintes gases é o principal responsável pelo agravamento do efeito estufa?',
    alternativas: ['Oxigênio (O2)', 'Dióxido de Carbono (CO2)', 'Nitrogênio (N2)', 'Hélio (He)'],
    respostaCorreta: 'Dióxido de Carbono (CO2)',
  },
  {
    pergunta: 'O processo de contaminação da água por excesso de nutrientes é chamado de:',
    alternativas: ['Acidificação', 'Dessalinização', 'Eutrofização', 'Condensação'],
    respostaCorreta: 'Eutrofização',
  },
  {
    pergunta: 'Qual das seguintes fontes de energia é considerada renovável?',
    alternativas: ['Carvão Mineral', 'Gás Natural', 'Petróleo', 'Energia Solar'],
    respostaCorreta: 'Energia Solar',
  },
  {
    pergunta: 'A destruição em larga escala de florestas é conhecida como:',
    alternativas: ['Reflorestamento', 'Desmatamento', 'Desertificação', 'Assoreamento'],
    respostaCorreta: 'Desmatamento',
  },
  {
    pergunta: 'Qual o nome do acordo mundial que visa reduzir a emissão de gases de efeito estufa?',
    alternativas: ['Protocolo de Kyoto', 'Tratado de Tordesilhas', 'Acordo de Paris', 'Pacto de Varsóvia'],
    respostaCorreta: 'Acordo de Paris',
  },
  {
    pergunta: 'A variedade de formas de vida existentes no planeta é chamada de:',
    alternativas: ['Ecossistema', 'Bioma', 'Biodiversidade', 'População'],
    respostaCorreta: 'Biodiversidade',
  },
  {
    pergunta: 'O que significa o conceito dos 3 R\'s da sustentabilidade?',
    alternativas: ['Respeitar, Renovar, Replantar', 'Remover, Refazer, Regular', 'Reciclar, Reutilizar, Reduzir', 'Racionar, Repensar, Reaproveitar'],
    respostaCorreta: 'Reciclar, Reutilizar, Reduzir',
  },
  {
    pergunta: 'A chuva com alta concentração de ácidos é chamada de:',
    alternativas: ['Chuva de Granizo', 'Chuva Ácida', 'Inversão Térmica', 'Tempestade Tropical'],
    respostaCorreta: 'Chuva Ácida',
  },
  {
    pergunta: 'Qual camada da atmosfera nos protege da radiação ultravioleta (UV) do sol?',
    alternativas: ['Troposfera', 'Mesosfera', 'Camada de Ozônio', 'Ionosfera'],
    respostaCorreta: 'Camada de Ozônio',
  },
  {
    pergunta: 'O desenvolvimento que atende às necessidades do presente sem comprometer as gerações futuras é:',
    alternativas: ['Desenvolvimento Econômico', 'Desenvolvimento Sustentável', 'Progresso Tecnológico', 'Crescimento Populacional'],
    respostaCorreta: 'Desenvolvimento Sustentável',
  },
  {
    pergunta: 'Qual bioma brasileiro é conhecido como a maior planície inundável do mundo?',
    alternativas: ['Amazônia', 'Cerrado', 'Mata Atlântica', 'Pantanal'],
    respostaCorreta: 'Pantanal',
  },
  {
    pergunta: 'A pegada de carbono mede o quê?',
    alternativas: ['Quantidade de água consumida', 'Total de gases de efeito estufa emitidos', 'Área de terra necessária', 'Quantidade de lixo reciclado'],
    respostaCorreta: 'Total de gases de efeito estufa emitidos',
  },
  {
    pergunta: 'Qual o principal objetivo da coleta seletiva de lixo?',
    alternativas: ['Aumentar lixo nos aterros', 'Separar materiais recicláveis', 'Deixar ruas mais limpas', 'Gerar mais empregos'],
    respostaCorreta: 'Separar materiais recicláveis',
  },
  {
    pergunta: 'Animais que correm o risco de desaparecer completamente são chamados de:',
    alternativas: ['Animais domésticos', 'Animais exóticos', 'Animais em extinção', 'Animais silvestres'],
    respostaCorreta: 'Animais em extinção',
  },
  {
    pergunta: 'O que é um aterro sanitário?',
    alternativas: ['Lixo queimado a céu aberto', 'Descarte de lixo sem controle', 'Terreno preparado para receber resíduos', 'Usina de reciclagem'],
    respostaCorreta: 'Terreno preparado para receber resíduos',
  },
  {
    pergunta: 'A figura do folclore brasileiro conhecida como Iara era uma:',
    alternativas: ['Jacaré', 'Mula', 'Boto', 'Sereia'],
    respostaCorreta: 'Sereia',
  },
  {
    pergunta: 'Qual é o nome da linha que divide o círculo em duas partes iguais?',
    alternativas: ['Diagonal', 'Corda', 'Raio', 'Diâmetro'],
    respostaCorreta: 'Diâmetro',
  },
  {
    pergunta: 'Qual o resultado da conta 1²¹ + 3²?',
    alternativas: ['30', '27', '10', '7'],
    respostaCorreta: '10',
  },
  {
    pergunta: 'Qual a fórmula para calcular a área de um triângulo com ângulo de 90°?',
    alternativas: ['|x|', 'b x h', '(b x h)/2', 'raiz(a² + b²)'],
    respostaCorreta: '(b x h)/2',
  },
  {
    pergunta: 'Em qual conjunto numérico se encontra o número raiz quadrada de -24?',
    alternativas: ['Conjunto dos reais', 'Conjunto dos complexos', 'Conjunto dos Racionais', 'Não existe raiz negativa'],
    respostaCorreta: 'Conjunto dos complexos',
  },
  {
    pergunta: 'Suponha que temos um ângulo A e um ângulo B. Sendo eles ângulos suplementares, qual o valor do ângulo B se A tiver o valor de 45°?',
    alternativas: ['315°', '135°', '45°', '90°'],
    respostaCorreta: '135°',
  },
  {
    pergunta: 'Qual artista brasileiro canta a música "Garota Ipanema"?',
    alternativas: ['Tom Jobin', 'Cazuza', 'Luiz Gonzaga', 'Chico Buarque'],
    respostaCorreta: 'Tom Jobin',
  },
  {
    pergunta: 'Qual o nome da celebração cultural e religiosa popular brasileira, tradicionalmente realizada em junho, que mistura elementos da cultura europeia com influências indígenas e africanas, homenageando santos católicos como Santo Antônio, São João e São Pedro.',
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
    alternativas: ['Phineas e ferb', 'Steven universo', 'Irmão do Jorel', 'Simpsons'],
    respostaCorreta: 'Irmão do Jorel',
  },
  {
    pergunta: 'Quem é o autor do personagem menino maluquinho?',
    alternativas: ['Ziraldo', 'Maurício de Souza', 'Gabriel Picolo', 'Walmir Amaral'],
    respostaCorreta: 'Ziraldo',
  },
  {
    pergunta: 'Qual o nome da entidade folclórica braileira que é guardiã da natureza e da vida selvagem?',
    alternativas: ['Iara', 'Caipora', 'Curupira', 'Boitatá'],
    respostaCorreta: 'Caipora',
  },
  {
    pergunta: 'Qual o nome do movimento cultural que surgiu no final da década de 60 e buscava refletir as contradições do Brasil em um contexto de ditadura militar?',
    alternativas: ['Antropofagia', 'Modernismo', 'Barroco', 'Tropicalismo'],
    respostaCorreta: 'Tropicalismo',
  },
  {
    pergunta: 'Qual o nome do flautista do grupo instrumental brasileiro Oito Batutas?',
    alternativas: ['Gilberto Gill', 'Cartola', 'Pixinguinha', 'Donga'],
    respostaCorreta: 'Pixinguinha',
  },
  {
    pergunta: 'Qual o nome da banda de rock brasileira formada por Renato Russo, Marcelo Bonfá, Dado Villa-Lobos e Renato Rocha',
    alternativas: ['Secos e molhados', 'Legião Urbana', 'Los Hermanos', 'Os Mutantes'],
    respostaCorreta: 'Legião Urbana',
  },
  {
    pergunta: 'Quem é o criador do sítio do pica-pau amarelo?',
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
    respostaCorreta: 'Ainda Estou Aqui',
  },
  {
    pergunta: 'A figura do folclore brasileiro conhecida como Iara era um(a):',
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
  {
    pergunta: 'Qual evento deu início à Primeira Guerra Mundial em 1914?',
    alternativas: ['A Revolução Russa', 'A invasão da Polônia', 'A queda da Bastilha', 'O assassinato de Francisco Ferdinando'],
    respostaCorreta: 'O assassinato de Francisco Ferdinando',
  },
  {
    pergunta: 'Quem é o autor da obra "Mona Lisa"?',
    alternativas: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
    respostaCorreta: 'Leonardo da Vinci',
  },
  {
    pergunta: 'Qual é o maior planeta do nosso Sistema Solar?',
    alternativas: ['Terra', 'Saturno', 'Júpiter', 'Marte'],
    respostaCorreta: 'Júpiter',
  },
  {
    pergunta: 'Em qual continente está localizado o Deserto do Saara?',
    alternativas: ['Ásia', 'África', 'Oceania', 'América do Sul'],
    respostaCorreta: 'África',
  },
  {
    pergunta: 'Qual é o rio mais longo do mundo?',
    alternativas: ['Rio Nilo', 'Rio Mississipi', 'Rio Yangtzé', 'Rio Amazonas'],
    respostaCorreta: 'Rio Amazonas',
  },
  {
    pergunta: 'A Teoria da Relatividade foi desenvolvida por qual cientista?',
    alternativas: ['Isaac Newton', 'Albert Einstein', 'Galileu Galilei', 'Marie Curie'],
    respostaCorreta: 'Albert Einstein',
  },
  {
    pergunta: 'Qual das seguintes fontes de energia é considerada renovável?',
    alternativas: ['Petróleo', 'Gás Natural', 'Energia Eólica', 'Carvão Mineral'],
    respostaCorreta: 'Energia Eólica',
  },
  {
    pergunta: 'Quantos lados tem um heptágono?',
    alternativas: ['5', '6', '7', '8'],
    respostaCorreta: '7',
  },
  {
    pergunta: 'Qual cidade é famosa por abrigar a Torre Eiffel?',
    alternativas: ['Londres', 'Roma', 'Berlim', 'Paris'],
    respostaCorreta: 'Paris',
  },
  {
    pergunta: 'O processo pelo qual as plantas produzem seu próprio alimento é a:',
    alternativas: ['Respiração', 'Fotossíntese', 'Transpiração', 'Decomposição'],
    respostaCorreta: 'Fotossíntese',
  },
  {
    pergunta: 'Quem escreveu "Romeu e Julieta"?',
    alternativas: ['Dante Alighieri', 'Miguel de Cervantes', 'William Shakespeare', 'Homero'],
    respostaCorreta: 'William Shakespeare',
  },
  {
    pergunta: 'Qual é a montanha mais alta do mundo?',
    alternativas: ['Monte Kilimanjaro', 'K2', 'Monte Everest', 'Aconcágua'],
    respostaCorreta: 'Monte Everest',
  },
  {
    pergunta: 'A Guerra Fria foi uma disputa ideológica entre quais duas superpotências?',
    alternativas: ['Alemanha e Japão', 'Reino Unido e França', 'EUA e União Soviética', 'China e Índia'],
    respostaCorreta: 'EUA e União Soviética',
  },
  {
    pergunta: 'Qual planeta é conhecido como o "Planeta Vermelho"?',
    alternativas: ['Vênus', 'Saturno', 'Júpiter', 'Marte'],
    respostaCorreta: 'Marte',
  },
  {
    pergunta: 'A ONU foi criada após qual grande conflito mundial?',
    alternativas: ['Guerra do Vietnã', 'Primeira Guerra Mundial', 'Segunda Guerra Mundial', 'Guerra da Coreia'],
    respostaCorreta: 'Segunda Guerra Mundial',
  },
  {
    pergunta: 'Quanto é 20% de 200?',
    alternativas: ['10', '20', '30', '40'],
    respostaCorreta: '40',
  },
  {
    pergunta: 'Ao lançar um dado comum de 6 faces, qual a probabilidade de sair um número par?',
    alternativas: ['1/6', '1/3', '1/2', '2/3'],
    respostaCorreta: '1/2',
  },
  {
    pergunta: 'Quanto é 45 - 53?',
    alternativas: ['-8', '8', '-9', '9'],
    respostaCorreta: '-8',
  },
  {
    pergunta: 'Quantos cm tem 12 km?',
    alternativas: ['120.000', '1.200.000', '12.000.000', '12.000'],
    respostaCorreta: '1.200.000',
  },
  {
    pergunta: 'A constante de pi pertence a qual conjunto numérico?',
    alternativas: ['Conjunto dos irracionais', 'Conjunto dos naturais', 'Conjunto dos racionais', 'Conjunto dos complexos'],
    respostaCorreta: 'Conjunto dos irracionais',
  },
  {
    pergunta: 'Quanto é 12 x 6?',
    alternativas: ['62', '48', '60', '72'],
    respostaCorreta: '72',
  },
  {
    pergunta: 'Se João tem 72 reais e divide ele entre seus 8 netos, quantos reais cada um vai ganhar?',
    alternativas: ['R$8,00', 'R$9,00', 'R$7,00', 'R$8,50'],
    respostaCorreta: 'R$9,00',
  },
  {
    pergunta: 'A soma dos ângulos internos de qualquer triângulo é sempre igual a:',
    alternativas: ['90°', '180°', '270°', '360°'],
    respostaCorreta: '180°',
  },
  {
    pergunta: 'Qual a raiz quadrada de 144?',
    alternativas: ['11', '13', '14', '12'],
    respostaCorreta: '12',
  },
  {
    pergunta: 'Qual a raiz cúbica de 64?',
    alternativas: ['3', '8', '4', '16'],
    respostaCorreta: '4',
  },
  {
    pergunta: 'Qual organela é responsável pela respiração celular e produção de ATP?',
    alternativas: ['Ribossomo', 'Lisossomo', 'Mitocôndria', 'Cloroplasto'],
    respostaCorreta: 'Mitocôndria',
  },
  {
    pergunta: 'O conjunto de características visíveis de um organismo é chamado de:',
    alternativas: ['Genótipo', 'Cariótipo', 'Alelo', 'Fenótipo'],
    respostaCorreta: 'Fenótipo',
  },
  {
    pergunta: 'Qual dos reinos agrupa seres procariontes, como as bactérias?',
    alternativas: ['Reino Fungi', 'Reino Monera', 'Reino Protista', 'Reino Plantae'],
    respostaCorreta: 'Reino Monera',
  },
  {
    pergunta: 'O processo pelo qual as plantas utilizam luz para produzir seu alimento é a:',
    alternativas: ['Respiração', 'Fotossíntese', 'Transpiração', 'Quimiossíntese'],
    respostaCorreta: 'Fotossíntese',
  },
  {
    pergunta: 'A relação ecológica entre o cupim e os protozoários em seu intestino é um exemplo de:',
    alternativas: ['Parasitismo', 'Predatismo', 'Mutualismo', 'Competição'],
    respostaCorreta: 'Mutualismo',
  },
  {
    pergunta: 'Qual é a principal função das hemácias (glóbulos vermelhos) no sangue?',
    alternativas: ['Coagulação', 'Defesa imunológica', 'Transporte de O₂', 'Transporte de H₂O'],
    respostaCorreta: 'Transporte de O₂',
  },
  {
    pergunta: 'A divisão celular que reduz o número de cromossomos pela metade é a:',
    alternativas: ['Mitose', 'Prófase', 'Meiose', 'Anáfase'],
    respostaCorreta: 'Meiose',
  },
  {
    pergunta: 'Asas de morcegos e asas de insetos são exemplos de estruturas:',
    alternativas: ['Homólogas', 'Vestigiais', 'Embrionárias', 'Análogas'],
    respostaCorreta: 'Análogas',
  },
  {
    pergunta: 'Qual hormônio, produzido pelo pâncreas, regula a entrada de glicose nas células?',
    alternativas: ['Glucagon', 'Adrenalina', 'Insulina', 'Testosterona'],
    respostaCorreta: 'Insulina',
  },
  {
    pergunta: 'O tecido vegetal que transporta a seiva bruta (água e sais) é o:',
    alternativas: ['Floema', 'Parênquima', 'Colênquima', 'Xilema'],
    respostaCorreta: 'Xilema',
  },
  {
    pergunta: 'Um indivíduo com genótipo "Aa" para uma característica é considerado:',
    alternativas: ['Homozigoto', 'Recessivo', 'Heterozigoto', 'Dominante'],
    respostaCorreta: 'Heterozigoto',
  },
  {
    pergunta: 'A principal teoria da evolução, proposta por Darwin, baseia-se na:',
    alternativas: ['Lei do Uso e Desuso', 'Herança de Caracteres', 'Geração Espontânea', 'Seleção Natural'],
    respostaCorreta: 'Seleção Natural',
  },
  {
    pergunta: 'Em qual parte do sistema digestório humano ocorre a maior parte da absorção de nutrientes?',
    alternativas: ['Estômago', 'Intestino Grosso', 'Fígado', 'Intestino Delgado'],
    respostaCorreta: 'Intestino Delgado',
  },
  {
    pergunta: 'Os vírus são considerados parasitas intracelulares obrigatórios por que:',
    alternativas: ['Possuem núcleo', 'Não têm metabolismo', 'Fazem fotossíntese', 'São pluricelulares'],
    respostaCorreta: 'Não têm metabolismo',
  },
  {
    pergunta: 'O número atômico (Z) de um elemento químico corresponde ao número de:',
    alternativas: ['Nêutrons', 'Elétrons', 'Prótons', 'Íons'],
    respostaCorreta: 'Prótons',
  },
  {
    pergunta: 'Qual tipo de ligação química ocorre pela transferência de elétrons entre um metal e um ametal?',
    alternativas: ['Ligação Covalente', 'Ligação Metálica', 'Ligação Iônica', 'Ponte de Hidrogênio'],
    respostaCorreta: 'Ligação Iônica',
  },
  {
    pergunta: 'Na Tabela Periódica, os elementos da família 18 (ou 8A) são conhecidos como:',
    alternativas: ['Metais Alcalinos', 'Halogênios', 'Gases Nobres', 'Metais de Transição'],
    respostaCorreta: 'Gases Nobres',
  },
  {
    pergunta: 'Uma solução com pH = 2 é considerada:',
    alternativas: ['Ácida', 'Básica', 'Neutra', 'Alcalina'],
    respostaCorreta: 'Ácida',
  },
  {
    pergunta: 'A reação de combustão completa de um composto orgânico sempre produz:',
    alternativas: ['CO e H₂O', 'O₂ e CO₂', 'CO₂ e H₂O', 'H₂ e O₂'],
    respostaCorreta: 'CO₂ e H₂O',
  },
  {
    pergunta: 'Qual é a massa molar aproximada da molécula de água (H₂O)? (Dados: H=1, O=16)',
    alternativas: ['16 g/mol', '17 g/mol', '18 g/mol', '2 g/mol'],
    respostaCorreta: '18 g/mol',
  },
  {
    pergunta: 'Átomos de um mesmo elemento químico que possuem diferentes números de nêutrons são chamados de:',
    alternativas: ['Isóbaros', 'Isótonos', 'Isômeros', 'Isótopos'],
    respostaCorreta: 'Isótopos',
  },
  {
    pergunta: 'Qual das seguintes substâncias é um exemplo de hidrocarboneto?',
    alternativas: ['Etanol (C₂H₅OH)', 'Glicose (C₆H₁₂O₆)', 'Sal de cozinha (NaCl)', 'Metano (CH₄)'],
    respostaCorreta: 'Metano (CH₄)',
  },
  {
    pergunta: 'O processo de passagem direta de uma substância do estado sólido para o gasoso é chamado:',
    alternativas: ['Fusão', 'Ebulição', 'Sublimação', 'Condensação'],
    respostaCorreta: 'Sublimação',
  },
  {
    pergunta: 'Segundo a Primeira Lei de Newton (Inércia), um corpo em movimento tende a:',
    alternativas: ['Parar imediatamente', 'Acelerar continuamente', 'Manter seu movimento retilíneo e uniforme', 'Mudar de direção'],
    respostaCorreta: 'Manter seu movimento retilíneo e uniforme',
  },
  {
    pergunta: 'A grandeza física que mede a energia transferida de um corpo para outro devido à diferença de temperatura é:',
    alternativas: ['Potência', 'Pressão', 'Trabalho', 'Calor'],
    respostaCorreta: 'Calor',
  },
  {
    pergunta: 'Qual é a unidade de medida de Tensão Elétrica (d.d.p.) no Sistema Internacional?',
    alternativas: ['Ampere (A)', 'Ohm (Ω)', 'Watt (W)', 'Volt (V)'],
    respostaCorreta: 'Volt (V)',
  },
  {
    pergunta: 'O fenômeno que explica por que uma colher parece "quebrada" dentro de um copo com água é a:',
    alternativas: ['Reflexão', 'Refração', 'Difração', 'Polarização'],
    respostaCorreta: 'Refração',
  },
  {
    pergunta: 'De acordo com a Segunda Lei de Newton, a aceleração de um corpo é diretamente proporcional à:',
    alternativas: ['Sua massa', 'Sua velocidade', 'Força resultante', 'Sua temperatura'],
    respostaCorreta: 'Força resultante',
  },
  {
    pergunta: 'Um carro que se move com velocidade constante de 90 km/h está em:',
    alternativas: ['Movimento acelerado', 'Movimento retardado', 'Movimento uniforme', 'Repouso'],
    respostaCorreta: 'Movimento uniforme',
  },
  {
    pergunta: 'O som é uma onda do tipo:',
    alternativas: ['Eletromagnética e transversal', 'Mecânica e longitudinal', 'Eletromagnética e longitudinal', 'Mecânica e transversal'],
    respostaCorreta: 'Mecânica e longitudinal',
  },
  {
    pergunta: 'A energia associada ao movimento de um corpo é chamada de energia:',
    alternativas: ['Potencial', 'Térmica', 'Cinética', 'Elástica'],
    respostaCorreta: 'Cinética',
  },
  {
    pergunta: 'Em um circuito elétrico em série, se uma lâmpada queimar, as outras:',
    alternativas: ['Continuam acesas', 'Apagam', 'Brilham mais forte', 'Diminuem o brilho'],
    respostaCorreta: 'Apagam',
  },
  {
    pergunta: 'Qual processo de propagação de calor ocorre sem a necessidade de um meio material, como o calor do Sol que chega à Terra?',
    alternativas: ['Condução', 'Convecção', 'Radiação', 'Ebulição'],
    respostaCorreta: 'Radiação',
  },
  {
    pergunta: 'A Primeira Lei da Termodinâmica é uma afirmação do princípio da:',
    alternativas: ['Conservação da Carga', 'Conservação da Massa', 'Ação e Reação', 'Conservação da Energia'],
    respostaCorreta: 'Conservação da Energia',
  },
  {
    pergunta: 'A grandeza física que relaciona a frequência de uma onda com seu comprimento de onda é a:',
    alternativas: ['Amplitude', 'Velocidade', 'Período', 'Fase'],
    respostaCorreta: 'Velocidade',
  },
  {
    pergunta: 'A imagem formada por um espelho plano é sempre:',
    alternativas: ['Real, invertida e menor', 'Virtual, direita e do mesmo tamanho', 'Real, direita e maior', 'Virtual, invertida e do mesmo tamanho'],
    respostaCorreta: 'Virtual, direita e do mesmo tamanho',
  },
  {
    pergunta: 'A força de atração ou repulsão entre duas cargas elétricas é descrita pela Lei de:',
    alternativas: ['Ohm', 'Faraday', 'Ampère', 'Coulomb'],
    respostaCorreta: 'Coulomb',
  },
  {
    pergunta: 'A pressão exercida por um fluido em repouso aumenta com a:',
    alternativas: ['Velocidade', 'Temperatura', 'Área', 'Profundidade'],
    respostaCorreta: 'Profundidade',
  },
  {
    pergunta: 'De acordo com a Lei de Lavoisier, em uma reação química, a massa total dos reagentes é:',
    alternativas: ['Menor que a dos produtos', 'Maior que a dos produtos', 'Variável', 'Igual à dos produtos'],
    respostaCorreta: 'Igual à dos produtos',
  },
  {
    pergunta: 'Qual função orgânica é caracterizada pela presença do grupo funcional hidroxila (-OH) ligado a um carbono saturado?',
    alternativas: ['Éter', 'Álcool', 'Aldeído', 'Cetona'],
    respostaCorreta: 'Álcool',
  },
  {
    pergunta: 'A ligação que ocorre pelo compartilhamento de pares de elétrons entre átomos é a:',
    alternativas: ['Ligação Iônica', 'Ligação Metálica', 'Ligação de Hidrogênio', 'Ligação Covalente'],
    respostaCorreta: 'Ligação Covalente',
  },
  {
    pergunta: 'Qual é o nome do processo de separação de misturas que utiliza um funil de bromo?',
    alternativas: ['Peneiração', 'Filtração', 'Decantação', 'Destilação'],
    respostaCorreta: 'Decantação',
  },
  {
    pergunta: 'Qual gás é o principal responsável pelo agravamento do efeito estufa?',
    alternativas: ['Oxigênio (O₂)', 'Nitrogênio (N₂)', 'Dióxido de Carbono (CO₂)', 'Hélio (He)'],
    respostaCorreta: 'Dióxido de Carbono (CO₂)',
  },
  {
    pergunta: 'Em uma reação de neutralização, um ácido reage com uma base para formar:',
    alternativas: ['Sal e Óxido', 'Ácido e Água', 'Óxido e Base', 'Sal e Água'],
    respostaCorreta: 'Sal e Água',
  },
  {
    pergunta: 'A base nitrogenada exclusiva do RNA, que substitui a Timina do DNA, é a:',
    alternativas: ['Citosina', 'Uracila', 'Guanina', 'Adenina'],
    respostaCorreta: 'Uracila',
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

  {
    pergunta: 'Qual organela é responsável pela respiração celular e produção de ATP?',
    alternativas: ['Ribossomo', 'Lisossomo', 'Mitocôndria', 'Cloroplasto'],
    respostaCorreta: 'Mitocôndria',
  },
  {
    pergunta: 'O conjunto de características visíveis de um organismo é chamado de:',
    alternativas: ['Genótipo', 'Cariótipo', 'Alelo', 'Fenótipo'],
    respostaCorreta: 'Fenótipo',
  },
  {
    pergunta: 'Qual dos reinos agrupa seres procariontes, como as bactérias?',
    alternativas: ['Reino Fungi', 'Reino Monera', 'Reino Protista', 'Reino Plantae'],
    respostaCorreta: 'Reino Monera',
  },
  {
    pergunta: 'O processo pelo qual as plantas utilizam luz para produzir seu alimento é a:',
    alternativas: ['Respiração', 'Fotossíntese', 'Transpiração', 'Quimiossíntese'],
    respostaCorreta: 'Fotossíntese',
  },
  {
    pergunta: 'A relação ecológica entre o cupim e os protozoários em seu intestino é um exemplo de:',
    alternativas: ['Parasitismo', 'Predatismo', 'Mutualismo', 'Competição'],
    respostaCorreta: 'Mutualismo',
  },
  {
    pergunta: 'Qual é a principal função das hemácias (glóbulos vermelhos) no sangue?',
    alternativas: ['Coagulação', 'Defesa imunológica', 'Transporte de O₂', 'Transporte de H₂O'],
    respostaCorreta: 'Transporte de O₂',
  },
  {
    pergunta: 'A divisão celular que reduz o número de cromossomos pela metade é a:',
    alternativas: ['Mitose', 'Prófase', 'Meiose', 'Anáfase'],
    respostaCorreta: 'Meiose',
  },
  {
    pergunta: 'Asas de morcegos e asas de insetos são exemplos de estruturas:',
    alternativas: ['Homólogas', 'Vestigiais', 'Embrionárias', 'Análogas'],
    respostaCorreta: 'Análogas',
  },
  {
    pergunta: 'Qual hormônio, produzido pelo pâncreas, regula a entrada de glicose nas células?',
    alternativas: ['Glucagon', 'Adrenalina', 'Insulina', 'Testosterona'],
    respostaCorreta: 'Insulina',
  },
  {
    pergunta: 'O tecido vegetal que transporta a seiva bruta (água e sais) é o:',
    alternativas: ['Floema', 'Parênquima', 'Colênquima', 'Xilema'],
    respostaCorreta: 'Xilema',
  },
  {
    pergunta: 'Um indivíduo com genótipo "Aa" para uma característica é considerado:',
    alternativas: ['Homozigoto', 'Recessivo', 'Heterozigoto', 'Dominante'],
    respostaCorreta: 'Heterozigoto',
  },
  {
    pergunta: 'A principal teoria da evolução, proposta por Darwin, baseia-se na:',
    alternativas: ['Lei do Uso e Desuso', 'Herança de Caracteres', 'Geração Espontânea', 'Seleção Natural'],
    respostaCorreta: 'Seleção Natural',
  },
  {
    pergunta: 'Em qual parte do sistema digestório humano ocorre a maior parte da absorção de nutrientes?',
    alternativas: ['Estômago', 'Intestino Grosso', 'Fígado', 'Intestino Delgado'],
    respostaCorreta: 'Intestino Delgado',
  },
  {
    pergunta: 'Os vírus são considerados parasitas intracelulares obrigatórios por que:',
    alternativas: ['Possuem núcleo', 'Não têm metabolismo', 'Fazem fotossíntese', 'São pluricelulares'],
    respostaCorreta: 'Não têm metabolismo',
  },
  {
    pergunta: 'A base nitrogenada exclusiva do RNA, que substitui a Timina do DNA, é a:',
    alternativas: ['Citosina', 'Uracila', 'Guanina', 'Adenina'],
    respostaCorreta: 'Uracila',
  },
{
    pergunta: 'O número atômico (Z) de um elemento químico corresponde ao número de:',
    alternativas: ['Nêutrons', 'Elétrons', 'Prótons', 'Íons'],
    respostaCorreta: 'Prótons',
  },
  {
    pergunta: 'Qual tipo de ligação química ocorre pela transferência de elétrons entre um metal e um ametal?',
    alternativas: ['Ligação Covalente', 'Ligação Metálica', 'Ligação Iônica', 'Ponte de Hidrogênio'],
    respostaCorreta: 'Ligação Iônica',
  },
  {
    pergunta: 'Na Tabela Periódica, os elementos da família 18 (ou 8A) são conhecidos como:',
    alternativas: ['Metais Alcalinos', 'Halogênios', 'Gases Nobres', 'Metais de Transição'],
    respostaCorreta: 'Gases Nobres',
  },
  {
    pergunta: 'Uma solução com pH = 2 é considerada:',
    alternativas: ['Ácida', 'Básica', 'Neutra', 'Alcalina'],
    respostaCorreta: 'Ácida',
  },
  {
    pergunta: 'A reação de combustão completa de um composto orgânico sempre produz:',
    alternativas: ['CO e H₂O', 'O₂ e CO₂', 'CO₂ e H₂O', 'H₂ e O₂'],
    respostaCorreta: 'CO₂ e H₂O',
  },
  {
    pergunta: 'Qual é a massa molar aproximada da molécula de água (H₂O)? (Dados: H=1, O=16)',
    alternativas: ['16 g/mol', '17 g/mol', '18 g/mol', '2 g/mol'],
    respostaCorreta: '18 g/mol',
  },
  {
    pergunta: 'Átomos de um mesmo elemento químico que possuem diferentes números de nêutrons são chamados de:',
    alternativas: ['Isóbaros', 'Isótonos', 'Isômeros', 'Isótopos'],
    respostaCorreta: 'Isótopos',
  },
  {
    pergunta: 'Qual das seguintes substâncias é um exemplo de hidrocarboneto?',
    alternativas: ['Etanol (C₂H₅OH)', 'Glicose (C₆H₁₂O₆)', 'Sal de cozinha (NaCl)', 'Metano (CH₄)'],
    respostaCorreta: 'Metano (CH₄)',
  },
  {
    pergunta: 'O processo de passagem direta de uma substância do estado sólido para o gasoso é chamado:',
    alternativas: ['Fusão', 'Ebulição', 'Sublimação', 'Condensação'],
    respostaCorreta: 'Sublimação',
  },
  {
    pergunta: 'De acordo com a Lei de Lavoisier, em uma reação química, a massa total dos reagentes é:',
    alternativas: ['Menor que a dos produtos', 'Maior que a dos produtos', 'Variável', 'Igual à dos produtos'],
    respostaCorreta: 'Igual à dos produtos',
  },
  {
    pergunta: 'Qual função orgânica é caracterizada pela presença do grupo funcional hidroxila (-OH) ligado a um carbono saturado?',
    alternativas: ['Éter', 'Álcool', 'Aldeído', 'Cetona'],
    respostaCorreta: 'Álcool',
  },
  {
    pergunta: 'A ligação que ocorre pelo compartilhamento de pares de elétrons entre átomos é a:',
    alternativas: ['Ligação Iônica', 'Ligação Metálica', 'Ligação de Hidrogênio', 'Ligação Covalente'],
    respostaCorreta: 'Ligação Covalente',
  },
  {
    pergunta: 'Qual é o nome do processo de separação de misturas que utiliza um funil de bromo?',
    alternativas: ['Peneiração', 'Filtração', 'Decantação', 'Destilação'],
    respostaCorreta: 'Decantação',
  },
  {
    pergunta: 'Qual gás é o principal responsável pelo agravamento do efeito estufa?',
    alternativas: ['Oxigênio (O₂)', 'Nitrogênio (N₂)', 'Dióxido de Carbono (CO₂)', 'Hélio (He)'],
    respostaCorreta: 'Dióxido de Carbono (CO₂)',
  },
  {
    pergunta: 'Em uma reação de neutralização, um ácido reage com uma base para formar:',
    alternativas: ['Sal e Óxido', 'Ácido e Água', 'Óxido e Base', 'Sal e Água'],
    respostaCorreta: 'Sal e Água',
  },
  {
    pergunta: 'Segundo a Primeira Lei de Newton (Inércia), um corpo em movimento tende a:',
    alternativas: ['Parar imediatamente', 'Acelerar continuamente', 'Manter seu movimento retilíneo e uniforme', 'Mudar de direção'],
    respostaCorreta: 'Manter seu movimento retilíneo e uniforme',
  },
  {
    pergunta: 'A grandeza física que mede a energia transferida de um corpo para outro devido à diferença de temperatura é:',
    alternativas: ['Potência', 'Pressão', 'Trabalho', 'Calor'],
    respostaCorreta: 'Calor',
  },
  {
    pergunta: 'Qual é a unidade de medida de Tensão Elétrica (d.d.p.) no Sistema Internacional?',
    alternativas: ['Ampere (A)', 'Ohm (Ω)', 'Watt (W)', 'Volt (V)'],
    respostaCorreta: 'Volt (V)',
  },
  {
    pergunta: 'O fenômeno que explica por que uma colher parece "quebrada" dentro de um copo com água é a:',
    alternativas: ['Reflexão', 'Refração', 'Difração', 'Polarização'],
    respostaCorreta: 'Refração',
  },
  {
    pergunta: 'De acordo com a Segunda Lei de Newton, a aceleração de um corpo é diretamente proporcional à:',
    alternativas: ['Sua massa', 'Sua velocidade', 'Força resultante', 'Sua temperatura'],
    respostaCorreta: 'Força resultante',
  },
  {
    pergunta: 'Um carro que se move com velocidade constante de 90 km/h está em:',
    alternativas: ['Movimento acelerado', 'Movimento retardado', 'Movimento uniforme', 'Repouso'],
    respostaCorreta: 'Movimento uniforme',
  },
  {
    pergunta: 'O som é uma onda do tipo:',
    alternativas: ['Eletromagnética e transversal', 'Mecânica e longitudinal', 'Eletromagnética e longitudinal', 'Mecânica e transversal'],
    respostaCorreta: 'Mecânica e longitudinal',
  },
  {
    pergunta: 'A energia associada ao movimento de um corpo é chamada de energia:',
    alternativas: ['Potencial', 'Térmica', 'Cinética', 'Elástica'],
    respostaCorreta: 'Cinética',
  },
  {
    pergunta: 'Em um circuito elétrico em série, se uma lâmpada queimar, as outras:',
    alternativas: ['Continuam acesas', 'Apagam', 'Brilham mais forte', 'Diminuem o brilho'],
    respostaCorreta: 'Apagam',
  },
  {
    pergunta: 'Qual processo de propagação de calor ocorre sem a necessidade de um meio material, como o calor do Sol que chega à Terra?',
    alternativas: ['Condução', 'Convecção', 'Radiação', 'Ebulição'],
    respostaCorreta: 'Radiação',
  },
  {
    pergunta: 'A Primeira Lei da Termodinâmica é uma afirmação do princípio da:',
    alternativas: ['Conservação da Carga', 'Conservação da Massa', 'Ação e Reação', 'Conservação da Energia'],
    respostaCorreta: 'Conservação da Energia',
  },
  {
    pergunta: 'A grandeza física que relaciona a frequência de uma onda com seu comprimento de onda é a:',
    alternativas: ['Amplitude', 'Velocidade', 'Período', 'Fase'],
    respostaCorreta: 'Velocidade',
  },
  {
    pergunta: 'A imagem formada por um espelho plano é sempre:',
    alternativas: ['Real, invertida e menor', 'Virtual, direita e do mesmo tamanho', 'Real, direita e maior', 'Virtual, invertida e do mesmo tamanho'],
    respostaCorreta: 'Virtual, direita e do mesmo tamanho',
  },
  {
    pergunta: 'A força de atração ou repulsão entre duas cargas elétricas é descrita pela Lei de:',
    alternativas: ['Ohm', 'Faraday', 'Ampère', 'Coulomb'],
    respostaCorreta: 'Coulomb',
  },
  {
    pergunta: 'A pressão exercida por um fluido em repouso aumenta com a:',
    alternativas: ['Velocidade', 'Temperatura', 'Área', 'Profundidade'],
    respostaCorreta: 'Profundidade',
  },
  {
    pergunta: 'Qual é o nome da linha que divide o círculo em duas partes iguais?',
    alternativas: ['Diagonal', 'Corda', 'Raio', 'Diâmetro'],
    respostaCorreta: 'Diâmetro',
  },
  {
    pergunta: 'Qual o resultado da conta 1²¹ + 3²?',
    alternativas: ['30', '27', '10', '7'],
    respostaCorreta: '10',
  },
  {
    pergunta: 'Qual a fórmula para calcular a área de um triângulo com ângulo de 90°?',
    alternativas: ['|x|', 'b x h', '(b x h)/2', 'raiz(a² + b²)'],
    respostaCorreta: '(b x h)/2',
  },
  {
    pergunta: 'Em qual conjunto numérico se encontra o número raiz quadrada de -24?',
    alternativas: ['Conjunto dos reais', 'Conjunto dos complexos', 'Conjunto dos Racionais', 'Não existe raiz negativa'],
    respostaCorreta: 'Conjunto dos complexos',
  },
  {
    pergunta: 'Suponha que temos um ângulo A e um ângulo B. Sendo eles ângulos suplementares, qual o valor do ângulo B se A tiver o valor de 45°?',
    alternativas: ['315°', '135°', '45°', '90°'],
    respostaCorreta: '135°',
  },
  {
    pergunta: 'Quanto é 20% de 200?',
    alternativas: ['10', '20', '30', '40'],
    respostaCorreta: '40',
  },
  {
    pergunta: 'Ao lançar um dado comum de 6 faces, qual a probabilidade de sair um número par?',
    alternativas: ['1/6', '1/3', '1/2', '2/3'],
    respostaCorreta: '1/2',
  },
  {
    pergunta: 'Quanto é 45 - 53?',
    alternativas: ['-8', '8', '-9', '9'],
    respostaCorreta: '-8',
  },
  {
    pergunta: 'Quantos cm tem 12 km?',
    alternativas: ['120.000', '1.200.000', '12.000.000', '12.000'],
    respostaCorreta: '1.200.000',
  },
  {
    pergunta: 'A constante de pi pertence a qual conjunto numérico?',
    alternativas: ['Conjunto dos irracionais', 'Conjunto dos naturais', 'Conjunto dos racionais', 'Conjunto dos complexos'],
    respostaCorreta: 'Conjunto dos irracionais',
  },
  {
    pergunta: 'Quanto é 12 x 6?',
    alternativas: ['62', '48', '60', '72'],
    respostaCorreta: '72',
  },
  {
    pergunta: 'Se João tem 72 reais e divide ele entre seus 8 netos, quantos reais cada um vai ganhar?',
    alternativas: ['R$8,00', 'R$9,00', 'R$7,00', 'R$8,50'],
    respostaCorreta: 'R$9,00',
  },
  {
    pergunta: 'A soma dos ângulos internos de qualquer triângulo é sempre igual a:',
    alternativas: ['90°', '180°', '270°', '360°'],
    respostaCorreta: '180°',
  },
  {
    pergunta: 'Qual a raiz quadrada de 144?',
    alternativas: ['11', '13', '14', '12'],
    respostaCorreta: '12',
  },
  {
    pergunta: 'Qual a raiz cúbica de 64?',
    alternativas: ['3', '8', '4', '16'],
    respostaCorreta: '4',
  },
  {
    pergunta: 'Qual evento deu início à Primeira Guerra Mundial em 1914?',
    alternativas: ['A Revolução Russa', 'A invasão da Polônia', 'A queda da Bastilha', 'O assassinato de Francisco Ferdinando'],
    respostaCorreta: 'O assassinato de Francisco Ferdinando',
  },
  {
    pergunta: 'Quem é o autor da obra "Mona Lisa"?',
    alternativas: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
    respostaCorreta: 'Leonardo da Vinci',
  },
  {
    pergunta: 'Qual é o maior planeta do nosso Sistema Solar?',
    alternativas: ['Terra', 'Saturno', 'Júpiter', 'Marte'],
    respostaCorreta: 'Júpiter',
  },
  {
    pergunta: 'Em qual continente está localizado o Deserto do Saara?',
    alternativas: ['Ásia', 'África', 'Oceania', 'América do Sul'],
    respostaCorreta: 'África',
  },
  {
    pergunta: 'Qual é o rio mais longo do mundo?',
    alternativas: ['Rio Nilo', 'Rio Mississipi', 'Rio Yangtzé', 'Rio Amazonas'],
    respostaCorreta: 'Rio Amazonas',
  },
  {
    pergunta: 'A Teoria da Relatividade foi desenvolvida por qual cientista?',
    alternativas: ['Isaac Newton', 'Albert Einstein', 'Galileu Galilei', 'Marie Curie'],
    respostaCorreta: 'Albert Einstein',
  },
  {
    pergunta: 'Qual das seguintes fontes de energia é considerada renovável?',
    alternativas: ['Petróleo', 'Gás Natural', 'Energia Eólica', 'Carvão Mineral'],
    respostaCorreta: 'Energia Eólica',
  },
  {
    pergunta: 'Quantos lados tem um heptágono?',
    alternativas: ['5', '6', '7', '8'],
    respostaCorreta: '7',
  },
  {
    pergunta: 'Qual cidade é famosa por abrigar a Torre Eiffel?',
    alternativas: ['Londres', 'Roma', 'Berlim', 'Paris'],
    respostaCorreta: 'Paris',
  },
  {
    pergunta: 'O processo pelo qual as plantas produzem seu próprio alimento é a:',
    alternativas: ['Respiração', 'Fotossíntese', 'Transpiração', 'Decomposição'],
    respostaCorreta: 'Fotossíntese',
  },
  {
    pergunta: 'Quem escreveu "Romeu e Julieta"?',
    alternativas: ['Dante Alighieri', 'Miguel de Cervantes', 'William Shakespeare', 'Homero'],
    respostaCorreta: 'William Shakespeare',
  },
  {
    pergunta: 'Qual é a montanha mais alta do mundo?',
    alternativas: ['Monte Kilimanjaro', 'K2', 'Monte Everest', 'Aconcágua'],
    respostaCorreta: 'Monte Everest',
  },
  {
    pergunta: 'A Guerra Fria foi uma disputa ideológica entre quais duas superpotências?',
    alternativas: ['Alemanha e Japão', 'Reino Unido e França', 'EUA e União Soviética', 'China e Índia'],
    respostaCorreta: 'EUA e União Soviética',
  },
  {
    pergunta: 'Qual planeta é conhecido como o "Planeta Vermelho"?',
    alternativas: ['Vênus', 'Saturno', 'Júpiter', 'Marte'],
    respostaCorreta: 'Marte',
  },
  {
    pergunta: 'A ONU foi criada após qual grande conflito mundial?',
    alternativas: ['Guerra do Vietnã', 'Primeira Guerra Mundial', 'Segunda Guerra Mundial', 'Guerra da Coreia'],
    respostaCorreta: 'Segunda Guerra Mundial',
  },
  {
    
    pergunta: 'Qual cientista polonesa (naturalizada francesa) foi a primeira pessoa a ganhar dois Prêmios Nobel em áreas científicas diferentes?',
    alternativas: ['Rosalind Franklin', 'Marie Curie', 'Lise Meitner', 'Irène Joliot-Curie'],
    respostaCorreta: 'Marie Curie',
  },
  {
    
    pergunta: 'A matemática e escritora Ada Lovelace é amplamente reconhecida na história da tecnologia por ter sido a primeira pessoa a:',
    alternativas: ['Inventar a lâmpada elétrica', 'Descobrir a estrutura do DNA', 'Criar a linguagem Python', 'Escrever o primeiro algoritmo de computador da história'],
    respostaCorreta: 'Escrever o primeiro algoritmo de computador da história',
  },
  {
    
    pergunta: 'Chien-Shiung Wu, conhecida como a “Primeira Dama da Física”, realizou um experimento histórico que provou que a conservação da paridade não se aplicava na interação fraca. Apesar de sua contribuição crucial, o Nobel de Física de 1957 foi entregue apenas aos seus colegas homens. Em qual área da física ela atuava?',
    alternativas: ['Óptica Geométrica', 'Astronomia Observacional', 'Física Nuclear', 'Termodinâmica de Fluidos'],
    respostaCorreta: 'Física Nuclear',
  },
  {
    
    pergunta: 'A astrônoma Vera Rubin revolucionou nossa compreensão do Universo nos anos 1970 ao estudar a velocidade de rotação das galáxias. Suas observações forneceram as primeiras evidências convincentes da existência de um componente invisível que compõe a maior parte da massa do Universo. O que é esse componente?',
    alternativas: ['Matéria Escura', 'Buracos Negros Supermassivos', 'Cometas de Gelo', 'Poeira Estelar'],
    respostaCorreta: 'Matéria Escura',
  },
  {
    
    pergunta: 'No basquete, quando um atleta salta para enterrar a bola, ele atinge a altura máxima do pulo no instante em que sua velocidade vertical se torna temporariamente igual a zero. Qual força da física atua puxando o atleta de volta para o chão?',
    alternativas: ['Força Magnética', 'Força Gravitacional', 'Força Normal', 'Força Centrífuga'],
    respostaCorreta: 'Força Gravitacional',
  },
  {
    
    pergunta: 'A Fórmula 1 utiliza motores híbridos que reaproveitam a energia gerada durante as frenagens, convertendo energia cinética em elétrica pelo sistema ERS. Qual princípio afirma que “a energia não pode ser criada nem destruída, apenas transformada”?',
    alternativas: ['Princípio de Arquimedes', 'Lei de Gravitação Universal', 'Segunda Lei da Termodinâmica', 'Princípio da Conservação da Energia'],
    respostaCorreta: 'Princípio da Conservação da Energia',
  },
  {
    
    pergunta: 'No tiro com arco e no tiro esportivo, os atletas precisam controlar o corpo para não desviar o tiro. Qual órgão do sistema nervoso central é responsável por coordenar a precisão motora fina e o equilíbrio do corpo?',
    alternativas: ['Nervos', 'Esôfago', 'Cerebelo', 'Pulmão'],
    respostaCorreta: 'Cerebelo',
  },
  {
    
    pergunta: 'Nos jogos de futebol em altitudes muito elevadas (como em La Paz, na Bolívia, a mais de 3.600 metros), os jogadores sentem mais cansaço e falta de ar. Isso acontece porque na altitude a pressão atmosférica é menor, o que torna o ar:',
    alternativas: ['Rarefeito', 'Mais rico em gás hélio', 'Excessivamente quente e úmido', 'Rico em gases nobres'],
    respostaCorreta: 'Rarefeito',
  },
  {
    
    pergunta: 'Instrumentos de sopro (flauta, trompete, clarinete) produzem som através da vibração da coluna de ar dentro de seus tubos. Na física ondulatória, esse som é gerado pela formação de qual tipo de onda?',
    alternativas: ['Raios X', 'Ondas Estacionárias', 'Ondas de Rádio AM/FM', 'Ondas Gravitacionais'],
    respostaCorreta: 'Ondas Estacionárias',
  },
  {
    
    pergunta: 'Durante o dia, as plantas realizam fotossíntese absorvendo gás carbônico (CO2) e luz solar para produzir glicose e liberar oxigênio (O2). Em qual organela celular das plantas ocorre esse processo?',
    alternativas: ['Lisossomo', 'Complexo de Golgi', 'Mitocôndria', 'Cloroplasto'],
    respostaCorreta: 'Cloroplasto',
  },
  {
    
    pergunta: 'Em festivais de música é comum ver feixes de laser coloridos cruzando o céu. A luz laser é monocromática (uma única cor) e coerente. O laser é um tipo de onda:',
    alternativas: ['Gravitacional de baixa intensidade', 'Sonora de ultrafrequência', 'Eletromagnética', 'Mecânica transversal'],
    respostaCorreta: 'Eletromagnética',
  },
  {
    
    pergunta: 'A usina hidrelétrica de Itaipu, na fronteira entre o Brasil e o Paraguai, gera energia aproveitando a força da água. Qual tipo de energia armazenada na represa é convertida em energia cinética e depois em elétrica nas turbinas?',
    alternativas: ['Energia Potencial Gravitacional', 'Energia Térmica', 'Energia Química', 'Energia Nuclear'],
    respostaCorreta: 'Energia Potencial Gravitacional',
  },
  {
    
    pergunta: 'Qual escritora brasileira, autora de “Quarto de Despejo: Diário de uma Favela” (1960), transformou seus diários sobre a fome e a vida na favela do Canindé em um dos livros brasileiros mais traduzidos do mundo?',
    alternativas: ['Clarice Lispector', 'Conceição Evaristo', 'Carolina Maria de Jesus', 'Cecília Meireles'],
    respostaCorreta: 'Carolina Maria de Jesus',
  },
  {
    
    pergunta: 'Durante a Semana de Arte Moderna de 1922 e o Movimento Antropofágico, uma pintora brasileira se destacou com obras icônicas como o quadro “Abaporu”. De quem estamos falando?',
    alternativas: ['Tarsila do Amaral', 'Anita Malfatti', 'Djanira', 'Lygia Clark'],
    respostaCorreta: 'Tarsila do Amaral',
  },
  {
    
    pergunta: 'Cecília Meireles ficou famosa, entre outras obras, por escrever uma obra poética histórica sobre a Inconfidência Mineira. Qual é o título dessa obra?',
    alternativas: ['Os Lusíadas', 'Ou Isto ou Aquilo', 'Marília de Dirceu', 'Romanceiro da Inconfidência'],
    respostaCorreta: 'Romanceiro da Inconfidência',
  },
  {
    
    pergunta: 'A pintora mexicana Frida Kahlo usou a arte para expressar suas dores físicas, sua identidade cultural e questões políticas. Qual formato de pintura é o mais famoso e frequente em sua obra?',
    alternativas: ['Pinturas de paisagens marinhas', 'Autorretratos', 'Esculturas em bronze', 'Pinturas abstratas com formas geométricas'],
    respostaCorreta: 'Autorretratos',
  },
  {
    
    pergunta: 'No romance “Dom Casmurro” (1899), de Machado de Assis, o narrador Bentinho conta sua história marcada por um ciúme doentio em relação à esposa. Qual é o nome dessa famosa personagem?',
    alternativas: ['Lucíola', 'Iracema', 'Capitu', 'Diadorim'],
    respostaCorreta: 'Capitu',
  },
  {
    
    pergunta: 'Qual poeta brasileiro do Romantismo ficou famoso por versos abolicionistas em poemas como “O Navio Negreiro”, recebendo o apelido de “Poeta dos Escravos”?',
    alternativas: ['Castro Alves', 'Álvares de Azevedo', 'Olavo Bilac', 'Gonçalves Dias'],
    respostaCorreta: 'Castro Alves',
  },
  {
    
    pergunta: 'O gênero textual caracterizado por narrativa curta, focada em fatos do cotidiano, frequentemente publicada em jornais e revistas com tom reflexivo, poético ou bem-humorado, é chamado de:',
    alternativas: ['Ensaio Científico', 'Romance Épico', 'Artigo de Opinião', 'Crônica'],
    respostaCorreta: 'Crônica',
  },
  {
    
    pergunta: 'A paquistanesa Malala Yousafzai se tornou a pessoa mais jovem a receber o Prêmio Nobel da Paz (aos 17 anos). Qual era a principal causa pela qual ela lutava e que a fez sofrer um atentado?',
    alternativas: ['O fim do uso de armas nucleares', 'O combate à fome no país', 'O acesso à água potável na Ásia', 'O direito das meninas à educação'],
    respostaCorreta: 'O direito das meninas à educação',
  },
  {
    
    pergunta: 'Maria da Penha Maia Fernandes é uma farmacêutica cearense que transformou sua tragédia pessoal em um marco jurídico no Brasil. A lei que leva seu nome (Lei nº 11.340/2006) serve para:',
    alternativas: ['Regulamentar o trabalho de cientistas em laboratórios', 'Garantir licença-maternidade de 6 meses', 'Prevenir e punir a violência doméstica e familiar contra a mulher', 'Criar o piso salarial para profissionais da saúde'],
    respostaCorreta: 'Prevenir e punir a violência doméstica e familiar contra a mulher',
  },
  {
    
    pergunta: 'Dandara dos Palmares foi uma liderança negra fundamental no Brasil Colonial. Junto com seu companheiro Zumbi, ela lutou pela libertação dos escravizados em qual famoso quilombo?',
    alternativas: ['Quilombo do Ambrósio', 'Quilombo de Manuel Congo', 'Quilombo dos Palmares', 'Quilombo do Quariterê'],
    respostaCorreta: 'Quilombo dos Palmares',
  },
  {
    
    pergunta: 'Durante a Segunda Guerra Mundial, a atriz Hedy Lamarr inventou uma tecnologia de transmissão de sinais por rádio (salto de frequência) que hoje serve de base para qual tecnologia sem fio que usamos todos os dias?',
    alternativas: ['Radar e sonar', 'Wi-Fi e Bluetooth', 'Televisão em cores', 'Câmeras digitais'],
    respostaCorreta: 'Wi-Fi e Bluetooth',
  },
  {
    
    pergunta: 'Ana Néri é reconhecida como a mãe da enfermagem no Brasil. Durante qual conflito sul-americano do século XIX ela se voluntariou para cuidar dos feridos?',
    alternativas: ['Guerra do Paraguai', 'Revolução Farroupilha', 'Guerra de Canudos', 'Independência do Brasil'],
    respostaCorreta: 'Guerra do Paraguai',
  },
  {
    
    pergunta: 'A Revolução Industrial, iniciada na Inglaterra no século XVIII, transformou o modo de produção e as relações de trabalho. Qual foi a principal fonte de energia que alimentou as primeiras máquinas a vapor?',
    alternativas: ['Energia Solar', 'Petróleo Refinado', 'Gás Natural', 'Carvão Mineral'],
    respostaCorreta: 'Carvão Mineral',
  },
  {
    
    pergunta: 'A Gripe Espanhola (1918-1920) foi uma das maiores pandemias da história, ocorrendo no mesmo período em que o mundo enfrentava outro grande conflito. Que conflito foi esse?',
    alternativas: ['Guerra Fria', 'Segunda Guerra Mundial', 'Primeira Guerra Mundial', 'Guerra do Vietnã'],
    respostaCorreta: 'Primeira Guerra Mundial',
  },
  {
    
    pergunta: 'Em 2020, uma equipe de cientistas brasileiras sequenciou o genoma do coronavírus no Brasil em apenas 48 horas. Quem foi a biomédica baiana que liderou essa equipe?',
    alternativas: ['Luiza Trajano', 'Jaqueline Goes de Jesus', 'Celina Turchi', 'Margareth Dalcolmo'],
    respostaCorreta: 'Jaqueline Goes de Jesus',
  },
  {
    
    pergunta: 'Chiquinha Gonzaga foi compositora, pianista e regente brasileira pioneira no século XIX. Além de ter escrito a primeira marcha de carnaval (“Ó Abre Alas”), ela se destacou por:',
    alternativas: ['Ter fundado o primeiro jornal impresso por mulheres', 'Ter projetado o Teatro Amazonas', 'Ser a primeira mulher a reger uma orquestra no Brasil', 'Ter inventado o violão de sete cordas'],
    respostaCorreta: 'Ser a primeira mulher a reger uma orquestra no Brasil',
  },
  {
    
    pergunta: 'Durante a Guerra da Independência na Bahia (1822-1823), uma mulher se disfarçou de homem com o nome de “Soldado Medeiros” para lutar no exército de libertação, tornando-se heroína nacional. Quem foi ela?',
    alternativas: ['Joana Angélica', 'Maria Felipa', 'Maria Quitéria', 'Anita Garibaldi'],
    respostaCorreta: 'Maria Quitéria',
  },
  {
    
    pergunta: 'Lélia Gonzalez foi uma das maiores intelectuais negras do Brasil. Ela criou o termo “Améfrica Ladina” para repensar a identidade e a cultura da América Latina destacando a contribuição de quais povos?',
    alternativas: ['Povos negros e indígenas', 'Colonizadores portugueses e espanhóis', 'Povos Incas', 'Somente os povos originários brasileiros'],
    respostaCorreta: 'Povos negros e indígenas',
  },
  {
    
    pergunta: 'Marta Vieira da Silva, a “Rainha Marta”, foi eleita seis vezes a melhor jogadora do mundo pela FIFA. Em qual país a seleção brasileira feminina conquistou o ouro no futebol nos Jogos Pan-Americanos de 2007?',
    alternativas: ['Canadá', 'Brasil', 'Estados Unidos', 'China'],
    respostaCorreta: 'Brasil',
  },
  {
    
    pergunta: 'A cantora Rita Lee, conhecida como a “Rainha do Rock Brasileiro”, também era conhecida por sua militância em defesa de qual causa?',
    alternativas: ['Caça esportiva no Cerrado', 'Mineração no leito de rios', 'Uso de plásticos descartáveis em shows', 'Proteção e direitos dos animais'],
    respostaCorreta: 'Proteção e direitos dos animais',
  },
  {
    
    pergunta: 'A Caatinga é o único bioma exclusivamente brasileiro. Para resistir às longas secas, plantas como o mandacaru e o xiquexique desenvolveram adaptações como a transformação de suas folhas em:',
    alternativas: ['Folhas largas e transparentes', 'Raízes aéreas que flutuam na água', 'Espinhos', 'Flores gigantes de pétalas carnosas'],
    respostaCorreta: 'Espinhos',
  },
  {
    
    pergunta: 'O filme brasileiro “Central do Brasil”, estrelado por Fernanda Montenegro, foi indicado ao Oscar em 1999. Qual é o trabalho da personagem Dora na estação de trem?',
    alternativas: ['Escrever cartas para pessoas analfabetas', 'Vender bilhetes de viagem para o interior', 'Ser maestrina de um coral infantil', 'Vender comida de rua'],
    respostaCorreta: 'Escrever cartas para pessoas analfabetas',
  },
  {
    
    pergunta: 'A animação “A Caminho da Lua” (2020) conta a história de Fei Fei, uma garota apaixonada por ciência que constrói uma nave espacial. Quais áreas ela utiliza para projetar seu foguete?',
    alternativas: ['Biotecnologia', 'Geologia Lunar', 'Física e Engenharia Aeroespacial', 'Arquitetura Urbana'],
    respostaCorreta: 'Física e Engenharia Aeroespacial',
  },
  {
    
    pergunta: 'Na série “The Big Bang Theory”, a personagem Amy Farrah Fowler é neurobióloga. A atriz que a interpreta também é cientista na vida real! Qual é a formação acadêmica de Mayim Bialik?',
    alternativas: ['Engenheira Aeroespacial', 'Doutora em Neurociência', 'Médica Cirurgiã', 'Bacharel em Química Industrial'],
    respostaCorreta: 'Doutora em Neurociência',
  },
  {
    
    pergunta: 'Os saltos acrobáticos da ginasta Rebeca Andrade dependem diretamente de quais áreas da física, que estudam o movimento do corpo, a rotação no ar e a gravidade?',
    alternativas: ['Biomecânica e Termodinâmica', 'Óptica Geométrica e Mecânica Clássica', 'Eletromagnetismo e Biomecânica', 'Biomecânica e Mecânica Clássica'],
    respostaCorreta: 'Biomecânica e Mecânica Clássica',
  },
  {
    
    pergunta: 'A skatista brasileira Rayssa Leal, a “Fadinha”, ganhou medalha olímpica aos 13 anos. No skate, para realizar manobras como o ollie (saltar com o skate preso aos pés), o atleta usa princípios físicos como:',
    alternativas: ['Alavanca e conservação do momento angular', 'Magnetismo do piso', 'Flutuabilidade e empuxo de Arquimedes', 'Atrito e flutuabilidade'],
    respostaCorreta: 'Alavanca e conservação do momento angular',
  },
  {
    
    pergunta: 'Formada em medicina, a ex-jogadora de vôlei Isabel Salgado foi pioneira do vôlei de praia no Brasil. Esse esporte exige mais esforço na areia porque ela absorve a força do pulo. Essa troca de forças entre o pé da atleta e o chão reflete qual lei?',
    alternativas: ['1ª Lei de Newton (Inércia)', 'Lei da Gravitação Universal', '3ª Lei de Newton (Ação e Reação)', 'Princípio de Pascal'],
    respostaCorreta: '3ª Lei de Newton (Ação e Reação)',
  },
  {
    
    pergunta: 'Na física, a eletricidade que alimenta nossas casas e eletrônicos (e o Pikachu, do tipo elétrico!) é gerada pelo fluxo ordenado de qual partícula subatômica?',
    alternativas: ['Prótons', 'Elétrons', 'Nêutrons', 'Átomos'],
    respostaCorreta: 'Elétrons',
  },
 
  // ============================================================
  // MULHERES NA CIÊNCIA (novas)
  // ============================================================
  {
    
    pergunta: 'Qual cientista britânica obteve a famosa “Fotografia 51”, imagem de difração de raios X essencial para descobrir a estrutura em dupla hélice do DNA?',
    alternativas: ['Dorothy Hodgkin', 'Jane Goodall', 'Rosalind Franklin', 'Lise Meitner'],
    respostaCorreta: 'Rosalind Franklin',
  },
  {
    
    pergunta: 'A matemática Katherine Johnson, retratada no filme “Estrelas Além do Tempo”, trabalhou na NASA calculando:',
    alternativas: ['Receitas de comida para astronautas', 'Trajetórias de voos espaciais, como o de John Glenn', 'A cor dos trajes espaciais', 'O preço dos foguetes'],
    respostaCorreta: 'Trajetórias de voos espaciais, como o de John Glenn',
  },
  {
    
    pergunta: 'A primatóloga Jane Goodall ficou mundialmente conhecida por estudar durante décadas o comportamento de qual animal na Tanzânia?',
    alternativas: ['Gorilas', 'Leões', 'Elefantes', 'Chimpanzés'],
    respostaCorreta: 'Chimpanzés',
  },
  {
    
    pergunta: 'O livro “Primavera Silenciosa” (1962), da bióloga Rachel Carson, é um marco do movimento ambientalista por alertar sobre os efeitos de:',
    alternativas: ['Terremotos', 'Pesticidas como o DDT no meio ambiente', 'Energia solar', 'Radiação dos celulares'],
    respostaCorreta: 'Pesticidas como o DDT no meio ambiente',
  },
  {
    
    pergunta: 'Barbara McClintock ganhou o Nobel de Medicina de 1983 ao descobrir que partes do material genético podem mudar de posição no cromossomo. Esses elementos são chamados de:',
    alternativas: ['Plasmídeos', 'Ribossomos', 'Centrômeros', 'Transposons (genes saltadores)'],
    respostaCorreta: 'Transposons (genes saltadores)',
  },
  {
    
    pergunta: 'A neurocientista italiana Rita Levi-Montalcini ganhou o Nobel de Medicina de 1986 pela descoberta de um fator de crescimento de qual tipo de célula?',
    alternativas: ['Hemácias', 'Células nervosas (neurônios)', 'Células musculares', 'Células ósseas'],
    respostaCorreta: 'Células nervosas (neurônios)',
  },
  {
    
    pergunta: 'Dorothy Hodgkin recebeu o Nobel de Química de 1964 usando cristalografia de raios X para determinar a estrutura de moléculas importantes, como:',
    alternativas: ['Água e gás carbônico', 'Gasolina e álcool', 'Oxigênio e ozônio', 'Penicilina e vitamina B12'],
    respostaCorreta: 'Penicilina e vitamina B12',
  },
  {
    
    pergunta: 'A física austríaca Lise Meitner foi uma das responsáveis por explicar teoricamente qual fenômeno nuclear, base do funcionamento das usinas nucleares?',
    alternativas: ['Fusão do gelo', 'Combustão do carvão', 'Fissão nuclear', 'Eletrólise da água'],
    respostaCorreta: 'Fissão nuclear',
  },
  {
    
    pergunta: 'Em 1925, a astrônoma Cecilia Payne-Gaposchkin demonstrou em sua tese que as estrelas são compostas principalmente de quais elementos?',
    alternativas: ['Hidrogênio e hélio', 'Ferro e níquel', 'Carbono e oxigênio', 'Silício e cálcio'],
    respostaCorreta: 'Hidrogênio e hélio',
  },
  {
    
    pergunta: 'A astrônoma Henrietta Leavitt descobriu uma relação entre o brilho e o período das estrelas Cefeidas, o que passou a ser usado para:',
    alternativas: ['Prever o clima na Terra', 'Calcular a idade das rochas', 'Medir distâncias no Universo', 'Datar fósseis'],
    respostaCorreta: 'Medir distâncias no Universo',
  },
  {
    
    pergunta: 'Em 1967, a astrofísica Jocelyn Bell Burnell, então estudante de doutorado, descobriu estrelas de nêutrons que emitem pulsos regulares de rádio. Esses objetos são chamados de:',
    alternativas: ['Quasares', 'Nebulosas', 'Supernovas', 'Pulsares'],
    respostaCorreta: 'Pulsares',
  },
  {
    
    pergunta: 'Emmanuelle Charpentier e Jennifer Doudna ganharam o Nobel de Química de 2020 pelo desenvolvimento de uma técnica de “edição” do DNA conhecida como:',
    alternativas: ['Raios X', 'CRISPR-Cas9', 'Eletroforese', 'Ressonância magnética'],
    respostaCorreta: 'CRISPR-Cas9',
  },
  {
    
    pergunta: 'A bioquímica Katalin Karikó recebeu o Nobel de Medicina de 2023 por pesquisas em RNA mensageiro que permitiram o desenvolvimento rápido de:',
    alternativas: ['Antibióticos de amplo espectro', 'Marca-passos', 'Aparelhos de raio X', 'Vacinas de RNA contra a COVID-19'],
    respostaCorreta: 'Vacinas de RNA contra a COVID-19',
  },
  {
    
    pergunta: 'A bióloga brasileira Bertha Lutz, além de pesquisar anfíbios, foi uma das principais lideranças na luta por qual direito das mulheres no Brasil?',
    alternativas: ['Direito ao voto', 'Direito de dirigir carros', 'Direito de ser astronauta', 'Direito de jogar futebol'],
    respostaCorreta: 'Direito ao voto',
  },
  {
    
    pergunta: 'A geneticista brasileira Mayana Zatz, da USP, é conhecida mundialmente por suas pesquisas sobre:',
    alternativas: ['Vulcões', 'Doenças genéticas e células-tronco', 'Energia nuclear', 'Satélites artificiais'],
    respostaCorreta: 'Doenças genéticas e células-tronco',
  },
  {
    
    pergunta: 'Sonia Guimarães foi a primeira mulher negra brasileira a obter doutorado em qual área, tornando-se professora do ITA?',
    alternativas: ['Direito', 'Medicina', 'Física', 'Arquitetura'],
    respostaCorreta: 'Física',
  },
  {
    
    pergunta: 'A epidemiologista brasileira Celina Turchi liderou pesquisas que comprovaram a relação entre o vírus Zika e qual condição em bebês?',
    alternativas: ['Microcefalia', 'Daltonismo', 'Diabetes', 'Asma'],
    respostaCorreta: 'Microcefalia',
  },
  {
    
    pergunta: 'A geóloga e cartógrafa Marie Tharp produziu os primeiros mapas do fundo do oceano, revelando a dorsal meso-atlântica, o que ajudou a comprovar qual teoria?',
    alternativas: ['Relatividade', 'Seleção natural', 'Tectônica de placas', 'Expansão do Universo'],
    respostaCorreta: 'Tectônica de placas',
  },
  {
    
    pergunta: 'Em 1947, Gerty Cori foi a primeira mulher a receber o Nobel de Fisiologia ou Medicina, por estudos sobre como o corpo usa e armazena qual substância?',
    alternativas: ['Gordura', 'Cálcio', 'Ferro', 'Glicose (açúcar)'],
    respostaCorreta: 'Glicose (açúcar)',
  },
  {
    
    pergunta: 'Em 1849, Elizabeth Blackwell se tornou a primeira mulher a se formar em qual área nos Estados Unidos?',
    alternativas: ['Engenharia', 'Astronomia', 'Medicina', 'Direito'],
    respostaCorreta: 'Medicina',
  },
  {
    
    pergunta: 'Quem foi a primeira mulher a ir ao espaço, em 1963?',
    alternativas: ['Sally Ride', 'Valentina Tereshkova', 'Mae Jemison', 'Peggy Whitson'],
    respostaCorreta: 'Valentina Tereshkova',
  },
  {
    
    pergunta: 'Em 1992, qual astronauta se tornou a primeira mulher negra a viajar ao espaço?',
    alternativas: ['Mae Jemison', 'Katherine Johnson', 'Sally Ride', 'Valentina Tereshkova'],
    respostaCorreta: 'Mae Jemison',
  },
  {
    
    pergunta: 'Margaret Hamilton liderou a equipe que criou o software de bordo da missão Apollo 11 e popularizou qual termo?',
    alternativas: ['Inteligência artificial', 'Redes sociais', 'Engenharia de software', 'Realidade virtual'],
    respostaCorreta: 'Engenharia de software',
  },
  {
    
    pergunta: 'A cientista da computação Grace Hopper, conhecida como “Vovó do COBOL”, criou o primeiro:',
    alternativas: ['Telefone celular', 'Compilador de linguagem de programação', 'Monitor colorido', 'Mouse'],
    respostaCorreta: 'Compilador de linguagem de programação',
  },
  {
    
    pergunta: 'Hipátia de Alexandria, que viveu entre os séculos IV e V, foi uma importante:',
    alternativas: ['Rainha do Egito', 'Pintora renascentista', 'Exploradora marítima', 'Matemática, astrônoma e filósofa'],
    respostaCorreta: 'Matemática, astrônoma e filósofa',
  },
  {
    
    pergunta: 'A matemática Emmy Noether demonstrou um teorema que liga simetrias da natureza a quais princípios da física?',
    alternativas: ['Leis de conservação (como a da energia)', 'Leis da óptica', 'Tabela periódica', 'Marés'],
    respostaCorreta: 'Leis de conservação (como a da energia)',
  },
  {
    
    pergunta: 'Mary Anning, que viveu na Inglaterra do século XIX, ficou famosa por suas descobertas de:',
    alternativas: ['Vacinas', 'Planetas', 'Fósseis de répteis marinhos', 'Elementos químicos'],
    respostaCorreta: 'Fósseis de répteis marinhos',
  },
  {
    
    pergunta: 'A farmacêutica chinesa Tu Youyou ganhou o Nobel de Medicina de 2015 pela descoberta da artemisinina, usada no tratamento de qual doença?',
    alternativas: ['Tuberculose', 'Sarampo', 'Malária', 'Gripe'],
    respostaCorreta: 'Malária',
  },
  {
    
    pergunta: 'Em 2014, a iraniana Maryam Mirzakhani foi a primeira mulher a receber a Medalha Fields, o maior prêmio de qual área?',
    alternativas: ['Química', 'Matemática', 'Literatura', 'Biologia'],
    respostaCorreta: 'Matemática',
  },
  {
    
    pergunta: 'Em qual data é celebrado o Dia Internacional das Mulheres e Meninas na Ciência, instituído pela ONU?',
    alternativas: ['8 de março', '21 de junho', '5 de junho', '11 de fevereiro'],
    respostaCorreta: '11 de fevereiro',
  },
  {
    
    pergunta: 'O chamado “Efeito Matilda” descreve:',
    alternativas: ['Uma reação química entre metais', 'O apagamento do trabalho de mulheres cientistas, com méritos atribuídos a colegas homens', 'Um fenômeno de refração da luz', 'A velocidade de crescimento de bactérias'],
    respostaCorreta: 'O apagamento do trabalho de mulheres cientistas, com méritos atribuídos a colegas homens',
  },
  {
    
    pergunta: 'A psiquiatra alagoana Nise da Silveira revolucionou o tratamento de pacientes com transtornos mentais no Brasil ao:',
    alternativas: ['Defender internações longas', 'Aplicar eletrochoque', 'Usar a arte como forma de terapia', 'Proibir visitas de familiares'],
    respostaCorreta: 'Usar a arte como forma de terapia',
  },
  {
    
    pergunta: 'A agrônoma Johanna Döbereiner foi pioneira em pesquisas sobre fixação biológica de nitrogênio com bactérias, o que reduziu o uso de adubo químico, especialmente na cultura da:',
    alternativas: ['Soja', 'Trigo', 'Café', 'Laranja'],
    respostaCorreta: 'Soja',
  },
  {
    
    pergunta: 'Marie Curie, junto de seu marido Pierre, descobriu quais elementos radioativos?',
    alternativas: ['Ouro e prata', 'Hélio e neônio', 'Polônio e rádio', 'Ferro e cobre'],
    respostaCorreta: 'Polônio e rádio',
  },
  {
    
    pergunta: 'A astrofísica brasileira Thaisa Storchi Bergmann, da UFRGS, é reconhecida mundialmente por suas pesquisas sobre:',
    alternativas: ['Vulcões submarinos', 'Insetos polinizadores', 'Energia eólica', 'Buracos negros supermassivos no centro de galáxias'],
    respostaCorreta: 'Buracos negros supermassivos no centro de galáxias',
  },
 
  // ============================================================
  // CIÊNCIAS E MATEMÁTICA - FÁCEIS
  // ============================================================
  {
    
    pergunta: 'Qual é a fórmula química da água?',
    alternativas: ['CO2', 'H2O', 'O2', 'NaCl'],
    respostaCorreta: 'H2O',
  },
  {
    
    pergunta: 'Qual é o planeta mais próximo do Sol?',
    alternativas: ['Vênus', 'Marte', 'Mercúrio', 'Júpiter'],
    respostaCorreta: 'Mercúrio',
  },
  {
    
    pergunta: 'Qual é o maior órgão do corpo humano?',
    alternativas: ['Fígado', 'Pele', 'Intestino', 'Pulmão'],
    respostaCorreta: 'Pele',
  },
  {
    
    pergunta: 'Qual é a unidade de medida de força no Sistema Internacional (SI)?',
    alternativas: ['Joule', 'Watt', 'Pascal', 'Newton'],
    respostaCorreta: 'Newton',
  },
  {
    
    pergunta: 'Qual gás é essencial para a respiração dos seres humanos?',
    alternativas: ['Nitrogênio', 'Hélio', 'Hidrogênio', 'Oxigênio'],
    respostaCorreta: 'Oxigênio',
  },
  {
    
    pergunta: 'Como se chama a mudança de estado físico em que um líquido se transforma em gás?',
    alternativas: ['Solidificação', 'Fusão', 'Vaporização', 'Condensação'],
    respostaCorreta: 'Vaporização',
  },
  {
    
    pergunta: 'Quanto é a raiz quadrada de 144?',
    alternativas: ['10', '11', '12', '14'],
    respostaCorreta: '12',
  },
  {
    
    pergunta: 'Qual é o maior bioma do Brasil em extensão territorial?',
    alternativas: ['Cerrado', 'Amazônia', 'Mata Atlântica', 'Pampa'],
    respostaCorreta: 'Amazônia',
  },
  {
    
    pergunta: 'Qual vitamina nosso corpo produz quando a pele é exposta ao sol?',
    alternativas: ['Vitamina C', 'Vitamina K', 'Vitamina B12', 'Vitamina D'],
    respostaCorreta: 'Vitamina D',
  },
  {
    
    pergunta: 'Qual elemento químico, de símbolo H, é o mais abundante do Universo?',
    alternativas: ['Hidrogênio', 'Hélio', 'Mercúrio', 'Ouro'],
    respostaCorreta: 'Hidrogênio',
  },
  {
    
    pergunta: 'Qual das fontes de energia abaixo é considerada renovável?',
    alternativas: ['Carvão mineral', 'Petróleo', 'Eólica (vento)', 'Gás natural'],
    respostaCorreta: 'Eólica (vento)',
  },
  {
    
    pergunta: 'Em um triângulo retângulo com catetos de 3 cm e 4 cm, quanto mede a hipotenusa?',
    alternativas: ['5 cm', '6 cm', '7 cm', '12 cm'],
    respostaCorreta: '5 cm',
  },
  {
    
    pergunta: 'Qual organela das células eucariontes armazena a maior parte do material genético (DNA)?',
    alternativas: ['Ribossomo', 'Vacúolo', 'Lisossomo', 'Núcleo'],
    respostaCorreta: 'Núcleo',
  },
 
  // ============================================================
  // CIÊNCIAS E MATEMÁTICA - NORMAIS
  // ============================================================
  {
    
    pergunta: 'Qual é a velocidade aproximada da luz no vácuo?',
    alternativas: ['300 km/s', '3.000 km/s', '300.000 km/s', '30.000 km/h'],
    respostaCorreta: '300.000 km/s',
  },
  {
    
    pergunta: 'Qual tipo de divisão celular origina os gametas (óvulos e espermatozoides)?',
    alternativas: ['Mitose', 'Meiose', 'Fissão binária', 'Brotamento'],
    respostaCorreta: 'Meiose',
  },
  {
    
    pergunta: 'Qual é o valor do pH de uma solução neutra a 25 °C?',
    alternativas: ['0', '10', '14', '7'],
    respostaCorreta: '7',
  },
  {
    
    pergunta: 'Segundo a Segunda Lei de Newton, a força resultante sobre um corpo é igual a:',
    alternativas: ['Massa dividida pela velocidade', 'Massa multiplicada pela aceleração', 'Velocidade multiplicada pelo tempo', 'Peso multiplicado pela altura'],
    respostaCorreta: 'Massa multiplicada pela aceleração',
  },
  {
    
    pergunta: 'Qual é o valor aproximado da aceleração da gravidade na superfície da Terra?',
    alternativas: ['0,98 m/s²', '1,6 m/s²', '98 m/s²', '9,8 m/s²'],
    respostaCorreta: '9,8 m/s²',
  },
  {
    
    pergunta: 'Qual tipo de ligação química ocorre pela transferência de elétrons entre átomos, como no sal de cozinha (NaCl)?',
    alternativas: ['Covalente', 'Metálica', 'Iônica', 'Ponte de hidrogênio'],
    respostaCorreta: 'Iônica',
  },
  {
    
    pergunta: 'Quem é considerado o “pai da Genética” por seus experimentos com ervilhas?',
    alternativas: ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Robert Hooke'],
    respostaCorreta: 'Gregor Mendel',
  },
  {
    
    pergunta: 'Qual gás, liberado principalmente na queima de combustíveis fósseis, é um dos grandes responsáveis pelo agravamento do efeito estufa?',
    alternativas: ['Gás hélio', 'Oxigênio', 'Gás carbônico (CO2)', 'Argônio'],
    respostaCorreta: 'Gás carbônico (CO2)',
  },
  {
    
    pergunta: 'Quais são as raízes da equação x² − 5x + 6 = 0?',
    alternativas: ['1 e 6', '2 e 3', '−2 e −3', '−1 e 6'],
    respostaCorreta: '2 e 3',
  },
  {
    
    pergunta: 'Se f(x) = 2x + 3, qual é o valor de f(4)?',
    alternativas: ['8', '9', '14', '11'],
    respostaCorreta: '11',
  },
  {
    
    pergunta: 'Ao lançar um dado comum de 6 faces, qual é a probabilidade de sair um número par?',
    alternativas: ['1/6', '1/3', '1/2', '2/3'],
    respostaCorreta: '1/2',
  },
  {
    
    pergunta: 'A camada de ozônio é importante porque ela:',
    alternativas: ['Aquece os oceanos', 'Filtra grande parte da radiação ultravioleta do Sol', 'Produz chuva', 'Gera o oxigênio que respiramos'],
    respostaCorreta: 'Filtra grande parte da radiação ultravioleta do Sol',
  },
  {
    
    pergunta: 'O número atômico de um elemento químico indica a quantidade de:',
    alternativas: ['Nêutrons', 'Moléculas', 'Prótons', 'Camadas eletrônicas'],
    respostaCorreta: 'Prótons',
  },
  {
    
    pergunta: 'Qual cientista propôs a teoria da evolução por seleção natural?',
    alternativas: ['Isaac Newton', 'Albert Einstein', 'Louis Pasteur', 'Charles Darwin'],
    respostaCorreta: 'Charles Darwin',
  },
  {
    
    pergunta: 'Qual é a densidade aproximada da água líquida?',
    alternativas: ['10 g/cm³', '1 g/cm³', '0,1 g/cm³', '100 g/cm³'],
    respostaCorreta: '1 g/cm³',
  },
  {
    
    pergunta: 'A dengue é transmitida por qual mosquito?',
    alternativas: ['Anopheles', 'Culex', 'Aedes aegypti', 'Mosquito-palha'],
    respostaCorreta: 'Aedes aegypti',
  },
  {
    
    pergunta: 'Qual é a principal função das vacinas?',
    alternativas: ['Matar bactérias que já estão instaladas', 'Estimular o sistema imunológico a produzir defesas contra um agente', 'Substituir alimentos', 'Curar fraturas'],
    respostaCorreta: 'Estimular o sistema imunológico a produzir defesas contra um agente',
  },
  {
    
    pergunta: 'Em qual organela celular ocorre a maior parte da produção de ATP na respiração aeróbica?',
    alternativas: ['Cloroplasto', 'Complexo de Golgi', 'Mitocôndria', 'Retículo endoplasmático'],
    respostaCorreta: 'Mitocôndria',
  },
  {
    
    pergunta: 'Um corpo de massa 2 kg se move a 3 m/s. Qual é a sua energia cinética?',
    alternativas: ['6 J', '9 J', '12 J', '18 J'],
    respostaCorreta: '9 J',
  },
  {
    
    pergunta: 'Uma onda tem comprimento de 2 m e frequência de 5 Hz. Qual é a sua velocidade de propagação?',
    alternativas: ['2,5 m/s', '7 m/s', '0,4 m/s', '10 m/s'],
    respostaCorreta: '10 m/s',
  },
  {
    
    pergunta: 'Qual é o 10º termo de uma Progressão Aritmética com primeiro termo 3 e razão 4?',
    alternativas: ['39', '43', '40', '36'],
    respostaCorreta: '39',
  },
  {
    
    pergunta: 'Quantos anagramas possui a palavra AMOR?',
    alternativas: ['12', '16', '24', '48'],
    respostaCorreta: '24',
  },
  {
    
    pergunta: 'Uma velocidade de 72 km/h equivale a quantos metros por segundo?',
    alternativas: ['10 m/s', '36 m/s', '72 m/s', '20 m/s'],
    respostaCorreta: '20 m/s',
  },
  {
    
    pergunta: 'Qual grupo funcional caracteriza os álcoois na química orgânica?',
    alternativas: ['Carboxila (–COOH)', 'Amina (–NH2)', 'Hidroxila (–OH)', 'Éter (C–O–C)'],
    respostaCorreta: 'Hidroxila (–OH)',
  },
  {
    
    pergunta: 'O efeito Doppler explica a mudança na frequência percebida de uma onda quando:',
    alternativas: ['A onda passa pelo vácuo', 'A fonte e o observador se movem um em relação ao outro', 'A onda muda de cor', 'A temperatura chega a zero'],
    respostaCorreta: 'A fonte e o observador se movem um em relação ao outro',
  },
  {
    
    pergunta: 'Qual é a massa molar aproximada da água (H2O)? (Dados: H = 1 g/mol; O = 16 g/mol)',
    alternativas: ['16 g/mol', '17 g/mol', '18 g/mol', '20 g/mol'],
    respostaCorreta: '18 g/mol',
  },
  {
    
    pergunta: 'Qual é a principal função dos ribossomos nas células?',
    alternativas: ['Síntese de proteínas', 'Digestão intracelular', 'Fotossíntese', 'Produção de ATP'],
    respostaCorreta: 'Síntese de proteínas',
  },
 
  // ============================================================
  // CIÊNCIAS E MATEMÁTICA - DIFÍCEIS
  // ============================================================
  {
    
    pergunta: 'O Princípio da Incerteza, um dos pilares da Mecânica Quântica, foi proposto por:',
    alternativas: ['Niels Bohr', 'Max Planck', 'Werner Heisenberg', 'Ernest Rutherford'],
    respostaCorreta: 'Werner Heisenberg',
  },
  {
    
    pergunta: 'Na famosa equação E = mc², o que Albert Einstein relacionou?',
    alternativas: ['Calor e temperatura', 'Carga e corrente', 'Energia e massa', 'Força e aceleração'],
    respostaCorreta: 'Energia e massa',
  },
  {
    
    pergunta: 'Segundo a Segunda Lei da Termodinâmica, a entropia de um sistema isolado tende a:',
    alternativas: ['Diminuir sempre', 'Aumentar ou se manter constante', 'Ser sempre zero', 'Dobrar a cada segundo'],
    respostaCorreta: 'Aumentar ou se manter constante',
  },
  {
    
    pergunta: 'O número de Avogadro, que indica a quantidade de entidades em 1 mol, vale aproximadamente:',
    alternativas: ['3,00 × 10⁸', '9,8 × 10⁻¹', '6,02 × 10²³', '1,6 × 10⁻¹⁹'],
    respostaCorreta: '6,02 × 10²³',
  },
  {
    
    pergunta: 'Um fragmento de DNA de fita dupla tem 30% de adenina (A). Qual é a porcentagem de citosina (C)?',
    alternativas: ['20%', '30%', '40%', '70%'],
    respostaCorreta: '20%',
  },
  {
    
    pergunta: 'No cruzamento entre dois heterozigotos (Aa × Aa), qual é a probabilidade de nascer um descendente aa?',
    alternativas: ['0%', '25%', '50%', '75%'],
    respostaCorreta: '25%',
  },
  {
    
    pergunta: 'Quanto vale log₁₀(1000)?',
    alternativas: ['2', '10', '3', '100'],
    respostaCorreta: '3',
  },
  {
    
    pergunta: 'Qual fenômeno, explicado por Einstein em 1905 e que lhe rendeu o Nobel de Física, evidencia a natureza corpuscular da luz?',
    alternativas: ['Efeito estufa', 'Efeito Doppler', 'Efeito Joule', 'Efeito fotoelétrico'],
    respostaCorreta: 'Efeito fotoelétrico',
  },
  {
    
    pergunta: 'Desprezando a resistência do ar e adotando g = 10 m/s², quanto tempo leva um objeto solto do repouso de uma altura de 20 m para chegar ao chão?',
    alternativas: ['1 s', '2 s', '4 s', '5 s'],
    respostaCorreta: '2 s',
  },
  {
    
    pergunta: 'Aplicando R$ 1.000,00 a juros compostos de 10% ao ano, qual será o montante após 2 anos?',
    alternativas: ['R$ 1.200,00', 'R$ 1.100,00', 'R$ 1.220,00', 'R$ 1.210,00'],
    respostaCorreta: 'R$ 1.210,00',
  },
  {
    
    pergunta: 'Na transcrição, qual molécula é sintetizada a partir de uma fita de DNA?',
    alternativas: ['ATP', 'RNA mensageiro', 'Aminoácido', 'Ribossomo'],
    respostaCorreta: 'RNA mensageiro',
  },
  {
    
    pergunta: 'O daltonismo é mais comum em homens do que em mulheres porque o gene responsável está localizado:',
    alternativas: ['No cromossomo Y', 'Nas mitocôndrias', 'No cromossomo X', 'Em todos os autossomos'],
    respostaCorreta: 'No cromossomo X',
  },
  {
    
    pergunta: 'Uma solução de pH 3 é quantas vezes mais ácida (em concentração de H⁺) que uma solução de pH 5?',
    alternativas: ['2 vezes', '10 vezes', '1.000 vezes', '100 vezes'],
    respostaCorreta: '100 vezes',
  },
  {
    
    pergunta: 'Segundo o Princípio de Le Chatelier, se aumentamos a concentração de um reagente em um sistema em equilíbrio, o sistema tende a:',
    alternativas: ['Interromper a reação', 'Destruir o catalisador', 'Consumir o reagente em excesso, deslocando o equilíbrio para formar mais produtos', 'Esfriar espontaneamente'],
    respostaCorreta: 'Consumir o reagente em excesso, deslocando o equilíbrio para formar mais produtos',
  },
  {
    
    pergunta: 'A Lei de Coulomb afirma que a força elétrica entre duas cargas pontuais é inversamente proporcional:',
    alternativas: ['À distância entre elas', 'Ao quadrado da distância entre elas', 'À massa das cargas', 'Ao tempo de contato'],
    respostaCorreta: 'Ao quadrado da distância entre elas',
  },
  {
    
    pergunta: 'O que define um buraco negro?',
    alternativas: ['Uma estrela muito fria', 'Um planeta sem atmosfera', 'Uma nuvem de poeira cósmica', 'Uma região onde a gravidade é tão intensa que nem a luz consegue escapar'],
    respostaCorreta: 'Uma região onde a gravidade é tão intensa que nem a luz consegue escapar',
  },
];
const shuffleArray = (array) => {
  const newArray = [...array]; 
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; 
  }
  return newArray;
};


function App() {

  const [perguntasEmbaralhadas, setPerguntasEmbaralhadas] = useState(() => shuffleArray(perguntas));
  
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [jaRespondeu, setJaRespondeu] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const perguntaAtual = perguntasEmbaralhadas[indicePergunta];

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

  const avancarParaProximaPergunta = () => {
    setFeedback('');
    setJaRespondeu(false);
    setRespostaSelecionada(null);
    
    const proximoIndice = indicePergunta + 1;
    
    if (proximoIndice < perguntasEmbaralhadas.length) {
      setIndicePergunta(proximoIndice);
    } else {
      alert('Fim de jogo! O quiz será reiniciado.');
      setPerguntasEmbaralhadas(shuffleArray(perguntas)); 
      setIndicePergunta(0);
    }
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
      <img src={logo} alt="Logo do Game of Science" className="quiz-logo" style={{ width: '20%' }}/>
      <h1>Game of Science</h1>
      <div className="quiz-container">
        {perguntaAtual && (
          <>
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
          </>
        )}

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
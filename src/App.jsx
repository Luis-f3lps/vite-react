// Localização: src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
// Nosso banco de perguntas. Pode adicionar mais objetos aqui.
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
];
// Função para embaralhar um array (Algoritmo Fisher-Yates)
const shuffleArray = (array) => {
  const newArray = [...array]; // Cria uma cópia para não modificar o original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Troca os elementos
  }
  return newArray;
};


function App() {
  // NOVO ESTADO: Armazena as perguntas já em ordem aleatória
  const [perguntasEmbaralhadas, setPerguntasEmbaralhadas] = useState([]);
  
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [jaRespondeu, setJaRespondeu] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  // EFEITO: Roda apenas uma vez quando o componente é montado
  useEffect(() => {
    // Embaralha o array de perguntas e salva no estado
    setPerguntasEmbaralhadas(shuffleArray(perguntas));
  }, []); // O array vazio [] garante que isso rode só uma vez

  // Adicionamos uma verificação para evitar erro na primeira renderização
  if (perguntasEmbaralhadas.length === 0) {
    return <div>Carregando quiz...</div>;
  }

  // Agora, usamos a lista embaralhada para pegar a pergunta atual
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
    
    // Verifica se ainda há perguntas na lista embaralhada
    if (proximoIndice < perguntasEmbaralhadas.length) {
      setIndicePergunta(proximoIndice);
    } else {
      // O quiz acabou! Você pode mostrar uma tela final ou reiniciar.
      // Por enquanto, vamos reiniciar embaralhando novamente.
      alert('Fim de jogo! O quiz será reiniciado.');
      setPerguntasEmbaralhadas(shuffleArray(perguntas)); // Re-embaralha para a próxima rodada
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
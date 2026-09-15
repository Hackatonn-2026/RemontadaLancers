export const profissionais = [
  {
    id: 1,
    nome: 'Carlos Silva',
    profissao: 'Desenvolvedor Full Stack',
    categoria: 'Desenvolvimento',
    descricao: 'Desenvolvedor com 10 anos de experiência criando sites e sistemas web do zero',
    precoHora: 180,
    rating: 4.8,
    reviewsCount: 3,
    reviews: [
      { id: 1, author: 'Marina T.', date: '2025-08-12', rating: 5, comment: 'Excelente profissional, entregou o sistema antes do prazo e com ótima comunicação.' },
      { id: 2, author: 'João P.', date: '2025-07-30', rating: 5, comment: 'Muito atencioso e resolveu um bug complexo que outros desenvolvedores não conseguiram.' },
      { id: 3, author: 'Renata A.', date: '2025-06-18', rating: 4, comment: 'Bom trabalho, só demorou um pouco mais que o combinado.' },
    ],
  },

  {
    id: 2,
    nome: 'Fernanda Lima',
    profissao: 'Designer Gráfica',
    categoria: 'Design',
    descricao: 'Designer apaixonada por transformar ideias em identidades visuais marcantes',
    precoHora: 90,
    rating: 2.5,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Paulo H.', date: '2025-08-02', rating: 3, comment: 'Trabalho razoável, mas demorou mais do que o combinado para entregar.' },
      { id: 2, author: 'Camila S.', date: '2025-05-14', rating: 2, comment: 'Não gostei muito do resultado final, tive que pedir vários ajustes.' },
    ],
  },

  {
    id: 3,
    nome: 'Rafael Mendes',
    profissao: 'Eletricista Residencial e Comercial',
    categoria: 'Elétrica',
    descricao: 'Eletricista com 12 anos de experiência em instalações residenciais e comerciais, sempre seguindo as normas de segurança vigentes',
    precoHora: 70,
    rating: 4.7,
    reviewsCount: 3,
    reviews: [
      { id: 1, author: 'Sandra M.', date: '2025-08-20', rating: 5, comment: 'Muito profissional, identificou o problema rápido e resolveu com segurança.' },
      { id: 2, author: 'Eduardo R.', date: '2025-07-05', rating: 5, comment: 'Serviço impecável, deixou tudo organizado depois da instalação.' },
      { id: 3, author: 'Lucas F.', date: '2025-04-22', rating: 4, comment: 'Bom atendimento, preço justo pelo serviço prestado.' },
    ],
  },

  {
    id: 4,
    nome: 'Juliana Costa',
    profissao: 'Técnica em Informática',
    categoria: 'Informática',
    descricao: 'Técnica em informática com experiência em manutenção, formatação e configuração de redes para uso residencial e pequenas empresas',
    precoHora: 60,
    rating: 2.5,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Bruno C.', date: '2025-07-11', rating: 3, comment: 'Resolveu o problema, mas demorou bem mais do que o esperado.' },
      { id: 2, author: 'Aline V.', date: '2025-03-09', rating: 2, comment: 'Atendimento confuso, não perguntou direito o que eu precisava.' },
    ],
  },

  {
    id: 5,
    nome: 'Bruno Almeida',
    profissao: 'Jardineiro Profissional',
    categoria: 'Jardinagem',
    descricao: 'Jardineiro com 14 anos cuidando de jardins residenciais, sempre com atenção aos detalhes que fazem o espaço ficar bonito e saudável',
    precoHora: 45,
    rating: 4.9,
    reviewsCount: 3,
    reviews: [
      { id: 1, author: 'Cristina O.', date: '2025-08-15', rating: 5, comment: 'Meu jardim nunca esteve tão bonito, muito cuidadoso com as plantas.' },
      { id: 2, author: 'Marcos D.', date: '2025-06-30', rating: 5, comment: 'Pontual e caprichoso, recomendo demais.' },
      { id: 3, author: 'Fabiana L.', date: '2025-05-02', rating: 5, comment: 'Excelente serviço, superou minhas expectativas.' },
    ],
  },

  {
    id: 6,
    nome: 'Camila Rocha',
    profissao: 'Fotógrafa Profissional',
    categoria: 'Fotografia',
    descricao: 'Fotógrafa com olhar atento para capturar momentos únicos, atuando em ensaios, eventos e retratos',
    precoHora: 150,
    rating: 2.5,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Tatiana R.', date: '2025-08-08', rating: 2, comment: 'Fotos ficaram genéricas, esperava mais criatividade.' },
      { id: 2, author: 'Diego M.', date: '2025-06-14', rating: 3, comment: 'Atendimento ok, mas atrasou bastante a entrega das fotos editadas.' },
    ],
  },

  {
    id: 7,
    nome: 'Thiago Barbosa',
    profissao: 'Professor Particular',
    categoria: 'Aulas',
    descricao: 'Professor com didática clara e paciente, ajudando alunos a entenderem a matéria de verdade, não só decorar fórmulas',
    precoHora: 55,
    rating: 4.9,
    reviewsCount: 3,
    reviews: [
      { id: 1, author: 'Helena B.', date: '2025-08-01', rating: 5, comment: 'Meu filho melhorou muito as notas depois das aulas com ele.' },
      { id: 2, author: 'Rodrigo S.', date: '2025-06-20', rating: 5, comment: 'Muito paciente e explica de um jeito fácil de entender.' },
      { id: 3, author: 'Patrícia N.', date: '2025-04-10', rating: 5, comment: 'Excelente professor, super didático.' },
    ],
  },

  {
    id: 8,
    nome: 'Larissa Ferreira',
    profissao: 'Pintora Residencial e Comercial',
    categoria: 'Pintura',
    descricao: 'Pintora com 11 anos de experiência, capricho no acabamento e cuidado para deixar o ambiente do cliente limpo durante o serviço',
    precoHora: 65,
    rating: 2.5,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Vinícius A.', date: '2025-07-25', rating: 3, comment: 'Serviço razoável, mas deixou respingos de tinta no chão.' },
      { id: 2, author: 'Simone F.', date: '2025-05-19', rating: 2, comment: 'Acabamento ficou desigual em algumas paredes.' },
    ],
  },

  {
    id: 9,
    nome: 'Gustavo Pinheiro',
    profissao: 'Mecânico Automotivo',
    categoria: 'Mecânica',
    descricao: 'Mecânico com 6 anos de experiência, direto e honesto no diagnóstico, sempre explicando ao cliente o que realmente precisa ser feito',
    precoHora: 80,
    rating: 4.7,
    reviewsCount: 3,
    reviews: [
      { id: 1, author: 'Felipe T.', date: '2025-08-05', rating: 5, comment: 'Muito honesto, não tentou vender serviço que eu não precisava.' },
      { id: 2, author: 'Adriana C.', date: '2025-06-28', rating: 5, comment: 'Resolveu o problema do meu carro rapidinho.' },
      { id: 3, author: 'Marcelo G.', date: '2025-05-11', rating: 4, comment: 'Bom mecânico, preço justo.' },
    ],
  },

  {
    id: 10,
    nome: 'Mariana Duarte',
    profissao: 'Especialista em Marketing Digital',
    categoria: 'Marketing & Redes Sociais',
    descricao: 'Especialista em marketing digital, ajudando negócios locais a crescerem online com estratégia e conteúdo consistente',
    precoHora: 120,
    rating: 2.5,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Otávio R.', date: '2025-07-19', rating: 2, comment: 'Não vi resultado nenhum depois de um mês de estratégia.' },
      { id: 2, author: 'Beatriz L.', date: '2025-05-03', rating: 3, comment: 'Comunicação falha, demorava pra responder as mensagens.' },
    ],
  },

  {
    id: 11,
    nome: 'Pedro Martins',
    profissao: 'Tradutor Profissional',
    categoria: 'Tradução & Idiomas',
    descricao: 'Tradutor com 8 anos de experiência em textos técnicos e acadêmicos, com atenção ao contexto e não só à tradução literal',
    precoHora: 95,
    rating: 4.9,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Isabela F.', date: '2025-08-09', rating: 5, comment: 'Tradução perfeita, manteve o sentido técnico do texto original.' },
      { id: 2, author: 'Gabriel M.', date: '2025-06-01', rating: 5, comment: 'Muito atento ao contexto, entrega de qualidade.' },
    ],
  },

  {
    id: 12,
    nome: 'André Cardoso',
    profissao: 'Editor de Vídeo',
    categoria: 'Edição de Vídeo',
    descricao: 'Editor de vídeo com foco em contar histórias de forma dinâmica, do corte à finalização com motion graphics',
    precoHora: 130,
    rating: 2.5,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Natália P.', date: '2025-07-14', rating: 3, comment: 'Edição ficou ok, mas o ritmo do vídeo não era o que eu esperava.' },
      { id: 2, author: 'Henrique S.', date: '2025-04-27', rating: 2, comment: 'Entrega atrasou bastante e sem aviso prévio.' },
    ],
  },

  {
    id: 13,
    nome: 'Aline Barros',
    profissao: 'Redatora e Copywriter',
    categoria: 'Redação',
    descricao: 'Redatora e copywriter que escreve textos claros e persuasivos, sempre pensando em quem vai ler do outro lado',
    precoHora: 75,
    rating: 4.8,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Caio V.', date: '2025-08-03', rating: 5, comment: 'Textos muito claros e persuasivos, ajudou bastante nas conversões.' },
      { id: 2, author: 'Débora M.', date: '2025-05-22', rating: 4, comment: 'Boa redatora, entende bem o que o cliente precisa.' },
    ],
  },

  {
    id: 14,
    nome: 'Felipe Araújo',
    profissao: 'Consultor Empresarial',
    categoria: 'Consultoria',
    descricao: 'Consultor empresarial com experiência ajudando pequenas e médias empresas a organizarem processos e tomarem decisões melhores',
    precoHora: 250,
    rating: 2.5,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Roberta A.', date: '2025-07-28', rating: 2, comment: 'Consultoria muito genérica, esperava algo mais personalizado pro meu negócio.' },
      { id: 2, author: 'Leandro B.', date: '2025-04-15', rating: 3, comment: 'Bom conhecimento técnico, mas quase nenhum acompanhamento depois.' },
    ],
  },

  {
    id: 15,
    nome: 'Renata Oliveira',
    profissao: 'Profissional de Limpeza',
    categoria: 'Limpeza',
    descricao: 'Profissional de limpeza dedicada e caprichosa, que trata a casa do cliente com o mesmo cuidado que trataria a própria',
    precoHora: 40,
    rating: 4.9,
    reviewsCount: 3,
    reviews: [
      { id: 1, author: 'Silvia T.', date: '2025-08-11', rating: 5, comment: 'Minha casa ficou impecável, muito caprichosa em tudo.' },
      { id: 2, author: 'Antônio F.', date: '2025-06-24', rating: 5, comment: 'Pontual e cuidadosa, recomendo bastante.' },
      { id: 3, author: 'Juliana R.', date: '2025-05-06', rating: 4, comment: 'Bom serviço, atenciosa com os pedidos.' },
    ],
  },

  {
    id: 16,
    nome: 'Lucas Pereira',
    profissao: 'Produtor Musical',
    categoria: 'Música',
    descricao: 'Produtor musical envolvido com música desde cedo, hoje ajudando outros artistas a gravarem e produzirem suas faixas',
    precoHora: 140,
    rating: 2.5,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Mariano C.', date: '2025-07-17', rating: 3, comment: 'Produção ficou boa, mas não capturou bem a sonoridade que eu queria.' },
      { id: 2, author: 'Yasmin D.', date: '2025-05-29', rating: 2, comment: 'Demorou demais pra entregar a faixa finalizada.' },
    ],
  },

  {
    id: 17,
    nome: 'Diego Santos',
    profissao: 'Desenvolvedor Front-end',
    categoria: 'Desenvolvimento',
    descricao: 'Focado em interfaces web modernas e performáticas',
    precoHora: 160,
    rating: 2.5,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Wesley P.', date: '2025-08-06', rating: 3, comment: 'Site funcional, mas o design final ficou bem genérico.' },
      { id: 2, author: 'Larissa M.', date: '2025-06-09', rating: 2, comment: 'Prazo estourou bastante em relação ao combinado.' },
    ],
  },

  {
    id: 18,
    nome: 'Marina Souza',
    profissao: 'Designer Gráfica e Branding',
    categoria: 'Design',
    descricao: 'Trabalha criando peças gráficas que comunicam com clareza e personalidade, sempre alinhando estética e objetivo do cliente',
    precoHora: 100,
    rating: 4.9,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Ricardo N.', date: '2025-07-21', rating: 5, comment: 'Branding ficou com muita personalidade, exatamente o que eu queria.' },
      { id: 2, author: 'Fernanda G.', date: '2025-05-16', rating: 5, comment: 'Super criativa e atenciosa com o briefing.' },
    ],
  },

  {
    id: 19,
    nome: 'Marcelo Tavares',
    profissao: 'Eletricista Predial',
    categoria: 'Elétrica',
    descricao: 'Especializado em instalações elétricas prediais, com atenção especial à segurança e ao acabamento do serviço',
    precoHora: 85,
    rating: 2,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Cláudia R.', date: '2025-07-02', rating: 2, comment: 'Serviço deixou fiação exposta, tive que chamar outro eletricista.' },
      { id: 2, author: 'Igor L.', date: '2025-04-18', rating: 2, comment: 'Atendimento apressado, não explicou direito o que estava fazendo.' },
    ],
  },

  {
    id: 20,
    nome: 'Vinícius Rocha',
    profissao: 'Técnico de Informática',
    categoria: 'Informática',
    descricao: 'Atua resolvendo problemas de hardware e software com agilidade, sempre buscando deixar o equipamento do cliente funcionando como novo',
    precoHora: 50,
    rating: 4.7,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Priscila A.', date: '2025-08-13', rating: 5, comment: 'Consertou meu notebook rapidinho, muito ágil.' },
      { id: 2, author: 'Danilo F.', date: '2025-05-25', rating: 4, comment: 'Bom técnico, resolveu o problema sem complicação.' },
    ],
  },

  {
    id: 21,
    nome: 'Eduardo Lopes',
    profissao: 'Paisagista',
    categoria: 'Jardinagem',
    descricao: 'Especializado em projetos paisagísticos, transformando quintais e áreas externas em ambientes mais verdes e agradáveis',
    precoHora: 110,
    rating: 2,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Sônia B.', date: '2025-07-09', rating: 1, comment: 'Projeto não ficou nada parecido com o que combinamos, decepcionante.' },
      { id: 2, author: 'Mateus V.', date: '2025-04-30', rating: 3, comment: 'Bom conhecimento de plantas, mas a execução deixou a desejar.' },
    ],
  },

  {
    id: 22,
    nome: 'Natália Ramos',
    profissao: 'Fotógrafa de Eventos',
    categoria: 'Fotografia',
    descricao: 'Especializada em cobrir eventos com naturalidade, entregando fotos editadas com cuidado e no prazo combinado',
    precoHora: 175,
    rating: 4.9,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Gustavo M.', date: '2025-08-17', rating: 5, comment: 'Fotos muito naturais, capturou a essência do evento.' },
      { id: 2, author: 'Carla S.', date: '2025-06-05', rating: 5, comment: 'Entregou no prazo e com edição impecável.' },
    ],
  },

  {
    id: 23,
    nome: 'Patrícia Mendes',
    profissao: 'Professora de Idiomas',
    categoria: 'Aulas',
    descricao: 'Professora de idiomas com foco em conversação, ajudando alunos a ganharem confiança para falar desde as primeiras aulas',
    precoHora: 60,
    rating: 2,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Vitor H.', date: '2025-07-23', rating: 2, comment: 'Aulas muito repetitivas, senti que não evoluí muito.' },
      { id: 2, author: 'Amanda P.', date: '2025-05-08', rating: 2, comment: 'Cancelou algumas aulas sem muito aviso.' },
    ],
  },

  {
    id: 24,
    nome: 'Roberto Silva',
    profissao: 'Pintor Residencial',
    categoria: 'Pintura',
    descricao: 'Pintor dedicado a entregar um acabamento uniforme e duradouro, do preparo da parede até a última demão de tinta',
    precoHora: 55,
    rating: 4.6,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Elisa T.', date: '2025-07-06', rating: 5, comment: 'Acabamento muito uniforme, ficou perfeito.' },
      { id: 2, author: 'Rafael N.', date: '2025-04-12', rating: 4, comment: 'Bom pintor, cuidadoso com o preparo da parede.' },
    ],
  },

  {
    id: 25,
    nome: 'Henrique Souza',
    profissao: 'Mecânico Automotivo',
    categoria: 'Mecânica',
    descricao: 'Especializado em diagnóstico eletrônico e manutenção preventiva, buscando resolver o problema do veículo sem gastos desnecessários',
    precoHora: 90,
    rating: 2,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Fábio D.', date: '2025-08-04', rating: 1, comment: 'Trocou uma peça que não precisava e cobrou sem avisar antes.' },
      { id: 2, author: 'Luciana C.', date: '2025-05-20', rating: 3, comment: 'Diagnóstico correto, mas atendimento meio grosseiro.' },
    ],
  },

  {
    id: 26,
    nome: 'Beatriz Fonseca',
    profissao: 'Social Media',
    categoria: 'Marketing & Redes Sociais',
    descricao: 'Social media focada em criar conteúdo que engaja de verdade, com planejamento e identidade visual pensados para cada marca',
    precoHora: 95,
    rating: 4.8,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Thales R.', date: '2025-07-15', rating: 5, comment: 'Meu engajamento aumentou muito com o planejamento dela.' },
      { id: 2, author: 'Vanessa L.', date: '2025-05-01', rating: 4, comment: 'Muito criativa e organizada com o calendário de posts.' },
    ],
  },

  {
    id: 27,
    nome: 'Isabela Martins',
    profissao: 'Tradutora Inglês-Português',
    categoria: 'Tradução & Idiomas',
    descricao: 'Tradutora dedicada a manter o sentido e o tom original do texto, atendendo desde documentos simples até materiais técnicos',
    precoHora: 85,
    rating: 2,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Guilherme A.', date: '2025-08-10', rating: 2, comment: 'Tradução saiu com vários erros de contexto, tive que revisar tudo.' },
      { id: 2, author: 'Raquel M.', date: '2025-06-02', rating: 2, comment: 'Entrega atrasou e a comunicação foi bem falha.' },
    ],
  },

  {
    id: 28,
    nome: 'Caio Ribeiro',
    profissao: 'Editor e Motion Designer',
    categoria: 'Edição de Vídeo',
    descricao: 'Editor e motion designer especializado em conteúdo para redes sociais, sempre buscando um ritmo que prende a atenção',
    precoHora: 120,
    rating: 4.7,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Bianca F.', date: '2025-07-27', rating: 5, comment: 'Ritmo dos vídeos ficou perfeito pras redes sociais.' },
      { id: 2, author: 'Nicolas T.', date: '2025-05-13', rating: 4, comment: 'Bom trabalho de motion, entrega rápida.' },
    ],
  },

  {
    id: 29,
    nome: 'Gabriela Duarte',
    profissao: 'Redatora SEO',
    categoria: 'Redação',
    descricao: 'Redatora especializada em SEO, unindo boa escrita com técnica para ajudar o conteúdo do cliente a ser encontrado',
    precoHora: 70,
    rating: 2,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Alexandre P.', date: '2025-08-14', rating: 1, comment: 'Texto entregue não tinha nada a ver com o que pedi no briefing.' },
      { id: 2, author: 'Karina S.', date: '2025-06-07', rating: 3, comment: 'Escrita ok, mas o SEO não trouxe resultado nenhum.' },
    ],
  },

  {
    id: 30,
    nome: 'Rodrigo Farias',
    profissao: 'Consultor de Tecnologia',
    categoria: 'Consultoria',
    descricao: 'Consultor de tecnologia que traduz problemas complexos em soluções práticas, sempre alinhado à realidade do negócio do cliente',
    precoHora: 220,
    rating: 4.9,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Eliane V.', date: '2025-07-31', rating: 5, comment: 'Soluções muito práticas, entendeu bem a realidade do meu negócio.' },
      { id: 2, author: 'Sérgio M.', date: '2025-05-17', rating: 5, comment: 'Consultoria excelente, valeu cada centavo.' },
    ],
  },

  {
    id: 31,
    nome: 'Sofia Martins',
    profissao: 'Especialista em Limpeza',
    categoria: 'Limpeza',
    descricao: 'Especialista em limpeza residencial e comercial, com atenção aos detalhes que fazem diferença no resultado final',
    precoHora: 35,
    rating: 2,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Douglas R.', date: '2025-08-19', rating: 2, comment: 'Deixou vários cantos sem limpar direito, tive que refazer.' },
      { id: 2, author: 'Michele A.', date: '2025-06-11', rating: 2, comment: 'Atrasou bastante o horário combinado sem avisar.' },
    ],
  },

  {
    id: 32,
    nome: 'Mateus Oliveira',
    profissao: 'Músico e Professor de Música',
    categoria: 'Música',
    descricao: 'Músico e professor apaixonado por ensinar, adapta as aulas ao ritmo e ao gosto musical de cada aluno',
    precoHora: 75,
    rating: 4.9,
    reviewsCount: 2,
    reviews: [
      { id: 1, author: 'Jéssica N.', date: '2025-07-24', rating: 5, comment: 'Adaptou as aulas ao meu ritmo, aprendi muito rápido.' },
      { id: 2, author: 'Alan C.', date: '2025-05-09', rating: 5, comment: 'Excelente professor, muito paciente.' },
    ],
  },
]
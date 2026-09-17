// serviços fixos
const servicosIniciais = [
  {
    id: 1,
    usuarioId: 1,
    titulo: 'Instalação de tomadas',
    categoria: 'Elétrica',
    descricao: 'Preciso instalar três tomadas em um quarto.',
    localizacao: 'Zona Oeste',
    preco: 150,
    orcamento: 'R$ 150,00'
  },
  {
    id: 2,
    usuarioId: 2,
    titulo: 'Criação de identidade visual',
    categoria: 'Design',
    descricao: 'Preciso de uma identidade visual para uma pequena empresa.',
    localizacao: 'Zona Sul',
    preco: 300,
    orcamento: 'R$ 300,00'
  }
]

// salvar serviços no local storage
const CHAVE_SERVICOS = 'servicos'
export function obterServicos() {
  // converter pra lista
  const servicosSalvos = JSON.parse(localStorage.getItem(CHAVE_SERVICOS))
  return servicosSalvos || servicosIniciais
}

// cadastro de novo serviço
export function cadastrarServico(servico) {
  // const pra nao perder os servicos ja cadastrados
  const servicos = obterServicos()
  // ultimo servico da lista
  const maiorId = servicos.reduce((maior, item) => Math.max(maior, Number(item.id) || 0), 0)
  // cria o id com base no ultimo id 
  const novoServico = { ...servico, id: maiorId + 1 }
  servicos.push(novoServico)
  // reconverte pra string 
  localStorage.setItem(CHAVE_SERVICOS, JSON.stringify(servicos))
  return novoServico
}

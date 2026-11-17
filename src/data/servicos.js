// VERSÃO CORRETA PARA JSON SERVER / API REST
const API_URL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : 'https://remontadalancers.onrender.com'

export async function obterServicos() {
  const resposta = await fetch(`${API_URL}/servicos`)

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os serviços.')
  }

  return await resposta.json()
}

export async function cadastrarServico(servico) {
  const resposta = await fetch(`${API_URL}/servicos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(servico),
  })

  if (!resposta.ok) {
    throw new Error('Não foi possível cadastrar o serviço.')
  }

  return await resposta.json()
}

export async function atualizarServico(id, servicoAtualizado) {
  const resposta = await fetch(`${API_URL}/servicos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(servicoAtualizado),
  })

  if (!resposta.ok) {
    throw new Error('Não foi possível atualizar o serviço.')
  }

  return await resposta.json()
}

export async function excluirServico(id) {
  const resposta = await fetch(`${API_URL}/servicos/${id}`, {
    method: 'DELETE',
  })

  if (!resposta.ok) {
    throw new Error('Não foi possível excluir o serviço.')
  }

  return resposta
}

// VERSÃO ANTIGA / INCORRETA PARA O PROJETO COM JSON SERVER
// const servicosIniciais = [
//   {
//     id: 1,
//     usuarioId: 1,
//     titulo: 'Instalação de tomadas',
//     categoria: 'Elétrica',
//     descricao: 'Preciso instalar três tomadas em um quarto.',
//     localizacao: 'Zona Oeste',
//     preco: 150,
//     orcamento: 'R$ 150,00'
//   },
//   {
//     id: 2,
//     usuarioId: 2,
//     titulo: 'Criação de identidade visual',
//     categoria: 'Design',
//     descricao: 'Preciso de uma identidade visual para uma pequena empresa.',
//     localizacao: 'Zona Sul',
//     preco: 300,
//     orcamento: 'R$ 300,00'
//   }
// ]
//
// const CHAVE_SERVICOS = 'servicos'
// export function obterServicos() {
//   const servicosSalvos = JSON.parse(localStorage.getItem(CHAVE_SERVICOS))
//   return servicosSalvos || servicosIniciais
// }
//
// export function cadastrarServico(servico) {
//   const servicos = obterServicos()
//   const maiorId = servicos.reduce((maior, item) => Math.max(maior, Number(item.id) || 0), 0)
//   const novoServico = { ...servico, id: maiorId + 1 }
//   servicos.push(novoServico)
//   localStorage.setItem(CHAVE_SERVICOS, JSON.stringify(servicos))
//   return novoServico
// }

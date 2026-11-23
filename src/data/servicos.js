// Endereço da API de serviços
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
    method: 'PATCH',
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

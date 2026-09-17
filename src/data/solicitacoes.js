const CHAVE_SOLICITACOES = 'solicitacoesServico'

function normalizarStatus(status) {
  if (status === 'pendente') return 'pendente'
  return 'aceita'
}

export function obterSolicitacoes() {
  try {
    const solicitacoes = JSON.parse(localStorage.getItem(CHAVE_SOLICITACOES))
    if (!Array.isArray(solicitacoes)) return []

    return solicitacoes.map((solicitacao) => ({
      ...solicitacao,
      status: normalizarStatus(solicitacao.status),
    }))
  } catch {
    return []
  }
}

export function criarSolicitacao({ servico, freelancer }) {
  const solicitacoes = obterSolicitacoes()
  const jaSolicitado = solicitacoes.some(
    (solicitacao) =>
      solicitacao.servicoId === servico.id && solicitacao.freelancerId === freelancer.id,
  )

  if (jaSolicitado) return null

  // status inicial do serviço solicitado pelo freelancer
  const solicitacao = {
    id: Date.now(),
    servicoId: servico.id,
    clienteId: servico.usuarioId,
    freelancerId: freelancer.id,
    freelancerNome: freelancer.nome,
    servicoTitulo: servico.titulo,
    status: 'aceita',
    dataCriacao: new Date().toISOString(),
  }

  solicitacoes.push(solicitacao)
  localStorage.setItem(CHAVE_SOLICITACOES, JSON.stringify(solicitacoes))

  return solicitacao
}

export function obterSolicitacoesPorFreelancer(freelancerId) {
  return obterSolicitacoes().filter((solicitacao) => solicitacao.freelancerId === freelancerId)
}

export function obterSolicitacoesPorCliente(clienteId) {
  return obterSolicitacoes().filter((solicitacao) => solicitacao.clienteId === clienteId)
}

export function atualizarStatusSolicitacao(solicitacaoId, novoStatus) {
  const solicitacoes = obterSolicitacoes()
  const statusFinal = normalizarStatus(novoStatus)

  const solicitacoesAtualizadas = solicitacoes.map((solicitacao) => {
    if (solicitacao.id === solicitacaoId) {
      return {
        ...solicitacao,
        status: statusFinal,
      }
    }

    return solicitacao
  })

  localStorage.setItem(CHAVE_SOLICITACOES, JSON.stringify(solicitacoesAtualizadas))
  return solicitacoesAtualizadas
}

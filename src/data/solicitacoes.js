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

export function criarSolicitacao({ servico, cliente, freelancer }) {
  const solicitacoes = obterSolicitacoes()
  const clienteId = Number(cliente?.id ?? servico?.usuarioId ?? servico?.clienteId ?? 0)
  const freelancerId = Number(freelancer?.id ?? servico?.usuarioId ?? 0)

  const jaSolicitado = solicitacoes.some(
    (solicitacao) =>
      Number(solicitacao.servicoId) === Number(servico?.id) &&
      Number(solicitacao.clienteId) === clienteId &&
      Number(solicitacao.freelancerId) === freelancerId,
  )

  if (jaSolicitado) return null

  const solicitacao = {
    id: Date.now(),
    servicoId: Number(servico?.id ?? 0),
    clienteId,
    freelancerId,
    freelancerNome: freelancer?.nome || servico?.usuario?.nome || 'Freelancer',
    servicoTitulo: servico?.titulo || 'Serviço solicitado',
    status: 'aceita',
    dataCriacao: new Date().toISOString(),
  }

  solicitacoes.push(solicitacao)
  localStorage.setItem(CHAVE_SOLICITACOES, JSON.stringify(solicitacoes))

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('solicitacoes-atualizadas'))
  }

  return solicitacao
}

export function obterSolicitacoesPorFreelancer(freelancerId) {
  const idAlvo = String(freelancerId ?? '')
  return obterSolicitacoes().filter(
    (solicitacao) => String(solicitacao.freelancerId) === idAlvo,
  )
}

export function obterSolicitacoesPorCliente(clienteId) {
  const idAlvo = String(clienteId ?? '')
  return obterSolicitacoes().filter(
    (solicitacao) => String(solicitacao.clienteId) === idAlvo,
  )
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

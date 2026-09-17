const CHAVE_SOLICITACOES = 'solicitacoesServico'

export function obterSolicitacoes() {
  try {
    const solicitacoes = JSON.parse(localStorage.getItem(CHAVE_SOLICITACOES))
    return Array.isArray(solicitacoes) ? solicitacoes : []
  } catch {
    return []
  }
}

export function criarSolicitacao({ servico, freelancer }) {
  const solicitacoes = obterSolicitacoes()
  const jaSolicitado = solicitacoes.some(
    (solicitacao) =>
      solicitacao.servicoId === servico.id && solicitacao.freelancerId === freelancer.id
  )

  if (jaSolicitado) return null

  const solicitacao = {
    id: Date.now(),
    servicoId: servico.id,
    clienteId: servico.usuarioId,
    freelancerId: freelancer.id,
    freelancerNome: freelancer.nome,
    servicoTitulo: servico.titulo,
    status: 'Pendente'
  }

  solicitacoes.push(solicitacao)
  localStorage.setItem(CHAVE_SOLICITACOES, JSON.stringify(solicitacoes))

  return solicitacao
}

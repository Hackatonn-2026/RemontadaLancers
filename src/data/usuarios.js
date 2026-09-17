export const usuarios = [
  {
    id: 1,
    nome: 'Lucas Almeida',
    email: 'lucas.almeida@email.com',
    senha: 'Lucas123',
    telefone: '(47) 99999-1111',
    tipo: 'freelancer',
  },
  {
    id: 2,
    nome: 'Mariana Souza',
    email: 'mariana.souza@email.com',
    senha: 'Mariana123',
    telefone: '(47) 98888-2222',
    tipo: 'cliente',
  },
]

export function obterUsuariosCadastrados() {
  try {
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios') || '[]')
    return Array.isArray(usuariosSalvos) ? usuariosSalvos : []
  } catch {
    return []
  }
}

export function salvarUsuarioAtual(usuario) {
  localStorage.setItem('usuario', JSON.stringify(usuario))
  localStorage.setItem('contaSalva', JSON.stringify(usuario))
}

export function buscarUsuarioPorCredenciais(email, senha) {
  const emailNormalizado = String(email || '')
    .trim()
    .toLowerCase()
  const usuariosLista = obterUsuarios()

  return (
    usuariosLista.find((usuario) => {
      const emailUsuario = String(usuario.email || '')
        .trim()
        .toLowerCase()
      const senhaUsuario = String(usuario.senha || '')

      return emailUsuario === emailNormalizado && senhaUsuario === String(senha || '')
    }) || null
  )
}

// coloca os dois usuarios fixos junto com os novos cadastrados sem dar conflito de email
export function obterUsuarios(usuariosCadastrados = []) {
  const usuariosSalvos = Array.isArray(usuariosCadastrados)
    ? usuariosCadastrados
    : obterUsuariosCadastrados()

  return [
    ...usuarios,
    ...usuariosSalvos.filter(
      (usuario) =>
        !usuarios.some(
          (usuarioFixo) => usuarioFixo.email?.toLowerCase() === usuario.email?.toLowerCase(),
        ),
    ),
  ]
}


const API_URL = '/api/usuarios'

// Padroniza os dados recebidos da API para manter compatibilidade com o projeto
function padronizarUsuario(usuario) {
  return {
    ...usuario,
    tipo: usuario.tipo || usuario.tipoUsuario || '',
    tipoUsuario: usuario.tipoUsuario || usuario.tipo || '',
  }
}

// GET: buscar todos os usuários
export async function obterUsuariosCadastrados() {
  const resposta = await fetch(API_URL)

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os usuários.')
  }

  const dados = await resposta.json()
  return dados.map(padronizarUsuario)
}

// GET: buscar um usuário pelo ID
export async function buscarUsuarioPorId(id) {
  const resposta = await fetch(`${API_URL}/${id}`)

  if (!resposta.ok) {
    throw new Error('Usuário não encontrado.')
  }

  return padronizarUsuario(await resposta.json())
}

// GET: buscar usuário por email e senha
export async function buscarUsuarioPorCredenciais(email, senha) {
  const emailNormalizado = String(email || '').trim().toLowerCase()

  const usuariosLista = await obterUsuariosCadastrados()

  return (
    usuariosLista.find((usuario) => {
      const emailUsuario = String(usuario.email || '').trim().toLowerCase()
      const senhaUsuario = String(usuario.senha || '')

      return (
        emailUsuario === emailNormalizado &&
        senhaUsuario === String(senha || '')
      )
    }) || null
  )
}

// POST: cadastrar um novo usuário
export async function cadastrarUsuario(usuario) {
  const dados = {
    ...usuario,
    tipoUsuario: usuario.tipoUsuario || usuario.tipo || '',
  }

  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  })

  if (!resposta.ok) {
    throw new Error('Não foi possível cadastrar o usuário.')
  }

  return padronizarUsuario(await resposta.json())
}

// PUT: atualizar um usuário
export async function atualizarUsuario(id, usuario) {
  const dados = {
    ...usuario,
    id,
    tipoUsuario: usuario.tipoUsuario || usuario.tipo || '',
  }

  const resposta = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  })

  if (!resposta.ok) {
    throw new Error('Não foi possível atualizar o usuário.')
  }

  return padronizarUsuario(await resposta.json())
}

// DELETE: excluir um usuário sem permitir apagar outra conta por um ID antigo
export async function excluirUsuario(id, email) {
  const url = `${API_URL}/${encodeURIComponent(id)}`
  const consulta = await fetch(url)

  if (consulta.status === 404) {
    return { status: 'nao-encontrado' }
  }

  if (!consulta.ok) {
    throw new Error('Não foi possível verificar a conta antes da exclusão.')
  }

  const usuarioNaApi = await consulta.json()
  const emailNaApi = String(usuarioNaApi.email || '').trim().toLowerCase()
  const emailInformado = String(email || '').trim().toLowerCase()

  if (!emailInformado || emailNaApi !== emailInformado) {
    return { status: 'conta-diferente' }
  }

  const resposta = await fetch(url, {
    method: 'DELETE',
  })

  if (resposta.status === 404) {
    return { status: 'nao-encontrado' }
  }

  if (!resposta.ok) {
    throw new Error('Não foi possível excluir o usuário.')
  }

  return { status: 'excluido' }
}

// Mantém os dados da sessão atual no localStorage
export function salvarUsuarioAtual(usuario) {
  localStorage.setItem('usuario', JSON.stringify(usuario))
  localStorage.setItem('contaSalva', JSON.stringify(usuario))
}

// Compatibilidade com chamadas antigas que utilizavam obterUsuarios
export async function obterUsuarios() {
  return await obterUsuariosCadastrados()
}

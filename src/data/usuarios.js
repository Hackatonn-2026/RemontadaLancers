export const usuarios = [
  {
    id: 1,
    nome: 'Lucas Almeida',
    email: 'lucas.almeida@email.com',
    senha: 'Lucas123',
    telefone: '(47) 99999-1111',
    tipo: 'freelancer'
  },
  {
    id: 2,
    nome: 'Mariana Souza',
    email: 'mariana.souza@email.com',
    senha: 'Mariana123',
    telefone: '(47) 98888-2222',
    tipo: 'cliente'
  }
]

// coloca os dois usuarios fixos junto com os novos cadastrados sem dar conflito de email
export function obterUsuarios(usuariosCadastrados = []) {
  return [
    ...usuarios,
    ...usuariosCadastrados.filter(
      (usuario) => !usuarios.some((usuarioFixo) => usuarioFixo.email === usuario.email)
    )
  ]
}
